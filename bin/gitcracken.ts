#!/usr/bin/env node

import * as program from "commander";

import {packageJson} from "../global";

program
  .name("gitcracken")
  .version(packageJson.version)
  .description(packageJson.description)
  .command("about", "about GitCracken")
  .command("appid", "GitKraken AppId")
  .command("patcher [actions...]", "GitKraken patcher")
  .command("secfile [files...]", "read GitKraken secFile")
  .parse(process.argv);
