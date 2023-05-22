import { Metadata } from 'next';
import LoginPage from './login.page';

export const metadata: Metadata = {
  title: 'Read Rosetta | Login',
};

export default function Login() {
  return <LoginPage />;
}
