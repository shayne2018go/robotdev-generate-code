import shelljs from 'shelljs';
import { red, cyan, blue } from 'kolorist';
import fs from 'fs';
import { exec } from 'child_process';

function build(path: string) {
  //   debugger;
  shelljs.cd(path);
  const hasNode = shelljs.which('node');
  if (!hasNode) {
    console.log(red(`Error: command not found ${cyan('node')}.`));
    return;
  }
  const hasPnpm = shelljs.which('pnpm');
  if (!hasPnpm) {
    console.log(red(`Error: command not found ${cyan('pnpm')}.`));
    return;
  }
  const iexec = shelljs.exec('pnpm i', { silent: true });
  console.log(`------------- ${red(`install dependencies`)} -------------`);
  console.log(blue(iexec.stdout));

  const bexec = shelljs.exec('pnpm build', { silent: true });
  console.log(`------------- ${red(`build`)} -------------`);
  console.log(blue(bexec.stdout));

  // const dexec = shelljs.exec('pnpm dev', { silent: true, async:true });
  return { shelljs };

  //   return {close: dexec.}
}

export default build;
