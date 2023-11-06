import React from 'react'
import Card from '@/components/atoms/Card/Component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
                            <Card>
                                <div className='bg-red bg-opacity-10 p-5 rounded-lg'>
                                    <FontAwesomeIcon className='text-red' width={60} height={60} icon={['fas', 'warehouse']} />
                                </div>
                            </Card>
                            <div>
                                <button className='flex flex-row justify-between w-full items-center'>
                                    <span className='text-white text-xl'>Storage</span>
                                    <span className='bg-red p-5 rounded-br-lg'>
                                        <FontAwesomeIcon className='text-white' width={20} height={20} icon={['fas', 'chevron-right']} />
                                    </span>
                                </button>
                            </div>
                        </div>
                        <div className='col-start-5 col-end-7'>
                        <Card>
                            <div className='bg-red bg-opacity-10 p-5 rounded-lg'>
                                <FontAwesomeIcon className='text-red' width={60} height={60} icon={['fas', 'screwdriver-wrench']} />
                            </div>
                        </Card>
                            <div>
                                <button className='flex flex-row justify-between w-full items-center'>
                                    <span className='text-white text-xl'>Maintenance</span>
                                    <span className='bg-red p-5 rounded-br-lg'>
                                        <FontAwesomeIcon className='text-white' width={20} height={20} icon={['fas', 'chevron-right']} />
                                    </span>
                                </button>
                            </div>
                        </div>
                        <div className='col-start-8 col-end-10'>
                        <Card>
                            <div className='bg-red bg-opacity-10 p-5 rounded-lg'>
                                <FontAwesomeIcon className='text-red' width={60} height={60} icon={['fas', 'gear']} />
                            </div>
                        </Card>
                            <div>
                                <button className='flex flex-row justify-between w-full items-center'>
                                    <span className='text-white text-xl'>Others</span>
                                    <span className='bg-red p-5 rounded-br-lg'>
                                        <FontAwesomeIcon className='text-white' width={20} height={20} icon={['fas', 'chevron-right']} />
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
