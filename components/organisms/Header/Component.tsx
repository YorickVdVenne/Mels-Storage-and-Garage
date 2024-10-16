import Image from 'next/image';
import React from 'react';
import header from '@/content/header.json';
import { Button } from '@/components/atoms/Button/Component';

export default function Header(): JSX.Element {
  return (
    <header className="text-white grid grid-cols-10 gap-4">
      <div className="relative col-span-full">
        <Image
          className="absolute h-full w-screen left-1/2 -translate-x-1/2 overflow-hidden object-cover grayscale-[75%] contrast-125 saturate-200 bg-primary opacity-50"
          src={'/images/car-wash-scrub.jpg'}
          alt="motor"
          width={1000}
          height={1000}
        />
        <div className="relative w-full min-h-[90vh] max-h-[100rem] items-center grid grid-cols-10 gap-4">
          <div className="flex flex-col gap-4 col-start-2 col-end-10 md:col-end-8 lg:col-end-6 rounded-xl">
            <h1 className="font-grotesk-grand text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
              {header.data.title}
            </h1>
            <p className="text-md md:text-lg">{header.data.description}</p>
            <Button
              className="w-fit hover:text-white flex items-center"
              as="link"
              href={header.data.actionButton.href}
              icon="arrow-down"
            >
              {header.data.actionButton.label}
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
