import { Inter } from 'next/font/google';

import cn from 'classnames';
import 'bootstrap/dist/css/bootstrap.css';

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
      <body className={inter.className}>
        <main className={cn('bg-light', 'main')}>
          <Header className='header' />
          {children}
        </main>
      </body>
    </html>
  );
}
