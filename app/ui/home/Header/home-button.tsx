"use client";

import Image from 'next/image';
import { useRouter } from 'next/navigation'

export default function HomeButton(){
    const router = useRouter();

    return (
        <button className='flex group' onClick={() => {router.push('/location');}}>
            {/* Text */}
            <p className='bg-151515 px-7 py-6 font-big-shoulders font-extrabold text-FFFFFF text-xl tracking-[0.2em] uppercase group-hover:bg-D5966C'>Our Location</p>
            {/* Icon */}
            <div className='bg-D5966C px-3 flex items-center group-hover:bg-151515'>
                <Image 
                    src="/icon-arrow-right.svg"
                    alt="Arrow Down Icon"
                    width={10}
                    height={24}
                />
            </div>
        </button>
    );
}