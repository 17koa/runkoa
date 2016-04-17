'use strict';
   
require("babel-polyfill")

var fs = require('fs')

var is_npm_v3 = /^3/.test(require('child_process').execSync('npm -v').toString())

/**
  cli加载的preset是一样的

  而引用require的时候

  - npm 3是它的上级模块
  - npm 2是当前文件目录下的node_modules\
 *
 */ 
module.exports = function (entry, is_cli) {
  if (is_cli === true) {
    get_dirname_in_node_modules()
  } else {
    if (is_npm_v3 === false) {
      get_dirname_in_node_modules()
    } else {
       get_dirname_in_parent()
    }
  }
  
  var current_path = process.cwd();
  var f = current_path + '/bin/www'

  if (is_cli == true && entry && /^\//.test(entry)){
    f = entry
  } else {
    f = entry
  }
  
  var is_exist = fs.existsSync(f)
  
  if (is_exist === false) {
    return console.log('runkoa entry file is not exist, please check it');
  }
  
  require(f) // this is es7 - gets transpile
}

function get_dirname_in_node_modules(){
  var dir =  __dirname + '/node_modules/'
  var plugin_dir = dir + 'babel-plugin-'
  console.log('3babel presets path = ' + dir)
  // npm 3.x set babel in entry file
  require('babel-core/register')({
    plugins: [plugin_dir + 'add-module-exports', plugin_dir + 'transform-es2015-modules-commonjs'],
    presets: [dir + 'babel-preset-es2015-node5', dir + 'babel-preset-stage-3'],
    babelrc: false
  })  
}

function get_dirname_in_parent(){
  var dir =  __dirname.replace('runkoa', '')

  var plugin_dir = dir + 'babel-plugin-'
  
  
  if(is_npm_v3 === true && process.env.RUNKOA_TEST){
    dir = dir + 'runkoa/node_modules/'
    plugin_dir = dir + 'babel-plugin-'
  }
  
  console.log('2babel presets path = ' + dir)
  
  // npm 2.x set babel in entry file
  require('babel-core/register')({
    plugins: [plugin_dir + 'add-module-exports', plugin_dir + 'transform-es2015-modules-commonjs'],
    presets: [dir + 'babel-preset-es2015-node5', dir + 'babel-preset-stage-3'],
    babelrc: false
  }) 
}