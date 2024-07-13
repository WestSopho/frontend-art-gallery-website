"use client";

import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function LocationButton(){
    const router = useRouter();
    return(
        <button className='absolute top-0 z-10 flex flex-row-reverse group sm:left-16 lg:left-24' onClick={() => { router.push('/'); }}>
            {/* Text */}
            <p className='bg-151515 px-7 py-6 font-big-shoulders font-extrabold text-FFFFFF text-xl tracking-[0.2em] uppercase group-hover:bg-D5966C'>Back To Home</p>
            {/* Icon */}
            <div className='bg-D5966C px-3 flex items-center group-hover:bg-151515'>
                <Image 
                    src="/icon-arrow-left.svg"
                    alt="Arrow Down Icon"
                    width={10}
                    height={24}
                />
            </div>
        </button>
    );
}