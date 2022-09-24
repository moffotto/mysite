export type TypeThemeMode = 'dark' | 'light';

export type TypeThemeOptions = {
  theme: string;
  breakpoints: {
    mobile: number;
    tablet: number;
    desktop: number;
    desktopXl: number;
    desktopXxl: number;
    desktopXxxl: number;
  };
  palette: {
    common: {
      white: string;
      black: string;
    };
    switch: {
      typoOne: string;
      siteBackground: string;
      openSkiesBackground: string;
      openSkiesCoverup: string;
    };
  };
};

export function makeTheme(mode: TypeThemeMode) {
  return {
    theme: mode,
    breakpoints: {
      mobile: 0,
      tablet: 768,
      desktop: 1280,
      desktopXl: 1580,
      desktopXxl: 1800,
      desktopXxxl: 2080,
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
              typoOne: 'black',
              siteBackground: '#fafafa',
              openSkiesBackground: 'linear-gradient(to top left, #265780, #2a5a83)',
              openSkiesCoverup: '#562a06',
            }
          : {
              typoOne: 'black',
              siteBackground: '#fafafa',
              openSkiesBackground: 'linear-gradient(to bottom right, #16162f, #000e23)',
              openSkiesCoverup: 'black',
            }),
      },
    },
  };
}
