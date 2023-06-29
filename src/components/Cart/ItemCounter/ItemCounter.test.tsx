import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithTheme } from '@/helpers/theme';
import ItemCounter from '.';

describe('ItemCounter', () => {
  const props = {
    itemId: 1,
    initialValue: 2,
  };

  it('should display the passed initial value', async () => {
    render(renderWithTheme(<ItemCounter {...props} />));

    expect(await screen.findByText('2')).toBeInTheDocument();
  });

  it('should update the counter when clicking the minus button', async () => {
    render(renderWithTheme(<ItemCounter {...props} />));

    act(() => {
      userEvent.click(screen.getAllByRole('button')[0]);
    });

    expect(await screen.findByText('1')).toBeInTheDocument();
  });

  it('should update the counter when clicking the plus button', async () => {
    render(renderWithTheme(<ItemCounter {...props} />));

    act(() => {
      userEvent.click(screen.getAllByRole('button')[1]);
    });

    expect(await screen.findByText('3')).toBeInTheDocument();
  });
});
