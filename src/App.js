import { BrowserRouter } from 'react-router-dom';
// routes
import Router from './routes';
// theme
import ThemeProvider from './theme';

export default function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <Router />
      </ThemeProvider>
    </BrowserRouter>
  );
}
