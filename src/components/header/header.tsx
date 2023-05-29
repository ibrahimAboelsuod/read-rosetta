import { usePathname } from 'next/navigation';

import cn from 'classnames';
import { getAuth, signOut } from 'firebase/auth';
import { collection, doc, getDoc } from 'firebase/firestore';
import { useQuery } from 'react-query';

import useFirebaseAuth from '@/firebase/firebase-auth.hook';
import { firebaseApp, firestoreDB } from '@/firebase/init-firebase';

import styles from './header.module.css';

interface HeaderProps {
  className?: string;
}

export default function Header({ className }: HeaderProps) {
  const pathname = usePathname();
  const firebaseAuthData = useFirebaseAuth();
  const authUser = firebaseAuthData.authUser;
  const authLoading = firebaseAuthData.loading;

  const userQuery = useQuery({
    queryKey: ['userData', authUser?.uid],
    queryFn: async () => {
      return (
        await getDoc(doc(collection(firestoreDB, 'USERS'), authUser?.uid))
      ).data();
    },
  });

  const { isLoading, error, data, refetch } = useQuery({
    queryKey: ['logoutData'],
    enabled: false,
    queryFn: async () => {
      await signOut(getAuth(firebaseApp));
    },
  });

  return (
    <nav
      className={cn(
        'navbar navbar-expand-lg bg-dark border-bottom p-0 d-flex align-items-center',
        className
      )}
    >
      <a className='navbar-brand text-white ps-2' href='/'>
        <h4 className='mb-0'>Read Rosetta</h4>
      </a>
      <button
        className='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#navbarNav'
        aria-controls='navbarNav'
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
        <span className='navbar-toggler-icon'></span>
      </button>
      <div className='collapse navbar-collapse' id='navbarNav'>
        <ul className='navbar-nav'>
          <li className='nav-item'>
            <a
              className={cn(
                { active: pathname === '/' },
                'nav-link text-white'
              )}
              href='/'
            >
              Home
            </a>
          </li>
          {/* <li className='nav-item'>
            <a
              className={cn(
                { active: pathname === '/courses' },
                'nav-link text-white'
              )}
              href='#'
            >
              Courses
            </a>
          </li> */}
          {!authLoading && (
            <>
              {!authUser ? (
                <>
                  <li className='nav-item'>
                    <a
                      className={cn(
                        { active: pathname === '/auth/signup' },
                        'nav-link text-white'
                      )}
                      href='/auth/signup'
                    >
                      Signup
                    </a>
                  </li>
                  <li className='nav-item'>
                    <a
                      className={cn(
                        { active: pathname === '/auth/login' },
                        'nav-link text-white'
                      )}
                      href='/auth/login'
                    >
                      Login
                    </a>
                  </li>
                </>
              ) : (
                <>
                  {userQuery.data && userQuery.data.role === 'admin' && (
                    <li className='nav-item'>
                      <a
                        className={cn('nav-link text-primary', {
                          active: pathname === '/add-courses',
                        })}
                        href='/add-courses'
                        role='button'
                      >
                        Add Courses
                      </a>
                    </li>
                  )}
                  <li className='nav-item'>
                    <a
                      className={cn('nav-link text-danger')}
                      href='#'
                      onClick={() => refetch()}
                      role='button'
                      aria-disabled={isLoading}
                    >
                      {isLoading && (
                        <span className='spinner-border spinner-border-sm me-2'></span>
                      )}
                      Logout
                    </a>
                  </li>
                </>
              )}
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}
