import type { Metadata } from 'next';

import About from '@/components/organisms/About/Component';
import Contact from '@/components/organisms/Contact/Component';
import Header from '@/components/organisms/Header/Component';
import Rates from '@/components/organisms/Rates/Component';

export const metadata: Metadata = {
  title: 'Mels - Washing and Detailing',
  description: 'Mels - Washing and Detailing',
  openGraph: {
    title: "Mel's Washing and Detailing",
    description:
      'Cleaning, washing, and detailing services for cars and motorcycles.',
    images: '/default/og-image-logo.png',
  },
};

export default function Home() {
  return (
    <>
      <main className="bg-primary">
        <Header />
        <Rates />
        <About />
        <Contact />
      </main>
    </>
  );
}
