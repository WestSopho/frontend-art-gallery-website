import Map from '@/app/ui/location/map';
import Info from '@/app/ui/location/info';
import LocationButton from '../ui/location/location-button';
import Footer from '../ui/location/footer';

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