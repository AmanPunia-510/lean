import React from 'react'
import Victim_Img from '../../assets/images/png/victim-image.png'
import Parties_Image from '../../assets/images/png/parties-image.png'
import { Parties_California, Victim_California } from '../../utils/helper'
import Heading from '../common/Heading'
import Paragraph from '../common/Paragraph'

const Victim = () => {
    return (
        <div className='py-[116px]'>
            <div className="container">
                <div className="flex items-center">
                    <div className="w-1/2">
                        <img className='max-w-[537px] w-full object-cover object-center' src={Victim_Img} alt="Victim" />
                    </div>
                    <div className="w-1/2">
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
                <div className="flex items-center pt-[108px]">
                    <div className="w-1/2">
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
                    <div className="w-1/2 flex justify-end">
                        <img className='max-w-[515px] w-full object-cover object-center' src={Parties_Image} alt="Victim" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Victim