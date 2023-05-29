import { Metadata } from 'next';

import { collection, getDocs, orderBy, query } from 'firebase/firestore';

import { firestoreDB, initFirebase } from '@/firebase/init-firebase';
import { Course } from '@/models';

import AddCoursesPage from './courses.page';

export const metadata: Metadata = {
  title: 'Read Rosetta | Courses',
};

initFirebase();

export default async function CoursesPage() {
  let courses: Course[] = [];

  try {
    courses = (
      await getDocs(
        query(collection(firestoreDB, 'COURSES'), orderBy('addedOn', 'asc'))
      )
    ).docs.map((doc) => {
      return {
        ...doc.data(),
        id: doc.id,
      } as Course;
    });
  } catch (error) {
    courses = [];
    console.log(error);
  }

  return <AddCoursesPage courses={courses} />;
}
