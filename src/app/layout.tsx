'use client';
import { Inter } from 'next/font/google';

import cn from 'classnames';
import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { QueryClient, QueryClientProvider } from 'react-query';

import { initFirebase } from '../firebase/init-firebase';
import Header from '@/components/header/header';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });
initFirebase();

export const metadata = {
  title: 'Read Rosetta',
  description: 'Learn hieroglyphics by reading real inscriptions.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const queryClient = new QueryClient();

  return (
    <html lang='en'>
      <head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </head>
      <body className={inter.className}>
        <main className={cn('bg-light', 'main')}>
          <QueryClientProvider client={queryClient}>
            <Header className='header' />
            {children}
          </QueryClientProvider>
        </main>
      </body>
    </html>
  );
}
