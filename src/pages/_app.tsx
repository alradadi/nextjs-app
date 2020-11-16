import { AppProps } from 'next/app';
import React from 'react';

import StoreProvider from '@/src/redux/providers/StoreProvider';
import ThemeProvider from '@/src/theme/ThemeProvider';

const App = (props: AppProps) => {
  const { Component, pageProps } = props;

  return (
    <StoreProvider>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </StoreProvider>
  );
};

export default App;
