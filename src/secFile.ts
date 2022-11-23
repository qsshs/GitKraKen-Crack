import * as crypto from "crypto";

import * as fs from "fs-extra";

/**
 * Password protected file with JSON content.
 * This class is fork of <https://gitlab.com/maxkorp/secure-storage> library
 */
export class SecFile<T = object> {
  private readonly _fileName: string;
  private readonly _password: string;
  private readonly _algorithm: string;
  private _data?: T;

  /**
   * Password protected file with JSON content constructor
   * @param fileName File name
   * @param password Password
   * @param algorithm Algorithm
   */
  public constructor(
    fileName: string,
    password: string,
    algorithm: string = "aes-256-cbc",
  ) {
    this._fileName = fileName;
    this._password = password;
    this._algorithm = algorithm;
  }

  /**
   * File name
   */
  public get fileName(): string {
    return this._fileName;
  }

  /**
   * Password
   */
  public get password(): string {
    return this._password;
  }

  /**
   * Algorithm
   */
  public get algorithm(): string {
    return this._algorithm;
  }

  /**
   * Data
   */
  public get data(): T | undefined {
    return this._data;
  }

  /**
   * Read data from disk
   * @throws Error
   */
  public read(): void {
    const decipher = crypto.createDecipher(this.algorithm, this.password); // TODO: deprecated!
    this._data = JSON.parse(
      Buffer.concat([
        decipher.update(fs.readFileSync(this.fileName)),
        decipher.final(),
      ]).toString("utf8"),
    );
  }
}
