import Link from 'next/link';
import React from 'react'

export default function NavigationLinks (): JSX.Element {
    
    return (
        <ul className="hidden md:flex flex-row md:space-x-8 lg:space-x-14 items-center w-full justify-center">
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
    );
};
