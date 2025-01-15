#!/usr/bin/env node

const { exec } = require("child_process");
const args = process.argv.slice(2);

if (args.length < 2) {
  console.error("Usage: script <arg0> <arg1>");
  process.exit(1);
}

const [arg0, arg1] = args;

const inputFile = `02-clipes/${arg0}-${arg1}.mov`;
const outputDir = `03-quadros/${arg0}-${arg1}`;
const outputPattern = `${outputDir}/${arg0}-${arg1}-quadro%03d.jpg`;

const command = `ffmpeg -i ${inputFile} -q:v 0 ${outputPattern}`;

console.log("Running command:", command);

exec(command, (error, stdout, stderr) => {
  if (error) {
    console.error(`Error: ${error.message}`);
    return;
  }

  if (stderr) {
    console.error(`stderr: ${stderr}`);
    return;
  }

  console.log(`stdout: ${stdout}`);
});
