import { ReactNode, createContext, useState, useContext } from 'react';
import { ThemeMode } from '@/helpers/theme';

const ThemeModeContext = createContext({
  themeMode: 'light',
  selectThemeMode: () => {},
});

type Props = {
  children: ReactNode;
};

const ThemeModeContextProvider = ({ children }: Props) => {
  const [themeMode, setThemeMode] = useState<ThemeMode>('light');

  const selectThemeMode = () => {
    setThemeMode((prevThemeMode) => (prevThemeMode === 'light' ? 'dark' : 'light'));
  };

  const value = {
    themeMode,
    selectThemeMode,
  };

  return <ThemeModeContext.Provider value={value}>{children}</ThemeModeContext.Provider>;
};

const useThemeMode = () => useContext(ThemeModeContext);

export { ThemeModeContextProvider, useThemeMode };

export default ThemeModeContext;
