import { render, screen } from '@testing-library/react';
import Rating from '.';

describe('Rating', () => {
  it('should display the 5 stars rating whem value is bigger than 4.5', () => {
    render(<Rating value={4.6} />);

    const [firstStar, secondStar, thirdStar, fourthStar, fifthStar] =
      screen.getAllByAltText('Item rating star');

    expect(firstStar).toHaveAttribute('src', '/src/assets/star-filled.svg');
    expect(secondStar).toHaveAttribute('src', '/src/assets/star-filled.svg');
    expect(thirdStar).toHaveAttribute('src', '/src/assets/star-filled.svg');
    expect(fourthStar).toHaveAttribute('src', '/src/assets/star-filled.svg');
    expect(fifthStar).toHaveAttribute('src', '/src/assets/star-filled.svg');
  });

  it('should display the 4 stars rating whem value is bigger than 3.5 and lower than 4.5', () => {
    render(<Rating value={3.85} />);

    const [firstStar, secondStar, thirdStar, fourthStar, fifthStar] =
      screen.getAllByAltText('Item rating star');

    expect(firstStar).toHaveAttribute('src', '/src/assets/star-filled.svg');
    expect(secondStar).toHaveAttribute('src', '/src/assets/star-filled.svg');
    expect(thirdStar).toHaveAttribute('src', '/src/assets/star-filled.svg');
    expect(fourthStar).toHaveAttribute('src', '/src/assets/star-filled.svg');
    expect(fifthStar).toHaveAttribute('src', '/src/assets/star-outline.svg');
  });

  it('should display the 3 stars rating whem value is bigger than 2.5 and lower than 3.5', () => {
    render(<Rating value={3.12} />);

    const [firstStar, secondStar, thirdStar, fourthStar, fifthStar] =
      screen.getAllByAltText('Item rating star');

    expect(firstStar).toHaveAttribute('src', '/src/assets/star-filled.svg');
    expect(secondStar).toHaveAttribute('src', '/src/assets/star-filled.svg');
    expect(thirdStar).toHaveAttribute('src', '/src/assets/star-filled.svg');
    expect(fourthStar).toHaveAttribute('src', '/src/assets/star-outline.svg');
    expect(fifthStar).toHaveAttribute('src', '/src/assets/star-outline.svg');
  });

  it('should display the 2 stars rating whem value is bigger than 1.5 and lower than 2.5', () => {
    render(<Rating value={2.25} />);

    const [firstStar, secondStar, thirdStar, fourthStar, fifthStar] =
      screen.getAllByAltText('Item rating star');

    expect(firstStar).toHaveAttribute('src', '/src/assets/star-filled.svg');
    expect(secondStar).toHaveAttribute('src', '/src/assets/star-filled.svg');
    expect(thirdStar).toHaveAttribute('src', '/src/assets/star-outline.svg');
    expect(fourthStar).toHaveAttribute('src', '/src/assets/star-outline.svg');
    expect(fifthStar).toHaveAttribute('src', '/src/assets/star-outline.svg');
  });

  it('should display the 1 star rating whem value is bigger than 0.5 and lower than 1.5', () => {
    render(<Rating value={1} />);

    const [firstStar, secondStar, thirdStar, fourthStar, fifthStar] =
      screen.getAllByAltText('Item rating star');

    expect(firstStar).toHaveAttribute('src', '/src/assets/star-filled.svg');
    expect(secondStar).toHaveAttribute('src', '/src/assets/star-outline.svg');
    expect(thirdStar).toHaveAttribute('src', '/src/assets/star-outline.svg');
    expect(fourthStar).toHaveAttribute('src', '/src/assets/star-outline.svg');
    expect(fifthStar).toHaveAttribute('src', '/src/assets/star-outline.svg');
  });

  it('should display the 0 star rating whem value is lower than 0.5', () => {
    render(<Rating value={0.45} />);

    const [firstStar, secondStar, thirdStar, fourthStar, fifthStar] =
      screen.getAllByAltText('Item rating star');

    expect(firstStar).toHaveAttribute('src', '/src/assets/star-outline.svg');
    expect(secondStar).toHaveAttribute('src', '/src/assets/star-outline.svg');
    expect(thirdStar).toHaveAttribute('src', '/src/assets/star-outline.svg');
    expect(fourthStar).toHaveAttribute('src', '/src/assets/star-outline.svg');
    expect(fifthStar).toHaveAttribute('src', '/src/assets/star-outline.svg');
  });
});
