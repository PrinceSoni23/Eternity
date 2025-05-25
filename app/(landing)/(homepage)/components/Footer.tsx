import React from 'react'
import Image from 'next/image';

function page() {
  return (
    <>
    
        <div className='text-white -mt-28'>
            <div className='flex flex-col'>

                <div className='flex items-center justify-center md:justify-end relative'>
                    <div className='flex flex-col justify-center items-start absolute  z-20 w-[50%] gap-4 md:left-16 md:bottom-10'>
                        <h1 className='md:text-2xl font-bold'>Get ready till we bring innovation</h1>
                        <p className='text-sm md:text-lg'>Get a personalized demo to learn how Eternity AI can help you drive measurable business value.</p>
                        <button className='border-2 border-white rounded-full px-7 text-lg font-bold py-2'>Book Demo</button>
                    </div>
                    <div className='relative z-0 top-72'>
                        <Image className='md:h-[400px]' src="/globe01.png" width={500} height={500} alt="" />
                    </div>
                </div>
            </div>
        </div>

        <div className='footer flex h-80 text-white relative'>
            <div className='flex justify-around w-full mt-8'>
                <div className='flex flex-col gap-6 relative z-20'>
                    <h1 className='mb-2 text-xl font-bold'>ETERNITY LABS</h1>
                    <h2>Company</h2>
                    <h3>Careers</h3>
                    <h4>Events</h4>
                    <h5>About Us</h5>
                    <h6 className=''>© 2024 eternitylabs.ai</h6>
                </div>
                <div className='flex flex-col gap-6 relative z-20'>
                    <h1 className='mb-3 font-bold'>Products</h1>
                    <h2>Saar.Ai</h2>
                </div>
                <div className='flex flex-col gap-6 relative z-20'>
                    <h1 className='mb-3 font-bold'>Discover</h1>
                    <h2>Community</h2>
                    <h3>Technical Support</h3>
                    <h4>Privacy Policy</h4>
                    <h5>Terms & Conditions</h5>
                </div>
                <div className='flex flex-col gap-6 relative z-20'>
                    <h1 className='mb-3 font-bold'>Contact</h1>
                    <h2>457, Gomti nagar, Lucknow 220022</h2>
                    <h3>eternity.ai@gmail.com</h3>
                    <h4>+91 99360000000032</h4>
                    <h5>Acterninty Component</h5>
                </div>
            </div>
            <div className='absolute w-full z-10'>
            <Image className='w-full h-80 opacity-10' src="/whiteBG.jpg" width={500} height={500} alt="" />
            </div>
        </div>
    </>
  );
}

export default page