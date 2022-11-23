declare module "asar" {
  export function extractAll(archive: string, dest: string): void;

  export function createPackage(src: string, dest: string): Promise<void>;
}
