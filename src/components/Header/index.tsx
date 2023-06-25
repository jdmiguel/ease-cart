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

type Props = {
  displayCart: () => void;
};

const Header: React.FC<Props> = ({ displayCart }) => {
  const { themeMode, selectThemeMode } = useThemeMode();
  const isLightTheme = themeMode === 'light';
  const themeButtonText = isLightTheme ? DARK_MODE_BUTTON_TXT : LIGHT_MODE_BUTTON_TXT;
  const onChangeTheme = () => selectThemeMode();

  const { cartItems } = useCart();

  return (
    <header css={styles.wrapper}>
      <Logo />
      <div css={styles.actions}>
        <Button
          ariaLabel={SHOPPING_BUTTON_TXT}
          disabled={cartItems.length === 0}
          onClick={displayCart}
        >
          {SHOPPING_BUTTON_TXT}
        </Button>
        <Button variant="secondary" ariaLabel={themeButtonText} onClick={onChangeTheme}>
          {themeButtonText}
        </Button>
      </div>
    </header>
  );
};

export default Header;
