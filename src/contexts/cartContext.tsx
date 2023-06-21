import { ReactNode, createContext, useState, useContext } from 'react';
import { Product } from '@/helpers/types';

const CartContext = createContext({
  cartProducts: [] as Product[],
  addCartProduct: (_: Product) => {},
  removeCartProduct: (_: Product) => {},
});

type Props = {
  children: ReactNode;
};

const CartContextProvider = ({ children }: Props) => {
  const [cartProducts, setCartProducts] = useState<Product[]>([]);

  const addCartProduct = (addedCartProduct: Product) =>
    setCartProducts((prevCartProducts) => [...prevCartProducts, addedCartProduct]);

  const removeCartProduct = (removedCartProduct: Product) => {
    const filteredCartProducts = cartProducts.filter(
      (cartProduct) => cartProduct.id !== removedCartProduct.id,
    );
    setCartProducts(filteredCartProducts);
  };

  const value = {
    cartProducts,
    addCartProduct,
    removeCartProduct,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

const useCart = () => useContext(CartContext);

export { CartContextProvider, useCart };

export default CartContext;
