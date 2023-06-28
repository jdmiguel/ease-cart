import { css, Theme } from '@emotion/react';

export const getStyles = ({ theme, imageUrl }: { theme: Theme; imageUrl: string }) => ({
  wrapper: css`
    display: flex;
    align-items: center;
    gap: 12px;
    color: ${theme.text};
    border: 1px solid ${theme.backgroundCartItem};
    background-color: ${theme.backgroundCartItem};
    margin-bottom: 6px;
  `,
  image: css`
    background-image: url(${imageUrl});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-color: ${theme.background};
    min-width: 60px;
    min-height: 60px;
  `,
  content: css`
    display: flex;
    justify-content: space-between;
    padding-right: 12px;
    flex: 1;
  `,
  details: css`
    display: flex;
    flex-direction: column;
  `,
  name: css`
    font-weight: 700;
    margin: 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 150px;
  `,
  price: css`
    margin: 0;
  `,
});
