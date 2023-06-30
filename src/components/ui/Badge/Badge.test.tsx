import { render, screen } from '@testing-library/react';
import Badge from '.';

describe('Badge', () => {
  const props = {
    children: 'Badge text mocked',
  };

  it('should display the passed children', () => {
    render(<Badge {...props} />);

    expect(screen.getByRole('status')).toHaveTextContent('Badge text mocked');
  });
});
