#!/usr/bin/env node
import { createCommand } from "commander";
import { execaNode } from "execa";
import { fork } from 'child_process';
import runWatcher from '../lib/dev/watch.mjs'
import consola from "consola";

const program = createCommand("DEV COMMAND");

program.usage("dev <options>")
    .parse(process.args)

const startServer = () => {
    let subProcess
    try {
        subProcess = fork('./lib/dev/server.mjs');
        subProcess.on('exit', code => {
            if(code) {
                process.exit(code);
            }
        })
        return () => {
            subProcess.kill(); // SIGKILL 、SIGINT、SIGTERM
        }
    } catch (e) {
        consola.error(e, 'Child process fork error')
        return () => {
            process.exit(1);
        }
    }

}

let quit = startServer();

runWatcher(() => {
    quit();
    consola.info("Will restart");
    quit = startServer();
});

