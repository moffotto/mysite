export type TypeThemeMode = 'dark' | 'light';

export type TypeBreakpoints = {
  mobile: number;
  mobileOne: number;
  tablet: number;
  tabletOne: number;
  tabletTwo: number;
  desktop: number;
  desktopXl: number;
  desktopXxl: number;
  desktopXxxl: number;
};

export type TypeThemeOptions = {
  theme: string;
  breakpoints: TypeBreakpoints;
  palette: {
    common: {
      white: string;
      white2: string;
      black: string;
    };
    switch: {
      typoOne: string;
      siteBackground: string;
      openSkiesBackground: string;
      openSkiesCoverup: string;
      foliageSiteBackground: string;
      foliageMainBackground: string;
      foliageMainDropshadow: string;
    };
  };
};

export function makeTheme(mode: TypeThemeMode) {
  return {
    theme: mode,
    breakpoints: {
      mobile: 350,
      mobileOne: 550,
      tablet: 768,
      tabletOne: 850,
      tabletTwo: 1050,
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
              foliageSiteBackground: 'white',
              foliageMainBackground: 'white',
              foliageMainDropshadow: '#e4dada',
            }
          : {
              typoOne: '#b1b1b1',
              siteBackground: '#fafafa',
              openSkiesBackground: 'linear-gradient(to bottom right, #16162f, #000e23)',
              openSkiesCoverup: 'black',
              foliageSiteBackground: '#000211',
              foliageMainBackground: '#181819',
              foliageMainDropshadow: '#171616',
            }),
      },
    },
  };
}
