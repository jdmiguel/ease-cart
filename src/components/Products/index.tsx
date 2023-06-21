import { useState, useCallback, useRef } from 'react';
import { useCart } from '@/contexts/cartContext';
import useProducts from '@/hooks/useProducts';
import Card from '@/components/ui/Card';
import Loader from '@/components/ui/Loader';
import {
  ADD_TO_CART_BUTTON_TXT,
  MAX_PRODUCTS_PER_PAGE,
  REMOVE_FROM_CART_BUTTON_TXT,
} from '@/helpers/literals';
import { Product } from '@/helpers/types';
import { styles } from './styles';

const Products: React.FC = () => {
  const [nextProductsIndex, setNextProductsIndex] = useState(0);

  const { isLoading, errorMessage, products, areAllProductsLoaded } = useProducts({
    nextProductsIndex,
  });

  const { cartProducts, addCartProduct, removeCartProduct } = useCart();

  const observer = useRef<IntersectionObserver>();
  const lastProductRef = useCallback(
    (product: HTMLDivElement) => {
      if (isLoading || areAllProductsLoaded) {
        return;
      }

      if (observer.current) {
        observer.current.disconnect();
      }

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          setNextProductsIndex((prevIndex) => prevIndex + MAX_PRODUCTS_PER_PAGE);
        }
      });

      if (product) {
        observer.current.observe(product);
      }
    },
    [isLoading, areAllProductsLoaded],
  );

  if (errorMessage) {
    return <div>{errorMessage}</div>;
  }

  const totalItems = products.length;

  const checkCartProduct = (productId: number) =>
    cartProducts.some((cartProduct) => cartProduct.id === productId);

  const handleClickAction = (productId: number) => {
    const selectedProduct = products.find((product) => product.id === productId);
    const isCartProduct = checkCartProduct(productId);

    if (!selectedProduct) return;
    if (isCartProduct) {
      removeCartProduct(selectedProduct);
      return;
    }
    addCartProduct(selectedProduct);
  };

  return (
    <main css={styles.wrapper}>
      {isLoading && (
        <div css={styles.loaderWrapper}>
          <Loader />
        </div>
      )}
      {products.map((product: Product, index: number) => {
        const isCartProduct = checkCartProduct(product.id);
        return (
          <Card
            key={product.id}
            id={product.id}
            ref={index + 1 === totalItems ? lastProductRef : null}
            title={product.title}
            price={product.price}
            description={product.description}
            category={product.category}
            thumbnail={product.thumbnail}
            actionText={isCartProduct ? REMOVE_FROM_CART_BUTTON_TXT : ADD_TO_CART_BUTTON_TXT}
            withPrimaryButton={!isCartProduct}
            onClickAction={handleClickAction}
          />
        );
      })}
    </main>
  );
};

export default Products;
