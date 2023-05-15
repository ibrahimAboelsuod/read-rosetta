import cn from 'classnames';

import styles from './hero-section.module.css';

interface HeroSectionProps {
  className?: string;
}
export default function HeroSection({ className }: HeroSectionProps) {
  return (
    <section
      className={cn(
        'bg-dark text-white d-flex justify-content-center align-items-center flex-column',
        styles['hero-section'],
        className
      )}
    >
      <h1 className='text-center'>Welcome to Read Rosetta</h1>
      <h6 className='text-center'>Decipher the Past, Understand the Future.</h6>
      <button type='button' className='btn btn-warning text-white mt-5'>
        Start Learning now
      </button>
    </section>
  );
}
