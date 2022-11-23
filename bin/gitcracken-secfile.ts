import chalk from "chalk";
import * as program from "commander";

import {AppId, Logo, SecFile} from "../";

program
  .name("gitcracken-secfile")
  .description("read GitKraken secFile")
  .option("-i, --appid <id>", "AppId for secFile decrypt", AppId.read())
  .arguments("[files...]")
  .action((files?: string[]) => {
    Logo.print();
    for (const file of files || []) {
      console.log(`${chalk.green("==>")} ${chalk.bold(file)}`);
      const secFile = new SecFile(file, program.appid);
      secFile.read();
      console.log(JSON.stringify(secFile.data, null, 2));
    }
  })
  .parse(process.argv);
