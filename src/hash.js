import { createReadStream } from "node:fs";
import { stdout } from "node:process";
const { createHash } = await import("node:crypto");

export const hashForFile = (pathTofile) => {
  try {
    const hash = createHash("sha256");

    const readFile = createReadStream(pathTofile, { flag: "r" });

    readFile.pipe(hash).setEncoding("hex").pipe(stdout);
  } catch (error) {
    console.log('Invalid input');
  }
};
