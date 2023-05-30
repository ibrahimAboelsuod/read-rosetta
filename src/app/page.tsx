/* eslint-disable @next/next/no-img-element */
import cn from 'classnames';

import HeroSection from '@/components/hero-section/hero-section';

import styles from './page.module.css';
import Header from '@/components/header/header';

export default function Home() {
  return (
    <main className={cn('home-main')}>
      <HeroSection className={styles['hero-section']} />

      <section className={cn('container bg-white p-4', styles['content-container'])}>
        <h2 className='text-dark text-center'>The Rosetta Stone</h2>
        <div className='row'>
          <div className='col-md-4'>
            <img
              src='https://arce.org/wp-content/uploads/files-imported/2019-02/rosettastone.jpg'
              alt='The Rosetta Stone hero image'
              className='w-100'
            />
          </div>
          <div className='col-md-8'>
            <p>
              The Rosetta Stone, a symbol for different things to different
              people, is a dark-colored granodiorite stela inscribed with the
              same text in three scripts – Demotic, hieroglyphic and Greek. In
              July 1799, the stone was found in the city of Rosetta (modern el
              Rashid) by French soldiers during Napoleon’s invasion of Egypt.
              Rosetta was located on a tributary of the Nile near the
              Mediterranean coast east of Alexandria. Napoleon’s forces were
              constructing fortifications when the large inscribed stone
              fragment was uncovered by officer Pierre François Xavier Bouchard
              (1772–1832). He immediately recognized the significance of the
              juxtaposed Greek and hieroglyphic scripts, predicting correctly
              that each script represented a translation of a single text. This
              guess was corroborated upon translating the Greek description of
              how the stela’s text was to be promulgated: “This decree shall be
              inscribed on a stela of hard stone in sacred (hieroglyphic),
              native (Demotic), and Greek characters.” Thus, the Rosetta Stone
              (in French “the stone of Rosetta”) was named after the city where
              it was discovered.
            </p>
            <p>
              Since initially unearthed, the Rosetta Stone has become an
              international icon whose kaleidoscopic symbolism has been
              appropriated by diverse groups over the last two centuries. Its
              current residence in the British Museum is a legacy of the
              imperial ambitions of France and England in their struggle to
              establish, maintain and extend colonial empires in the late 18th
              and early 19th centuries. The stone itself still bears the marks
              of these conflicts as texts painted on its sides declare “captured
              in Egypt by the British army 1801” and “presented by king George
              III.” Egypt, at the time part of the Ottoman empire, found itself
              pinned between competing political powers. Napoleon’s invasion in
              1798, and his subsequent defeat by British and Ottoman forces in
              1801, led Egypt into a century often characterized by
              exploitation. Repression of independent development by European
              powers led to mass protest, widespread resistance and periodic
              revolt, frequently mobilized around nationalist sentiments among
              the predominantly Islamic and Coptic populations. The stone was
              officially turned over to the British in the Treaty of Alexandria
              in 1801, then accessioned into the British Museum in 1802. There,
              under registration number BM EA 24, it has remained on almost
              continuous display. This historical context is crucial for
              understanding how various communities have shaped the meaning of
              the Rosetta Stone.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
