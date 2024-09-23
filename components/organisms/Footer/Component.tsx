'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Footer(): JSX.Element {
  const currentYear = new Date().getFullYear();
  const pathname = usePathname();

  return (
    <footer className="bg-navy text-white tracking-widest font-beckman text-sm w-full z-10 grid grid-cols-10 gap-4">
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
            <span className="font-beckman text-2xl leading-10 group flex">
              <span className="group-hover:text-red transition-colors duration-500">
                Moto
              </span>
              <span className="text-red group-hover:text-white transition-all duration-500 group-hover:translate-x-1">
                Mel
              </span>
            </span>
          </Link>
        </div>
        <span className="flex items-center flex-1 justify-center gap-1">
          <span className="text-3xl">&#169;</span>
          {currentYear}
        </span>
        <span className="flex-1 flex justify-end gap-1">
          Website Built by
          <a
            className="hover:text-red transition-colors group"
            href="https://yorick.vercel.app/"
            target="_blank"
          >
            Yorick
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-px bg-red" />
          </a>
        </span>
      </div>
    </footer>
  );
}
