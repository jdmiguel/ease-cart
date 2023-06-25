import { css, Theme } from '@emotion/react';

export const getStyles = ({ theme, thumbnailUrl }: { theme: Theme; thumbnailUrl: string }) => ({
  wrapper: css`
    background-color: ${theme.backgroundCard};
    display: flex;
    flex-direction: column;
    box-shadow: 0px 2px 12px -2px ${theme.shadow};
    padding: 16px;
  `,
  thumbnail: css`
    background-image: url(${thumbnailUrl});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-color: ${theme.background};
    width: 100%;
    height: 264px;
    border: 1px solid ${theme.divider};
  `,
  content: css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 10px;
    margin-top: 18px;
    min-height: 200px;
  `,
  title: css`
    font-size: 1.3rem;
    font-weight: 700;
    text-transform: capitalize;
    margin-top: 0;
    margin-bottom: 10px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
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
