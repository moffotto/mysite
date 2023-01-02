import { memo,ReactElement, useMemo, useState } from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import { ThemeProvider } from 'styled-components';

import { ThemeModeContext } from '@/context';
import { makeTheme, TypeThemeMode } from '@/styles';

export type StyleProviderProps = {
  children: ReactElement;
};

const StyleProvider = ({ children }: StyleProviderProps): ReactElement => {
  const [mode, setMode] = useState<TypeThemeMode>('light');

  const toggleColorMode = () => {
    setMode((prevMode: TypeThemeMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  const theme = useMemo(() => makeTheme(mode), [mode]);

  return (
    <ThemeModeContext.Provider value={{ mode: mode, toggleMode: toggleColorMode }}>
      <ThemeProvider theme={theme}>
        <ParallaxProvider>{children}</ParallaxProvider>
      </ThemeProvider>
    </ThemeModeContext.Provider>
  );
};

export default memo(StyleProvider);