declare module "regex-colorizer" {
  export function colorizeText(pattern: string | RegExp): String;
  export function colorizeAll(className: string): void;
}
