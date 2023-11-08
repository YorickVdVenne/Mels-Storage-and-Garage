'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { hasValue } from '@/misc/helpers'


export default function Navigation (): JSX.Element {
    const pathname = usePathname()
    
    return (
        <nav className="bg-transparent text-white tracking-widest font-beckman mix-blend-difference text-sm w-full z-10 fixed grid grid-cols-10 gap-4">
            <div className="flex flex-row items-center justify-start p-6 gap-12 px-0 col-start-2 col-end-10">
                <Link 
                    href="/" 
                    onClick={(e) => {
                        if (pathname === '/') {
                            e.preventDefault()
                            window.scrollTo({ top: 0, behavior: 'smooth' })
                        }
                    }}
                >
                    <div className="flex flex-col items-center">
                        <span className="font-beckman text-3xl leading-10 group flex"><span className='group-hover:text-red transition-colors duration-500'>Moto</span><span className='text-red group-hover:text-white transition-all duration-500 group-hover:translate-x-1'>Mel</span></span>
                    </div>
                </Link>
                <ul className="flex flex-row space-x-14 items-center w-full justify-center">
                    <li>
                        <Link 
                            href='#services' 
                            className='hover:text-red transition-colors group' 
                            onClick={(e) => {
                                const section = document.getElementById('services')
                                if (section != null) {
                                    e.preventDefault()
                                    window.scrollTo({
                                    top: section.offsetTop - 100,
                                    behavior: 'smooth'
                                    })
                                }
                            }}
                        >
                            Storage
                            <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-px bg-red"/>
                        </Link>
                    </li>
                    <li>
                        <Link 
                            href='#services' 
                            className='hover:text-red transition-colors group' 
                            onClick={(e) => {
                                const section = document.getElementById('services')
                                if (section != null) {
                                    e.preventDefault()
                                    window.scrollTo({
                                    top: section.offsetTop - 100,
                                    behavior: 'smooth'
                                    })
                                }
                            }}
                        >
                            Maintenance
                            <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-px bg-red"/>
                        </Link>
                    </li>
                    <li>
                        <Link 
                            href='#about' 
                            className='hover:text-red transition-colors group' 
                            onClick={(e) => {
                                const section = document.getElementById('about')
                                if (section != null) {
                                    e.preventDefault()
                                    window.scrollTo({
                                    top: section.offsetTop - 100,
                                    behavior: 'smooth'
                                    })
                                }
                            }}
                        >
                            About Me
                            <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-px bg-red"/>
                        </Link>
                    </li>
                    <li>
                        <Link 
                            href='#contact' 
                            className='hover:text-red transition-colors group' 
                            onClick={(e) => {
                                const section = document.getElementById('contact')
                                if (section != null) {
                                    e.preventDefault()
                                    window.scrollTo({
                                    top: section.offsetTop - 100,
                                    behavior: 'smooth'
                                    })
                                }
                            }}
                        >
                            Contact
                            <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-px bg-red"/>
                        </Link>
                    </li>
                </ul>
            </div>
      </nav>
    );
};
