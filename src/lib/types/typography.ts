export type TypeTypographyProps<C, S> = {
  overrides?: {
    fontSize: number | { mobile?: number; tablet?: number; desktop?: number };
    letterSpacing: number | { mobile?: number; tablet?: number; desktop?: number };
    fontWeight: number | { mobile?: number; tablet?: number; desktop?: number };
  };
  component?: C;
  size?: S;
};
