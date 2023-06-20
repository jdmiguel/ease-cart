import { css } from '@emotion/react';

export const styles = {
  wrapper: css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    max-width: 1200px;
    margin: 24px auto;
    gap: 18px;
    @media only screen and (min-width: 768px) {
      flex-direction: row;
    }
  `,
  actions: css`
    display: flex;
    gap: 8px;
  `,
};
