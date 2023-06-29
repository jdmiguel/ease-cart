import { useTheme } from '@emotion/react';
import ItemCounter from '@/components/Cart/ItemCounter';
import { getStyles } from './styles';

type Props = {
  id: number;
  name: string;
  price: number;
  amount: number;
  imageUrl: string;
};

const ShoppingCartItem: React.FC<Props> = ({ id, name, price, amount, imageUrl }) => {
  const theme = useTheme();
  const styles = getStyles({ theme, imageUrl });

  return (
    <li css={styles.wrapper}>
      <div css={styles.image} />
      <div css={styles.content}>
        <div css={styles.details}>
          <p css={styles.name} title={name}>
            {name}
          </p>
          <p css={styles.price}>{`£${price}`}</p>
        </div>
        <ItemCounter itemId={id} initialValue={amount} />
      </div>
    </li>
  );
};

export default ShoppingCartItem;
