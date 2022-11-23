import chalk from "chalk";

/**
 * Platforms
 */
export enum Platforms {
  linux = 1,
  windows = 2,
  macOS = 3,
}

/**
 * Current platform
 */
export const CURRENT_PLATFORM: Platforms = ((): Platforms => {
  if (process.platform === "linux") {
    return Platforms.linux;
  }
  if (process.platform === "win32") {
    return Platforms.windows;
  }
  if (process.platform === "darwin") {
    return Platforms.macOS;
  }
  console.error(
    `We Are Deeply Sorry! Your OS ${chalk.red.bold(
      process.platform,
    )} is not supported!`,
  );
  return process.exit(1);
})();
