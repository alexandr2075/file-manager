import { cwd } from "process";
import { readdir } from "node:fs/promises";
import { statSync } from "fs";

export const ls = async () => {
  try {
    const files = await readdir(cwd());

    const newFiles = files.map((file) => {
      const path = cwd() + "\\" + file;

      const stat = statSync(path);

      const isDirOrFile = stat.isDirectory() ? "dir" : "file";
      return (file = [file, isDirOrFile]);
    });
    
    newFiles.sort((a, b) => {
      if (a[1] > b[1]) {
        return 1;
      }
      if (a[1] < b[1]) {
        return -1;
      }
      return 0;
    });

    console.table(newFiles);
  } catch (err) {
    console.error(err);
  }
};

