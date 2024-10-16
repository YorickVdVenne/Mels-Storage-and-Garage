import type { Metadata } from 'next';

import About from '@/components/organisms/About/Component';
import Contact from '@/components/organisms/Contact/Component';
import Header from '@/components/organisms/Header/Component';
import Rates from '@/components/organisms/Rates/Component';

export const metadata: Metadata = {
  title: 'Mels - Washing and Detailing',
  description:
    'Cleaning, washing, and detailing services for cars and motorcycles.',
  openGraph: {
    title: 'Mels - Washing and Detailing',
    description:
      'Cleaning, washing, and detailing services for cars and motorcycles.',
    url: 'https://mels-washing.nl',
    siteName: 'Mels Washing & Detailing',
    images: [
      {
        url: 'https://scontent-ams2-1.cdninstagram.com/v/t51.2885-19/462251114_506353712305668_934829760419922571_n.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent-ams2-1.cdninstagram.com&_nc_cat=100&_nc_ohc=koJICBWuiKMQ7kNvgEhlILE&_nc_gid=b67a8be3a0b94fb7bd4c00ef66debbc3&edm=AP4sbd4BAAAA&ccb=7-5&oh=00_AYB1e8rXDAHe-wVSac_RIiD_cxEpTK1ldkI2j7-uKtOm8g&oe=6715CCE7&_nc_sid=7a9f4b',
        alt: 'Mels Washing & Detailing Service',
      },
    ],
    locale: 'nl_NL',
    type: 'website',
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
