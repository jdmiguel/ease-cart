import '@emotion/react';
import { ButtonTheme } from '@/helpers/theme';

declare module '@emotion/react' {
  export interface Theme {
    text: string;
    background: string;
    shadow: string;
    backgroundCard: string;
    backgroundCartItem: string;
    divider: string;
    overlay: string;
    button: {
      primary: ButtonTheme;
      secondary: ButtonTheme;
      disabled: ButtonTheme;
    };
    loader: string;
  }
}
