#!/usr/bin/env node

var argv = process.argv
argv.shift()

if (! argv[1]){
  argv[1] = 'bin/www'
  console.log('default entry is bin/www')
}

console.log(argv[1])

var current_path = process.cwd();

var entry = require('path').resolve(process.cwd(), argv[1])

require('..')(entry, is_cli=true)
