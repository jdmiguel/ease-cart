import { useState, useCallback, useRef } from 'react';
import { ADD_TO_CART_BUTTON_TXT, MAX_PRODUCTS_PER_PAGE } from '@/helpers/literals';
import useProducts from '@/hooks/useProducts';
import Card from '@/components/ui/Card';
import Loader from '@/components/ui/Loader';
import { Product } from '@/helpers/types';
import { styles } from './styles';

const Products: React.FC = () => {
  const [nextProductsIndex, setNextProductsIndex] = useState(0);

  const { isLoading, errorMessage, products, areAllProductsLoaded } = useProducts({
    nextProductsIndex,
  });

  const observer = useRef<IntersectionObserver>();
  const lastItemRef = useCallback(
    (item: HTMLDivElement) => {
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

      if (item) {
        observer.current.observe(item);
      }
    },
    [isLoading, areAllProductsLoaded],
  );

  if (errorMessage) {
    return <div>{errorMessage}</div>;
  }

  const totalItems = products.length;

  return (
    <main css={styles.wrapper}>
      {isLoading && (
        <div css={styles.loaderWrapper}>
          <Loader />
        </div>
      )}
      {products.map((product: Product, index: number) => (
        <Card
          key={product.id}
          ref={index + 1 === totalItems ? lastItemRef : null}
          title={product.title}
          price={product.price}
          description={product.description}
          category={product.category}
          thumbnail={product.thumbnail}
          actionText={ADD_TO_CART_BUTTON_TXT}
          onAddToCart={() => {}}
        />
      ))}
    </main>
  );
};

export default Products;
