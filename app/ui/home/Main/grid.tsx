import ImageWrapper from './image-wrapper';
import TextWrapper from './text-wrapper';
import { imageSizes } from '@/app/lib/image-sizes';

export default function Grid(){
    return (
        <div className='px-4 py-20 sm:px-5 sm:py-48 lg:p-36 xl:p-48 grid auto-rows-max grid-cols-1 gap-5 sm:grid-cols-3'>
            <ImageWrapper filename='image-grid-1.jpg' retinaFilename='image-grid-1@2x.jpg' alt='Image Grid 1' size={imageSizes[0]} gridProps='sm:order-2 sm:col-start-2 sm:col-span-2'/>
            <TextWrapper title='Your Day at the Gallery' description='Wander through our distinct collections and find new insights about our artists. Dive into the details of their creative process.' padding='p-5' bgColor='bg-FCFAF9 sm:bg-FFFFFF' textColor='text-151515' gridProps='sm:order-1 sm:col-start-1 sm:col-span-1'/>
            <ImageWrapper filename='image-grid-2.jpg' retinaFilename='image-grid-2@2x.jpg' alt='Image Grid 2' size={imageSizes[1]} gridProps='sm:order-3 sm:col-start-1 sm:col-span-2'/>
            <div className='sm:order-4 grid grid-cols-1 grid-rows-3 gap-y-5'>
                <ImageWrapper filename='image-grid-3.jpg' retinaFilename='image-grid-3@2x.jpg' alt='Image Grid 3' size={imageSizes[2]} gridProps='row-span-1'/>
                <TextWrapper title='Come & Be Inspired' description='We’re excited to welcome you to our gallery and see how our collections influence you.' padding='p-5' bgColor='bg-151515' textColor='text-FFFFFF' gridProps='row-start-2 row-span-2'/>
            </div>
        </div>
    );
}