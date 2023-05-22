'use client';
import { usePathname } from 'next/navigation';

import cn from 'classnames';

import styles from './header.module.css';

interface HeaderProps {
  className?: string;
}

export default function Header({ className }: HeaderProps) {
  const pathname = usePathname();

  return (
    <nav
      className={cn(
        'navbar navbar-expand-lg bg-dark border-bottom p-0 d-flex align-items-center',
        className
      )}
    >
      <a className='navbar-brand text-white ps-2' href='#'>
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
              href='./'
            >
              Home
            </a>
          </li>
          <li className='nav-item'>
            <a
              className={cn(
                { active: pathname === '/courses' },
                'nav-link text-white'
              )}
              href='#'
            >
              Courses
            </a>
          </li>
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
        </ul>
      </div>
    </nav>
  );
}
