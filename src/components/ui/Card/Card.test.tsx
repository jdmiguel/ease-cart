import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithTheme } from '@/helpers/theme';
import Card from '.';

describe('Card', () => {
  const props = {
    data: {
      id: 1,
      title: 'Fake product title',
      price: 542,
      description: 'Fake product description',
      rating: 3.8,
      category: 'laptops',
      thumbnail: 'https://i.dummyjson.com/data/products/47321/thumbnail.png',
    },
    actionText: 'Fake button txt',
    onClickAction: vi.fn(),
  };

  describe('with required props', () => {
    beforeEach(() => {
      render(renderWithTheme(<Card {...props} />));
    });

    it('should display the data details passed', () => {
      expect(screen.getByRole('presentation')).toHaveTextContent('Fake product title');
      expect(screen.getByRole('presentation')).toHaveTextContent('£542');
      expect(screen.getByRole('presentation')).toHaveTextContent('laptops');
      expect(screen.getByRole('presentation')).toHaveTextContent('Fake product description');
    });

    it('should display the primary button by default', () => {
      expect(screen.getByRole('button')).toHaveStyle({
        color: '#1c5349',
        backgroundColor: '#70d3d0',
      });
    });

    it('should display the action text passed', () => {
      expect(screen.getByRole('button')).toHaveTextContent('Fake button txt');
    });

    it('should call onClickAction callback when the action button is clicked', async () => {
      await userEvent.click(screen.getByRole('button'));

      expect(props.onClickAction).toHaveBeenCalledTimes(1);
    });
  });

  it('should display the secondary button when withPrimaryButton is false', () => {
    render(renderWithTheme(<Card {...props} withPrimaryButton={false} />));

    expect(screen.getByRole('button')).toHaveStyle({
      color: '#f8fcfc',
      backgroundColor: '#dba250',
    });
  });
});
