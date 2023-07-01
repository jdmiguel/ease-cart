import { useState } from 'react';
import { useCart } from '@/contexts/cartContext';
import Button from '@/components/ui/Button';
import { ADD_ITEM_ARIA_LABEL, REMOVE_ITEM_ARIA_LABEL } from '@/helpers/literals';
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
      <Button ariaLabel={REMOVE_ITEM_ARIA_LABEL} rounded onClick={onClickRemoveItem}>
        -
      </Button>
      <span>{counter}</span>
      <Button ariaLabel={ADD_ITEM_ARIA_LABEL} rounded onClick={onClickAddItem}>
        +
      </Button>
    </div>
  );
};

export default ProductCounter;
