'use client';

import Logo from '@/components/atoms/Logo/Component';
import NavigationLinks from '@/components/molecules/NavigationLinks/Component';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import siteMenus from '@content/siteMenus.json';
import NavigationMenu from '@/components/molecules/NavigationMenu/Component';
import { useEffect, useState } from 'react';

export default function Navigation(): JSX.Element {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [scrollTop, setScrollTop] = useState(true);

  useEffect(() => {
    let lastScrollY = 0;

    const handleScroll = (): void => {
      const currentScrollY = window.scrollY;

      setScrollTop(currentScrollY === 0);
      setScrolled(currentScrollY > lastScrollY && currentScrollY > 0);

      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      aria-label="Main"
      className={`grid grid-cols-10 gap-4 items-center justify-between fixed top-0 z-10 w-full bg-primary drop-shadow-lg ${scrolled ? '-translate-y-full	' : 'translate-y-0'} ${!scrolled && !scrollTop ? 'h-20' : 'h-24'} ${scrollTop ? 'bg-transparent backdrop-blur-sm drop-shadow-none' : ''} transition-all duration-300 ease-in-out`}
    >
      <div className="flex justify-between items-center col-start-2 col-end-10 relative w-full">
        <Link
          href="/"
          onClick={(e) => {
            if (pathname === '/') {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }
          }}
        >
          {}
          <Logo
            className={`transition-width duration-300 ease-in-out ${!scrolled && !scrollTop ? 'w-16 md:20' : 'w-20 md:w-24'}`}
          />
        </Link>
        <NavigationLinks
          scrollTop={scrollTop}
          siteMenusLinks={siteMenus.data.mainNavigation.links}
          siteMenusActionButton={siteMenus.data.mainNavigation.actionButton}
        />
        <NavigationMenu
          scrollTop={scrollTop}
          siteMenuLinks={siteMenus.data.mainNavigation.links}
          siteMenusActionButton={siteMenus.data.mainNavigation.actionButton}
        />
      </div>
    </nav>
  );
}
