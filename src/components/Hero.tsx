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

      <div className='flex flex-col justify-center items-center w-full px-12 bg-orange-50'>
        <div className='flex justify-center items-center w-5/6 bg-white border-2 rounded-xl top-[-110px] relative'>
          <div className='flex flex-col justify-start items-center w-1/3 my-6 py-4 px-6 border-r-2'>
            <div className='flex py-4 justify-start items-center w-full'>
              01.
            </div>

            <div className='flex py-4 justify-start items-center w-full'>
              Causes
            </div>

            <div className='flex py-4 justify-start items-center w-full'>
              We support education, healthcare, and poverty reduction.
            </div>
          </div>

          <div className='flex flex-col justify-start items-center w-1/3 my-6 py-4 px-6 border-r-2'>
            <div className='flex py-4 justify-start items-center w-full'>
              02.
            </div>

            <div className='flex py-4 justify-start items-center w-full'>
              Get involved
            </div>

            <div className='flex py-4 justify-start items-center w-full'>
              Volunteer or donate your skills to make a difference.
            </div>
          </div>

          <div className='flex flex-col justify-start items-center w-1/3 my-6 py-4 px-6'>
            <div className='flex py-4 justify-start items-center w-full'>
              03.
            </div>

            <div className='flex py-4 justify-start items-center w-full'>
              Donation
            </div>

            <div className='flex py-4 justify-start items-center w-full'>
              Contribute today and help us change lives and build a better future.
            </div>
          </div>
        </div>

        <div className='flex justify-center items-center'>
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

            <div className='flex rounded-lg text-black hover:bg-black hover:text-orange-50 text-xl px-4 py-2 transition ease-out duration-5000 border border-black'>
              Know More
            </div>
          </div>

          <div className='flex w-1/2 justify-center items-center mb-28'>
            <div className='flex w-1/2 flex-col justify-center items-center'>
              <div className='flex'>
                <Image src="/about1.jpg" alt='image2' width={300} height={110} className='rounded-2xl' />
              </div>

              <div className='flex mt-10'>
                <Image src="/about2.jpg" alt='image2' width={300} height={70} className='rounded-2xl' />
              </div>
            </div>

            <div className='flex w-1/2 flex-col justify-center items-center mt-24'>
              <div className='flex mt-20'>
                <Image src="/about3.jpg" alt='image2' width={300} height={65} className='rounded-2xl' />
              </div>

              <div className='flex mt-10'>
                <Image src="/about4.jpg" alt='image2' width={300} height={120} className='rounded-2xl' />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='flex flex-col justify-center items-center w-full bg-white'>
        <div className='flex justify-start items-center w-1/2'>
          OUR IMPACT
        </div>

        <div className='flex justify-start items-center w-1/2'>
          <div className='flex w-1/2'>
            The impact we have made in our community
          </div>

          <div className='flex justify-start items-center w-1/2'>
            We have made a significant impact in our community through our non-profit organization. By providing services and support to those in need, we have created a positive change. Our efforts have helped to improve the lives of many and we are committed to continuing to make a difference.
          </div>
        </div>

        <div className='flex justify-around items-center w-full px-32'>
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

      <div className='flex flex-col justify-center items-center w-full bg-orange-50 mt-24'>
        <div className='flex justify-center items-center w-5/6 bg-[#66B40B] py-10 px-6 rounded-xl top-[-40px] relative'>
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
        
        <div className='flex justify-center items-center w-full'>
          <div className='flex justify-center items-center w-1/2'>
            <Image src="/impact1.jpg" alt='volunteer image' width={500} height={500} className='w-2/3 h-2/3 rounded-2xl' />
          </div>

          <div className='flex flex-col justify-center items-center w-1/2'>
            <div className='flex justify-start items-center w-1/2'>
              Get Involved
            </div>

            <div className='flex justify-start items-center w-1/2'>
              Join our movement for change
            </div>

            <div className='flex justify-start items-center w-1/2'>
              Join our non-profit organisation and be a part of our movement for positive change. We empower communities, support vulnerable individuals and strive towards building an equitable society. Together, we can create a better world. Join us now!
            </div>

            <div className='flex justify-start items-center w-1/2'>
              Become part of a transformative movement by supporting our non-profit organization. Together we can make lasting change.
            </div>

            <div className='flex justify-start items-start rounded-lg px-4 py-2 hover:bg-black hover:text-orange-50 border w-fit'>
              Register Now
            </div>
          </div>
        </div>

        <div className='flex flex-col justify-center items-center w-full'>
          <div className='flex justify-center items-center w-1/2'>
            Inspiring tales of transformation
          </div>

          <div className='flex justify-center items-center w-1/2'>
            Get inspired by the remarkable stories of transformation through our non-profit organization. Join us in making a positive impact today.
          </div>

          <div className='flex justify-center items-center w-5/6 bg-white rounded-3xl border-2 mx-12 mt-24 mb-24'>
            <div className='flex flex-col justify-center items-center w-1/2 border-r-2'>
              <div className='flex justify-center items-center w-2/3 top-[-40px] relative'>
                <Image src="/impact2.jpg" alt='meeting image' width={200} height={200} className='w-full h-2/3 rounded-xl' />
              </div>

              <div className='flex justify-start items-center w-2/3'>
                A Better Education for Everyone
              </div>

              <div className='flex justify-start items-center w-2/3'>
                Our non-profit organisation is dedicated to improving access to education for all. With your support, we can help provide the resources and opportunities needed for success.
              </div>

              <div className='flex justify-start items-center w-2/3'>
                Read More
              </div>
            </div>

            <div className='flex flex-col justify-center items-center w-1/2 border-r-2'>
              <div className='flex justify-center items-center w-2/3 top-[-40px] relative'>
                <Image src="/impact3.jpg" alt='meeting image' width={400} height={300} className='w-full h-2/3 rounded-xl' />
              </div>

              <div className='flex justify-start items-center w-2/3'>
                The Special One
              </div>

              <div className='flex justify-start items-center w-2/3'>
                Join our non-profit organisation to help create a brighter future for those in need. Every donation counts towards making a difference in the lives of those less fortunate.
              </div>

              <div className='flex justify-start items-center w-2/3'>
                Read More
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero;