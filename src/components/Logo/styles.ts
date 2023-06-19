import { css } from '@emotion/react';
import { colors } from '@/helpers/colors';

export const styles = {
  wrapper: css`
    display: flex;
    align-items: flex-start;
    gap: 12px;
    font-size: 1.8rem;
    color: ${colors.green_300};
    margin: 0;
  `,
  icon: css`
    max-width: 36px;
  `,
};
