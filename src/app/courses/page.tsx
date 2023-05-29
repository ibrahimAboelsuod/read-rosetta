import { Metadata } from 'next';

import AddCoursesPage from './courses.page';

export const metadata: Metadata = {
  title: 'Read Rosetta | Courses',
};

export default function CoursesPage() {
  return <AddCoursesPage />;
}
