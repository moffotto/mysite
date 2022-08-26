import { createContext } from 'react';

export const ThemeModeContext = createContext({
  toggleThemeMode: () => {
    // Uses 'colorMode' defined below
  },
});
