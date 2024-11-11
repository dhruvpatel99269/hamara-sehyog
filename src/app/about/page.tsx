import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

const page = () => {
  return (
    <div className='flex flex-col justify-center items-center w-full'>
      <div className="relative bg-cover flex justify-center items-center bg-center w-full h-[60vh] mt-0" style={{ backgroundImage: 'url(/work-main.jpg)' }}>
        {/* Overlay for dull effect */}
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative container mx-auto h-full flex flex-col justify-center items-start text-white pl-2 lg:pl-8 xl:pl-8">
          <h1 className="text-5xl lg:text-7xl xl:text-7xl md:text-7xl font-semibold">
            About Us
          </h1>
          <p className="mt-4 font-light text-base md:text-lg lg:text-lg xl:text-lg max-w-2xl text-left">
            Learn more about our non-profit organization and our mission to make a positive impact on the world through our charitable initiatives
          </p>
        </div>
      </div>

      <div className='flex flex-col justify-center relative items-center w-full bg-[#F7F9F1] p-2'>
        <div className='flex flex-col lg:flex-row xl:flex-row w-full lg:w-4/5 xl:w-4/5 justify-center items-center text-[#2C3A04] gap-20'>
          <div className='flex flex-col w-full lg:w-1/2 xl:w-1/2 justify-center relative top-[-80px] items-center py-16 px-4 lg:py-0 xl:py-0 lg:px-0 xl:px-0'>
            <div className='flex w-full text-[30px] lg:text-[40px] xl:text-[40px] leading-tight font-semibold my-10 justify-center items-center'>
              Making the world a better place
            </div>

            <div className='flex w-full text-base tracking-wide'>
              Join Non-profit Organisation in our mission of making the world a better place. We strive to create positive change through various charitable initiatives and community outreach programs.
            </div>

            <div className='flex flex-col w-full border-l-2 px-6 mt-8'>
              <div className='flex w-full text-lg font-semibold mb-3'>
                Changing Lives
              </div>
              <div className='flex w-full tracking-wide'>
                Improving lives one step at a time with our non-profit organization.
              </div>
              <div className='flex mt-8 w-full text-lg font-semibold mb-3'>
                Building Futures
              </div>
              <div className='flex w-full tracking-wide'>
                Creating opportunities and a better future with our non-profit organization.
              </div>
            </div>
          </div>

          <div className='flex flex-col md:flex-row lg:flex-row xl:flex-row w-full md:w-2/3 lg:w-2/3 xl:w-2/3 justify-center items-center top-[-200px] relative space-x-0 md:space-x-12 lg:space-x-12 xl:space-x-12'>
            <div className='flex w-full md:w-1/2 lg:w-1/2 xl:w-1/2 flex-col justify-center items-center mt-0 md:mt-12 lg:mt-12 xl:mt-12 '>
              <div className='flex mt-20'>
                <Image src="/about1.jpg" alt='image2' width={300} height={60} className='rounded-2xl' />
              </div>

              <div className='flex mt-10'>
                <Image src="/about2.jpg" alt='image2' width={300} height={110} className='rounded-2xl' />
              </div>
            </div>

            <div className='flex w-full md:w-1/2 lg:w-1/2 xl:w-1/2 flex-col justify-center items-center mt-10 md:mt-0 lg:mt-0 xl:mt-0'>
              <div className='flex'>
                <Image src="/about3.jpg" alt='image2' width={300} height={100} className='rounded-2xl' />
              </div>

              <div className='flex mt-10'>
                <Image src="/about4.jpg" alt='image2' width={300} height={120} className='rounded-2xl' />
              </div>
            </div>
          </div>
        </div>

        {/* Updated section for full height border */}
        <div className='flex flex-col md:flex-row lg:flex-row xl:flex-row justify-center items-center w-full md:w-4/5 lg:w-5/6 xl:w-5/6 border-2 rounded-2xl relative h-full min-h-[200px] lg:min-h-[240px] xl:min-h-[240px] pl-0 lg:pl-5 xl:pl-5 bg-white'>
          <div className='flex flex-col justify-start items-center w-full md:w-1/3 lg:w-1/3 xl:w-1/3 my-4 px-4 border-b-2 md:border-r-2 lg:border-r-2 xl:border-r-2 md:border-b-0'>
            <div className='flex py-1 justify-start items-center w-full text-[#D2D8C0] text-3xl font-dm-sans-500 font-bold'>
              01.
            </div>
            <div className='flex py-1 justify-start items-center w-full text-[#2C3A04] text-xl font-semibold'>
              Prove every project
            </div>
            <div className='flex py-1 justify-start items-center w-full'>
              Our Non-profit Organisation delivers transparent and accountable results for every project we undertake.
            </div>
          </div>

          <div className='flex flex-col justify-start items-center w-full md:w-1/3 lg:w-1/3 xl:w-1/3 my-4 px-4 border-b-2 md:border-r-2 lg:border-r-2 xl:border-r-2 md:border-b-0'>
            <div className='flex py-1 justify-start items-center w-full text-[#D2D8C0] text-3xl font-dm-sans-500 font-bold'>
              02.
            </div>
            <div className='flex py-1 justify-start items-center w-full text-[#2C3A04] text-xl font-semibold'>
              Open book
            </div>
            <div className='flex py-1 justify-start items-center w-full'>
              We firmly believe in transparency and strive to maintain an open book approach with all stakeholders.
            </div>
          </div>

          <div className='flex flex-col justify-start items-center w-full md:w-1/3 lg:w-1/3 xl:w-1/3 py-4 px-4'>
            <div className='flex py-1 justify-start items-center w-full text-[#D2D8C0] text-3xl font-dm-sans-500 font-bold'>
              03.
            </div>
            <div className='flex py-1 justify-start items-center w-full text-[#2C3A04] text-xl font-semibold'>
              Local partnerships
            </div>
            <div className='flex py-1 justify-start items-center w-full'>
              Building strong relationships with the community is vital and we work closely with local partners.
            </div>
          </div>
        </div>


        <div className='flex flex-col w-full md:w-4/5 lg:w-4/5 xl:w-4/5 h-[300px] md:h-[400px] top-[150px] relative p-2'>
          <Image
            src="/work2.jpg"
            alt="work-image"
            width={500}
            height={500}
            className='w-full h-full object-cover rounded-3xl'
          />
        </div>


      </div>
      <div className='flex flex-col justify-center items-center w-full md:w-4/5 lg:w-4/5 xl:w-4/5 mt-32 text-[#2C3A04] p-2'>
        <div className='flex flex-col justify-center items-center w-full md:w-2/3 lg:w-2/3 xl:w-2/3 mt-32'>
          <div className='flex justify-center items-center uppercase tracking-widest'>
            Make a Difference Today
          </div>

          <div className='flex justify-center items-center text-center text-[22px] md:text-[33px] lg:text-[44px] xl:text-[44px] leading-tight font-semibold my-4'>
            Your contribution matters. Support our cause by making a donation.
          </div>

          <div className='flex justify-center items-center text-center w-full md:w-4/5 lg:w-4/5 xl:w-4/5 mb-4'>
            Every dollar counts and helps us bring hope, joy, and essential resources to those in need. Together, we can create a better tomorrow.
          </div>

          <Link href="/contact">
            <div className='flex cursor-pointer justify-center items-center w-fit text-xl font-semibold my-2 px-4 py-2 lg:my-4 lg:px-6 lg:py-4 xl:my-4 xl:px-6 xl:py-4 text-white bg-[#66B40B] hover:bg-green-600/95 transition duration-800 rounded-xl'>
              Donate Today
            </div>
          </Link>
        </div>
      </div>

      <div className='flex flex-col justify-center items-center  bg-[#F7F9F1] w-full mt-24'>
        <div className='flex flex-col lg:flex-row xl:flex-row justify-center items-center w-full md:w-4/5 lg:w-4/5 xl:w-4/5 p-6 mt-24 mb-24'>
          <div className='flex justify-center items-center w-full lg:w-1/2 xl:w-1/2'>
            <Image src="/about5.jpg" alt='' width={300} height={300} className='rounded-3xl w-4/5 h-4/5 shadow-2xl' />
          </div>

          <div className='flex flex-col justify-center items-center w-full lg:w-1/2 xl:w-1/2 text-[#2C3A04] my-4 lg:my-0 xl:my-0'>
            <div className='flex w-full text-5xl text-left tracking-wide font-semibold my-3'>
              Our Vision & Mission
            </div>

            <div className='flex justify-center items-center w-full my-5'>
              Non-profit Organisation&apos;s vision is to create a world where all people have equal access to education and healthcare. Our mission is to provide the necessary resources and support to underprivileged communities to improve their quality of life.
            </div>

            <div className='flex flex-col justify-center items-center w-full gap-3'>
              <div className='flex justify-start items-center w-full'>
                <div className='flex justify-start items-center w-fit h-fit'>
                  <Image
                    src="/tick-circle.png"
                    alt='tick'
                    width={30}
                    height={30}
                    className='filter invert' // This will make the colors inverted, turning black to white and vice versa
                  />
                </div>
                <div className='flex justify-start items-center'>
                  Changing lives improving lives one step at a time with our non-profit organization.
                </div>
              </div>
              <div className='flex justify-start items-center w-full'>
                <div className='flex justify-start items-center w-fit h-fit'>
                  <Image
                    src="/tick-circle.png"
                    alt='tick'
                    width={30}
                    height={30}
                    className='filter invert' // This will make the colors inverted, turning black to white and vice versa
                  />
                </div>
                <div className='flex justify-start items-center'>
                  Building futures creating opportunities and a better future with our non-profit organization.
                </div>
              </div>
              <div className='flex justify-start items-center w-full'>
                <div className='flex justify-start items-center w-fit h-fit'>
                  <Image
                    src="/tick-circle.png"
                    alt='tick'
                    width={30}
                    height={30}
                    className='filter invert' // This will make the colors inverted, turning black to white and vice versa
                  />
                </div>
                <div className='flex justify-start items-center'>
                  Movement for change creating impact, promoting change through non-profit work.
                </div>
              </div>
              <div className='flex justify-start items-center w-full'>
                <div className='flex justify-start items-center w-fit h-fit'>
                  <Image
                    src="/tick-circle.png"
                    alt='tick'
                    width={30}
                    height={30}
                    className='filter invert' // This will make the colors inverted, turning black to white and vice versa
                  />
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
