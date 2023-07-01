import { useTheme } from '@emotion/react';
import { ErrorBoundary } from 'react-error-boundary';
import Header from '@/components/Header';
import Products from '@/components/Products';
import Cart from '@/components/Cart';
import { GENERIC_ERROR_MESSAGE } from '@/helpers/literals';
import { getStyles } from './styles';

const Root: React.FC = () => {
  const theme = useTheme();
  const styles = getStyles({ theme });

  return (
    <div css={styles.wrapper} role="application">
      <Header />
      <ErrorBoundary FallbackComponent={() => <p css={styles.fallback}>{GENERIC_ERROR_MESSAGE}</p>}>
        <Products />
        <Cart />
      </ErrorBoundary>
    </div>
  );
};

export default Root;
