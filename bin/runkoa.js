#!/usr/bin/env node

var argv = process.argv
argv.shift()

console.log(argv[1])

var current_path = process.cwd();

require('..')(current_path + '/' + argv[1])
