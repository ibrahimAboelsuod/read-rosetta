import cn from 'classnames';

import styles from './header.module.css';

interface HeaderProps {
  className?: string;
}

export default function Header({ className }: HeaderProps) {
  return (
    <nav className={cn('navbar navbar-expand-lg bg-light p-0 d-flex align-items-center', className)}>
      <a className='navbar-brand ps-2' href='#'>
        Read Rosetta
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
            <a className='nav-link active' href='#'>
              Home
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='#'>
              Courses
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='#'>
              Sing up
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
