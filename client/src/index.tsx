import React from 'react';
import { createRoot } from 'react-dom/client';

import { css, Global, ThemeProvider } from '@emotion/react';
import { theme, normalize } from './core/ui-library';

import App from './App';

const container = document.getElementById('root');
const root = createRoot(container!); // createRoot(container!) if you use TypeScript

root.render(
  <ThemeProvider theme={theme}>
    <Global
      styles={css`
        ${normalize()}
      `}
    />
    <App />
  </ThemeProvider>
);
