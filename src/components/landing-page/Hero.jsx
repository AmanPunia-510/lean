import React from 'react'
import NavBar from '../common/NavBar'
import { Hero_Bg } from '../../utils/helper'
import Hero_Heading_Image from '../../assets/images/png/hero-heading-arrow.png'
import Paragraph from '../common/Paragraph'
import Straight_Line from "../../assets/images/png/straight-line.png"
import Button from '../common/Button'
import Weigh_Image from '../../assets/images/png/weigh.png'
import Pause_Svg from '../../assets/images/png/pause-btn.png'
import Hero_Dots from '../../assets/images/png/hero-dots.png'

const Hero = () => {
    return (
        <div style={Hero_Bg}>
            <NavBar />
            <div className="container pt-[106px] pb-12">
                <div className='relative'>
                    <h2 className='font-Bahnschrift text-nowrap text-custom-6xl font-bold text-white leading-120'>America’s Leading</h2>
                    <img className='top-[30px] xl:top-0 left-[664px] absolute w-[150px] xl:w-[385px] xl:h-[121px]' src={Hero_Heading_Image} alt="heroHeadingImage" />
                </div>
                <h2 className='font-Bahnschrift text-custom-6xl font-bold text-white leading-120'><span className='text-primary-color font-light font-Bahnschrift'>Sexual Abuse&nbsp;</span>Law Firm</h2>
                <div className="flex items-center max-lg:flex-wrap mt-9 gap-11">
                    <div className='lg:max-w-[386px] w-full'>
                        <Paragraph blackText={'We are one of the nation’s leading law firms for representing survivors of sexual violence. our renowned sexual abuse attorneys are not afraid to stand up to any institution.'} />
                        <img className='w-[193px] mt-6' src={Straight_Line} alt="straightLine" />
                        <Button className='px-8 mt-9' Text='Request A Free Consultation' />
                    </div>
                    <div className='w-full lg:max-w-[710px]' >
                        <div className='relative'>
                            <img className='w-full h-[377px] relative z-10 object-cover object-center' src={Weigh_Image} alt="WeighImage" />
                            <img className='h-[51px] w-[51px] absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 cursor-pointer z-20' src={Pause_Svg} alt="PauseSvg" />
                            <img className='absolute -right-7 -top-2' src={Hero_Dots} alt="HeroDots" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;