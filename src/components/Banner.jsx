import React from 'react';

const Banner = () => {
    const design = <>
        <div className="absolute flex items-end h-[600px] left-0 bg-gradient-to-r from-[#000] to-[rgba(21,21,21,0)]">
            <div className='text-[#fff] space-y-5 pl-7 w-1/2 mb-10'>
                <h2 className='text-4xl font-bold'> S-VALLEY</h2>
                <p className=''>Here you will find the most exclusive and rare collection of your favourite action hero figures </p>
            </div>
        </div>
    </>
    return (
        <div>
            <div className='h-[600px]'>
                {design}
                <img src='https://i.ibb.co/dk8XHBS/banner.jpg' alt="banner picture" className='w-full h-[600px]' />
            </div>
        </div>


    );

};

export default Banner;