import { createReadStream, createWriteStream, existsSync } from "fs";
import path from "path";
import { cwd } from "process";

export const cp = (pathFile, pathNewDir) => {
  try {
    const pf = path.resolve(cwd(), pathFile);
    const pd = path.resolve(cwd(), pathNewDir, pathFile);
    const read = createReadStream(pf);
    const write = createWriteStream(pd);
    if (existsSync(pd)) {
      throw new Error("File already exist");
    }
    read.pipe(write);
    console.log(`The file ${pathFile} was copied`);
  } catch (error) {
    console.log("Operation failed.");
  }
};
