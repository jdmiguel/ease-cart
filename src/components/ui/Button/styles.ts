import { css, Theme } from '@emotion/react';
import { ButtonTheme } from '@/helpers/theme';
import { ButtonVariant } from './types';

export const getStyles = ({
  theme,
  variant,
  disabled,
}: {
  theme: Theme;
  variant: ButtonVariant;
  disabled: boolean;
}) => {
  const getButtonColors = () => {
    if (disabled) return theme.button.disabled;
    if (variant === 'primary') return theme.button.primary;
    return theme.button.secondary;
  };

  const buttonColors = getButtonColors();

  return {
    wrapper: css`
      font-size: 0.9rem;
      outline: 0;
      border: 0;
      cursor: pointer;
      pointer-events: ${disabled ? 'none' : 'unset'};
      border-radius: 4px;
      padding: 14px;
      min-width: 120px;
      font-weight: 700;
      transition: all 0.5s;
      background-color: ${buttonColors.background};
      color: ${buttonColors.text};
      &:hover {
        background-color: ${buttonColors.hoveredBackground};
        color: ${buttonColors.hoveredText};
      }
    `,
  };
};
