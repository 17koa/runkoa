'use strict';
   
require("babel-polyfill")

var fs = require('fs')

var is_npm_v3 = /^3/.test(require('child_process').execSync('npm -v').toString())

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
  if (entry){
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
  console.log('babel presets path = ' + dir)
  // npm 3.x set babel in entry file
  require('babel-core/register')({
    presets: [dir + 'babel-preset-es2015-node5', dir + 'babel-preset-stage-3'],
    babelrc: false
  })  
}

function get_dirname_in_parent(){
  var dir =  __dirname.replace('runkoa', '')
  console.log('babel presets path = ' + dir)
  // npm 2.x set babel in entry file
  require('babel-core/register')({
    presets: [dir + 'babel-preset-es2015-node5', dir + 'babel-preset-stage-3'],
    babelrc: false
  }) 
}