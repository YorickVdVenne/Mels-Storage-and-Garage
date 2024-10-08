import React, { HTMLAttributes, ReactNode } from 'react';

interface SectionProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  id: string;
}

export default function Section(props: SectionProps): JSX.Element {
  const { id, className } = props;

  const classes = `${className} col-start-2 col-end-10 pt-20 pb-20`;

  return (
    <section id={id} className="grid grid-cols-10 gap-4">
      <div className={classes}>{props.children}</div>
    </section>
  );
}
