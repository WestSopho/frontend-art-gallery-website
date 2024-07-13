
interface TextWrapperProps{
    title: string;
    description: string;
    padding: string;
    bgColor: string;
    textColor: string;
    gridProps: string;
}

export default function TextWrapper({title, description, padding, bgColor, textColor, gridProps}: TextWrapperProps){
    return(
        <div className={`${padding} flex flex-col justify-center gap-5 break-words ${bgColor} ${textColor} ${gridProps}`}>
            <div className="sm:max-w-[350px] flex flex-col gap-3">
                <p className="heading-m sm:heading-s lg:heading-m uppercase">{title}</p>
                <p className="body-m">{description}</p>
            </div>
        </div>
    );
}