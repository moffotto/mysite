import { createContext } from 'react';

const defaultValue = {
  mode: 'light',
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  toggleMode: () => {},
};

export const ThemeModeContext = createContext(defaultValue);
