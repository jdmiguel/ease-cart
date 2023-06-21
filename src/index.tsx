import ReactDOM from 'react-dom/client';
import { ThemeModeContextProvider } from '@/contexts/themeModeContext';
import { CartContextProvider } from '@/contexts/cartContext';
import App from '@/components/App';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ThemeModeContextProvider>
    <CartContextProvider>
      <App />
    </CartContextProvider>
  </ThemeModeContextProvider>,
);
