/* eslint-disable @next/next/no-img-element */
'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import styles from './add-courses.module.css';

export default function AddCoursesPage() {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();

  const [coverImagePreview, setCoverImagePreview] = useState<
    string | ArrayBuffer | null
  >(null);

  const [content, setContent] = useState('');

  const handleCoverImageChange = (e: any) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setCoverImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setCoverImagePreview(null);
    }
  };

  const handleContentChange = (value: string) => {
    console.log(value);
    setContent(value);
  };

  const { isLoading, error, data, refetch } = useQuery({
    queryKey: ['addCourseData'],
    enabled: false,
    queryFn: async () => {
      //   const userData = getValues();
      //   try {
      //     const auth = getAuth(firebaseApp);
      //     await signInWithEmailAndPassword(
      //       auth,
      //       userData.email,
      //       userData.password || ''
      //     );
      //     router.push('/');
      //   } catch (error) {
      //     alert(error);
      //   }
    },
  });

  const onSubmit = () => refetch();

  return (
    <>
      <div className='row justify-content-center'>
        <div className='col-lg-10'>
          <div className='card shadow-lg border-0 rounded-lg mt-5'>
            <div className='card-header'>
              <h3 className='text-center font-weight-light my-4'>
                Add Course
              </h3>
            </div>
            <div className='card-body row'>
              <div className='col-md-3'>
                <div className='form-floating mb-3'>
                  <div className={styles['cover-image-preview']}>
                    {coverImagePreview ? (
                      <img
                        src={coverImagePreview as string}
                        alt='Cover Image'
                        className={styles['img-fluid']}
                      />
                    ) : (
                      <div className={styles['placeholder']}>
                        Select an image
                      </div>
                    )}
                  </div>
                  <input
                    type='file'
                    className='form-control'
                    {...register('coverImage', { required: true })}
                    onChange={handleCoverImageChange}
                  />
                  {errors.coverImage && <span>This field is required</span>}
                  <label htmlFor='coverImage'>Cover Image</label>
                </div>
              </div>
              <div className='col-md-9'>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className='form-floating mb-3'>
                    <input
                      type='text'
                      className='form-control'
                      {...register('title', { required: true })}
                      placeholder='Title'
                    />
                    {errors.title && <span>This field is required</span>}
                    <label htmlFor='title'>Title</label>
                  </div>
                  <div className='mb-3'>
                  <label htmlFor='content'>Content</label>
                    <ReactQuill
                      value={content}
                      onChange={handleContentChange}
                    />
                    {errors.content && <span>This field is required</span>}
                  </div>
                  <div className='d-flex align-items-center justify-content-between mt-4 mb-0'>
                    <button className='btn btn-primary' type='submit'>
                      {isLoading && (
                        <span className='spinner-border spinner-border-sm me-2'></span>
                      )}
                      Add
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
