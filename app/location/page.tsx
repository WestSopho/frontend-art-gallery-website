import Info from '@/app/ui/location/info';
import LocationButton from '../ui/location/location-button';
import Footer from '../ui/location/footer';

import dynamic from 'next/dynamic';
const Map = dynamic(() => import('@/app/ui/location/map'), {ssr: false});


export default function Location(){
    return (
        <div className="min-h-screen">
            {/* Location and Button */}
            <div className='w-full relative'>
                <LocationButton />
                <Map />
            </div>

            {/* Information */}
            <Info />
            
            {/* Footer */}
            <Footer />
        </div>
    );
}