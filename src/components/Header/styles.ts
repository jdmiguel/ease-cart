import { css } from '@emotion/react';

export const styles = {
  wrapper: css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    max-width: 1120px;
    margin: 0 auto;
    padding: 24px;
    gap: 18px;
    position: sticky;
    top: 0;
    z-index: 1;
    background-color: inherit;
    @media only screen and (min-width: 768px) {
      flex-direction: row;
    }
  `,
  actions: css`
    display: flex;
    gap: 8px;
  `,
};
