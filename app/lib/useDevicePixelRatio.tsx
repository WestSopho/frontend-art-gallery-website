"use client";

import { useEffect, useState } from 'react';

export default function useDevicePixelRatio(initialValue: number){
    const [value, setValue] = useState(initialValue);

    useEffect(() => {
        console.log(window.devicePixelRatio);
        setValue(window.devicePixelRatio);
    }, []);

    return value;
}