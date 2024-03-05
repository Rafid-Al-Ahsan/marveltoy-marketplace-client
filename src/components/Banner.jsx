import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Banner = () => {

    useEffect(() => {
        AOS.init({
            // Global settings:
            disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
            startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
            initClassName: 'aos-init', // class applied after initialization
            animatedClassName: 'aos-animate', // class applied on animation
            useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
            disableMutationObserver: false, // disables automatic mutations' detections (advanced)
            debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
            throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

            // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
            offset: 120, // offset (in px) from the original trigger point
            delay: 500, // values from 0 to 3000, with step 50ms
            duration: 900, // values from 0 to 3000, with step 50ms
            easing: 'ease', // default easing for AOS animations
            once: true, // whether animation should happen only once - while scrolling down
            mirror: false, // whether elements should animate out while scrolling past them

            // Anchor placement: defines which position of the element regarding to window should trigger the animation
            anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
        });
    }, []);

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
            <div className='h-[600px]' data-aos="fade-right">
                {design}
                <img src='https://i.ibb.co/dk8XHBS/banner.jpg' alt="banner picture" className='w-full h-[600px]' />
            </div>
        </div>


    );

};

export default Banner;