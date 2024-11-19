import { ChakraProvider, ColorModeScript, Text, color } from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react';
import React, { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App';

import Fonts from './fonts/Fonts';
import { ContextApp } from './context/context-provider';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

const theme = extendTheme({
  fonts: {
    heading: `'Vazir', "sans-serif"`,
    body: `'Vazir', "sans-serif"`,
  },
});

root.render(
  <ChakraProvider theme={theme}>
    <StrictMode>
      <Fonts />
      {/* <Dashboard /> */}
      <App />
    </StrictMode>
  </ChakraProvider>
);
