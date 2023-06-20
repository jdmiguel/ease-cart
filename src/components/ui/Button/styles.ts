import { css, Theme } from '@emotion/react';
import { ButtonVariant } from './types';

export const getStyles = ({
  theme,
  variant,
  fullWidth,
  disabled,
}: {
  theme: Theme;
  variant: ButtonVariant;
  fullWidth: boolean;
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
      width: ${fullWidth ? '100%' : 'unset'};
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
