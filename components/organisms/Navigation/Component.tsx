import React from 'react'
import Link from 'next/link'


export default function Navigation (): JSX.Element {
    
    return (
        <nav className='bg-blue-950'>
            <div className='p-4'>
                <Link href='/'>
                    <span className='font-handelson text-white'>Mel's</span>
                    <span className=''>Storage & Garage</span>
                </Link>
                <div>
                    <ul>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </div>
            </div>

        </nav>
    );
};
