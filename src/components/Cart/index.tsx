import { useTheme } from '@emotion/react';
import { useCart } from '@/contexts/cartContext';
import Button from '@/components/ui/Button';
import CartItem from '@/components/Cart/CartItem';
import {
  SHOPPING_CART_TITLE,
  SHOPPING_CART_SCROLL_MESSAGE,
  TOTAL_PRICE_TXT,
  PURCHASE_COMPLETED_MESSAGE,
  EMPTY_SHOPPING_CART_MESSAGE,
  BACK_BUTTON_TXT,
  BUY_BUTTON_TXT,
} from '@/helpers/literals';
import { getStyles } from './styles';

const Cart: React.FC = () => {
  const {
    isCartOpen,
    cartItems,
    totalPrice,
    isPurchaseCompleted,
    increaseCartItemAmount,
    decreaseCartItemAmount,
    toggleCartOpenState,
    completePurchase,
  } = useCart();

  const theme = useTheme();
  const styles = getStyles({ theme });

  const withCartItems = cartItems.length > 0;
  const hasScroll = cartItems.length > 3;

  const handleMainAction = () => {
    if (!isPurchaseCompleted) {
      completePurchase();
      return;
    }
    toggleCartOpenState();
  };

  const mainActionTxt = !isPurchaseCompleted ? BUY_BUTTON_TXT : BACK_BUTTON_TXT;

  return (
    <dialog css={styles.wrapper} open={isCartOpen}>
      <div css={styles.overlay}>
        <div css={styles.content}>
          <div>
            <header css={styles.header}>
              <h2 css={styles.title}>{SHOPPING_CART_TITLE}</h2>
            </header>
            {withCartItems ? (
              <>
                <ul css={styles.items}>
                  {cartItems.map((item) => (
                    <CartItem
                      key={item.id}
                      id={item.id}
                      name={item.name}
                      price={item.price}
                      imageUrl={item.thumbnail}
                      onIncreaseItemsAmount={increaseCartItemAmount}
                      onDecreaseItemsAmount={decreaseCartItemAmount}
                    />
                  ))}
                </ul>
                {hasScroll && <p css={styles.scrollTxt}>{SHOPPING_CART_SCROLL_MESSAGE}</p>}
              </>
            ) : (
              <p css={styles.emptyMsg}>
                {isPurchaseCompleted ? PURCHASE_COMPLETED_MESSAGE : EMPTY_SHOPPING_CART_MESSAGE}
              </p>
            )}
            {!isPurchaseCompleted && (
              <>
                <hr css={styles.divider} />
                <div css={styles.totalPrice}>
                  <span>{TOTAL_PRICE_TXT}</span>
                  <span>{`£${totalPrice}`}</span>
                </div>
              </>
            )}
          </div>
          <div css={styles.actions}>
            <Button
              onClick={handleMainAction}
              ariaLabel={mainActionTxt}
              disabled={!withCartItems && !isPurchaseCompleted}
            >
              {mainActionTxt}
            </Button>
            {!isPurchaseCompleted && (
              <Button
                variant="secondary"
                onClick={toggleCartOpenState}
                ariaLabel="back to products"
              >
                {BACK_BUTTON_TXT}
              </Button>
            )}
          </div>
        </div>
      </div>
    </dialog>
  );
};

export default Cart;
