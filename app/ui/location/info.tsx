

export default function Info(){
    return (
        <div className="relative bg-151515 text-FFFFFF px-5 py-14 sm:p-10 sm:py-20 lg:px-20 lg:py-36">
            {/* Info Wrapper */}
            <div className="flex flex-col gap-10 sm:flex-row sm:gap-20 lg:gap-0">
                {/* Title */}
                <div className="lg:w-1/2">
                    <p className="font-big-shoulders font-black text-[50px] leading-[45px] uppercase sm:leading-[50px] lg:heading-l lg:max-w-[350px]">Our Location</p>
                </div>

                {/* Description */}
                <div className="flex flex-col gap-5 lg:w-1/2">
                    <p className="font-big-shoulders font-black text-[32px] leading-[32px] text-D5966C uppercase lg:heading-s">99 King Street</p>
                    <div className="font-outfit font-light leading-[28px] lg:body-m">
                        <p>Newport</p>
                        <p>RI 02840</p>
                        <p>United States of America</p>
                    </div>
                    <p className="font-outfit font-light leading-[28px] lg:body-m">Our newly opened gallery is located near the Edward King House on 99 King Street, the Modern Art Gallery is free to all visitors and open seven days a week from 8am to 9pm.</p>
                </div>
            </div>
        </div>
    );
}