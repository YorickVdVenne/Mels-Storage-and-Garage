import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

export default function Header (): JSX.Element {
    
    return (
        <header className='font-poppins text-white grid grid-cols-10 gap-4'>
            <div className='relative col-span-full'>
                <Image 
                    className='absolute h-full w-screen left-1/2 -translate-x-1/2 overflow-hidden object-cover grayscale-[75%] contrast-125 saturate-200 bg-navy opacity-50' 
                    src={'/images/motor10.jpg'} 
                    alt='motor' 
                    width={1000} 
                    height={1000}
                />
                <div className='relative w-full min-h-[80vh] max-h-[100rem] items-center grid grid-cols-10 gap-4'>
                    <div className='flex flex-col col-start-2 col-end-5'>
                        <h1 className='font-commons text-7xl'>Motorcycle storage</h1>
                        <p className='font-commons text-xl mt-4'>
                            Looking for a place to safely store your bike during the winters? Or while on vacations? You don't want to pay big bucks for storing at dealerships, come check out <span className="font-beckman text-xl leading-10 group"><span className='group-hover:text-red transition-colors duration-500'>Moto</span><span className='text-red group-hover:text-white transition-all duration-500'>Mel</span></span>!
                        </p>
                    </div>
                </div>
            </div>
        </header>
    );
};
