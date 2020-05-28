import App from 'next/app';
import React from 'react';
import GlobalStyles from '../styles/globalStyles';
import { ThemeProvider } from '../styles/theme-compoenents';
import theme from '../styles/theme';

class ReactApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <GlobalStyles />
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </>
    );
  }
}

export default ReactApp;
