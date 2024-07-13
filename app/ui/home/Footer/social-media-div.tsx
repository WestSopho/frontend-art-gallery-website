import { imagesPath } from "@/app/lib/images-path";

export default function SocialMediaDiv(){
    return (
        <div className="flex justify-start items-center gap-5">
            {imagesPath.map((image, index) => {
                return (
                    <svg key={index} className="w-5 h-5 fill-FFFFFF hover:cursor-pointer hover:fill-D5966C"><path d={image}/></svg>
                );
            })}
        </div>
    );
}