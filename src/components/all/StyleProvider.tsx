import type { ReactElement } from 'react';
import { createContext, useMemo, useState } from 'react';
import { ThemeProvider } from 'styled-components';

import { makeTheme, TypeThemeMode } from '@/styles';

export type StyleProviderProps = {
  children: ReactElement;
};

const ThemeModeContext = createContext({
  toggleThemeMode: () => {
    // Uses 'colorMode' defined below
  },
});

const StyleProvider = ({ children }: StyleProviderProps): ReactElement => {
  const [mode, setMode] = useState<TypeThemeMode>('light');

  const colorMode = useMemo(
    () => ({
      toggleThemeMode: () => {
        setMode((prevMode: TypeThemeMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const theme = useMemo(() => makeTheme(mode), [mode]);

  return (
    <ThemeModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeModeContext.Provider>
  );
};

export default StyleProvider;
