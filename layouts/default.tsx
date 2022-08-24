import { FC, Fragment, PropsWithChildren } from 'react';
import Head from 'next/head';
import { Header } from '../ui/header/header';

export interface DefaultProps {}

export const Default: FC<PropsWithChildren<DefaultProps>> = ({ children }) => {
  return (
    <Fragment>
      <Head>
        <title>Hypeer</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header />
      {children}
    </Fragment>
  );
};
