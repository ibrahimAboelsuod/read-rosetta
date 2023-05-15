import cn from 'classnames';

import Header from '@/components/header/header';
import HeroSection from '@/components/hero-section/hero-section';

import styles from './page.module.css';

export default function Home() {
  return (
    <main className={cn('bg-light', styles.main)}>
      <Header className={styles.header} />

      <HeroSection className={styles['hero-section']} />

      <section className={cn('container bg-white', styles['content-container'])}>
        <h2>About Us</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed
          molestie mi. Mauris quis arcu auctor, feugiat ante a, lobortis massa.
        </p>
        <h2>About Us</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed
          molestie mi. Mauris quis arcu auctor, feugiat ante a, lobortis massa.
        </p>
        <h2>About Us</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed
          molestie mi. Mauris quis arcu auctor, feugiat ante a, lobortis massa.
        </p>
        <h2>About Us</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed
          molestie mi. Mauris quis arcu auctor, feugiat ante a, lobortis massa.
        </p>
      </section>
    </main>
  );
}
