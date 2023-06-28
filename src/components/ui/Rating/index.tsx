import { useTheme } from '@emotion/react';
import outlinedStar from '@/assets/star-outline.svg';
import filledStar from '@/assets/star-filled.svg';
import { RATING_STAR_ALT_TXT } from '@/helpers/literals';
import { getStyles } from './styles';

type RatingStar = {
  id: number;
  type: string;
};

type RatingProps = {
  value: number;
};

export const DEFAULT_RATING_STAR_LIST = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }];

const Rating: React.FC<RatingProps> = ({ value }) => {
  const theme = useTheme();
  const styles = getStyles({ theme });

  const roundedValue = Math.round(value);
  const ratingStartList: RatingStar[] = DEFAULT_RATING_STAR_LIST.map((star) => {
    const starType = roundedValue >= star.id ? filledStar : outlinedStar;
    return { ...star, type: starType };
  });

  return (
    <div css={styles.wrapper}>
      <div css={styles.stars}>
        {ratingStartList.map((star) => (
          <img key={star.id} css={styles.star} src={star.type} alt={RATING_STAR_ALT_TXT} />
        ))}
      </div>
    </div>
  );
};

export default Rating;
