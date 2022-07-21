export type TypeThemeMode = 'dark' | 'light';

export type TypeThemeOptions = {
  breakpoints: {
    mobile: number;
    tablet: number;
    desktop: number;
    desktopXl: number;
  };
  palette: {
    common: {
      white: string;
      black: string;
    };
    switch: {
      siteBackground: string;
    };
  };
};

export function makeTheme(mode: TypeThemeMode) {
  return {
    breakpoints: {
      mobile: 0,
      tablet: 768,
      desktop: 1280,
      desktopXl: 1580,
    },
    palette: {
      common: {
        white: '#ffffff',
        black: '#000000',
        shadowOne: '#e4dada',
      },
      switch: {
        ...(mode === 'light'
          ? {
              siteBackground: '#fafafa',
            }
          : {
              siteBackground: '#fafafa',
            }),
      },
    },
  };
}
