
'use strict';

const exec = require('child_process').execSync;
const readFile = require('fs').readFileSync;

exec('cd gulp && rm -rf dist && tsc');

const gulpfilePaths = [
    'gulp/dist/gulpfile.js',
];

gulpfilePaths.forEach((gulpfilePath) => {
    const gulpfile = readFile(gulpfilePath).toString();
    eval(gulpfile);
});
