import React from 'react'
import California_Img from "../../assets/images/png/california.png";
import Heading from '../common/Heading'
import { California_Data } from '../../utils/helper';
import California_ellipse from '../../assets/images/png/california-ellipse.png'

const California = () => {
    const CaliforniaBg = {
        backgroundImage: `url(${California_Img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
    };
    return (
        <div style={CaliforniaBg} className='pt-14 lg:pb-[74px] pb-14 relative'>
            <div className="container">
                <Heading className='text-white max-w-[900px] mx-auto text-center' blackText='Contact Our&nbsp;' orangeText='California Sexual Abuse ' blackTextOne='Attorneys Today!' />
                <div className="flex flex-wrap justify-center items-center gap-6 w-full pt-10">
                    {California_Data.map((obj, index) => (
                        <div className='max-w-[364px] bg-california-box py-9 px-[30px] rounded-[4px] border border-[#FFFFFF1A]' key={index}>
                            <h3 className='font-semibold text-xl leading-150 text-blue-color text-center'>{obj.title}</h3>
                            <p className='text-paragraph-ba text-center pt-2'>{obj.description}</p>
                            <div className='font-normal text-lg leading-150 text-white text-center pt-5'>
                                <span className='text-primary-color font-semibold'>{obj.pBold}&nbsp;&nbsp;</span>
                                {obj.pNumber}</div>
                            <div className='font-normal text-lg leading-150 text-white text-center pt-2'>
                                <span className='text-primary-color font-semibold'>{obj.tfBold}&nbsp;&nbsp;</span>
                                {obj.tfNumber}</div>
                            <div className='flex justify-center mt-6'>
                                <button className='px-6 py-[7px] text-blue-color font-medium text-lg leading-150 bg-white border border-blue-color rounded-[500px]'>{obj.button}</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <img src={California_ellipse} className='absolute right-0 bottom-20' alt="California_ellipse" />
        </div>
    )
}

export default California;