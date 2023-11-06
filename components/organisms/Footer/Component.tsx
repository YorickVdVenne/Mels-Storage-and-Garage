import React from 'react'
import Link from 'next/link'

export default function Footer (): JSX.Element {
    const currentYear = new Date().getFullYear();
    
    return (
        <footer className="bg-navy text-white tracking-widest font-beckman text-sm w-full z-10 grid grid-cols-10 gap-4">
            <div className="flex flex-row items-center justify-between p-6 gap-12 px-0 col-start-2 col-end-10">
                <Link className='flex-1 flex justify-start' href="/">
                    <div className="flex flex-col items-center">
                        <span className="font-beckman text-white text-2xl leading-10">Moto<span className='text-red'>Mel</span></span>
                    </div>
                </Link>
                <span className='flex items-center flex-1 justify-center gap-1'>
                    <span className='text-3xl'>&#169;</span>{currentYear}
                </span>
                <span className='flex-1 flex justify-end gap-1'>
                    Website Built by<a className='hover:text-red hover:underline' href='https://yorick.vercel.app/' target='_blank'>Yorick</a>
                </span>
            </div>
      </footer>
    );
};
