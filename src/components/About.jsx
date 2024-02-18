import React from 'react';

const About = () => {

    const backgroundStyle = {
        backgroundImage: 'url("https://i.ibb.co/0pbPFq6/background.jpg")',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        width: '100%',
        height: '25rem',
    }
    
    return (
        <div>
            <div className='flex w-[90%] m-auto mt-10'>
                <div className='w-[50%] my-20 '>
                    <div className="w-[90%]">
                        <h2 className='text-2xl content-center'>ABOUT US</h2><br />
                        <p>Welcome to S-Valley, your one-stop shop for all things superhero! Dive into a world of thrilling adventures with our vast selection of authentic Marvel action figures. From iconic heroes like Spider-Man and Iron Man to formidable villains like Thanos and Loki, our store caters to fans of all ages. Embark on epic journeys and bring your favorite comic book moments to life with our meticulously crafted collectibles</p>
                    </div>

                </div>
                <div className='w-[50%]'>
                    <div style={backgroundStyle}></div>
                </div>
            </div>
        </div>
    );
};

export default About;