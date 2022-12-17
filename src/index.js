import readline from 'readline';
import { chdir, cwd} from 'process';

import { up } from './up.js';
import { ls } from './ls.js';
import { cd_dir } from './cd_dir.js';
import { cat } from './cat.js';
import { add } from './add.js';
import { rn } from './rn.js';
import { cp, mv, rmFile } from './cp_mv_rm.js';
import { opSys } from './os.js';
import { hashForFile } from './hash.js';

const arg = process.argv.slice(2);
const name = arg[0].split('=')[1];

const exit = () => {
  rl.write(`Thank you for using File Manager, ${name}, goodbye!`)
  rl.close();
}

const rl = readline.createInterface({input: process.stdin, output: process.stdout});

rl.write(`Welcome to the File Manager, ${name}!\n`)

chdir(process.env.USERPROFILE);
rl.write(`You are currently in path to working directory: ${cwd()}\n`)
rl.on('SIGINT', () => {
  exit();
})
rl.on('line', (input) => {
  switch (input) {
    case 'up':
      up();
      break;
    case 'cd ..':
      up();
      break;
    case 'ls':
      ls();
      break;
    case '.exit':
      exit();
      break;
  }

  if (input.slice(0, 2) === 'cd') {
    cd_dir(input);
  }
  if (input.slice(0, 3) === 'cat') {
    const nameFile = input.split(' ')[1];
    cat(nameFile);
  }
  if (input.slice(0, 3) === 'add') {
    const nameFile = input.split(' ')[1];
    add(nameFile);
  }
  if (input.slice(0, 2) === 'rn') {
    const oldNameFile = input.split(' ')[1];
    const newNameFile = input.split(' ')[2];
    rn(oldNameFile, newNameFile);
  }
  if (input.slice(0, 2) === 'cp') {
    const pathFile = input.split(' ')[1];
    const pathNewDir = input.split(' ')[2];
    cp(pathFile, pathNewDir);
  }
  if (input.slice(0, 2) === 'mv') {
    const pathFile = input.split(' ')[1];
    const pathNewDir = input.split(' ')[2];
    mv(pathFile, pathNewDir);
  }
  if (input.slice(0, 2) === 'rm') {
    const pathFile = input.split(' ')[1];
    rmFile(pathFile);
  }
  if (input.slice(0, 2) === 'os') {
    const arg = input.split(' ')[1];
    opSys(arg);
  }
  if (input.slice(0, 4) === 'hash') {
    const pathTofile = input.split(' ')[1];
    hashForFile(pathTofile);
  }
})
