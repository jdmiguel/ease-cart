import { css, Theme } from '@emotion/react';
import { animations } from '@/helpers/theme';

export const getStyles = ({ theme }: { theme: Theme }) => ({
  wrapper: css`
    width: 100%;
  `,
  line: css`
    display: block;
    width: 100%;
    height: 5px;
    animation: 1s ease-in-out infinite forwards ${animations.moveX};
    background-color: ${theme.loader};
  `,
});
