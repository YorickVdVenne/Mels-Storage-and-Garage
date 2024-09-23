'use client';

import NavigationLinks from '@/components/molecules/NavigationLinks/Component';
import NavigationMenu from '@/components/molecules/NavigationMenu/Component';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Navigation(): JSX.Element {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const navHeight = document.querySelector('nav')?.offsetHeight || 0;
      console.log('navHeight', navHeight);
      if (window.scrollY > navHeight) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      aria-label="Main"
      className={`text-white tracking-widest font-beckman text-sm w-full z-10 fixed grid grid-cols-10 gap-4 transition-all duration-500 ${
        isScrolled ? 'bg-navy' : 'bg-transparent'
      }`}
    >
      <div className="flex flex-row items-center justify-between md:justify-start p-4 gap-8 lg:gap-0 px-0 col-start-2 col-end-10">
        <Link
          href="/"
          onClick={(e) => {
            if (pathname === '/') {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }
          }}
        >
          <div className="flex flex-col items-center z-10 relative">
            <span className="font-beckman text-3xl leading-10 group flex">
              <span className="group-hover:text-red transition-colors duration-500">
                Moto
              </span>
              <span className="text-red group-hover:text-white transition-all duration-500 group-hover:translate-x-1">
                Mel
              </span>
            </span>
          </div>
        </Link>
        <NavigationLinks />
        <NavigationMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      </div>
    </nav>
  );
}
