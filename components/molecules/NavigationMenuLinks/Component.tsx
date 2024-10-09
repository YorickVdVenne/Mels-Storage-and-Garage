import { Button } from '@/components/atoms/Button/Component';
import { ActionButton, MenuItem } from '@/types/menus';
import Link from 'next/link';
import React from 'react';

interface NavigationMenuLinksProps {
  siteMenuLinks: MenuItem[];
  siteMenusActionButton: ActionButton;
  setMenuOpen: (menuOpen: boolean) => void;
}

export default function NavigationMenuLinks(
  props: NavigationMenuLinksProps
): JSX.Element {
  const { siteMenuLinks, siteMenusActionButton, setMenuOpen } = props;

  return (
    <ul className="flex flex-col gap-6 text-xl text-center">
      {siteMenuLinks.map((menu) => (
        <li key={menu.id}>
          <Link
            href={menu.href}
            className="hover:text-secondary transition-colors group inline-block"
            onClick={(e) => {
              const section = document.getElementById(menu.id);
              if (section != null) {
                e.preventDefault();
                setMenuOpen(false);
                window.scrollTo({
                  top: section.offsetTop - 100,
                  behavior: 'smooth',
                });
              } else {
                setMenuOpen(false); // Close the menu even if the section is not found
              }
            }}
          >
            {menu.label}
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-px bg-secondary" />
          </Link>
        </li>
      ))}
      <li>
        <Button as="button" size="small">
          {siteMenusActionButton.label}
        </Button>
      </li>
    </ul>
  );
}
