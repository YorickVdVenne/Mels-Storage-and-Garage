'use client';

import { Button } from '@/components/atoms/Button/Component';
import Section from '@/components/atoms/Section/Component';
import React from 'react';

export default function Contact(): JSX.Element {
  return (
    <Section id="contact" className="flex justify-center">
      <div className="text-white text-center max-w-2xl">
        <h2 className="text-secondary font-beckman">Contact</h2>
        <h1 className="text-6xl">Get In Touch</h1>
        <p className="pb-6 pt-2">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&aposs standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book.
        </p>
        <Button as="link" href="https://wa.me/31637403736" className="text-lg">
          Bericht mij
        </Button>
      </div>
    </Section>
  );
}
