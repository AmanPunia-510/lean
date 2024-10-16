import React from 'react';
import ICON_DATA from './Icons';

const ArrowText = ({
    Text,
    TextClass,
    className,
}) => {
    return (
        <div className={`flex items-center justify-center gap-1 ${className} ${TextClass}`}>
            <div className={`${className} ${TextClass}`}>
                <ICON_DATA icons='horizontalArrow' />
            </div>
            <div className='font-medium text-lg leading-150 text-[#2B587F]'>{Text}</div>
        </div>
    );
};

export default ArrowText;
