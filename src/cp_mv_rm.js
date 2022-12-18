import { rm, createReadStream, createWriteStream, existsSync } from "fs";
import path from "path";
import { cwd } from "process";

export const cp = (pathFile, pathNewDir) => {
  try {
    const pf = path.resolve(cwd(), pathFile);
    const pd = path.resolve(cwd(), pathNewDir, pathFile);

    if (!existsSync(pf) || !existsSync(pd)) {
      throw new Error("File not exist");
      return;
    }
    const read = createReadStream(pf);

    if (existsSync(pd)) {
      throw new Error("File already exist");
      return;
    }
    const write = createWriteStream(pd);

    read.pipe(write);
  } catch (error) {
    console.log(error);
  }
};

export const mv = (pathFile, pathNewDir) => {
  cp(pathFile, pathNewDir);
  rmFile(pathFile)
};

export const rmFile = (pathFile) => {
 
  rm(pathFile, (err) => {
    if (err) console.log("Operation failed!");
  });
  console.log(`The file ${pathFile} was removed`);
};
