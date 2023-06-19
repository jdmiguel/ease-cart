import { ThemeProvider, Global, css } from '@emotion/react';
import { useThemeMode } from '@/contexts/themeModeContext';
import { lightTheme, darkTheme } from '@/helpers/theme';
import { colors } from '@/helpers/colors';
import Main from '@/components/Main';

const App: React.FC = () => {
  const { themeMode } = useThemeMode();
  const selectedTheme = themeMode === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={selectedTheme}>
      <Global
        styles={[
          css`
            @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;700&display=swap');
          `,
          {
            body: {
              margin: 0,
              fontSize: 14,
              fontFamily: 'Open Sans, sans-serif',
              backgroundColor: colors.light,
            },
          },
        ]}
      />
      <Main />
    </ThemeProvider>
  );
};

export default App;