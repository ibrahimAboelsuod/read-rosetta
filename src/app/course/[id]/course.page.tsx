/* eslint-disable @next/next/no-img-element */
'use client';

import cn from 'classnames';

import { Course } from '@/models';

import styles from './courses.module.css';

export default function CoursePage({ course }: { course: Course }) {
  return (
    <div className='row'>
      <div className='col-md-2'>
        <img
          src={'data:image/gif;base64,' + course.coverImage}
          alt='Course Cover'
          className='img-fluid rounded-start'
        />
      </div>
      <div className='col-md-8'>
        <h1 className='mb-5'>{course.title}</h1>

        <div dangerouslySetInnerHTML={{ __html: course.content }}></div>
      </div>
    </div>
  );
}
