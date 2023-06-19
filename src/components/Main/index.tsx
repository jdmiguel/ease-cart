import Header from '@/components/Header';
import { useTheme } from '@emotion/react';
import { getStyles } from './styles';

const Main: React.FC = () => {
  const theme = useTheme();
  const styles = getStyles({ theme });

  return (
    <div css={styles.wrapper}>
      <Header
        isShoppingCartDisabled={false}
        onGoShoppingCart={() => {
          console.log('');
        }}
      />
    </div>
  );
};

export default Main;
