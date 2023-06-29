import { useState } from 'react';
import { useCart } from '@/contexts/cartContext';
import Button from '@/components/ui/Button';
import { styles } from './styles';

export type Props = {
  itemId: number;
  initialValue: number;
};

const ProductCounter: React.FC<Props> = ({ itemId, initialValue }) => {
  const [counter, setCounter] = useState(initialValue);

  const { increaseCartItemAmount, decreaseCartItemAmount } = useCart();

  const onClickAddItem = () => {
    setCounter((prevCounter) => prevCounter + 1);
    increaseCartItemAmount(itemId);
  };

  const onClickRemoveItem = () => {
    setCounter((prevCounter) => prevCounter - 1);
    decreaseCartItemAmount(itemId);
  };

  return (
    <div css={styles.wrapper}>
      <Button disabled={counter === 0} ariaLabel="remove item" rounded onClick={onClickRemoveItem}>
        -
      </Button>
      <span>{counter}</span>
      <Button ariaLabel="add item" rounded onClick={onClickAddItem}>
        +
      </Button>
    </div>
  );
};

export default ProductCounter;
