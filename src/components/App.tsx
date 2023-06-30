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
        styles={[
          css`
            @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;800&display=swap');
          `,
          {
            body: {
              margin: 0,
              fontSize: 14,
              fontFamily: 'Open Sans, sans-serif',
              fontWeight: 300,
              backgroundColor: isLightTheme ? colors.neutral_200 : colors.neutral_600,
            },
          },
        ]}
      />
      <Root />
    </ThemeProvider>
  );
};

export default App;
