import { LOGO_TXT } from '@/helpers/literals';
import logo from '@/assets/logo.svg';
import { styles } from './styles';

const Logo: React.FC = () => (
  <h1 css={styles.wrapper}>
    <img css={styles.icon} src={logo} alt={LOGO_TXT} />
    <span>{LOGO_TXT}</span>
  </h1>
);

export default Logo;
