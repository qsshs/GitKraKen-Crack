import chalk from "chalk";
import * as figlet from "figlet";

import {packageJson} from "../global";

/**
 * Logo
 */
export class Logo {
  /**
   * Print logo
   * @param text Main text
   */
  public static print(text = "GitCracken"): void {
    console.log();
    console.log(figlet.textSync(text, "ANSI Shadow"));
    console.log(`${chalk.bold("• Description")}: ${packageJson.description}`);
    console.log(`${chalk.bold("• Version")}: ${packageJson.version}`);
    console.log(`${chalk.bold("• Author")}: ${packageJson.author}`);
    console.log(`${chalk.bold("• License")}: ${packageJson.license}`);
    console.log(`${chalk.bold("• Home Page")}: ${packageJson.homepage}`);
    console.log();
  }
}
