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

  const { checkItemInCart, addCartItem, removeCartItem } = useCart();

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

  const handleClickAction = (productId: number) => {
    const selectedProduct = products.find((product) => product.id === productId);
    if (!selectedProduct) return;

    const isItemInCart = checkItemInCart(productId);

    if (!isItemInCart) {
      addCartItem({
        id: selectedProduct.id,
        name: selectedProduct.title,
        price: selectedProduct.price,
        thumbnail: selectedProduct.thumbnail,
        amount: 1,
      });
      return;
    }
    removeCartItem(productId);
  };

  return (
    <main css={styles.wrapper}>
      {isLoading && (
        <div css={styles.loaderWrapper}>
          <Loader />
        </div>
      )}
      {products.map((product: Product, index: number) => {
        const isItemInCart = checkItemInCart(product.id);
        return (
          <Card
            key={product.id}
            id={product.id}
            ref={index + 1 === totalItems ? lastProductRef : null}
            title={product.title}
            price={product.price}
            description={product.description}
            category={product.category}
            rating={product.rating}
            thumbnail={product.thumbnail}
            actionText={isItemInCart ? REMOVE_FROM_CART_BUTTON_TXT : ADD_TO_CART_BUTTON_TXT}
            withPrimaryButton={!isItemInCart}
            onClickAction={handleClickAction}
          />
        );
      })}
    </main>
  );
};

export default Products;
