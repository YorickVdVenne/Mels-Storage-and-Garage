import React from 'react';
import InternalOrExternalLink from '@/lib/link/Component';
import { hasValue } from '@/misc/helpers';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconName } from '@fortawesome/fontawesome-svg-core';

interface ButtonProps {
  children: React.ReactNode;
  icon?: IconName;
  size?: 'small' | 'medium' | 'large';
  variant?: 'primary' | 'secondary';
}

type Props =
  | ({ as: 'link' } & ButtonProps &
      React.AnchorHTMLAttributes<HTMLAnchorElement>)
  | ({ as: 'button' } & ButtonProps &
      React.ButtonHTMLAttributes<HTMLButtonElement>);

export function Button(props: Props): JSX.Element {
  const { children, icon, size, ...componentProps } = props;

  const childComponents = (
    <>
      {hasValue(icon) && (
        <FontAwesomeIcon
          className="text-white group-hover:text-secondary transition-all w-4 h-4 mr-2"
          width={60}
          height={60}
          icon={['fas', icon]}
        />
      )}
      {children}
    </>
  );

  if (componentProps.as === 'link') {
    const { className, ...linkProps } = componentProps;
    const classes = `${className} group bg-secondary ${size === 'small' ? 'py-2 px-4' : size === 'medium' ? 'py-2 px-8' : 'py-2 px-6 sm:py-3 sm:px-10'}  rounded-md border-2 border-secondary hover:bg-transparent hover:text-secondary transition-all`;
    return (
      <InternalOrExternalLink className={classes} {...linkProps}>
        {childComponents}
      </InternalOrExternalLink>
    );
  } else {
    const { className, ...buttonProps } = componentProps;
    let classes;
    if (buttonProps.variant !== 'secondary') {
      classes = `${className} group bg-secondary ${size === 'small' ? 'py-2 px-4' : size === 'medium' ? 'py-2 px-8' : 'py-2 px-6 sm:py-3 sm:px-10'}  rounded-md border-2 border-secondary hover:bg-transparent hover:text-secondary transition-all`;
    } else {
      classes = `${className} group bg-charcoal-black ${size === 'small' ? 'py-2 px-4' : size === 'medium' ? 'py-2 px-8' : 'py-2 px-6 sm:py-3 sm:px-10'}  rounded-md border-2 border-charcoal-black hover:bg-transparent hover:text-charcoal-black transition-all`;
    }
    return (
      <button className={classes} {...buttonProps}>
        {childComponents}
      </button>
    );
  }
}
