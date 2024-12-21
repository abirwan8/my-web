import React from 'react';
import Image from "next/image";
import ButtonPrimary from "./ButtonPrimary";
import ButtonSecondary from "./ButtonSecondary";
import heroImage from '../assets/images/hero.png';

const Hero = () => {
  return (
    <>
        <div className="flex flex-col-reverse md:flex-row justify-between items-center space-x-0 md:space-x-6 space-y-6 md:space-y-0 px-8 py-4">
            <div className="text-center md:text-start space-y-3 md:space-y-6 mt-8 md:mt-0">
                <h1 style={{ fontFamily: 'var(--font-unbounded)' }} className='text-4xl md:text-7xl font-black'>Abi</h1>
                <h1 style={{ fontFamily: 'var(--font-unbounded)' }} className='text-4xl md:text-7xl font-black'>Rahmawan</h1>
                <p className='text-xl md:text-2xl font-bold'>Front End Developer and UI/UX Designer</p>
                <p className='text-xl'>Rorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
                <div className='flex justify-center md:justify-start space-x-4'>   
                    <ButtonSecondary>Hire Me</ButtonSecondary>
                    <ButtonPrimary>Download CV</ButtonPrimary>
                </div>
            </div>
            <div className="image">
                <Image src={heroImage} height={640} alt='hero'></Image>
            </div>
        </div>
    </>
  )
}

export default Hero;