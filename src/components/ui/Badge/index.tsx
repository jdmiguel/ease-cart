import { styles } from './styles';

type Props = {
  children: string;
};

const Badge: React.FC<Props> = ({ children }) => <span css={styles.wrapper}>{children}</span>;

export default Badge;
