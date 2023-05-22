import { Metadata } from 'next';

import SignupPage from './signup.page';

export const metadata: Metadata = {
  title: 'Read Rosetta | Signup',
};

export default function Signup() {
  return <SignupPage />;
}
