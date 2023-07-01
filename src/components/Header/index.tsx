import { useThemeMode } from '@/contexts/themeModeContext';
import { useCart } from '@/contexts/cartContext';
import Logo from '@/components/Logo';
import Button from '@/components/ui/Button';
import {
  SHOPPING_BUTTON_TXT,
  DARK_MODE_BUTTON_TXT,
  LIGHT_MODE_BUTTON_TXT,
} from '@/helpers/literals';
import { styles } from './styles';

const Header: React.FC = () => {
  const { themeMode, toggleThemeMode } = useThemeMode();
  const isLightTheme = themeMode === 'light';
  const themeButtonText = isLightTheme ? DARK_MODE_BUTTON_TXT : LIGHT_MODE_BUTTON_TXT;

  const { toggleCartOpenState, cartItems } = useCart();

  return (
    <header css={styles.wrapper}>
      <Logo />
      <div css={styles.actions}>
        <Button
          ariaLabel={SHOPPING_BUTTON_TXT}
          disabled={cartItems.length === 0}
          onClick={toggleCartOpenState}
        >
          {SHOPPING_BUTTON_TXT}
        </Button>
        <Button variant="secondary" ariaLabel={themeButtonText} onClick={toggleThemeMode}>
          {themeButtonText}
        </Button>
      </div>
    </header>
  );
};

export default Header;
