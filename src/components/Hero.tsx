import Image from 'next/image';
import React from 'react'

const Hero = () => {
  return (
    <div className='flex flex-col justify-center items-center w-full'>
      <div className='w-full flex justify-center items-center bg-white'>
        <Image src="/cover3.jpg" alt='cover-image' width={1024} height={200} className='w-full h-full' style={{
          filter: 'grayscale(0%) brightness(0.4) contrast(100%)',
          transition: 'filter 0.3s ease',
        }} />
      </div>

      <div className='flex justify-center items-center w-full px-12 bg-yellow-50'>
        <div className='flex flex-col w-1/2 justify-center items-center'>
          <div className='flex w-1/2'>
            About Us
          </div>

          <div className='flex w-1/2'>
            Our journey of compassion and hope
          </div>

          <div className='flex flex-col w-1/2'>
            <div className='flex'>
              Join us on a journey towards compassion and hope. Through our non-profit organisation, we strive to make a positive impact on the world. Give back to your community and be a part of something greater than yourself.
            </div>
            <div className='flex'>
              A transformational journey towards bringing hope and compassion to the world.
            </div>
          </div>

          <div className='flex rounded-lg text-black hover:bg-black hover:text-yellow-50 text-xl px-4 py-2 transition ease-out duration-5000 border border-black'>
            Know More
          </div>
        </div>

        <div className='flex w-1/2 justify-center items-center mt-10 mb-28'>
          <div className='flex w-1/2 flex-col justify-center items-center'>
            <div className='flex'>
              <Image src="/about1.jpg" alt='image2' width={300} height={110} className='rounded-2xl'/>
            </div>

            <div className='flex mt-10'>
              <Image src="/about2.jpg" alt='image2' width={300} height={70} className='rounded-2xl'/>
            </div>
          </div>

          <div className='flex w-1/2 flex-col justify-center items-center mt-32'>
            <div className='flex mt-20'>
              <Image src="/about3.jpg" alt='image2' width={300} height={65} className='rounded-2xl'/>
            </div>

            <div className='flex mt-10'>
              <Image src="/about4.jpg" alt='image2' width={300} height={120} className='rounded-2xl'/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero;