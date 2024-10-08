import { Button } from '@/components/atoms/Button/Component';
import { ActionButton, MenuItem } from '@/types/menus';
import Link from 'next/link';
import React from 'react';

interface NavigationLinksProps {
  siteMenusLinks: MenuItem[];
  siteMenusActionButton: ActionButton;
  scrollTop: boolean;
}

export default function NavigationLinks(
  props: NavigationLinksProps
): JSX.Element {
  const { siteMenusLinks, siteMenusActionButton, scrollTop } = props;

  return (
    <ul className="hidden md:flex flex-row md:space-x-8 lg:space-x-14 items-center w-full justify-end text-md lg:text-lg">
      {siteMenusLinks.map((link) => (
        <li key={link.id}>
          <Link
            href={link.href}
            className={`${scrollTop ? 'hover:text-white' : 'hover:text-secondary'} transition-colors group`}
            onClick={(e) => {
              const section = document.getElementById(link.id);
              if (section != null) {
                e.preventDefault();
                window.scrollTo({
                  top: section.offsetTop - 100,
                  behavior: 'smooth',
                });
              }
            }}
          >
            {link.label}
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-px bg-secondary" />
          </Link>
        </li>
      ))}
      <li>
        <Button
          as="link"
          href="https://wa.me/31637403736"
          size="small"
          className={scrollTop ? 'hover:text-white' : 'hover:text-secondary'}
          target="_blank"
        >
          {siteMenusActionButton.label}
        </Button>
      </li>
    </ul>
  );
}
