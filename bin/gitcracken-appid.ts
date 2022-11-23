import * as program from "commander";

program
  .name("gitcracken-appid")
  .description("GitKraken AppId")
  .command("generate", "generate GitKraken AppId")
  .command("read", "read GitKraken AppId from config")
  .parse(process.argv);
