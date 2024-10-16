import React from 'react'
import ArrowText from '../common/ArrowText'
import Time from '../../assets/images/png/time.png'
import New_York from '../../assets/images/png/new-york.png'
import Today from '../../assets/images/png/today.png'
import Minutes_img from '../../assets/images/png/minutes.png'
import Wall_Street from '../../assets/images/png/wall-street.png'
import Feature_ellipse from '../../assets/images/png/feature-ellipse.png'

const OurFirm = () => {
    return (
        <div className='pb-[103px] pt-[140px] relative'>
            <div className="container max-w-[988px]">
                <ArrowText Text='Our firm in the news' />
                <div className='flex items-center gap-6 pt-12 justify-center'>
                    <img className='w-[210px] h-[120px] hover:shadow-feature-shadow transition-all duration-300' src={Time} alt="Fox News" />
                    <img className='w-[210px] h-[120px] hover:shadow-feature-shadow transition-all duration-300' src={New_York} alt="Nbc News" />
                    <img className='w-[210px] h-[120px] hover:shadow-feature-shadow transition-all duration-300' src={Today} alt="Nbc News" />
                    <img className='w-[210px] h-[120px] hover:shadow-feature-shadow transition-all duration-300' src={Minutes_img} alt="Minutes img" />
                    <img className='w-[210px] h-[120px] hover:shadow-feature-shadow transition-all duration-300' src={Wall_Street} alt="Esp img" />
                </div>
            </div>
            <img className='absolute pointer-events-none top-[117px] right-0 rotate-180' src={Feature_ellipse} alt="Feature_ellipse" />
        </div>
    )
}

export default OurFirm;
