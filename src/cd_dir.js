import { statSync } from "fs";
import path from "path";
import { chdir, cwd } from "process";

export const cd_dir = (string) => {
  try {

    const pathDest = string.split(' ')[1];
    
    const pathDir = path.resolve(cwd(), pathDest);

    chdir(pathDir);
    const stat = statSync(pathDir);
    if (!stat.isDirectory()) {
      console.log("Invalid input.");
    }
    console.log(`You are currently in path to working_directory: ${pathDir}\n`);
  } catch (error) {
    console.log("Invalid input");
  }
};
