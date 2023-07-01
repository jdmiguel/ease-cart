import { css, Theme } from '@emotion/react';
import { animations } from '@/helpers/theme';

export const getStyles = ({ theme }: { theme: Theme }) => ({
  wrapper: css`
    background-color: ${theme.background};
    color: ${theme.text};
    min-height: 100vh;
    opacity: 0;
    transition: all 0.35s;
    animation: 0.35s forwards ${animations.fadeIn};
  `,
  fallback: css`
    margin: 30px;
    text-align: center;
    font-size: 1.1rem;
    font-weight: 500;
    color: ${theme.error};
  `,
});
