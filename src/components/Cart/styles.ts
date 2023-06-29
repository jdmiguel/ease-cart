import { css, Theme } from '@emotion/react';
import { animations } from '@/helpers/theme';

export const getStyles = ({ theme }: { theme: Theme }) => ({
  wrapper: css`
    padding: 0;
    opacity: 0;
    animation: 0.35s forwards ${animations.fadeIn};
    position: absolute;
    left: 0;
    top: 0;
    z-index: 2;
  `,
  overlay: css`
    background-color: ${theme.overlay};
    position: fixed;
    left: 0;
    top: 0;
    z-index: 1;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  content: css`
    background-color: ${theme.backgroundCard};
    width: 300px;
    max-height: 415px;
    border-radius: 4px;
    padding: 18px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color: ${theme.text};
  `,
  header: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
  `,
  title: css`
    font-size: 1rem;
    font-weight: 800;
    margin: 0;
  `,
  scrollTxt: css`
    font-size: 0.6rem;
    text-align: right;
    opacity: 0.7;
  `,
  items: css`
    margin: 6px 0 4px;
    padding: 0;
    max-height: 200px;
    overflow-y: scroll;
  `,
  emptyMsg: css`
    margin: 18px 0;
    font-size: 0.85rem;
  `,
  divider: css`
    margin-top: 8px;
    height: 1px;
    border: none;
    background-color: ${theme.text};
    opacity: 0.2;
  `,
  totalPrice: css`
    display: flex;
    justify-content: space-between;
    font-size: 1rem;
    font-weight: 600;
  `,
  actions: css`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    gap: 6px;
    margin-top: 20px;
  `,
});
