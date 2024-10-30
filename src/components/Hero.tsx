import Image from 'next/image';
import React from 'react'

const Hero = () => {
  return (
    <div className='flex flex-col justify-center items-center w-full'>
      <div className='w-full flex flex-col justify-center items-center bg-white'>
        <div className="relative bg-cover flex justify-center items-center bg-center w-full h-[100vh] mt-0" style={{ backgroundImage: 'url(/cover3.jpg)' }}>
          {/* Overlay for dull effect */}
          <div className="flex justify-center items-center absolute inset-0 bg-black opacity-50"></div>
          <div className="relative container mx-auto h-full flex flex-col justify-center items-center text-white space-y-6">
            <div className="text-4xl md:text-7xl font-semibold text-center mx-32 flex justify-center items-center">
              Empowering Change, One Step at a Time
            </div>
            <div className="mt-4 font-light md:text-xl max-w-2xl flex text-center justify-center items-center">
              Learn more about our non-profit organization and our mission to make a positive impact on the world through our charitable initiatives
            </div>
            <div className='flex justify-center items-center w-fit py-[14px] px-7 rounded-xl bg-[#66B40B] cursor-pointer text-white text-lg font-semibold'>
              Donate Now
            </div>
          </div>
        </div>
      </div>

      <div className='flex flex-col justify-center items-center w-full px-12 bg-[#F7F9F1]'>
        <div className='flex flex-col md:flex-row lg:flex-row xl:flex-row justify-center items-center w-fit md:w-4/5 lg:w-5/6 xl:w-5/6 bg-white border-2 rounded-2xl top-[-80px] relative max-h-fit lg:max-h-[260px] xl:max-h-[260px] pl-0 md:pl-5 lg:pl-5 xl:pl-5'>
          <div className='flex flex-col justify-center lg:justify-start xl:justify-start items-center w-fit lg:w-1/3 xl:w-1/3 py-5 px-6 border-b-[1px] md:border-r-[1px] lg:border-r-[1px] xl:border-r-[1px]'>
            <div className='flex py-2 justify-start items-center w-full text-[#D2D8C0] text-4xl font-dm-sans-500 '>
              01.
            </div>

            <div className='flex py-2 justify-start items-center w-full text-[#2C3A04] text-2xl font-semibold'>
              Donation
            </div>

            <div className='flex py-2 justify-start items-center w-full'>
              Contribute today and help us change lives and build a better future.
            </div>

            <div className='flex py-2 justify-start gap-3 cursor-pointer items-center w-full font-bold text-lg'>
              Learn More
              <Image
                src="/right-arrow.svg" // Path to the SVG in the public folder
                alt="Right arrow Icon"
                width={15} // Set the width
                height={15} // Set the height
              />
            </div>
          </div>

          <div className='flex flex-col justify-center lg:justify-start xl:justify-start items-center w-fit lg:w-1/3 xl:w-1/3 py-5 px-6 border-b-[1px] md:border-r-[1px] lg:border-r-[1px] xl:border-r-[1px]'>
            <div className='flex py-2 justify-start items-center w-full text-[#D2D8C0] text-4xl font-dm-sans-500 '>
              02.
            </div>

            <div className='flex py-2 justify-start items-center w-full text-[#2C3A04] text-2xl font-semibold'>
              Donation
            </div>

            <div className='flex py-2 justify-start items-center w-full'>
              Contribute today and help us change lives and build a better future.
            </div>

            <div className='flex py-2 justify-start gap-3 cursor-pointer items-center w-full font-bold text-lg'>
              Learn More
              <Image
                src="/right-arrow.svg" // Path to the SVG in the public folder
                alt="Right arrow Icon"
                width={15} // Set the width
                height={15} // Set the height
              />
            </div>
          </div>

          <div className='flex flex-col justify-center lg:justify-start xl:justify-start items-center w-fit lg:w-1/3 xl:w-1/3 py-5 px-6'>
            <div className='flex py-2 justify-start items-center w-full text-[#D2D8C0] text-4xl font-dm-sans-500 '>
              03.
            </div>

            <div className='flex py-2 justify-start items-center w-full text-[#2C3A04] text-2xl font-semibold'>
              Donation
            </div>

            <div className='flex py-2 justify-start items-center w-full'>
              Contribute today and help us change lives and build a better future.
            </div>

            <div className='flex py-2 justify-start gap-3 cursor-pointer items-center w-full font-bold text-lg'>
              Learn More
              <Image
                src="/right-arrow.svg" // Path to the SVG in the public folder
                alt="Right arrow Icon"
                width={15} // Set the width
                height={15} // Set the height
              />
            </div>
          </div>
        </div>

        <div className='flex flex-col lg:flex-row xl:flex-row justify-center items-center relative mx-10'>
          <div className='flex flex-col w-full lg:w-[40%] xl:w-[40%] justify-center relative text-left top-[-130px] items-start mt-24 xl:mt-0'>
            <div className='flex w-full font-extralight uppercase tracking-wider'>
              About Us
            </div>

            <div className='flex w-full lg:w-[80%] xl:w-[80%] my-5 sm:text-3xl md:text-5xl font-semibold'>
              Our journey of compassion and hope
            </div>

            <div className='flex flex-col w-full lg:w-[80%] xl:w-[80%]'>
              <div className='flex w-full my-4'>
                Join us on a journey towards compassion and hope. Through our non-profit organisation, we strive to make a positive impact on the world. Give back to your community and be a part of something greater than yourself.
              </div>
              <div className='flex w-full my-4'>
                A transformational journey towards bringing hope and compassion to the world.
              </div>
            </div>

            <div className='flex rounded-lg text-black hover:bg-black hover:text-orange-50 font-medium text-xl px-4 py-3 mt-4 transition ease-out duration-5000 border border-black'>
              Read More
            </div>
          </div>

          <div className='flex flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row w-full md:w-3/4 lg:w-1/2 xl:w-1/2 justify-center items-center mb-28 sm:space-x-12 md:space-x-12'>
            <div className='flex w-full md:w-[70%] lg:w-[60%] xl:w-[60%] flex-col justify-center items-center'>
              <div className='flex'>
                <Image src="/about1.jpg" alt='image2' width={300} height={110} className='rounded-2xl' />
              </div>

              <div className='flex mt-10'>
                <Image src="/about2.jpg" alt='image2' width={300} height={70} className='rounded-2xl' />
              </div>
            </div>

            <div className='flex w-full md:w-[70%] lg:w-[60%] xl:w-[60%] flex-col justify-center items-center'>
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

      <div className='flex flex-col justify-center text-[#2C3A04] items-center w-full p-10 my-20 gap-24'>
        <div className='flex justify-start items-center w-[85%]'>
          <div className='flex flex-col'>
            <div className='mb-5 tracking-wide'>
              OUR IMPACT
            </div>
            <div className='flex flex-col md:flex-row lg:flex-row xl:flex-row justify-center items-center gap-6 md:gap-12 lg:gap-28 xl:gap-28'>
              <div className='text-[44px] leading-tight font-[600] w-full lg:w-1/2 xl:w-1/2'>
                The impact we have made in our community
              </div>
              <div className='flex justify-start items-center w-full lg:w-1/2 xl:w-1/2'>
                We have made a significant impact in our community through our non-profit organization. By providing services and support to those in need, we have created a positive change. Our efforts have helped to improve the lives of many and we are committed to continuing to make a difference.
              </div>
            </div>
          </div>
        </div>

        <div className='flex flex-col lg:flex-row xl:flex-row justify-around items-center w-full px-32'>
          <div className='flex flex-col justify-center items-center w-full lg:w-1/4 xl:w-1/4 border-b-2 lg:border-b-0 xl:border-b-0 lg:border-r-2 xl:border-r-2 mt-4 py-4 lg:mt-0 xl:py-0'>
            <div className='flex text-[44px] leading-tight font-[600]'>
              20M+
            </div>
            <div className='flex'>
              People served worldwide
            </div>
          </div>

          <div className='flex flex-col justify-center items-center w-full lg:w-1/4 xl:w-1/4 border-b-2 lg:border-b-0 xl:border-b-0 lg:border-r-2 xl:border-r-2 mt-4 py-4 lg:mt-0 xl:py-0'>
            <div className='flex text-[44px] leading-tight font-[600]'>
              142,790
            </div>
            <div className='flex'>
              Projects funded
            </div>
          </div>

          <div className='flex flex-col justify-center items-center w-full lg:w-1/4 xl:w-1/4 border-b-2 lg:border-b-0 xl:border-b-0 lg:border-r-2 xl:border-r-2 mt-4 py-4 lg:mt-0 xl:py-0'>
            <div className='flex text-[44px] leading-tight font-[600]'>
              1.8M
            </div>
            <div className='flex'>
              People to take action
            </div>
          </div>

          <div className='flex flex-col justify-center items-center w-full lg:w-1/4 xl:w-1/4 mt-4 py-4 lg:mt-0 xl:py-0'>
            <div className='flex text-[44px] leading-tight font-[600]'>
              5,246
            </div>
            <div className='flex'>
              Partner Organization
            </div>
          </div>
        </div>
      </div>

      <div className='flex flex-col justify-center items-center w-full bg-[#F7F9F1] mt-24'>
        <div className='flex flex-col lg:flex-row xl:flex-row justify-between items-center w-full md:w-[70%] lg:w-[83%] xl:w-[83%] bg-[#66B40B] p-14 rounded-2xl top-[-70px] relative'>
          <div className=' text-white'>
            <p className='text-4xl tracking-wide font-semibold mb-4'>
              We can create a better tomorrow
            </p>
            <p className='text-lg tracking-wide'>
              Every dollar counts and helps us bring hope and essential resources to those in need.
            </p>
          </div>

          <div className='flex justify-start text-lg cursor-pointer items-center w-fit bg-white text-black hover:bg-black hover:text-white rounded-lg px-5 py-3 transition duration-500 mt-6 lg:mt-0 xl:mt-0'>
            Donate Now
          </div>
        </div>

        <div className='flex flex-col lg:flex-row xl:flex-row justify-center items-center text-[#2C3A04] w-full my-20 md:w-5/6 lg:w-5/6 xl:w-5/6 mx-10'>
          <div className='flex justify-center items-center w-full md:w-full lg:w-1/2 xl:w-1/2'>
            <Image src="/impact1.jpg" alt='volunteer image' width={500} height={500} className='w-3/4 h-3/4 rounded-2xl' />
          </div>

          <div className='flex flex-col items-start w-full md:w-full lg:w-1/2 xl:w-1/2 mt-4 md:mt-8 lg:mt-4 xl:mt-0 px-10 lg:px-0 xl:px-0'>
            <div className='flex justify-start items-center tracking-widest'>
              Get Involved
            </div>

            <div className='flex justify-start items-center w-full lg:w-2/3 xl:w-2/3 text-5xl leading-tight my-3 font-semibold'>
              Join our movement for change
            </div>

            <div className='flex justify-start text-base items-center my-3 w-full lg:w-4/5 xl:w-4/5'>
              Join our non-profit organisation and be a part of our movement for positive change. We empower communities, support vulnerable individuals and strive towards building an equitable society. Together, we can create a better world. Join us now!
            </div>

            <div className='flex justify-start text-base items-center w-full lg:w-4/5 xl:w-4/5'>
              Become part of a transformative movement by supporting our non-profit organization. Together we can make lasting change.
            </div>

            <div className='flex justify-start items-start rounded-xl my-6 text-lg font-semibold px-7 py-4 border-black hover:bg-black hover:text-orange-50 border w-fit'>
              Register Now
            </div>
          </div>
        </div>

        <div className='flex flex-col justify-center items-center w-full text-[#2C3A04] px-10 lg:px-0 xl:px-0'>
          <div className='flex justify-center items-center text-[22px] md:text-[44px] lg:text-[44px] xl:text-[44px] mt-32 leading-tight font-[600] w-full lg:w-3/4 xl:w-1/2'>
            Inspiring tales of transformation
          </div>

          <div className='flex justify-center items-center text-center my-5 w-full lg:w-3/4 xl:w-1/2'>
            Get inspired by the remarkable stories of transformation through our non-profit organization. Join us in making a positive impact today.
          </div>

          <div className='flex flex-col lg:flex-row xl:flex-row justify-center items-center w-5/6 text-[#2C3A04] mx-12 mb-24 space-x-0 md:space-x-12 lg:space-x-12 xl:space-x-12'>
            <div className='flex flex-col justify-center items-center w-full lg:w-1/2 xl:w-1/2 border-r pb-20 bg-white border-gray-300 border-[1px] rounded-xl lg:rounded-3xl xl:rounded-3xl mt-24'>
              <div className='flex justify-center items-center w-4/5 top-[-40px] relative'>
                <Image src="/impact2.jpg" alt='meeting image' width={500} height={500} className='w-full h-full rounded-lg lg:rounded-xl xl:rounded-xl' />
              </div>

              <div className='flex justify-start items-center w-4/5 text-2xl font-medium'>
                A Better Education for Everyone
              </div>

              <div className='flex justify-start items-center w-4/5 my-4'>
                Our non-profit organisation is dedicated to improving access to education for all. With your support, we can help provide the resources and opportunities needed for success.
              </div>

              <div className='flex justify-start items-center w-4/5 text-[18px] font-semibold gap-2'>
                Read More
                <Image
                  src="/right-arrow.svg" // Path to the SVG in the public folder
                  alt="Right arrow Icon"
                  width={15} // Set the width
                  height={15} // Set the height
                />
              </div>
            </div>

            <div className='flex flex-col justify-center items-center w-full lg:w-1/2 xl:w-1/2 border-r pb-20 bg-white border-gray-300 border-[1px] rounded-xl lg:rpunded-3xl xl:rounded-3xl mt-24'>
              <div className='flex justify-center items-center w-4/5 top-[-40px] relative'>
                <Image src="/impact3.jpg" alt='meeting image' width={500} height={500} className='w-full h-full rounded-lg lg:rounded-xl xl:rounded-xl' />
              </div>

              <div className='flex justify-start items-center w-4/5 text-2xl font-medium'>
                A Better Education for Everyone
              </div>

              <div className='flex justify-start items-center w-4/5 my-4'>
                Our non-profit organisation is dedicated to improving access to education for all. With your support, we can help provide the resources and opportunities needed for success.
              </div>

              <div className='flex justify-start items-center w-4/5 text-[18px] font-semibold gap-2'>
                Read More
                <Image
                  src="/right-arrow.svg" // Path to the SVG in the public folder
                  alt="Right arrow Icon"
                  width={15} // Set the width
                  height={15} // Set the height
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero;