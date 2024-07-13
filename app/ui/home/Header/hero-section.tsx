import Image from 'next/image';
import HomeButton from "./home-button";

export default function HeroSection(){
    return (
        <div className="relative sm:absolute sm:top-0 sm:size-full sm:flex sm:flex-row-reverse sm:items-center lg:flex-row">
            {/* Hero Logos and Text Block Wrapper */}
            <div className='px-3 py-7 flex flex-col gap-7 sm:p-5 sm:gap-16 sm:w-1/2 lg:size-full lg:flex-row lg:p-36'>
                {/* Image Light for Desktop Devices */}
                <div className='hidden lg:flex lg:justify-center lg:items-start lg:w-1/2 lg:mix-blend-difference'>
                    <Image
                        src="/logo-light.svg"
                        alt="Logo"
                        width={111}
                        height={40}
                        className='lg:w-5/6'
                    />
                </div>

                {/* Image Dark for Tablet & Mobile Devices */}
                <div className='lg:hidden'>
                    <Image
                        src="/logo-dark.svg"
                        alt="Logo"
                        width={111}
                        height={40}
                        className='w-3/4 sm:w-11/12'
                    />
                </div>

                {/* Text and Button Wrapper */}
                <div className='lg:w-1/2 lg:flex lg:justify-center lg:ps-20'>
                    <div className='flex flex-col gap-7 sm:gap-16 lg:gap-10 lg:max-w-[350px]'>
                        <p className='body-s lg:body-m text-444444'>The arts in the collection of the Modern Art Gallery all started from a spark of inspiration. Will these pieces inspire you? Visit us and find out.</p>
                        <HomeButton />
                    </div>
                </div>
                
            </div>
        </div>
    );
}