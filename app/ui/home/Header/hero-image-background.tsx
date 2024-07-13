"use client"

import Image from 'next/image'

export default function HeroImageBackground({children}: {children?: React.ReactNode}){
    const isRetina = typeof window !== "undefined" && window.devicePixelRatio > 1;

    return (
        <div className="relative">
            {/* Mobile Hero Image */}
            <Image
                src={isRetina ? '/mobile/image-hero.jpg' : '/mobile/image-hero@2x.jpg'}
                alt="Mobile Background Image"
                width={375}
                height={240}
                className='w-full sm:hidden'
            />

            {/* Tablet Hero Image */}
            <Image 
                src={isRetina ? '/tablet/image-hero.jpg' : '/tablet/image-hero@2x.jpg'}
                alt="Tablet Background Image"
                width={437}
                height={700}
                className='hidden w-3/5 sm:block lg:hidden'
            />



            {/* Desktop Hero Image */}
            <div className='hidden lg:flex w-full'>
                <div className="w-1/3 bg-151515"></div>
                <Image 
                    src={isRetina ? '/desktop/image-hero.jpg' : '/desktop/image-hero@2x.jpg'}
                    alt="Desktop Background Image"
                    width={540}
                    height={800}
                    className='w-1/3' 
                />
                
            </div>
            {children}
        </div>
    );
}