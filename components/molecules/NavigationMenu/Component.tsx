import { ActionButton, MenuItem } from '@/types/menus';
import { useEffect, useRef, useState } from 'react';
import NavigationMenuLinks from '../NavigationMenuLinks/Component';
import { useFocusTrap } from '@/misc/focusTrap';

interface NavigationMenuProps {
  siteMenuLinks: MenuItem[];
  siteMenusActionButton: ActionButton;
  scrollTop: boolean;
}

export default function NavigationMenu(
  props: NavigationMenuProps
): JSX.Element {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useFocusTrap(
    menuOpen,
    () => setMenuOpen(false),
    closeButtonRef
  );

  const onResize = (): void => {
    if (window.innerWidth > 768) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);

  useEffect(() => {
    if (menuOpen) {
      setIsVisible(true);
      document.documentElement.classList.add('overflow-hidden');
    } else {
      setTimeout(() => {
        setIsVisible(false);
      }, 500);
      document.documentElement.classList.remove('overflow-hidden');
    }

    return () => {
      document.documentElement.classList.remove('overflow-hidden');
    };
  }, [menuOpen]);

  return (
    <div className="flex items-center justify-end w-full md:hidden">
      <button
        ref={closeButtonRef}
        className={`group flex items-center ${props.scrollTop ? 'text-white hover:text-white' : 'hover:text-secondary'} relative z-20 ${menuOpen ? '-translate-x-3' : ''}`}
        aria-expanded={menuOpen}
        aria-label={!menuOpen ? 'Menu' : 'Close menu'}
        onClick={() => {
          setMenuOpen(!menuOpen);
        }}
      >
        <div className="block w-6 relative">
          <span
            aria-hidden="true"
            className={`block absolute h-[3px] w-6 bg-current rounded-sm transform transition duration-500 ease-in-out ${menuOpen ? 'rotate-45' : '-translate-y-1.5'} group-hover:text-secondary`}
          ></span>
          <span
            aria-hidden="true"
            className={`block absolute h-[3px] w-6 bg-current rounded-sm transform transition duration-500 ease-in-out ${menuOpen ? 'opacity-0' : ''} group-hover:text-secondary`}
          ></span>
          <span
            aria-hidden="true"
            className={`block absolute h-[3px] w-6 bg-current rounded-sm transform transition duration-500 ease-in-out ${menuOpen ? '-rotate-45' : 'translate-y-1.5'} group-hover:text-secondary`}
          ></span>
        </div>
        <span className="ml-2 mt-1 transition duration-500 ease-in-out group-hover:text-secondary">
          {!menuOpen ? 'Menu' : 'Close'}
        </span>
      </button>
      <aside
        ref={menuRef}
        className={`flex justify-center items-center fixed top-0 bottom-0 right-0 px-2.5 py-12 h-screen w-screen outline-0 bg-primary z-10 transition duration-500 ease-in-out md:hidden ${menuOpen ? 'translate-y-0 visible' : '-translate-y-full'} ${!isVisible ? 'invisible' : ''}`}
        aria-hidden={!menuOpen}
      >
        <NavigationMenuLinks
          siteMenuLinks={props.siteMenuLinks}
          siteMenusActionButton={props.siteMenusActionButton}
        />
      </aside>
    </div>
  );
}
