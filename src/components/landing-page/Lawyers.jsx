import React from 'react'
import Lawyers_Image from "../../assets/images/png/lawyers-bg.png";
import Heading from '../common/Heading';
import Paragraph from '../common/Paragraph';
import Lawyer_Rounded from '../../assets/images/png/lawyers-rounded.png'
import Button from '../common/Button';
import { Paragraphs_Lawyer } from '../../utils/helper';

const Lawyers = () => {
    const Lawyers_Bg = {
        backgroundImage: `url(${Lawyers_Image})`,
    };

    return (
        <div style={Lawyers_Bg} className='bg-no-repeat bg-center bg-cover py-[88.5px] relative mb-[80.48px]'>
            <div className="container max-w-[912px] relative z-10">
                <Heading className='text-white text-center mx-auto max-w-[716px]' blackText='California ' orangeText='Sexual Abuse Lawyers ' blackTextOne='Who Are Here for You' />
                {Paragraphs_Lawyer.map((paragraph, index) => (
                    <Paragraph
                        key={index}
                        className={paragraph.className}
                        textName={paragraph.textName}
                        blackText={paragraph.blackText}
                        blueText={paragraph.blueText}
                        blackTextClass={paragraph.blackTextClass}
                    />
                ))}
                <div className='flex justify-center mt-12'>
                    <Button Text='Request A Free Consultation' />
                </div>
            </div>
            <img className='size-[129px] absolute top-12 left-[66px] pointer-events-none' src={Lawyer_Rounded} alt="Lawyer_Rounded" />
        </div>
    )
}

export default Lawyers