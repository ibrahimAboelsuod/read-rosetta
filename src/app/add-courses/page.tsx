import { Metadata } from 'next';

import AddCoursesPage from './add-courses.page';

export const metadata: Metadata = {
  title: 'Read Rosetta | Add Courses',
};

export default function Login() {
  return <AddCoursesPage />;
}
