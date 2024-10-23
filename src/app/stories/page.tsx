import React from 'react'
import Image from 'next/image';

const page = () => {
  return (
    <div className='flex flex-col justify-center items-center w-full'>
      <div className="relative bg-cover flex justify-center items-center bg-center w-full h-[60vh] mt-0" style={{ backgroundImage: 'url(/work-main.jpg)' }}>
        {/* Overlay for dull effect */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative container mx-auto h-full flex flex-col justify-center items-start text-white">
          <h1 className="text-9xl md:text-7xl font-semibold">
            Stories
          </h1>
          <p className="mt-4 font-light text-base md:text-lg max-w-2xl text-left">
            Learn more about our non-profit organization and our mission to make a positive impact on the world through our charitable initiatives
          </p>
        </div>
      </div>

      <div className='flex justify-center items-center w-4/5 mt-24 mb-24'>
        <div className='flex justify-center items-center w-1/4'>
          OUT IMPACT
        </div>

        <div className='flex flex-col justify-center items-center w-3/4'>
          <div className='flex justify-center items-center w-full'>
            The impact we have made in our community
          </div>

          <div className='flex justify-center items-center w-full'>
            Join us on a journey towards compassion and hope. Through our non-profit organisation, we strive to make a positive impact on the world. Give back to your community and be a part of something greater than yourself.
          </div>
        </div>
      </div>

      <div className='flex flex-col justify-center items-center w-full mt-24 mb-24'>
        <div className='flex justify-center items-center w-4/5 space-x-6'>
          <div className='flex justify-center items-center w-2/6'>
            <Image src="/stories1.jpg" alt="story1" width={400} height={200} className='w-full h-2/3 rounded-2xl' />
          </div>

          <div className='flex justify-center items-center w-1/6'>
            <Image src="/stories2.jpg" alt="story1" width={200} height={200} className='w-full h-2/3 rounded-2xl' />
          </div>

          <div className='flex justify-center items-center w-1/6'>
            <Image src="/stories3.jpg" alt="story1" width={200} height={200} className='w-full h-2/3 rounded-2xl' />
          </div>
        </div>

        <div className='flex justify-around items-center w-full px-32 my-24'>
          <div className='flex flex-col justify-center items-center w-1/4 border-r-2'>
            <div className='flex'>
              20M+
            </div>
            <div className='flex'>
              People served worldwide
            </div>
          </div>

          <div className='flex flex-col justify-center items-center w-1/4 border-r-2'>
            <div className='flex'>
              142,790
            </div>
            <div className='flex'>
              Projects funded
            </div>
          </div>

          <div className='flex flex-col justify-center items-center w-1/4 border-r-2'>
            <div className='flex'>
              1.8M
            </div>
            <div className='flex'>
              People to take action
            </div>
          </div>

          <div className='flex flex-col justify-center items-center w-1/4'>
            <div className='flex'>
              5,246
            </div>
            <div className='flex'>
              Partner Organization
            </div>
          </div>
        </div>
      </div>

      <div className='flex justify-center items-center w-full bg-orange-50'>
        <div className='flex flex-col justify-center items-center w-4/5'>
          <div className='flex justify-center items-center w-full bg-[#66B40B] py-10 px-6 rounded-xl top-[-60px] relative'>
            <div className='flex flex-col justify-start items-center w-3/4'>
              <div className='flex'>
                We can create a better tomorrow
              </div>
              <div className='flex'>
                Every dollar counts and helps us bring hope and essential resources to those in need.
              </div>
            </div>

            <div className='flex justify-start items-center w-fit bg-white text-black hover:bg-black hover:text-white rounded-xl px-4 py-2 transition duration-1000'>
              Donate Now
            </div>
          </div>

          <div className='flex flex-col justify-center items-center w-full mb-24'>
            <div className='flex justify-center items-center w-1/2'>
              Inspiring tales of transformation
            </div>

            <div className='flex justify-center items-center w-1/2'>
              Get inspired by the remarkable stories of transformation through our non-profit organization. Join us in making a positive impact today.
            </div>

            <div className='flex justify-center items-center w-full bg-white rounded-3xl border-2 mx-12 my-24'>
              <div className='flex flex-col justify-center items-center w-1/2 border-r-2'>
                <div className='flex justify-center items-center w-3/4 top-[-40px] relative'>
                  <Image src="/stories5.jpg" alt='meeting image' width={200} height={200} className='w-full h-2/3 rounded-xl' />
                </div>

                <div className='flex justify-start items-center w-3/4'>
                  A Better Education for Everyone
                </div>

                <div className='flex justify-start items-center w-3/4'>
                  Our non-profit organisation is dedicated to improving access to education for all. With your support, we can help provide the resources and opportunities needed for success.
                </div>

                <div className='flex justify-start items-center w-3/4'>
                  Read More
                </div>
              </div>

              <div className='flex flex-col justify-center items-center w-1/2 border-r-2'>
                <div className='flex justify-center items-center w-3/4 top-[-40px] relative'>
                  <Image src="/stories6.jpg" alt='meeting image' width={400} height={300} className='w-full h-2/3 rounded-xl' />
                </div>

                <div className='flex justify-start items-center w-3/4'>
                  The Special One
                </div>

                <div className='flex justify-start items-center w-3/4'>
                  Join our non-profit organisation to help create a brighter future for those in need. Every donation counts towards making a difference in the lives of those less fortunate.
                </div>

                <div className='flex justify-start items-center w-3/4'>
                  Read More
                </div>
              </div>
            </div>

            <div className='flex justify-center items-center w-full bg-white rounded-3xl border-2 mx-12 mt-24 mb-12'>
              <div className='flex flex-col justify-center items-center w-1/2 border-r-2'>
                <div className='flex justify-center items-center w-3/4 top-[-40px] relative'>
                  <Image src="/stories7.jpg" alt='meeting image' width={200} height={200} className='w-full h-2/3 rounded-xl' />
                </div>

                <div className='flex justify-start items-center w-3/4'>
                  A Better Education for Everyone
                </div>

                <div className='flex justify-start items-center w-3/4'>
                  Our non-profit organisation is dedicated to improving access to education for all. With your support, we can help provide the resources and opportunities needed for success.
                </div>

                <div className='flex justify-start items-center w-3/4'>
                  Read More
                </div>
              </div>

              <div className='flex flex-col justify-center items-center w-1/2 border-r-2'>
                <div className='flex justify-center items-center w-3/4 top-[-40px] relative'>
                  <Image src="/stories8.jpg" alt='meeting image' width={400} height={300} className='w-full h-2/3 rounded-xl' />
                </div>

                <div className='flex justify-start items-center w-3/4'>
                  The Special One
                </div>

                <div className='flex justify-start items-center w-3/4'>
                  Join our non-profit organisation to help create a brighter future for those in need. Every donation counts towards making a difference in the lives of those less fortunate.
                </div>

                <div className='flex justify-start items-center w-3/4'>
                  Read More
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