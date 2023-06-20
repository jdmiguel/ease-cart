import { css } from '@emotion/react';

export const styles = {
  wrapper: css`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 0 20px;
    max-width: 1200px;
    margin: 50px auto;
  `,
};
