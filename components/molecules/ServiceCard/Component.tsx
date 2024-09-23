import React from 'react';
import Card from '@/components/atoms/Card/Component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconName } from '@fortawesome/fontawesome-svg-core';

interface ServiceCardProps {
  buttonText: string;
  onClick: () => void;
  icon: IconName;
}

export default function ServiceCard(props: ServiceCardProps): JSX.Element {
  const { buttonText, onClick, icon } = props;

  return (
    <button onClick={onClick} className="group relative">
      <Card>
        <div className="bg-red bg-opacity-10 p-5 rounded-lg transform scale-100 group-hover:scale-110 transition-transform">
          <FontAwesomeIcon
            className="text-red h-14 w-14"
            width={56}
            height={56}
            icon={['fas', icon]}
          />
        </div>
      </Card>
      <div className="flex flex-row justify-between w-full items-center">
        <span className="text-white text-xl group-hover:translate-x-1 transition-transform">
          {buttonText}
        </span>
        <span className="bg-red p-5  border-2 border-red rounded-br-lg group-hover:bg-transparent transition-all">
          <FontAwesomeIcon
            className="text-white group-hover:text-red transition-all"
            width={20}
            height={20}
            icon={['fas', 'chevron-right']}
          />
        </span>
      </div>
    </button>
  );
}
