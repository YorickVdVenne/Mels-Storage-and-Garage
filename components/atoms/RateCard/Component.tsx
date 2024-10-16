import React, { ReactNode } from 'react';
import Card from '../Card/Component';
import { getColorClass } from '@/misc/helpers';
import { ParentClass } from '@/types/generic';

interface CardRateProps {
  children: ReactNode;
  color: string;
}

export default function RateCard(props: CardRateProps): JSX.Element {
  const colorClass = getColorClass(props.color);
  return (
    <Card className={`${colorClass} h-full relative`}>{props.children}</Card>
  );
}

export function RateCardHeader(props: ParentClass): JSX.Element {
  return <div className="flex flex-col gap-5 mb-5">{props.children}</div>;
}

export function RateCardContent(props: ParentClass): JSX.Element {
  return <div className="flex flex-col gap-3 mb-8">{props.children}</div>;
}

export function RateCardFooter(props: ParentClass): JSX.Element {
  return <div className="flex gap-3 mt-auto">{props.children}</div>;
}
