import { useTheme } from '@emotion/react';
import { getStyles } from './styles';

export type ButtonVariant = 'primary' | 'secondary';

type Props = {
  variant?: ButtonVariant;
  rounded?: boolean;
  fullWidth?: boolean;
  disabled?: boolean;
  ariaLabel: string;
  onClick: () => void;
  children: string;
};

const Button: React.FC<Props> = ({
  variant = 'primary',
  rounded = false,
  fullWidth = false,
  disabled = false,
  ariaLabel,
  onClick,
  children,
}) => {
  const theme = useTheme();
  const styles = getStyles({ theme, variant, rounded, fullWidth, disabled });

  return (
    <button css={styles.wrapper} type="button" aria-label={ariaLabel} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
