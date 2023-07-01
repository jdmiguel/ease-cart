import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithTheme } from '@/helpers/theme';
import Button from '.';

describe('Button', () => {
  const props = {
    children: 'Button txt mocked',
    ariaLabel: 'Aria label mocked',
    onClick: vi.fn(),
  };

  describe('with required props', () => {
    beforeEach(() => {
      render(renderWithTheme(<Button {...props} />));
    });

    it('should display the passed children', () => {
      expect(screen.getByRole('button')).toHaveTextContent('Button txt mocked');
    });

    it('should have the passed aria label', () => {
      expect(screen.getByRole('button')).toHaveAttribute('aria-label', 'Aria label mocked');
    });

    it('should display the primary button by default', () => {
      expect(screen.getByRole('button')).toHaveStyle({
        color: '#1c5349',
        backgroundColor: '#70d3d0',
      });
    });

    it('should call onClick callback when clicked', async () => {
      await userEvent.click(screen.getByRole('button'));

      expect(props.onClick).toHaveBeenCalledTimes(1);
    });
  });

  it('should display the secondary button when the variant is secondary', () => {
    render(renderWithTheme(<Button {...props} variant="secondary" />));

    expect(screen.getByRole('button')).toHaveStyle({
      color: '#f8fcfc',
      backgroundColor: '#dba250',
    });
  });

  it('should display the rounded button when is rounded', () => {
    render(renderWithTheme(<Button {...props} rounded />));

    expect(screen.getByRole('button')).toHaveStyle('border-radius: 50%');
  });

  it('should display the full width button when is fullWidth', () => {
    render(renderWithTheme(<Button {...props} fullWidth />));

    expect(screen.getByRole('button')).toHaveStyle('width: 100%');
  });

  it('should display the disabled button styles when is disabled', () => {
    render(renderWithTheme(<Button {...props} disabled />));

    expect(screen.getByRole('button')).toBeDisabled();
    expect(screen.getByRole('button')).toHaveStyle('pointer-events: none');
  });
});
