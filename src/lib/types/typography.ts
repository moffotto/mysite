export type TypeBreakpoints = number | { mobile?: number; tablet?: number; desktop?: number };

export type TypeFontWeights = 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;

export type TypeOverrides = {
  fontSize?: TypeBreakpoints;
  letterSpacing?: TypeBreakpoints;
  fontWeight?: TypeFontWeights;
  color?: string;
  fontFamily?: string;
};

export type TypeTypographyProps<C, S> = {
  overrides?: TypeOverrides;
  component?: C;
  size?: S;
};
