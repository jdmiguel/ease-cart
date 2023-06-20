import { ButtonVariant } from './types';
import { useTheme } from '@emotion/react';
import { getStyles } from './styles';

type Props = {
  variant?: ButtonVariant;
  fullWidth?: boolean;
  disabled?: boolean;
  ariaLabel: string;
  onClick: () => void;
  children: string;
};

const Button: React.FC<Props> = ({
  variant = 'primary',
  fullWidth = false,
  disabled = false,
  ariaLabel,
  onClick,
  children,
}) => {
  const theme = useTheme();
  const styles = getStyles({ theme, variant, fullWidth, disabled });

  return (
    <button css={styles.wrapper} type="button" aria-label={ariaLabel} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
