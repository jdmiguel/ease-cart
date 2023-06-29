import { forwardRef } from 'react';
import { useTheme } from '@emotion/react';
import Badge from '@/components/ui/Badge';
import Rating from '@/components/ui/Rating';
import Button from '@/components/ui/Button';
import { Product } from '@/helpers/types';
import { getStyles } from './styles';

type Props = {
  data: Product;
  withPrimaryButton: boolean;
  actionText: string;
  onClickAction: (id: number) => void;
};

const Card = forwardRef<HTMLDivElement, Props>(
  ({ data, withPrimaryButton = true, actionText, onClickAction }, ref) => {
    const { id, title, price, description, category, rating, thumbnail: thumbnailUrl } = data;

    const theme = useTheme();
    const styles = getStyles({ theme, thumbnailUrl });

    return (
      <div css={styles.wrapper} ref={ref}>
        <div css={styles.thumbnail} />
        <div css={styles.content}>
          <header>
            <p css={styles.title} title={title}>
              {title}
            </p>
            <div css={styles.details}>
              <span css={styles.price}>{`£${price}`}</span>
              <Badge>{category}</Badge>
              <Rating value={rating} />
            </div>
          </header>
          <p css={styles.description}>{description}</p>
          <footer>
            <Button
              variant={withPrimaryButton ? 'primary' : 'secondary'}
              ariaLabel={actionText}
              fullWidth
              onClick={() => onClickAction(id)}
            >
              {actionText}
            </Button>
          </footer>
        </div>
      </div>
    );
  },
);

export default Card;
