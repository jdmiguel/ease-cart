import { ThemeProvider } from '@emotion/react';
import { render, screen, waitFor, waitForElementToBeRemoved } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@/helpers/intersectionObserverMock';
import { ThemeModeContextProvider } from '@/contexts/themeModeContext';
import { CartContextProvider } from '@/contexts/cartContext';
import { lightTheme } from '@/helpers/theme';
import Root from '.';

describe('Root', () => {
  describe('when loading initially', () => {
    beforeEach(async () => {
      render(
        <ThemeModeContextProvider>
          <CartContextProvider>
            <ThemeProvider theme={lightTheme}>
              <Root />
            </ThemeProvider>
          </CartContextProvider>
        </ThemeModeContextProvider>,
      );

      const loader = await screen.findByRole('progressbar');
      await waitForElementToBeRemoved(loader);
    });

    it('should display the light mode', () => {
      expect(screen.getByRole('button', { name: /dark mode/i })).toBeInTheDocument();
      expect(screen.queryByRole('button', { name: /light mode/i })).not.toBeInTheDocument();
    });

    it('should display the shopping cart button disabled', async () => {
      expect(screen.getByRole('button', { name: /shopping cart/i })).toBeDisabled();
    });

    it('should not display the shopping cart', async () => {
      expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    });

    it('should display the loaded products', async () => {
      waitFor(() => {
        expect(screen.getByText('iPhone 9')).toBeInTheDocument();
        expect(screen.getByText('iPhone X')).toBeInTheDocument();
        expect(screen.getByText('Samsung Universe 9')).toBeInTheDocument();
        expect(screen.getByText('OPPOF19')).toBeInTheDocument();
        expect(screen.getByText('Huawei P30')).toBeInTheDocument();
        expect(screen.getByText('MacBook Pro')).toBeInTheDocument();
        expect(screen.getByText('Samsung Galaxy Book')).toBeInTheDocument();
        expect(screen.getByText('Microsoft Surface Laptop 4')).toBeInTheDocument();
        expect(screen.getByText('Infinix INBOOK')).toBeInTheDocument();
        expect(screen.getByText('HP Pavilion 15-DK1056WM')).toBeInTheDocument();
        expect(screen.getByText('perfume Oil')).toBeInTheDocument();
        expect(screen.getByText('Brown Perfume')).toBeInTheDocument();
      });
    });

    it('should not display any product as added in the shopping cart', () => {
      expect(screen.queryByRole('button', { name: /remove from cart/i })).not.toBeInTheDocument();
    });

    it('should switch to the dark mode', async () => {
      await userEvent.click(screen.getByRole('button', { name: /dark mode/i }));

      expect(await screen.findByRole('button', { name: /light mode/i })).toBeInTheDocument();
      expect(screen.queryByRole('button', { name: /dark mode/i })).not.toBeInTheDocument();
    });

    describe('when adding products to the shopping cart', () => {
      beforeEach(async () => {
        userEvent.click(screen.getAllByRole('button', { name: /add to cart/i })[0]);
        await userEvent.click(screen.getAllByRole('button', { name: /add to cart/i })[1]);
      });

      it('should enable the shopping cart button', async () => {
        expect(await screen.findByRole('button', { name: /shopping cart/i })).toBeEnabled();
      });

      it('should display the remove buttons', async () => {
        expect(await screen.findAllByRole('button', { name: /remove from cart/i })).toHaveLength(2);
      });

      describe('and accessing the shopping cart', () => {
        const getCartItems = () => screen.getAllByRole('listitem');
        const getTotalPrice = () => screen.getByTestId('total-price');

        beforeEach(async () => {
          await userEvent.click(screen.getByRole('button', { name: /shopping cart/i }));
          await screen.findByRole('dialog');
        });

        it('should display the correct items', () => {
          const cartItems = getCartItems();
          expect(cartItems).toHaveLength(2);
          expect(cartItems[0]).toHaveTextContent('iPhone 9£549');
          expect(cartItems[1]).toHaveTextContent('iPhone X£899');
        });

        it('should display the correct price', () => {
          expect(getTotalPrice()).toHaveTextContent('£1448');
        });

        it('should update the total price after increasing the items amount', async () => {
          const [firstCartItem] = getCartItems();

          const plusButton = firstCartItem.querySelectorAll('button')[1];
          await userEvent.click(plusButton);

          expect(getTotalPrice()).toHaveTextContent('£1997');
        });

        it('should update the correct content of the shopping cart after decreasing the items amount to zero', async () => {
          const [firstCartItem, secondCartItem] = getCartItems();

          const firstMinusButton = firstCartItem.querySelectorAll('button')[0];
          const secondMinusButton = secondCartItem.querySelectorAll('button')[0];

          userEvent.click(firstMinusButton);
          await userEvent.click(secondMinusButton);

          expect(
            screen.getByText('Please, add any product to the shopping cart'),
          ).toBeInTheDocument();
          expect(screen.queryByRole('list')).not.toBeInTheDocument();
          expect(screen.getByRole('button', { name: /buy now/i })).toBeDisabled();
          expect(getTotalPrice()).toHaveTextContent('£0');
        });

        it('should display the correct content of the shopping cart after clicking the buy button', async () => {
          await userEvent.click(screen.getByRole('button', { name: /buy now/i }));

          expect(screen.queryByRole('list')).not.toBeInTheDocument();
          expect(screen.getByText('Your purchase has been completed!')).toBeInTheDocument();
          expect(screen.queryByRole('button', { name: /buy now/i })).not.toBeInTheDocument();
        });

        it('should hide the shopping cart after clicking the back button', async () => {
          await userEvent.click(screen.getByRole('button', { name: /back to products/i }));

          expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
        });
      });
    });
  });
});
