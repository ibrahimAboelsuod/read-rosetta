'use client';
import { Inter } from 'next/font/google';

import cn from 'classnames';
import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import Header from '@/components/header/header';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Read Rosetta',
  description: 'Learn hieroglyphics by reading real inscriptions.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </head>
      <body className={inter.className}>
        <main className={cn('bg-light', 'main')}>
          <Header className='header' />
          {children}
        </main>
      </body>
    </html>
  );
}
