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
      <h1>Welcome to Read Rosetta</h1>
      <p>Decipher the Past, Understand the Future.</p>
    </section>
  );
}
