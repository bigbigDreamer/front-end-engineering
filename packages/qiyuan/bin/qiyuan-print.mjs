#!/usr/bin/env node
import figlet from 'figlet';
import consola from 'consola';
import chalk from 'chalk';

import { createCommand } from "commander";

const program = createCommand("PRINT COMMAND");

program.usage("[options]")
    .option('-c, --content <content>', "will print some content", "QiYuan App")
    .action(function (options, cmd) {
        figlet(options.content,{
            font: 'Ghost',
        }, function(err, data) {
            if (err) {
                consola.error('Something went wrong...');
                consola.trace(err);
                return;
            }
            consola.log(chalk.blueBright(data))
        })
    })
    .parse(process.argv)
