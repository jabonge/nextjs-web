import * as React from 'react';

import Head from 'next/head';
import Header from './Header';
import styled from 'styled-components';

type Props = {
  title?: string;
};

const Main = styled.main`
  width: 100%;
`;

const Layout: React.FunctionComponent<Props> = ({
  children,
  title = '위메프오'
}) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Header />
    <Main>{children}</Main>
  </div>
);

export default Layout;
