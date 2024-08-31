declare module "text-count" {
  export function charCount(str: string): number;
  export function wordCount(str: string): number;
  export function senCount(str: string): number;
  export function lineCount(str: string): number;
  export function mostCommonChar(str: string): { [char: string]: string };
  export function mostCommonwords(str: string): { [char: string]: string };
}
