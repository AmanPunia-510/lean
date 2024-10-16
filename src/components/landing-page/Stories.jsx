import React, { useRef } from "react";
import Slider from "react-slick";
import { Stories_Slider } from "../../utils/helper";
import ICON_DATA from "../common/Icons";
import ArrowText from "../common/ArrowText";
import Heading from "../common/Heading";

function Stories() {
    const sliderRef = useRef(null);
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        ArrowText: false,
    };
    const previousSlide = () => {
        sliderRef.current.slickPrev();
    };
    const nextSlide = () => {
        sliderRef.current.slickNext();
    };
    return (
        <div className="container relative">
            <ArrowText Text='OUR BLOGS' />
            <Heading className='text-center pt-3' blackText='In the Spotlight: ' orangeText='Featured ' blackTextOne='Stories' />
            <Slider ref={sliderRef} {...settings} className="overflow-hidden pt-[67px]">
                {Stories_Slider.map((obj, index) => (
                    <div className="p-[11.5px] border border-[#0000001A] rounded-[4px] w-full" key={index}>
                        <img className="w[341px] h-[225px] object-cover object-center" src={obj.image} alt={obj.alt} />
                        <div className="flex items-center gap-3 pt-5">
                            <div className="flex items-center gap-1">
                                <div>{obj.dateIcon}</div>
                                <div className="text-sm leading-140 font-semibold text-black">{obj.date}</div>
                            </div>
                            <span className="h-4 border-r border-[#8C8C8C]"></span>
                            <div className="flex items-center gap-1">
                                <div>{obj.commentIcon}</div>
                                <div className="text-sm leading-140 font-semibold text-black">{obj.comment}</div>
                            </div>
                        </div>
                        <p className="text-lg leading-120 font-Bahnschrift text-black pt-4">{obj.description}</p>
                        <div className="flex items-baseline gap-1 mt-8">
                            <div className="text-lg leading-150 font-medium">{obj.more}</div>
                            <div>{obj.readArrow}</div>
                        </div>
                    </div>
                ))}
            </Slider>
            <div
                className="absolute top-[65%] -left-12 transform -translate-y-1/2 bg-blue-color text-white p-2 rounded-full cursor-pointer z-10" onClick={previousSlide}>
                <ICON_DATA icons='prevArrow' />
            </div>
            <div
                className="absolute top-[65%] -right-12 transform -translate-y-1/2 bg-blue-color text-white p-2 rounded-full cursor-pointer z-10" onClick={nextSlide}>
                <ICON_DATA icons='nextArrow' />
            </div>
        </div>
    );
}

export default Stories;