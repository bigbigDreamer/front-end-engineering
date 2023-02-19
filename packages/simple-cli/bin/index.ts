#!/usr/bin/env bun
import * as fs from 'fs';
import * as process from "process";
const cliName: string = "张三";
const cliAge: number = 12;

console.log(cliName, cliAge)

const path = process.cwd();

const files = fs.readdirSync(path);

files.forEach(item => {
    const stat = fs.statSync(item);

    console.log(stat.mode);

    const canUserRead = stat.mode & fs.constants.S_IRUSR;

    console.log(canUserRead, Number.parseInt(String(canUserRead as number), 16));
})


console.log(files);

