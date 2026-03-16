/// <reference types="vite/client" />

declare module 'gsap/SplitText' {
  export class SplitText {
    constructor(element: unknown, vars?: Record<string, unknown>);
    static create(element: unknown, vars?: Record<string, unknown>): SplitText;
    revert(): void;
    split(vars?: Record<string, unknown>): void;
    words: unknown[];
    chars: unknown[];
    lines: unknown[];
  }
}
