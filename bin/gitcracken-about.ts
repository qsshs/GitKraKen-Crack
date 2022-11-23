import * as program from "commander";

import {Logo} from "../";

program
  .name("gitcracken-about")
  .description("about GitCracken")
  .action(() => {
    Logo.print();
  })
  .parse(process.argv);
