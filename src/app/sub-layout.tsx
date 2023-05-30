'use client';

import { initFirebase } from '@/firebase/init-firebase';
import { QueryClient, QueryClientProvider } from 'react-query';

initFirebase();

export default function SubLayout({ children }: { children: React.ReactNode }) {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );
}
