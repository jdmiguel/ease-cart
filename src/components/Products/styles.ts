import { css } from '@emotion/react';

export const styles = {
  wrapper: css`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 20px;
    max-width: 1120px;
    margin: 0 auto;
  `,
  loaderWrapper: css`
    position: fixed;
    z-index: 2;
    width: 100%;
    bottom: 0;
    left: 0;
  `,
};
