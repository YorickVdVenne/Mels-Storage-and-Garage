import React from 'react';
import InternalOrExternalLink from '@/lib/link/Component';
import { hasValue } from '@/misc/helpers';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconName } from '@fortawesome/fontawesome-svg-core';

interface ButtonProps {
  children: React.ReactNode;
  icon?: IconName;
}

type Props =
  | ({ as: 'link' } & ButtonProps &
      React.AnchorHTMLAttributes<HTMLAnchorElement>)
  | ({ as: 'button' } & ButtonProps &
      React.ButtonHTMLAttributes<HTMLButtonElement>);

export function Button(props: Props): JSX.Element {
  const { children, icon, ...componentProps } = props;

  const childComponents = (
    <>
      {hasValue(icon) && (
        <FontAwesomeIcon
          className="text-red"
          width={60}
          height={60}
          icon={['fas', icon]}
        />
      )}
      {children}
    </>
  );

  if (componentProps.as === 'link') {
    const classes = `${componentProps.className}`;
    const { as, className, ...linkProps } = componentProps;
    return (
      <InternalOrExternalLink className={classes} {...linkProps}>
        {childComponents}
      </InternalOrExternalLink>
    );
  } else {
    const classes = `${componentProps.className} bg-red py-3 px-10 rounded-md border-2 border-red hover:bg-transparent hover:text-red transition-all `;
    const { as, className, ...buttonProps } = componentProps;
    return (
      <button className={classes} {...buttonProps}>
        {childComponents}
      </button>
    );
  }
}
