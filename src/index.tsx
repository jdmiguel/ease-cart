import ReactDOM from 'react-dom/client';
import { ThemeModeContextProvider } from '@/contexts/themeModeContext';
import App from '@/components/App';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ThemeModeContextProvider>
    <App />
  </ThemeModeContextProvider>,
);
