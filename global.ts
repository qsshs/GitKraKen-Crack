/// <reference path="./types/index.d.ts" />

import * as path from "path";

import * as fs from "fs-extra";
import * as pkgDir from "pkg-dir";

/**
 * Base directory with package.json
 */
export const baseDir = pkgDir.sync(__dirname) as string;

/**
 * package.json
 */
export const packageJson: {
  author: string;
  description: string;
  homepage: string;
  license: string;
  name: string;
  version: string;
} = fs.readJSONSync(path.join(baseDir, "package.json"));
