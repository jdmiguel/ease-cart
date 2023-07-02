import { css } from '@emotion/react';
import { colors } from '@/helpers/colors';

export const styles = {
  wrapper: css`
    padding: 4px 8px;
    text-transform: uppercase;
    color: ${colors.neutral_200};
    font-size: 0.8rem;
    font-weight: 500;
    letter-spacing: 0.02rem;
    background-color: ${colors.neutral_400};
    border-radius: 10px;
  `,
};
