import { css } from '@emotion/react';
import { colors } from '@/helpers/colors';

export const styles = {
  wrapper: css`
    padding: 8px;
    text-transform: uppercase;
    color: ${colors.neutral_100};
    font-size: 0.8rem;
    font-weight: 700;
    letter-spacing: 0.1;
    background-color: ${colors.yellow_200};
    border-radius: 12px;
  `,
};
