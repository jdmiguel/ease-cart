import { useTheme } from '@emotion/react';
import { useCart } from '@/contexts/cartContext';
import Button from '@/components/ui/Button';
import CartItem from '@/components/Cart/CartItem';
import {
  SHOPPING_CART_TITLE,
  EMPTY_SHOPPING_CART_MESSAGE,
  BACK_BUTTON_TXT,
  BUY_BUTTON_TXT,
} from '@/helpers/literals';
import { getStyles } from './styles';

type Props = {
  open: boolean;
  onClose: () => void;
};

const ShoppingCart: React.FC<Props> = ({ open, onClose }) => {
  const { cartItems, increaseCartItemAmount, decreaseCartItemAmount } = useCart();

  const theme = useTheme();
  const styles = getStyles({ theme });

  const withCartItems = cartItems.length > 0;

  return (
    <dialog css={styles.wrapper} open={open}>
      <div css={styles.overlay}>
        <div css={styles.content}>
          <div>
            <h3 css={styles.title}>{SHOPPING_CART_TITLE}</h3>
            <ul css={styles.items}>
              {withCartItems ? (
                cartItems.map((item) => (
                  <CartItem
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    price={item.price}
                    imageUrl={item.thumbnail}
                    onIncreaseItemsAmount={increaseCartItemAmount}
                    onDecreaseItemsAmount={decreaseCartItemAmount}
                  />
                ))
              ) : (
                <p css={styles.emptyMsg}>{EMPTY_SHOPPING_CART_MESSAGE}</p>
              )}
            </ul>
          </div>
          <div css={styles.actions}>
            <Button variant="secondary" onClick={onClose} ariaLabel="back to products">
              {BACK_BUTTON_TXT}
            </Button>
            <Button onClick={onClose} ariaLabel="buy" disabled={!withCartItems}>
              {BUY_BUTTON_TXT}
            </Button>
          </div>
        </div>
      </div>
    </dialog>
  );
};

export default ShoppingCart;
