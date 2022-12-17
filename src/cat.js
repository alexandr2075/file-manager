import { createReadStream } from "fs";
import path from "path";
import { stdout, cwd } from "process";

export const cat = (nameFile) => {
  try {
    const pathFile = path.resolve(cwd(), nameFile);

    const read = createReadStream(pathFile);
    read.pipe(stdout);
  } catch (error) {
    console.log("Operation failed");
  }
};
