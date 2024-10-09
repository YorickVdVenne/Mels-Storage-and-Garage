'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Footer(): JSX.Element {
  const currentYear = new Date().getFullYear();
  const pathname = usePathname();

  return (
    <footer className="bg-primary text-white tracking-widest text-sm w-full z-10 grid grid-cols-10 gap-4">
      <div className="flex flex-row items-center justify-between p-6 gap-12 px-0 col-start-2 col-end-10">
        <div className="flex-1 flex justify-start">
          <Link
            className="flex flex-col items-center"
            href="/"
            onClick={(e) => {
              if (pathname === '/') {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }}
          >
            <span className="font-grotesk-grand text-lg md:text-2xl hover:text-secondary transition-all duration-300 ease-in-out">
              Mel's
            </span>
          </Link>
        </div>
        <span className="flex items-center flex-1 justify-end sm:justify-center gap-1">
          <span className="text-3xl">&#169;</span>
          {currentYear}
        </span>
        <span className="flex-1 justify-end gap-1 hidden sm:flex">
          Built by
          <a
            className="hover:text-secondary transition-colors group"
            href="https://yorick.vercel.app/"
            target="_blank"
          >
            Yorick
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-px bg-secondary" />
          </a>
        </span>
      </div>
    </footer>
  );
}
