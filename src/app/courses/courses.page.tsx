/* eslint-disable @next/next/no-img-element */
'use client';

import cn from 'classnames';

import { Course } from '@/models';

import styles from './courses.module.css';

export default function CoursesPage({ courses }: { courses: Course[] }) {
  return (
    <div>
      <h2>Courses List</h2>
      {courses.length === 0 ? (
        <p>No courses available.</p>
      ) : (
        <div className='row'>
          {courses.map((course) => (
            <div className='col-md-6' key={course.id}>
              <a
                className={cn('card mb-3', styles['course-card'])}
                href={`/course/${course.id}?title=${course.title}`}
              >
                <div className='row g-0'>
                  <div className='col-md-4'>
                    {course.coverImage && (
                      <img
                        src={'data:image/gif;base64,' + course.coverImage}
                        alt='Course Cover'
                        className='img-fluid rounded-start'
                      />
                    )}
                  </div>
                  <div className='col-md-8'>
                    <div className='card-body'>
                      <h3 className='card-title'>{course.title}</h3>
                      <p className='card-text overflow-ellipsis'>
                        {course.description}
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
