'use client';
import { useRouter } from 'next/navigation';

import { firebaseApp } from '@/firebase/init-firebase';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import Head from 'next/head';

export default function LoginPage() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();

  const { isLoading, error, data, refetch } = useQuery({
    queryKey: ['loginData'],
    enabled: false,
    queryFn: async () => {
      const userData = getValues();
      try {
        const auth = getAuth(firebaseApp);
        await signInWithEmailAndPassword(
          auth,
          userData.email,
          userData.password || ''
        );

        router.push('/');
      } catch (error) {
        alert(error);
      }
    },
  });

  const onSubmit = () => refetch();

  return (
    <>
      <div className='row justify-content-center'>
        <div className='col-lg-6'>
          <div className='card shadow-lg border-0 rounded-lg mt-5'>
            <div className='card-header'>
              <h3 className='text-center font-weight-light my-4'>Login</h3>
            </div>
            <div className='card-body'>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className='form-floating mb-3'>
                  <input
                    type='email'
                    className='form-control'
                    {...register('email', { required: true })}
                    placeholder='name@example.com'
                  />
                  {errors.email && <span>This field is required</span>}
                  <label htmlFor='email'>Email address</label>
                </div>
                <div className='form-floating mb-3'>
                  <input
                    type='password'
                    className='form-control'
                    {...register('password', { required: true })}
                    placeholder='Password'
                  />
                  {errors.password && <span>This field is required</span>}
                  <label htmlFor='password'>Password</label>
                </div>
                <div className='d-flex align-items-center justify-content-between mt-4 mb-0'>
                  <button className='btn btn-primary' type='submit'>
                    {isLoading && (
                      <span className='spinner-border spinner-border-sm me-2'></span>
                    )}
                    Login
                  </button>
                </div>
              </form>
            </div>
            <div className='card-footer text-center'>
              <div className='small'>
                {"Don't have an account?"} <a href='signup'>Signup</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
