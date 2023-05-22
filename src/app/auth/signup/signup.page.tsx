'use client';
import { useRouter } from 'next/navigation';

import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import {
  createUserWithEmailAndPassword,
  getAuth,
} from 'firebase/auth';
import { collection, doc, setDoc } from 'firebase/firestore';

import { User } from '@/models';
import { firebaseApp, firestoreDB } from '@/firebase/init-firebase';

export default function SignupPage() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<User>();

  const { isLoading, error, data, refetch } = useQuery({
    queryKey: ['signupData'],
    enabled: false,
    queryFn: async () => {
      const userData = getValues();
      try {
        const auth = getAuth(firebaseApp);
        const { user } = await createUserWithEmailAndPassword(
          auth,
          userData.email,
          userData.password || ''
        );

        await setDoc(doc(collection(firestoreDB, 'USERS'), user.uid), {
          uid: user.uid,
          email: userData.email,
          firstName: userData.firstName,
          lastName: userData.lastName,
        });

        router.push('/');
      } catch (error) {
        alert(error);
      }
    },
  });

  const onSubmit = (data: User) => {
    if (data.password !== data.confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    refetch();
  };

  return (
    <div className='row justify-content-center'>
      <div className='col-lg-6'>
        <div className='card shadow-lg border-0 rounded-lg mt-5'>
          <div className='card-header'>
            <h3 className='text-center font-weight-light my-4'>Signup</h3>
          </div>
          <div className='card-body'>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className='row mb-3'>
                <div className='col-md-6'>
                  <div className='form-floating mb-3 mb-md-0'>
                    <input
                      type='text'
                      className='form-control'
                      {...register('firstName', { required: true })}
                      placeholder='First Name'
                    />
                    {errors.firstName && <span>This field is required</span>}
                    <label htmlFor='firstName'>First Name</label>
                  </div>
                </div>
                <div className='col-md-6'>
                  <div className='form-floating'>
                    <input
                      type='text'
                      className='form-control'
                      {...register('lastName', { required: true })}
                      placeholder='Last Name'
                    />
                    {errors.lastName && <span>This field is required</span>}
                    <label htmlFor='lastName'>Last Name</label>
                  </div>
                </div>
              </div>
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
              <div className='form-floating mb-3'>
                <input
                  type='password'
                  className='form-control'
                  {...register('confirmPassword', { required: true })}
                  placeholder='Confirm Password'
                />
                {errors.confirmPassword && <span>This field is required</span>}
                <label htmlFor='confirmPassword'>Confirm Password</label>
              </div>
              <div className='d-flex align-items-center justify-content-between mt-4 mb-0'>
                <button
                  className='btn btn-primary'
                  type='submit'
                  disabled={isLoading}
                >
                  {isLoading && (
                    <span className='spinner-border spinner-border-sm me-2'></span>
                  )}
                  Signup
                </button>
              </div>
            </form>
          </div>
          <div className='card-footer text-center'>
            <div className='small'>
              Already have an account? <a href='login'>Login</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
