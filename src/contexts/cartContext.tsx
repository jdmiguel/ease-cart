import { ReactNode, createContext, useState, useContext, useEffect } from 'react';
import useLockedBody from '@/hooks/useLockedBody';
import { CartItem } from '@/helpers/types';

const CartContext = createContext({
  cartItems: [] as CartItem[],
  totalPrice: 0,
  isCartOpen: false,
  isPurchaseCompleted: false,
  toggleCartOpenState: () => {},
  checkItemInCart: (_: number) => false as boolean,
  addCartItem: (_: CartItem) => {},
  removeCartItem: (_: number) => {},
  increaseCartItemAmount: (_: number) => {},
  decreaseCartItemAmount: (_: number) => {},
  completePurchase: () => {},
});

type Props = {
  children: ReactNode;
};

const CartContextProvider = ({ children }: Props) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [isPurchaseCompleted, setIsPurchaseCompleted] = useState(false);

  const { updateLocked } = useLockedBody();

  useEffect(() => {
    if (isCartOpen) {
      updateLocked(true);
      return;
    }

    updateLocked(false);
  }, [isCartOpen, updateLocked]);

  const toggleCartOpenState = () => setIsCartOpen((prevIsCartOpen) => !prevIsCartOpen);

  const getCartItemById = (id: number) => cartItems.find((item) => item.id === id);

  const checkItemInCart = (id: number) => cartItems.some((item) => item.id === id);

  const increaseTotalPrice = (addedPrice: number) =>
    setTotalPrice((prevTotalPrice) => prevTotalPrice + addedPrice);

  const decreaseTotalPrice = (removedPrice: number) =>
    setTotalPrice((prevTotalPrice) => prevTotalPrice - removedPrice);

  const addCartItem = (addedCartItem: CartItem) => {
    setIsPurchaseCompleted(false);
    increaseTotalPrice(addedCartItem.price);
    setCartItems((prevCartItems) => [...prevCartItems, addedCartItem]);
  };

  const removeCartItem = (id: number) => {
    const matchedCartItem = getCartItemById(id);

    decreaseTotalPrice(matchedCartItem?.price || 0);

    setCartItems((prevCartITems) => prevCartITems.filter((cartItem) => cartItem.id !== id));
  };

  const increaseCartItemAmount = (id: number) => {
    const matchedCartItem = getCartItemById(id);

    increaseTotalPrice(matchedCartItem?.price || 0);

    setCartItems((prevCartItems) =>
      prevCartItems.map((cartItem) => ({
        ...cartItem,
        amount: cartItem.id === id ? cartItem.amount + 1 : cartItem.amount,
      })),
    );
  };

  const decreaseCartItemAmount = (id: number) => {
    const matchedCartItem = getCartItemById(id);

    if (matchedCartItem?.amount === 1) {
      removeCartItem(id);
      return;
    }

    decreaseTotalPrice(matchedCartItem?.price || 0);

    setCartItems((prevCartItems) =>
      prevCartItems.map((cartItem) => ({
        ...cartItem,
        amount: cartItem.id === id ? cartItem.amount - 1 : cartItem.amount,
      })),
    );
  };

  const completePurchase = () => {
    setIsPurchaseCompleted(true);
    setCartItems([]);
    setTotalPrice(0);
  };

  const value = {
    cartItems,
    totalPrice,
    isCartOpen,
    isPurchaseCompleted,
    toggleCartOpenState,
    checkItemInCart,
    addCartItem,
    removeCartItem,
    increaseCartItemAmount,
    decreaseCartItemAmount,
    completePurchase,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

const useCart = () => useContext(CartContext);

export { CartContextProvider, useCart };

export default CartContext;
