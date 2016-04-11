#!/usr/bin/env node

var argv = process.argv
argv.shift()

if (! argv[1]){
  argv[1] = 'bin/www'
  console.log('default entry is bin/www')
}

console.log(argv[1])

var current_path = process.cwd();

require('..')(current_path + '/' + argv[1], is_cli=true)
