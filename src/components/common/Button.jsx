import React from 'react';

const Button = ({
    Text,
    TextClass,
    className,
}) => {
    return (
        <button className={`${className} font-medium text-lg leading-150 text-white bg-[#2B587F] rounded-[500px] px-[33px] py-[18px] ${TextClass}`}>
            {Text}
        </button>
    );
};

export default Button;
