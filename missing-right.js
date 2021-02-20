#!/usr/bin/env node

const fs = require('fs');
const program = require('commander');

program
    .arguments('<file1> <file2>')
    .action(sortjson)
    .parse(process.argv);

function sortjson(file1, file2) {
    const left = JSON.parse(fs.readFileSync(file1, 'utf-8'));
    const right = JSON.parse(fs.readFileSync(file2, 'utf-8'));
    const missing = Object.keys(left).reduce((obj, key) => {
        if (!right[key]) {
            obj[key] = left[key];
        }
        return obj;
    }, {});
    console.log(JSON.stringify(missing, null, 2));
}
