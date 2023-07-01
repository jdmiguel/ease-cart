import { useTheme } from '@emotion/react';
import { getStyles } from './styles';

const Loader: React.FC = () => {
  const theme = useTheme();
  const styles = getStyles({ theme });

  return (
    <div css={styles.wrapper} role="progressbar">
      <span css={styles.line} />
    </div>
  );
};

export default Loader;
