import React from 'react'
import Image from 'next/image';
import { TiTick } from "react-icons/ti";

const page = () => {
  return (
    <div className='flex flex-col justify-center items-center w-full'>
      <div className="relative bg-cover flex justify-center items-center bg-center w-full h-[60vh] mt-0" style={{ backgroundImage: 'url(/work-main.jpg)' }}>
        {/* Overlay for dull effect */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative container mx-auto h-full flex flex-col justify-center items-start text-white">
          <h1 className="text-9xl md:text-7xl font-semibold">
            About Us
          </h1>
          <p className="mt-4 font-light text-base md:text-lg max-w-2xl text-left">
            Learn more about our non-profit organization and our mission to make a positive impact on the world through our charitable initiatives
          </p>
        </div>
      </div>

      <div className='flex flex-col justify-center items-center w-full bg-orange-50'>
        <div className='w-4/5 flex justify-center items-center'>
          <div className='flex flex-col w-1/2 justify-center items-center'>
            <div className='flex w-full'>
              Making the world a better place
            </div>

            <div className='flex w-full'>
              Join Non-profit Organisation in our mission of making the world a better place. We strive to create positive change through various charitable initiatives and community outreach programs.
            </div>

            <div className='flex flex-col w-full border-l px-6 mt-8'>
              <div className='flex w-full'>
                Changing Lives
              </div>
              <div className='flex w-full'>
                Improving lives one step at a time with our non-profit organization.
              </div>
              <div className='flex mt-8 w-full'>
                Building Futures
              </div>
              <div className='flex w-full'>
                Creating opportunities and a better future with our non-profit organization.
              </div>
            </div>
          </div>

          <div className='flex w-1/2 justify-center items-center mb-28 top-[-200px] relative'>
            <div className='flex w-1/2 flex-col justify-center items-center mt-12'>
              <div className='flex mt-20'>
                <Image src="/about1.jpg" alt='image2' width={300} height={60} className='rounded-2xl' />
              </div>

              <div className='flex mt-10'>
                <Image src="/about2.jpg" alt='image2' width={300} height={110} className='rounded-2xl' />
              </div>
            </div>

            <div className='flex w-1/2 flex-col justify-center items-center ml-12'>
              <div className='flex'>
                <Image src="/about3.jpg" alt='image2' width={300} height={100} className='rounded-2xl' />
              </div>

              <div className='flex mt-10'>
                <Image src="/about4.jpg" alt='image2' width={300} height={120} className='rounded-2xl' />
              </div>
            </div>
          </div>
        </div>

        <div className='flex justify-center items-center w-4/5 bg-white border-2 rounded-2xl'>
          <div className='flex flex-col w-1/3 justify-center items-center border-r px-6 py-6'>
            <div className='flex w-full py-2'>
              01.
            </div>

            <div className='flex w-full py-2'>
              Prove every project
            </div>

            <div className='flex w-full py-2'>
              Our Non-profit Organisation delivers transparent and accountable results for every project we undertake.
            </div>
          </div>

          <div className='flex flex-col w-1/3 justify-center items-center border-r px-6 py-6'>
            <div className='flex w-full py-2'>
              02.
            </div>

            <div className='flex w-full py-2'>
              Open book
            </div>

            <div className='flex w-full py-2'>
              We firmly believe in transparency and strive to maintain an open book approach with all stakeholders.
            </div>
          </div>

          <div className='flex flex-col w-1/3 justify-center items-center px-6 py-6'>
            <div className='flex w-full py-2'>
              03.
            </div>

            <div className='flex w-full py-2'>
              Local partnerships
            </div>

            <div className='flex w-full py-2'>
              Building strong relationships with the community is vital and we work closely with local partners.
            </div>
          </div>
        </div>

        <div className='flex flex-col w-4/5 top-[150px] relative'>
          <Image src="/work2.jpg" alt='work-image' width={1000} height={1000} className='w-full h-[80vh] rounded-3xl' />
        </div>
      </div>

      <div className='flex flex-col justify-center items-center w-4/5 mt-32'>
        <div className='flex flex-col justify-center items-center w-2/3 mt-32'>
          <div className='flex justify-center items-center'>
            Make a Difference Today
          </div>

          <div className='flex justify-center items-center'>
            Your contribution matters. Support our cause by making a donation.
          </div>

          <div className='flex justify-center items-center'>
            Every dollar counts and helps us bring hope, joy, and essential resources to those in need. Together, we can create a better tomorrow.
          </div>

          <div className='flex cursor-pointer justify-center items-center w-fit px-6 py-4 text-white bg-green-600 hover:bg-green-700 transition duration-800 rounded-xl'>
            Donate Today
          </div>
        </div>
      </div>

      <div className='flex justify-center items-center bg-orange-50 w-full mt-24'>
        <div className='flex justify-center items-center w-4/5 p-6 mt-24 mb-24'>
          <div className='flex justify-center items-center w-1/2'>
            <Image src="/about5.jpg" alt='' width={300} height={300} className='rounded-3xl w-4/5 h-4/5 shadow-2xl' />
          </div>

          <div className='flex flex-col justify-center items-center w-1/2'>
            <div className='flex justify-center items-center w-full'>
              Our Vision & Mission
            </div>

            <div className='flex justify-center items-center w-full'>
              Non-profit Organisation&apos;s vision is to create a world where all people have equal access to education and healthcare. Our mission is to provide the necessary resources and support to underprivileged communities to improve their quality of life.
            </div>

            <div className='flex flex-col justify-center items-center w-full'>
              <div className='flex justify-start items-center w-full'>
                <div className='flex justify-start items-center w-fit h-fit'>
                  <TiTick className='w-[30px] h-[30px]'/>
                </div>
                <div className='flex justify-start items-center'>
                Changing lives improving lives one step at a time with our non-profit organization.
                </div>
              </div>
              <div className='flex justify-start items-center w-full'>
                <div className='flex justify-start items-center w-fit h-fit'>
                  <TiTick className='w-[30px] h-[30px]'/>
                </div>
                <div className='flex justify-start items-center'>
                Building futures creating opportunities and a better future with our non-profit organization.
                </div>
              </div>
              <div className='flex justify-start items-center w-full'>
                <div className='flex justify-start items-center w-fit h-fit'>
                  <TiTick className='w-[30px] h-[30px]'/>
                </div>
                <div className='flex justify-start items-center'>
                Movement for change creating impact, promoting change through non-profit work.
                </div>
              </div>
              <div className='flex justify-start items-center w-full'>
                <div className='flex justify-start items-center w-fit h-fit'>
                  <TiTick className='w-[30px] h-[30px]'/>
                </div>
                <div className='flex justify-start items-center'>
                Lasting impact our charity strives for long-term impact in communities we serve.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page;