import { ReactNode, createContext, useState, useContext } from 'react';
import { CartItem } from '@/helpers/types';

const CartContext = createContext({
  cartItems: [] as CartItem[],
  checkItemInCart: (_: number) => false as boolean,
  addCartItem: (_: CartItem) => {},
  removeCartItem: (_: number) => {},
  increaseCartItemAmount: (_: number) => {},
  decreaseCartItemAmount: (_: number) => {},
});

type Props = {
  children: ReactNode;
};

const CartContextProvider = ({ children }: Props) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const checkItemInCart = (id: number) => cartItems.some((item) => item.id === id);

  const addCartItem = (addedCartItem: CartItem) =>
    setCartItems((prevCartItems) => [...prevCartItems, addedCartItem]);

  const removeCartItem = (id: number) =>
    setCartItems((prevCartITems) => prevCartITems.filter((cartItem) => cartItem.id !== id));

  const increaseCartItemAmount = (id: number) => {
    setCartItems((prevCartItems) =>
      prevCartItems.map((cartItem) => ({
        ...cartItem,
        amount: cartItem.id === id ? cartItem.amount + 1 : cartItem.amount,
      })),
    );
  };

  const decreaseCartItemAmount = (id: number) => {
    const matchedCartItem = cartItems.find((cartItem) => cartItem.id === id);

    if (matchedCartItem?.amount === 1) {
      removeCartItem(id);
      return;
    }

    setCartItems((prevCartItems) =>
      prevCartItems.map((cartItem) => ({
        ...cartItem,
        amount: cartItem.id === id ? cartItem.amount - 1 : cartItem.amount,
      })),
    );
  };

  const value = {
    cartItems,
    checkItemInCart,
    addCartItem,
    removeCartItem,
    increaseCartItemAmount,
    decreaseCartItemAmount,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

const useCart = () => useContext(CartContext);

export { CartContextProvider, useCart };

export default CartContext;
