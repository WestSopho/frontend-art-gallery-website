import Image from 'next/image';
import { imagesPath } from '@/app/lib/images-path';

export default function Footer(){
    return (
        <div className="p-10 bg-D5966C flex flex-col gap-7 sm:p-14 sm:flex-row sm:items-start sm:gap-16 lg:px-36 lg:py-16">
            {/* Logo */}
            <Image
                src="/logo-dark.svg"
                alt="Logo"
                width={110}
                height={40}
            />
            {/* Text */}
            <div className='flex-grow'>
                <p className='font-outfit text-base text-151515 font-light sm:max-w-[400px] lg:max-w-[430px]'>The Modern Art Gallery is free to all visitors and open seven days a week from 8am to 9pm. Find us at 99 King Street, Newport, USA.</p>
            </div>

            {/* Social Media Icons */}
            <div className="flex justify-start items-center gap-5">
            {imagesPath.map((image, index) => {
                return (
                    <svg key={index} className="w-5 h-5 fill-151515 hover:cursor-pointer hover:fill-FFFFFF"><path d={image}/></svg>
                );
            })}

        </div>
        </div>
    );
    
}