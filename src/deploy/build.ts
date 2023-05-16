import fse from 'fs-extra';
import { blue, cyan, red } from 'kolorist';
import shelljs from 'shelljs';
import type { ChildProcess } from 'child_process';

async function build(path: string) {
  const isExist = fse.existsSync(path);
  if (!isExist) {
    shelljs.echo(red(`Error: dir does not exist ${cyan(path)}.`));
    shelljs.exit(1);
  }

  shelljs.cd(path);

  const hasNode = shelljs.which('node');
  if (!hasNode) {
    shelljs.echo(red(`Error: command not found ${cyan('node')}.`));
    shelljs.exit(1);
  }
  const hasPnpm = shelljs.which('pnpm');
  if (!hasPnpm) {
    shelljs.echo(red(`Error: command not found ${cyan('pnpm')}.`));
    shelljs.exit(1);
  }

  console.log(shelljs.pwd());
  await promiseExec(shelljs.exec('pnpm install', { silent: true, async: true }));
  debugger;
  await promiseExec(shelljs.exec('pnpm build', { silent: true, async: true }));

  return Promise.resolve();
}

function promiseExec(exec: ChildProcess): Promise<void> {
  return new Promise((resolve, reject) => {
    exec.stdout?.on('data', (data) => {
      console.log(blue(data));
    });

    exec.addListener('exit', () => {
      resolve();
    });

    exec.addListener('error', (err) => {
      reject(err);
    });
  });
}

export default build;
