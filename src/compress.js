import { createReadStream, createWriteStream } from "fs";
import zlib from "zlib";

export const compress = (pathToFile, pathToDestination) => {
  try {
    const gzip = zlib.createBrotliCompress();

    const input = createReadStream(pathToFile);

    input.on("error", function (err) {
      console.log(err);
    });

    const output = createWriteStream(pathToDestination, { flags: "wx" });

    output.on("error", function (err) {
      console.log(err);
      output.end();
    });

    input.pipe(gzip).pipe(output);
  } catch (error) {
    console.log("Operation failed.");
  }
};

export const decompress = (pathToFile, pathToDestination) => {
  try {
    const gzip = zlib.createBrotliDecompress();

    const input = createReadStream(pathToFile);

    input.on("error", function (err) {
      console.log(err);
    });

    const output = createWriteStream(pathToDestination, { flags: "wx" });

    output.on("error", function (err) {
      console.log(err);
      output.end();
    });

    input.pipe(gzip).pipe(output);
  } catch (error) {
    console.log("Operation failed.");
  }
};
