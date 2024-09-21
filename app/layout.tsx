/* eslint-disable react/jsx-indent-props */
import '@mantine/core/styles.css';
import React from 'react';
import clsx from 'clsx';
import Navbar from '../components/Navbar/Navbar';
import Headbar from '@/components/Headbar/Headbar';

import styles from './layout.module.scss';
import { Poppins } from '@next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
});

export const metadata = {
  title: 'Fc-FantasyClub',
  description: 'Fantasy Club',
};

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body className={(clsx(styles.root), poppins.className)}>
        <div>
          <Headbar />
          {/* <MantineProvider theme={theme}>{children}</MantineProvider> */}
          {children}
          <Navbar />
        </div>
      </body>
    </html>
  );
}
