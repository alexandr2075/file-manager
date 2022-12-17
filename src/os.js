import os from "os";

export const opSys = (arg) => {
  if (arg === "--EOL") console.log(JSON.stringify(os.EOL));
  if (arg === "--cpus") {
    const cpuInTable = os.cpus().map((cpu) => cpu.model);
    console.table(cpuInTable);
  }
  if (arg === "--homedir") console.log(os.homedir());
  if (arg === "--username") console.log(os.userInfo().username);
  if (arg === "--architecture") console.log(os.arch());
  console.log("Invalid input");
};
