import React from 'react';
import Image from 'next/image';
import BG from '../../../public/images/hero-bg.png';

const HeroSection = () => {
  return (
    <section className='min-h-fit w-full relative'>
        <Image src={BG} alt='' className='w-full object-cover' />
        <main className='max-w-[1380px] m-auto absolute z-[10] top-0'>
            <div className='h-full w-full flex-between flex-col'>
                <div className='flex-[1] flex-end flex-col gap-5'>
                    <h1 className='text-xl md:text-3xl lg:text-5xl text-white font-Montserrat font-bold'>Welcome To Samridh's Event Management</h1>
                    <p className=''></p>
                </div>
                <div className='flex-[2] flex-center flex-col lg:flex-row gap-5'>
                    <button className='flex-[1] flex-start'></button>
                </div>
            </div>
        </main>
    </section>
  )
}

export default HeroSection
