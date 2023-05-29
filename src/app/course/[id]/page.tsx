import { Metadata, ResolvingMetadata } from 'next';

import { doc, getDoc } from 'firebase/firestore';

import { firestoreDB, initFirebase } from '@/firebase/init-firebase';
import { Course } from '@/models';

import CoursePage from './course.page';

initFirebase();

export const metadata: Metadata = {
  title: 'Read Rosetta | Course',
};

interface CoursePageProps {
  params: { id: string };
  searchParams: {
    title: string;
  };
}

export default async function CoursesPage({ params }: CoursePageProps) {
  let course: Course | undefined;

  try {
    course = (
      await getDoc(doc(firestoreDB, 'COURSES', params.id))
    ).data() as Course;
  } catch (error) {
    course = undefined;
    console.log(error);
  }
  return (
    <>{course ? <CoursePage course={course} /> : <h1>Course not found</h1>}</>
  );
}
