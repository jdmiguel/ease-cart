import { useEffect, useState } from 'react';
import { useTheme } from '@emotion/react';
import useLockedBody from '@/hooks/useLockedBody';
import Header from '@/components/Header';
import Products from '@/components/Products';
import Cart from '@/components/Cart';
import { getStyles } from './styles';

const Main: React.FC = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const { updateLocked } = useLockedBody();

  useEffect(() => {
    if (isCartOpen) {
      updateLocked(true);
      return;
    }

    updateLocked(false);
  }, [isCartOpen, updateLocked]);

  const theme = useTheme();
  const styles = getStyles({ theme });

  return (
    <div css={styles.wrapper}>
      <Header displayCart={() => setIsCartOpen(true)} />
      <Products />
      <Cart open={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </div>
  );
};

export default Main;
