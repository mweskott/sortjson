#!/usr/bin/env node

const fs = require('fs');
const program = require('commander');
const { missingRight } = require('./jsonutils');

program
    .arguments('<file1> <file2>')
    .action(sortjson)
    .parse(process.argv);

function sortjson(file1, file2) {
    const left = JSON.parse(fs.readFileSync(file1, 'utf-8'));
    const right = JSON.parse(fs.readFileSync(file2, 'utf-8'));
    console.log(JSON.stringify(missingRight(left, right), null, 2));
}
