import Image from 'next/image';
import SocialMediaDiv from './social-media-div';

export default function Footer(){
    return (
        <div className="p-10 bg-151515 flex flex-col gap-5 sm:p-14 sm:flex-row sm:items-start sm:gap-16 lg:px-36 lg:py-16">
            {/* Logo */}
            <Image
                src="/logo-light.svg"
                alt="Logo"
                width={110}
                height={40}
            />
            {/* Text */}
            <div className='flex-grow'>
                <p className='font-outfit text-base text-FFFFFF font-light sm:max-w-[400px] lg:max-w-[430px]'>The Modern Art Gallery is free to all visitors and open seven days a week from 8am to 9pm. Find us at 99 King Street, Newport, USA.</p>
            </div>

            {/* Social Media Icons */}
            <SocialMediaDiv />
        </div>
    );
}