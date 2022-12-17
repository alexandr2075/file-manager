import { existsSync } from "node:fs";
import { writeFile } from "node:fs/promises";
import path from "path";
import { cwd } from "process";

export const add = async (nameFile) => {
  const pathFile = path.resolve(cwd(), nameFile);

  try {
    if (existsSync(nameFile)) {
      throw new Error();
    }
    writeFile(pathFile);
    console.log(`An empty file ${nameFile} was created`);
  } catch(error) {
    console.log('File already exist');
  }
};
