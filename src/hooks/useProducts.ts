import { useState, useEffect } from 'react';
import {
  API_BASE_URL,
  ERROR_PRODUCTS_MESSAGE,
  MAX_PRODUCTS_PER_PAGE,
  TOTAL_PRODUCTS,
} from '@/helpers/literals';
import { Product } from '@/helpers/types';

const useProducts = ({ nextProductsIndex }: { nextProductsIndex: number }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');
  const [areAllProductsLoaded, setAreAllItemsLoaded] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    setIsLoading(true);

    fetch(`${API_BASE_URL}?skip=${nextProductsIndex}&limit=${MAX_PRODUCTS_PER_PAGE}`)
      .then((response) => {
        if (response.status === 200) return response.json();
        return Promise.reject(ERROR_PRODUCTS_MESSAGE);
      })
      .then(({ products: fetchedProducts, limit }: { products: Product[]; limit: number }) => {
        setProducts((prevProducts: Product[]) => [...prevProducts, ...fetchedProducts]);
        setAreAllItemsLoaded(nextProductsIndex + limit === TOTAL_PRODUCTS);
      })
      .catch((error) => {
        setErrorMessage(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [nextProductsIndex]);

  return {
    isLoading,
    products,
    errorMessage,
    areAllProductsLoaded,
  };
};

export default useProducts;
