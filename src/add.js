import { writeFile } from "node:fs/promises";
import path from "path";
import { cwd } from "process";

export const add = async (nameFile) => {
  const pathFile = path.resolve(cwd(), nameFile);

  try {
    await writeFile(pathFile, ' ', {flag: 'wx'}, (err) => {
      if (err) throw err;
    });
    console.log(`An empty file ${nameFile} was created`);
  } catch(error) {
    console.log(error);
  }
};
