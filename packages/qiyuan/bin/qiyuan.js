#!/usr/bin/env node

const { program } = require('commander');

program
    .name("qiyuan-print")
    .usage('<command> [options]')
    .command('print', 'print some log', { isDefault: true })
    .command('dev', 'dev  server')
    .option('-d, --debug', 'debug programmer')
    .parse();

