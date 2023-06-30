import { render, screen } from '@testing-library/react';
import Badge from '.';

describe('Badge', () => {
  const props = {
    children: 'Fake badge text',
  };

  it('should display the passed children', () => {
    render(<Badge {...props} />);

    expect(screen.getByRole('status')).toHaveTextContent('Fake badge text');
  });
});
