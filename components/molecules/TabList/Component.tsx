'use client';

import RateCard, {
  RateCardContent,
  RateCardFooter,
  RateCardHeader,
} from '@/components/atoms/RateCard/Component';
import { BaseObject } from '@/types/generic';
import { Panel } from '@/types/rates';
import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faCheck,
  faCar,
  faMotorcycle,
} from '@fortawesome/free-solid-svg-icons';
import { Button } from '@/components/atoms/Button/Component';

library.add(faCheck, faCar, faMotorcycle);

interface TabListProps {
  tabs: BaseObject[];
  panels: Panel[];
}

export default function TabList(props: TabListProps): JSX.Element {
  const { tabs, panels } = props;
  const [activeTab, setActiveTab] = useState(0);
  const [bgStyle, setBgStyle] = useState({ width: 0, left: 0 });
  const tabListRef = useRef<HTMLDivElement>(null);
  const [isClient, setIsClient] = useState(false);

  const updateBgStyle = () => {
    if (tabListRef.current) {
      const activeButton = tabListRef.current.querySelector(
        `#tab-${activeTab}`
      );
      if (activeButton) {
        const { width, left } = activeButton.getBoundingClientRect();
        const containerLeft = tabListRef.current.getBoundingClientRect().left;
        setBgStyle({ width, left: left - containerLeft });
      }
    }
  };

  useEffect(() => {
    setIsClient(true);
    updateBgStyle();
  }, [activeTab]);

  useEffect(() => {
    const handleResize = () => {
      updateBgStyle();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [activeTab]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== 'ArrowRight' && event.key !== 'ArrowLeft') {
        return;
      }

      let newIndex = activeTab;

      if (event.key === 'ArrowRight') {
        newIndex = (activeTab + 1) % tabs.length;
      }

      if (event.key === 'ArrowLeft') {
        newIndex = (activeTab - 1 + tabs.length) % tabs.length;
      }

      setActiveTab(newIndex);
      const newActiveButton = tabListRef.current?.querySelector(
        `#tab-${newIndex}`
      );
      (newActiveButton as HTMLButtonElement)?.focus();
    };

    tabListRef.current?.addEventListener('keydown', handleKeyDown);

    return () => {
      tabListRef.current?.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeTab, tabs.length]);

  return (
    <>
      <div
        role="tablist"
        className="relative flex sm:max-w-80"
        ref={tabListRef}
      >
        <span
          className="absolute top-0 h-full bg-secondary transition-all duration-300 rounded-md"
          style={{
            width: `${bgStyle.width}px`,
            left: `${bgStyle.left}px`,
          }}
        />
        {tabs.map((tab, index) => (
          <button
            key={index}
            id={`tab-${index}`}
            aria-selected={activeTab === index}
            aria-controls={`panel-${index}`}
            role="tab"
            tabIndex={activeTab === index ? 0 : -1}
            className={`relative text-lg py-3 flex-1 transition-all duration-300 hover:text-white hover:bg-light border-t-2 border-b-2 border-secondary ${
              activeTab === index ? 'text-white' : 'text-secondary'
            } ${index === 0 ? 'border-l-2 rounded-s-md' : ''} ${index === tabs.length - 1 ? 'border-r-2 rounded-e-md' : ''}`}
            onClick={() => setActiveTab(index)}
          >
            {tab.title}
          </button>
        ))}
      </div>

      <div className="mt-6">
        {panels.map((panel, index) => (
          <div
            key={index}
            id={`panel-${index}`}
            role="tabpanel"
            aria-labelledby={`tab-${index}`}
            aria-hidden={activeTab !== index}
            className={`${
              activeTab === index ? 'block' : 'hidden'
            } transition-all duration-300 transform`}
          >
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {panel.items.map((item, index) => (
                <RateCard key={index} color={item.color}>
                  <RateCardHeader>
                    <h3 className="font-grotesk-grand text-white text-lg">
                      {item.title}
                    </h3>

                    <div className="absolute right-0 top-0 -translate-x-2 translate-y-2">
                      {item.category === 'auto' ? (
                        <FontAwesomeIcon
                          icon={faCar}
                          className="h-6 w-6 text-white"
                        />
                      ) : (
                        <FontAwesomeIcon
                          icon={faMotorcycle}
                          className="h-6 w-6 text-white"
                        />
                      )}
                    </div>

                    <p className="text-4xl font-grotesk">{item.price}</p>

                    <p>{item.excerpt}</p>
                  </RateCardHeader>
                  <RateCardContent>
                    {isClient &&
                      item.features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <span className="bg-charcoal-black rounded-full h-6 w-6 min-w-6 flex justify-center items-center">
                            <FontAwesomeIcon
                              icon={faCheck}
                              className="h-4 w-4 text-white"
                            />
                          </span>
                          {feature}
                        </div>
                      ))}
                  </RateCardContent>
                  {item.cta && (
                    <RateCardFooter>
                      <Button
                        as="link"
                        href={item.cta.href}
                        size="medium"
                        variant="secondary"
                      >
                        {item.cta.label}
                      </Button>
                    </RateCardFooter>
                  )}
                </RateCard>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
