import Header from '@/components/organisms/Header/Component';
import About from '@/components/organisms/About/Component';
import Contact from '@/components/organisms/Contact/Component';
import Rates from '@/components/organisms/Rates/Component';

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
