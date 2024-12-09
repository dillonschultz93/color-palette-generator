import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './reset.css';
import '@quieto/tokens/dist/css/_core.css';
import './index.css';
import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
