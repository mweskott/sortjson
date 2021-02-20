#!/usr/bin/env node

const fs = require('fs');
const program = require('commander');
const { sortJson } = require('./jsonutils');

program
    .arguments('<filename>')
    .action(sortJsonFile)
    .parse(process.argv);

function sortJsonFile(filename) {
    const unsorted = JSON.parse(fs.readFileSync(filename, 'utf-8'));
    const sorted = sortJson(unsorted);
    console.log(JSON.stringify(sorted, null, 2));
}
