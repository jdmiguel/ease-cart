import { forwardRef } from 'react';
import { useTheme } from '@emotion/react';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import { getStyles } from './styles';

type Props = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  thumbnail: string;
  withPrimaryButton: boolean;
  actionText: string;
  onClickAction: (id: number) => void;
};

const Card = forwardRef<HTMLDivElement, Props>(
  (
    {
      id,
      title,
      price,
      description,
      category,
      thumbnail: thumbnailUrl,
      withPrimaryButton = true,
      actionText,
      onClickAction,
    },
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
