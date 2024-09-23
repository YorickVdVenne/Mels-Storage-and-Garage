import React, { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
}

export default function Card(props: CardProps): JSX.Element {
  return (
    <div className="max-w-md rounded-t-lg overflow-hidden bg-light-navy p-10">
      {props.children}
    </div>
  );
}
