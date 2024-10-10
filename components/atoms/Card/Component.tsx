import React, { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
}

export default function Card(props: CardProps): JSX.Element {
  return (
    <div
      className={`${props.className} rounded-xl overflow-hidden p-6 flex flex-col`}
    >
      {props.children}
    </div>
  );
}
