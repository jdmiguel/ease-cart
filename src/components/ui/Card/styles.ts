import { css, Theme } from '@emotion/react';

export const getStyles = ({ theme }: { theme: Theme }) => ({
  wrapper: css`
    background-color: ${theme.backgroundCard};
    display: flex;
    flex-direction: column;
    box-shadow: 0px 2px 12px -2px ${theme.shadow};
  `,
  thumbnail: css`
    max-width: 100%;
  `,
  content: css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 10px;
    padding: 20px;
    min-height: 200px;
    border-top: 1px solid ${theme.divider};
  `,
  title: css`
    font-size: 1.3rem;
    font-weight: 700;
    text-transform: capitalize;
    margin-top: 0;
    margin-bottom: 10px;
  `,
  details: css`
    display: flex;
    align-items: center;
    gap: 10px;
  `,
  price: css`
    font-size: 1.2rem;
  `,
  description: css`
    margin: 0;
    opacity: 0.75;
  `,
});
