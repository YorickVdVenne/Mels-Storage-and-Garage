'use client';

import { Button } from '@/components/atoms/Button/Component';
import Section from '@/components/atoms/Section/Component';
import React from 'react';
import contact from '@/content/contact.json';

export default function Contact(): JSX.Element {
  return (
    <Section id="contact" className="flex justify-center">
      <div className="text-white text-center max-w-2xl">
        <h3 className="text-secondary font-beckman">{contact.data.subtitle}</h3>
        <h2 className="font-grotesk-grand text-2xl md:text-3xl lg:text-4xl">
          {contact.data.title}
        </h2>
        <p className="pb-6 pt-2">{contact.data.description}</p>
        <Button
          as="link"
          href={contact.data.actionButton.href}
          className="text-lg"
        >
          {contact.data.actionButton.label}
        </Button>
      </div>
    </Section>
  );
}
