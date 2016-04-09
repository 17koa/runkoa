'use strict';
   
require("babel-polyfill")

// set babel in entry file
require('babel-core/register')({
  presets: ['es2015-node5', 'stage-3']
})

var fs = require('fs')

module.exports = function (entry) {
  var is_exist = fs.existsSync(entry)
  if (is_exist === false) {
    return console.log('runkoa entry file is not exist, please check it');
  }
  
  require(entry) // this is es7 - gets transpile
}