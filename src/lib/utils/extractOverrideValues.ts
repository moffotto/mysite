import { TypeFontWeights,TypeOverrides } from '@/types';

/**
 * Pixel values
 */
type TypeBreakpointsValues = { mobile: number; tablet: number; desktop: number };

type TypeOverrideValues = {
  fontSize?: TypeBreakpointsValues;
  letterSpacing?: TypeBreakpointsValues;
  fontWeight?: TypeFontWeights;
  color?: string;
  fontFamily?: string;
};

export function isFontWeight(weight?: unknown | TypeFontWeights): weight is TypeFontWeights {
  return (
    weight != null &&
    (weight === 100 ||
      weight === 200 ||
      weight === 300 ||
      weight === 400 ||
      weight === 400 ||
      weight === 500 ||
      weight === 600 ||
      weight === 700 ||
      weight === 800 ||
      weight === 900)
  );
}

export function extractOverrideValues(overrides?: TypeOverrides): TypeOverrideValues {
  let fontSize;
  let letterSpacing;
  const fontWeight = overrides?.fontWeight;

  if (overrides?.fontSize) {
    if (typeof overrides.fontSize === 'number') {
      fontSize = {
        mobile: overrides.fontSize,
        tablet: overrides.fontSize,
        desktop: overrides.fontSize,
      };
    } else {
      const mobile =
        overrides.fontSize.mobile ?? overrides.fontSize.tablet ?? overrides.fontSize.desktop;
      const tablet = overrides.fontSize.tablet ?? mobile;
      const desktop = overrides.fontSize.desktop ?? tablet;

      if (mobile == null || tablet == null || desktop == null) {
        console.error(
          'Could not extract fontSize values for all breakpoints in extractOverrideValues()',
        );
      } else {
        fontSize = { mobile: mobile, tablet: tablet, desktop: desktop };
      }
    }
  }

  if (overrides?.letterSpacing) {
    if (typeof overrides.letterSpacing === 'number') {
      letterSpacing = {
        mobile: overrides.letterSpacing,
        tablet: overrides.letterSpacing,
        desktop: overrides.letterSpacing,
      };
    } else {
      const mobile =
        overrides.letterSpacing.mobile ??
        overrides.letterSpacing.tablet ??
        overrides.letterSpacing.desktop;
      const tablet = overrides.letterSpacing.tablet ?? mobile;
      const desktop = overrides.letterSpacing.desktop ?? tablet;

      if (mobile == null || tablet == null || desktop == null) {
        console.error(
          'Could not extract letterSpacing values for all breakpoints in extractOverrideValues()',
        );
      } else {
        letterSpacing = { mobile: mobile, tablet: tablet, desktop: desktop };
      }
    }
  }

  return {
    fontSize: fontSize,
    letterSpacing: letterSpacing,
    fontWeight: fontWeight,
    color: overrides?.color,
    fontFamily: overrides?.fontFamily,
  };
}
