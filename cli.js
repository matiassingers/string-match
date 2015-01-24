#!/usr/bin/env node
'use strict';

var pkg = require('./package.json');
var stringMatch = require('./');
var argv = process.argv.slice(2);

function help() {
  console.log([
    '',
      '  ' + pkg.description,
    '',
    '  Example',
    '    string-match "foo bar" /[bc]ar/',
    '    => bar'
  ].join('\n'));
}

if (argv.indexOf('--help') !== -1) {
  help();
  return;
}

if (argv.indexOf('--version') !== -1) {
  console.log(pkg.version);
  return;
}

if(argv.length < 2){
  console.error('Error: at least two arguments are required for stringMatch');
}

if(argv[1].charAt(0) === '/'){
  argv[1] = new RegExp(argv[1].replace(/\//g, ''));
}

console.log(stringMatch(argv[0], argv[1]));
