import { rename } from "fs/promises";
import path from "path";
import { cwd } from "process";

export const rn = async(oldNameFile, newNameFile) => {
  try {
    const pathOldFile = path.resolve(cwd(), oldNameFile);
    const pathNewFile = path.resolve(cwd(), newNameFile);

    await rename(pathOldFile, pathNewFile);
    console.log("File has been renamed");
  } catch (error) {
    console.log("Operation failed");
  }
};