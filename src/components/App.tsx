import { ThemeProvider, Global, css } from '@emotion/react';
import { useThemeMode } from '@/contexts/themeModeContext';
import Root from '@/components/Root';
import { lightTheme, darkTheme } from '@/helpers/theme';
import { colors } from '@/helpers/colors';

const App: React.FC = () => {
  const { themeMode } = useThemeMode();
  const isLightTheme = themeMode === 'light';
  const selectedTheme = isLightTheme ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={selectedTheme}>
      <Global
        styles={css`
          html {
            scroll-behavior: smooth;
          }
          body {
            margin: 0;
            font-size: 15px;
            font-family: Open Sans, sans-serif;
            font-weight: 300;
            background-color: ${isLightTheme ? colors.neutral_200 : colors.neutral_600};
          }
        `}
      />
      <Root />
    </ThemeProvider>
  );
};

export default App;
