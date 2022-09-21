export type Options = "uppercase" | "lowercase" | "numbers" | "symbols";
export type CheckList = { label: string; name: Options };
export type OptionsState = Record<Options, boolean>;
export type RangeValueState = number;
