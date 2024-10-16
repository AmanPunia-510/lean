import React from 'react'
import ArrowText from '../common/ArrowText'
import Heading from '../common/Heading'
import {Choose_Us} from '../../utils/helper'
import Choose_Us_Img from '../../assets/images/png/choose-us.png'

const Choose = () => {
    return (
        <div className='relative'>
            <div div className='container pt-24 pb-[124px]' >
                <ArrowText Text='WHY CHOOSE US' />
                <Heading className='text-center pt-3' blackText='What&nbsp;' orangeText='Sets Us&nbsp;' blackTextOne='Apart' />
                <div className='flex items-center justify-center max-lg:flex-wrap gap-6 pt-[52px]'>
                    {Choose_Us.map((obj, index) => (
                        <div className='md:max-w-[332px] lg:max-w-[364px] w-full py-10 px-[31px] border border-[#0000001A] rounded-[4px]' key={index}>
                            <div className='size-[71px] rounded-full bg-[#EAEEF2] flex justify-center items-center mx-auto'>{obj.image}</div>
                            <h2 className='font-Bahnschrift text-2xl leading-120 text-black text-center font-semibold mt-6'>{obj.title}</h2>
                            <p className='text-[#4D4D4D] text-center mt-3'>{obj.description}</p>
                        </div>
                    ))}
                </div>
                <img src={Choose_Us_Img} className='absolute top-14 right-0 pointer-events-none' alt="Choose_Us_Img" />
            </div>
        </div >
    )
}

export default Choose