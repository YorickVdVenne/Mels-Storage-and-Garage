import React from 'react'
import Link from 'next/link'


export default function Navigation (): JSX.Element {
    
    return (
        <nav className="bg-transparent text-white tracking-widest font-beckman mix-blend-difference text-sm w-full z-10 fixed grid grid-cols-10 gap-4">
            <div className="flex flex-row items-center justify-start p-6 gap-12 px-0 col-start-2 col-end-10">
                <Link href="/">
                    <div className="flex flex-col items-center">
                        <span className="font-beckman text-white text-4xl leading-10">Moto<span className='text-red'>Mel</span></span>
                    </div>
                </Link>
                <ul className="flex flex-row space-x-12 items-center w-full justify-center">
                    <li className=''>Storage</li>
                    <li className=''>Maintenance</li>
                    <li className=''>About Me</li>
                    <li className=''>Contact</li>
                </ul>
            </div>
      </nav>
    );
};
