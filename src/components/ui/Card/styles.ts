import { css, Theme } from '@emotion/react';
import loadingImgPath from '@/assets/loading.svg';

export const getStyles = ({ theme, thumbnailUrl }: { theme: Theme; thumbnailUrl: string }) => ({
  wrapper: css`
    background-color: ${theme.backgroundCard};
    display: flex;
    flex-direction: column;
    padding: 16px;
  `,
  thumbnailWrapper: css`
    background-image: url(${loadingImgPath});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    background-color: ${theme.background};
    width: 100%;
    height: 264px;
  `,
  thumbnail: css`
    background-image: url(${thumbnailUrl});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 100%;
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
    font-size: 1.2rem;
    font-weight: 600;
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
