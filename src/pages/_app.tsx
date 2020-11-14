import { AppProps } from 'next/app';
import React from 'react';

import ThemeProvider from '@/src/theme/ThemeProvider';

const App = (props: AppProps) => {
  const { Component, pageProps } = props;

  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default App;
