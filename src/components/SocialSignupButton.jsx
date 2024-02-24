
import React from 'react';

const SocialSignupButton = ({ iconSrc, buttonText, onButtonClick }) => {
    return (
        <button
            className="cursor-pointer [border:none] py-[10px] px- bg-lightgray self-stretch rounded-11xl flex flex-row items-center justify-center gap-[0px_20px] whitespace-nowrap hover:bg-silver sm:gap-[0px_10px] sm:text-"
            onClick={onButtonClick}
        >
            <img
                className="h-[30px] w-[30px] relative"
                alt={buttonText}
                src={iconSrc}
            />
            <div className="relative text-lg font-medium font-helvetica-neue text-black text-left">
                {buttonText}
            </div>
        </button>
    );
};

export default SocialSignupButton;
