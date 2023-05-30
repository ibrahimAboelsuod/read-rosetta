import { Inter } from 'next/font/google';

import cn from 'classnames';
import 'bootstrap/dist/css/bootstrap.css';

import { initFirebase } from '../firebase/init-firebase';

import './globals.css';
import SubLayout from './sub-layout';

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
  return (
    <html lang='en'>
      <head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </head>
      <body className={inter.className}>
        <main className={cn('bg-light', 'main')}>
          <SubLayout>{children}</SubLayout>
        </main>
      </body>
    </html>
  );
}
