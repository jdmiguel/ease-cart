import { useState, useEffect } from 'react';
import {
  API_BASE_URL,
  PRODUCTS_ERROR_MESSAGE,
  MAX_PRODUCTS_PER_PAGE,
  TOTAL_PRODUCTS,
} from '@/helpers/literals';
import { FetchedProduct, Product } from '@/helpers/types';

const getRefinedProducts = (products: FetchedProduct[]): Product[] =>
  products.map(({ id, title, price, description, rating, category, thumbnail }) => ({
    id,
    title,
    price,
    description,
    rating,
    category,
    thumbnail,
  }));

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
        return Promise.reject(PRODUCTS_ERROR_MESSAGE);
      })
      .then(
        ({ products: fetchedProducts, limit }: { products: FetchedProduct[]; limit: number }) => {
          const refinedProducts = getRefinedProducts(fetchedProducts);
          setProducts((prevProducts: Product[]) => [...prevProducts, ...refinedProducts]);
          setAreAllItemsLoaded(nextProductsIndex + limit === TOTAL_PRODUCTS);
        },
      )
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
