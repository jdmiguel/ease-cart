import { css, Theme } from '@emotion/react';
import { ButtonVariant } from './types';

export const getStyles = ({
  theme,
  variant,
  rounded,
  fullWidth,
  disabled,
}: {
  theme: Theme;
  variant: ButtonVariant;
  rounded: boolean;
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
      border-radius: ${rounded ? '50%' : '4px'};
      padding: ${rounded ? 'unset' : '14px'};
      min-width: ${rounded ? '16px' : '120px'};
      width: ${fullWidth ? '100%' : 'unset'};
      display: flex;
      align-items: center;
      justify-content: center;
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
