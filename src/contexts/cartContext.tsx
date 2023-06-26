import { ReactNode, createContext, useState, useContext } from 'react';
import { CartItem } from '@/helpers/types';

const CartContext = createContext({
  cartItems: [] as CartItem[],
  totalPrice: 0,
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
  const [totalPrice, setTotalPrice] = useState(0);

  const getCartItemById = (id: number) => cartItems.find((item) => item.id === id);

  const checkItemInCart = (id: number) => cartItems.some((item) => item.id === id);

  const increaseTotalPrice = (addedPrice: number) =>
    setTotalPrice((prevTotalPrice) => prevTotalPrice + addedPrice);

  const decreaseTotalPrice = (removedPrice: number) =>
    setTotalPrice((prevTotalPrice) => prevTotalPrice - removedPrice);

  const addCartItem = (addedCartItem: CartItem) => {
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

  const value = {
    cartItems,
    totalPrice,
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
