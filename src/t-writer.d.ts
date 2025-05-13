declare module 't-writer.js' {
  export default class Writer {
    constructor(
      target: Element | null,
      options?: {
        loop?: boolean;
        typeColor?: string;
        typeSpeed?: number;
        deleteSpeed?: number;
        cursorColor?: string;
      }
    );
    type(text: string): this;
    rest(ms: number): this;
    remove(n: number): this;
    start(): void;
  }
}
