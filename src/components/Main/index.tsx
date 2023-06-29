import { useTheme } from '@emotion/react';
import Header from '@/components/Header';
import Products from '@/components/Products';
import Cart from '@/components/Cart';
import { getStyles } from './styles';

const Main: React.FC = () => {
  const theme = useTheme();
  const styles = getStyles({ theme });

  return (
    <div css={styles.wrapper}>
      <Header />
      <Products />
      <Cart />
    </div>
  );
};

export default Main;
