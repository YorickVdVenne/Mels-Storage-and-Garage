'use client';

import { Button } from '@/components/atoms/Button/Component';
import React from 'react';

export default function Contact(): JSX.Element {
  return (
    <div id="contact" className="grid grid-cols-10 gap-4">
      <div className="col-start-2 col-end-10 pt-10 pb-20 flex justify-center">
        <div className="text-white text-center max-w-2xl">
          <h2 className="text-red font-beckman">Contact</h2>
          <h1 className="text-6xl">Get In Touch</h1>
          <p className="pb-6 pt-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&aposs standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book.
          </p>
          <Button
            as="button"
            onClick={() =>
              (window.location.href = 'mailto:melchior.vdv@hotmail.com')
            }
            className="text-lg"
          >
            Message me
          </Button>
        </div>
      </div>
    </div>
  );
}
