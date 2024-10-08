import React, { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
}

export default function Card(props: CardProps): JSX.Element {
  return (
    <div className="rounded-t-lg overflow-hidden bg-light-primary">
      {props.children}
    </div>
  );
}
