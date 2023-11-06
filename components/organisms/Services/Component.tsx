'use client'

import React from 'react'
import ServiceCard from '@/components/molecules/ServiceCard/Component';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fas)

export default function Services (): JSX.Element {
    
    return (
        <div className='grid grid-cols-10 gap-4'>
            <div className='col-start-2 col-end-10 pt-10 pb-10'>
                <h2 className="relative w-fit text-white text-3xl after:block after:w-16 after:h-1 after:bg-red after:content-'' after:absolute -after:bottom-1 after:left-1/10 after:rounded-sm">
                    Services
                </h2>
                <div className='w-full flex justify-center mt-8'>
                    <div className='grid grid-cols-10 gap-4'>
                        <div className='col-start-2 col-end-4'>
                            <ServiceCard onClick={() => console.log('test')} buttonText='Storage' icon='warehouse'/>
                        </div>
                        <div className='col-start-5 col-end-7'>
                            <ServiceCard onClick={() => console.log('test')} buttonText='Maintenance' icon='screwdriver-wrench'/>
                        </div>
                        <div className='col-start-8 col-end-10'>
                            <ServiceCard onClick={() => console.log('test')} buttonText='Others' icon='gear'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
