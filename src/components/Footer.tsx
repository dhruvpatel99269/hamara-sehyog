"use client"
import Link from 'next/link';
import Image from 'next/image';
import React from 'react'
import { useRouter } from "next/navigation";

const Footer = () => {
  const router = useRouter();

  const onSettings = () => {
    router.push('/sign-up');
  }

  return (
    <>
      <div className='flex justify-center items-center w-full border-b-2 mb-12 border-t border-t-black'>
        <div className='flex flex-col lg:flex-row xl:flex-row justify-center items-center w-5/6 mt-6 mb-10 space-x-4'>
          <div className='w-full md:w-1/2 lg:w-1/4 xl:w-1/4 flex flex-col justify-center items-center mt-6 lg:mt-0 xl:mt-0'>
            <div className='w-full flex justify-start items-center'>
              <Image src="/logo.jpg" alt='logo' width={200} height={200} className='w-1/3 h-1/3' />
            </div>
            <div className='w-full flex justify-start items-center'>
              The power of giving: Support a cause and make a difference through charity.
            </div>
          </div>

          <div className='w-full md:w-1/2 lg:w-1/4 xl:w-1/4 flex flex-col justify-center items-center mt-6 lg:mt-0 xl:mt-0'>
            <div className='flex w-full justify-start items-center font-bold'>
              About Us
            </div>

            <div className='w-full flex flex-col justify-center items-center'>
              <div className='w-full flex justify-start items-center'>
                Our History
              </div>

              <div className='w-full flex justify-start items-center'>
                What we believe
              </div>

              <div className='w-full flex justify-start items-center'>
                Our Programs
              </div>

              <div className='w-full flex justify-start items-center'>
                Partners
              </div>
            </div>
          </div>

          <div className='w-full md:w-1/2 lg:w-1/4 xl:w-1/4 flex flex-col justify-center items-center mt-6 lg:mt-0 xl:mt-0'>
            <div className='flex w-full justify-start items-center font-bold'>
              Ways to give
            </div>

            <div className='w-full flex flex-col justify-center items-center'>
              <div className='w-full flex justify-start items-center'>
                Fund raise
              </div>

              <div className='w-full flex justify-start items-center'>
                Planned giving
              </div>

              <div className='w-full flex justify-start items-center'>
                Brand partnership
              </div>

              <div className='w-full flex justify-start items-center'>
                Legacy giving
              </div>
            </div>
          </div>

          <div className='w-full md:w-1/2 lg:w-1/4 xl:w-1/4 flex flex-col justify-center items-center mt-6 lg:mt-0 xl:mt-0'>
            <div className='flex w-full justify-start items-center font-bold'>
              Contact Info
            </div>

            <div className='w-full flex flex-col justify-center items-center'>
              <div className='w-full flex justify-start items-center'>
                1234 Thornridge Cir. Syracuse,
                Connecticut 56789
                (406) 555-0121
              </div>

              <div className='w-full flex justify-start items-center'>
                mail@example.com
              </div>

              <div className='w-full flex justify-start items-center'>
                Brand partnership
              </div>

              <div className='w-full flex justify-start items-center'>
                Legacy giving
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='flex justify-center items-center w-full'>
        <div className='w-5/6 flex justify-center items-center space-x-12'>
          <div className='flex justify-start items-center mb-12'>
            © 2024 Hamara Sehyog Organization. All rights reserved.
          </div>

          <div className='flex justify-center items-center mb-12 text-gray-500 space-x-2'>
            <div className='flex justify-center items-center'><Image src='/settings.svg' alt='settings' width={100} height={100} className='w-[30px] h-[30px]' /></div>
            <div className='flex justify-center items-center'>
              <Link href='/sign-up' onClick={onSettings} className='flex justify-center items-center'>
                Settings
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer;