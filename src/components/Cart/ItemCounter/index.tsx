import { useState } from 'react';
import Button from '@/components/ui/Button';
import { styles } from './styles';

export type Props = {
  itemId: number;
  onIncreaseItemsAmount: (id: number) => void;
  onDecreaseItemsAmount: (id: number) => void;
};

const ProductCounter: React.FC<Props> = ({
  itemId,
  onIncreaseItemsAmount,
  onDecreaseItemsAmount,
}) => {
  const [counter, setCounter] = useState(1);

  const onClickAddItem = () => {
    setCounter((prevCounter) => prevCounter + 1);
    onIncreaseItemsAmount(itemId);
  };

  const onClickRemoveItem = () => {
    setCounter((prevCounter) => prevCounter - 1);
    onDecreaseItemsAmount(itemId);
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
