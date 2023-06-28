import { css, Theme } from '@emotion/react';

export const getStyles = ({ theme }: { theme: Theme }) => ({
  wrapper: css`
    flex: 1;
  `,
  stars: css`
    display: flex;
    justify-content: flex-end;
  `,
  star: css`
    width: 20px;
    color: ${theme.loader};
  `,
});
