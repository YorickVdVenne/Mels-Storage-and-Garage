import React, { ReactNode } from 'react';
import Card from '../Card/Component';

interface CardRateProps {
  children: ReactNode;
}

export default function RateCard(props: CardRateProps): JSX.Element {
  return <Card>{props.children}</Card>;
}

export function RateCardHeader(props: CardRateProps): JSX.Element {
  return (
    <div className="bg-secondary bg-opacity-10 p-5 rounded-lg transform scale-100 transition-transform">
      {props.children}
    </div>
  );
}

export function RateCardContent(props: CardRateProps): JSX.Element {
  return <div className="py-4 px-12 flex flex-col">{props.children}</div>;
}
