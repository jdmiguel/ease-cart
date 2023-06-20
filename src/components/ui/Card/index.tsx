import { useTheme } from '@emotion/react';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import { getStyles } from './styles';
import { forwardRef } from 'react';

type Props = {
  title: string;
  price: number;
  description: string;
  category: string;
  thumbnail: string;
  actionText: string;
  onAddToCart: () => void;
};

const Card = forwardRef<HTMLDivElement, Props>(
  (
    { title, price, description, category, thumbnail: thumbnailUrl, actionText, onAddToCart },
    ref,
  ) => {
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
              <span css={styles.price}>{`€${price}`}</span>
              <Badge>{category}</Badge>
            </div>
          </header>
          <p css={styles.description}>{description}</p>
          <footer>
            <Button ariaLabel={actionText} fullWidth onClick={onAddToCart}>
              {actionText}
            </Button>
          </footer>
        </div>
      </div>
    );
  },
);

export default Card;