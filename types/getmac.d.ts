declare module "getmac" {
  export function getMac(callback: (error: Error | null, mac: string) => void): void;
}
