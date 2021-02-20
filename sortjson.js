#!/usr/bin/env node

const fs = require('fs');
const program = require('commander');

program
    .arguments('<filename>')
    .action(sortjson)
    .parse(process.argv);

function sortjson(filename) {
    const unsorted = JSON.parse(fs.readFileSync(filename, 'utf-8'));
    const sorted = Object.keys(unsorted).sort().reduce((obj, key) => {obj[key] = unsorted[key]; return obj}, {});
    console.log(JSON.stringify(sorted, null, 2));
}
