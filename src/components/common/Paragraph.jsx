import React from 'react';

const Paragraph = ({
    className,
    textName,
    blackText,
    blackTextClass,
    blueTextClass,
    blueText,
    blackTextOne
}) => {
    return (
        <p className={`text-light-black ${className}`}>
            {textName}
            <span className={`${blackTextClass}`}>{blackText}</span>
            <span className={`text-[#2B587F] font-bold ${blueTextClass}`}>{blueText}</span>
            <span className={`${blackTextClass}`}>{blackTextOne}</span>
        </p>
    );
};

export default Paragraph;