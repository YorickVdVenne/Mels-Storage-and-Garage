'use client';

import React, { useState } from 'react';
import ServiceCard from '@/components/molecules/ServiceCard/Component';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import Dialog from '@/components/molecules/Dialog/Component';

library.add(fas);

enum ServiceData {
  storage = 'storage',
  maintenance = 'maintenance',
  others = 'others',
}

const dataMapping = {
  [ServiceData.storage]: {
    title: 'Storage',
    description: 'This is my description',
  },
  [ServiceData.maintenance]: {
    title: 'Maintenance',
    description: 'This is my description',
  },
  [ServiceData.others]: {
    title: 'Others',
    description: 'This is my description',
  },
};

export default function Services(): JSX.Element {
  const [openDialog, setOpenDialog] = useState<ServiceData | boolean>(false);

  return (
    <div id="services" className="grid grid-cols-10 gap-4">
      <div className="col-start-2 col-end-10 pt-10 pb-10">
        <h2 className="relative w-fit text-white text-3xl after:block after:w-16 after:h-1 after:bg-secondary after:content-'' after:absolute -after:bottom-1 after:left-1/10 after:rounded-sm">
          Services
        </h2>
        <div className="w-full flex justify-center mt-8">
          <div className="grid grid-cols-10 gap-4">
            <div className="col-start-2 col-end-4">
              <ServiceCard
                onClick={() => {
                  setOpenDialog(ServiceData.storage);
                }}
                buttonText="Storage"
                icon="warehouse"
              />
            </div>
            <div className="col-start-5 col-end-7">
              <ServiceCard
                onClick={() => {
                  setOpenDialog(ServiceData.maintenance);
                }}
                buttonText="Maintenance"
                icon="screwdriver-wrench"
              />
            </div>
            <div className="col-start-8 col-end-10">
              <ServiceCard
                onClick={() => {
                  setOpenDialog(ServiceData.others);
                }}
                buttonText="Others"
                icon="gear"
              />
            </div>
          </div>
        </div>
        <div>
          <Dialog
            open={
              typeof openDialog === 'string' &&
              Object.values(ServiceData).includes(openDialog)
            }
            onCloseClick={() => {
              setOpenDialog(false);
            }}
            data={
              openDialog !== false
                ? dataMapping[openDialog as ServiceData]
                : undefined
            }
          />
        </div>
      </div>
    </div>
  );
}
