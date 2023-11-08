import Image from 'next/image';
import React from 'react'

export default function About (): JSX.Element {
    
    return (
        <div id='about' className='grid grid-cols-10 gap-4'>
            <div className='col-start-2 col-end-10 pt-20 pb-20'>
                <h2 className="relative w-fit text-white text-3xl after:block after:w-16 after:h-1 after:bg-red after:content-'' after:absolute -after:bottom-1 after:left-1/10 after:rounded-sm">
                    About Me
                </h2>
                <div className='grid grid-cols-10 gap-4 mt-8'>
                    <div className='col-start-1 col-end-6'>
                        <p className='text-white'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div>
                    <div className='col-start-7 col-end-12'>
                        <div className='bg-red rounded-md'>
                            <Image className='opacity-80 rounded-md contrast-125 drop-shadow-md brightness-110 saturate-150' src='/images/profileImage.jpg' alt='Me' width={1000} height={1000} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
