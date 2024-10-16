import React from 'react'
import ArrowText from '../common/ArrowText'
import Fox_News from '../../assets/images/png/fox-news.png'
import Nbc_News from '../../assets/images/png/nbc-news.png'
import Minutes_img from '../../assets/images/png/minutes.png'
import Esp_img from '../../assets/images/png/espa.png'
import Feature_ellipse from '../../assets/images/png/feature-ellipse.png'
import half_circle_ellipse from '../../assets/images/png/half-circle.png'

const Feature = () => {
    return (
        <div className='py-20 relative'>
            <div className="container max-w-[988px]">
                <ArrowText Text='FEATURED ON' />
                <div className='flex items-center gap-6 pt-12 justify-center'>
                    <img className='w-[210px] h-[120px] hover:shadow-feature-shadow transition-all duration-300' src={Fox_News} alt="Fox News" />
                    <img className='w-[210px] h-[120px] hover:shadow-feature-shadow transition-all duration-300' src={Nbc_News} alt="Nbc News" />
                    <img className='w-[210px] h-[120px] hover:shadow-feature-shadow transition-all duration-300' src={Minutes_img} alt="Minutes img" />
                    <img className='w-[210px] h-[120px] hover:shadow-feature-shadow transition-all duration-300' src={Esp_img} alt="Esp img" />
                </div>
            </div>
            <img className='absolute pointer-events-none top-[149px] left-0' src={Feature_ellipse} alt="Feature_ellipse" />
            <img className='absolute pointer-events-none top-[117px] right-0 size-14' src={half_circle_ellipse} alt="half_circle_ellipse" />
        </div>
    )
}

export default Feature
