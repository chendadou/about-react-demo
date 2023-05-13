import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

import '@src/index.css';

const container = document.getElementById('root');

if (container) {
  createRoot(container).render(<App />);
}
