import chalk from "chalk";
import * as program from "commander";

import {AppId, Logo} from "../src";

program
  .name("gitcracken-appid-read")
  .description("read GitKraken AppId from config")
  .option("-c, --config <file>", "path to config")
  .action(() => {
    Logo.print();
    console.log(
      `${chalk.green("==>")} Current AppId ${chalk.green(
        AppId.read(program.config) || "null",
      )}`,
    );
  })
  .parse(process.argv);
