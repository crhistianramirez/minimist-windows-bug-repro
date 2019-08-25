#!/usr/bin/env node
var minimist = require('minimist');
var args = minimist(process.argv.slice(2))
console.log(args);