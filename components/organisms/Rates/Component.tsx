import React from 'react';
import rates from '@content/rates.json';
import Section from '@/components/atoms/Section/Component';
import TabList from '@/components/molecules/TabList/Component';

export default function Rates(): JSX.Element {
  return (
    <Section id={rates.data.id}>
      <h2 className="relative w-fit text-white text-3xl after:block after:w-16 after:h-1 after:bg-secondary after:content-'' after:absolute -after:bottom-1 after:left-1/10 after:rounded-sm">
        {rates.data.title}
      </h2>

      <div className="mt-6">
        <TabList tabs={rates.data.tabs} panels={rates.data.panels} />
      </div>
      <p className="mt-4 text-sm">{rates.data.note}</p>
    </Section>
  );
}
