"use client";

import Image from 'next/image';
import { useEffect, useState } from 'react';

interface Size {
    mobile:{
        width: number;
        height: number;
    };
    tablet:{
        width: number;
        height: number;
    };
    desktop:{
        width: number;
        height: number;
    };
}

interface ImageWrapperProps {
    filename: string;
    retinaFilename: string;
    alt: string;
    size: Size;
    gridProps?: string;
}

export default function ImageWrapper({filename, retinaFilename, alt, size, gridProps}: ImageWrapperProps){
    const [isRetina, setIsRetina] = useState(false);
    useEffect(() => {
        if (globalThis.window) {
            setIsRetina(window.devicePixelRatio > 1);
        }
    }, []);

    return (
        <div className={`relative ${gridProps}`}>
            {/* Image for Mobile Devices */}
            <Image
                src={isRetina ? '/mobile/' + filename : '/mobile/' + retinaFilename}
                alt={alt}
                width={size.mobile.width}
                height={size.mobile.height}
                quality={100}
                className='size-full object-cover sm:hidden'
            />

            {/* Image for Tablet Devices */}
            <Image
                src={isRetina ? '/tablet/' + filename : '/tablet/' + retinaFilename}
                alt={alt}
                width={size.tablet.width}
                height={size.tablet.height}
                quality={100}
                className='hidden sm:block sm:size-full sm:object-cover lg:hidden'
            />

            {/* Image for Desktop Devices */}
            <Image
                src={isRetina ? '/desktop/' + filename : '/desktop/' + retinaFilename}
                alt={alt}
                width={size.desktop.width}
                height={size.desktop.height}
                quality={100}
                className='size-full object-cover hidden lg:block'
            />
        </div>
    );
}