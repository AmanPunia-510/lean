import React from 'react'
import Victim_Img from '../../assets/images/png/victim-image.png'
import Parties_Image from '../../assets/images/png/parties-image.png'
import { Parties_California, Victim_California } from '../../utils/helper'
import Heading from '../common/Heading'
import Paragraph from '../common/Paragraph'

const Victim = () => {
    return (
        <div className='lg:py-[116px] py-20'>
            <div className="container">
                <div className="flex items-center lg:flex-row flex-col">
                    <div className="lg:w-1/2 w-full max-lg:items-center max-lg:justify-center max-lg:flex">
                        <img className='lg:max-w-[537px] max-w-[700px] w-full object-cover object-center' src={Victim_Img} alt="Victim" />
                    </div>
                    <div className="lg:w-1/2 w-full lg:mt-0 mt-6">
                        <Heading className='text-custom-3xl' blackText='Representation for ' orangeText='Sexual Abuse Victims' blackTextOne=' Across California' />
                        <Paragraph className='text-thin-black pt-4 pb-6' textName='Our California sexual abuse lawyers have over 20 years of experience litigating various cases of sexual violence. This includes instances of:' />
                        {Victim_California.map((obj, index) => (
                            <div className={`flex items-center gap-4 ${index === 0 ? "pt-0" : "pt-[18px]"}`}>
                                <span>{obj.rightTick}</span>
                                <p className={`text-lg leading-120 ${index === 2 ? "text-primary-color underline" : ""}`}>{obj.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex items-center lg:pt-[108px] pt-20 lg:flex-row flex-col-reverse">
                    <div className="lg:w-1/2 w-full lg:mt-0 mt-6">
                        <Heading className='text-custom-3xl' blackText='We Pursue ' orangeText='All Liable' blackTextOne=' Parties' />
                        <Paragraph className='text-thin-black pt-4 pb-6' textName='At Manly, Stewart & Finaldi, we understand that in cases of sexual abuse, there are often other parties that may share liability for the abuser’s despicable actions. Therefore, we strive to hold all responsible parties accountable for their part in your case. This includes:' />
                        {Parties_California.map((obj, index) => (
                            <div className={`flex items-center gap-4 ${index === 0 ? "pt-0" : "pt-[18px]"}`}>
                                <span>{obj.rightTick}</span>
                                <p className={`text-lg leading-120 ${index === 2 ? "text-primary-color underline" : ""}`}>{obj.text}</p>
                            </div>
                        ))}
                        <Paragraph className='text-thin-black pt-6' textName='Any and all parties who had some direct or indirect part in your case deserve to be held accountable to the fullest extent.' />
                    </div>
                    <div className="lg:w-1/2 w-full flex justify-end">
                        <img className='lg:max-w-[515px] md:max-w-[700px] w-full object-cover object-center' src={Parties_Image} alt="Victim" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Victim