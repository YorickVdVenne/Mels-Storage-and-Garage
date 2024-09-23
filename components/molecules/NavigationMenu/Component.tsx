import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';

interface NavigationMenuProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (state: boolean) => void;
}

export default function NavigationMenu(
  props: NavigationMenuProps
): JSX.Element {
  const { isMenuOpen, setIsMenuOpen } = props;

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('noScroll');
    } else {
      document.body.classList.remove('noScroll');
    }

    return () => {
      document.body.classList.remove('noScroll');
    };
  }, [isMenuOpen]);

  return (
    <div className="block md:hidden">
      <Helmet>
        <html className={isMenuOpen ? 'blur' : ''} />
      </Helmet>

      <button
        className={`text-red w-10 h-10 relative focus:outline-none z-10 ${isMenuOpen ? '-translate-x-3' : ''}`}
        onClick={() => {
          setIsMenuOpen(!isMenuOpen);
        }}
      >
        <div className="block w-6 absolute left-1/2 top-1/2   transform  -translate-x-1/2 -translate-y-1/2">
          <span
            aria-hidden="true"
            className={`block absolute h-[3px] w-6 bg-current rounded-sm transform transition duration-500 ease-in-out ${isMenuOpen ? 'rotate-45' : '-translate-y-1.5'}`}
          ></span>
          <span
            aria-hidden="true"
            className={`block absolute h-[3px] w-6 bg-current rounded-sm transform transition duration-500 ease-in-out ${isMenuOpen ? 'opacity-0' : ''}`}
          ></span>
          <span
            aria-hidden="true"
            className={`block absolute h-[3px] w-6 bg-current rounded-sm transform transition duration-500 ease-in-out ${isMenuOpen ? '-rotate-45' : 'translate-y-1.5'}`}
          ></span>
        </div>
      </button>
      <aside
        className={`flex md:hidden justify-center items-center fixed top-0 bottom-0 right-0 py-12 w-screen h-screen bg-navy transition-all duration-300 ${isMenuOpen ? 'translate-y-0 visible' : '-translate-y-[100vh] invisible'}`}
        aria-hidden={!isMenuOpen}
        tabIndex={isMenuOpen ? 1 : -1}
      >
        <div>Test</div>
      </aside>
    </div>
  );
}
