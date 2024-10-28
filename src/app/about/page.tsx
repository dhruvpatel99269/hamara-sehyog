import React from 'react'
import Image from 'next/image';

const page = () => {
  return (
    <div className='flex flex-col justify-center items-center w-full'>
      <div className="relative bg-cover flex justify-center items-center bg-center w-full h-[60vh] mt-0" style={{ backgroundImage: 'url(/work-main.jpg)' }}>
        {/* Overlay for dull effect */}
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative container mx-auto h-full flex flex-col justify-center items-start text-white">
          <h1 className="text-9xl md:text-7xl font-semibold">
            About Us
          </h1>
          <p className="mt-4 font-light text-base md:text-lg max-w-2xl text-left">
            Learn more about our non-profit organization and our mission to make a positive impact on the world through our charitable initiatives
          </p>
        </div>
      </div>

      <div className='flex flex-col justify-center relative items-center w-full  bg-[#F7F9F1]'>
        <div className='w-4/5 flex justify-center items-center text-[#2C3A04]  gap-20'>
          <div className='flex flex-col w-1/2 justify-center relative top-[-80px] items-center'>
            <div className='flex w-full text-[40px] leading-tight font-semibold my-10'>
              Making the world a better place
            </div>

            <div className='flex w-full text-base tracking-wide'>
              Join Non-profit Organisation in our mission of making the world a better place. We strive to create positive change through various charitable initiatives and community outreach programs.
            </div>

            <div className='flex flex-col w-full border-l-2  px-6 mt-8'>
              <div className='flex w-full  text-lg font-semibold mb-3'>
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

          <div className='flex w-2/3 justify-center items-center  top-[-200px] relative'>
            <div className='flex w-1/2 flex-col justify-center items-start mt-12 '>
              <div className='flex mt-20'>
                <Image src="/about1.jpg" alt='image2' width={300} height={60} className='rounded-2xl' />
              </div>

              <div className='flex mt-10'>
                <Image src="/about2.jpg" alt='image2' width={300} height={110} className='rounded-2xl' />
              </div>
            </div>

            <div className='flex w-1/2 flex-col justify-center items-center'>
              <div className='flex'>
                <Image src="/about3.jpg" alt='image2' width={300} height={100} className='rounded-2xl' />
              </div>

              <div className='flex mt-10'>
                <Image src="/about4.jpg" alt='image2' width={300} height={120} className='rounded-2xl' />
              </div>
            </div>
          </div>
        </div>

        <div className='flex justify-center items-center w-5/6 bg-white border-2 rounded-2xl relative max-h-[260px] pl-5'>
          <div className='flex flex-col justify-start items-center w-1/3 py-5 px-6 border-r-[1px]'>
            <div className='flex py-2 justify-start items-center w-full text-[#D2D8C0] text-3xl font-dm-sans-500 font-bold'>
              01.
            </div>

            <div className='flex py-2 justify-start items-center w-full text-[#2C3A04] text-xl font-semibold'>
              Prove every project
            </div>

            <div className='flex py-2 justify-start items-center w-full'>
              Our Non-profit Organisation delivers transparent and accountable results for every project we undertake.
            </div>

            <div className='flex py-2 justify-start gap-3 cursor-pointer items-center w-full font-bold text-lg'>
              See Proof
              <Image
                src="/right-arrow.svg" // Path to the SVG in the public folder
                alt="Right arrow Icon"
                width={15} // Set the width
                height={15} // Set the height
              />
            </div>
          </div>

          <div className='flex flex-col justify-start items-center w-1/3 py-5 px-6 border-r-[1px]'>
            <div className='flex py-2 justify-start items-center w-full text-[#D2D8C0] text-3xl font-dm-sans-500 font-bold'>
              02.
            </div>

            <div className='flex py-2 justify-start items-center w-full text-[#2C3A04] text-xl font-semibold'>
              Open book
            </div>

            <div className='flex py-2 justify-start items-center w-full'>
              We firmly believe in transparency and strive to maintain an open book approach with all stakeholders.
            </div>

            <div className='flex py-2 justify-start gap-3 cursor-pointer items-center w-full font-bold text-lg'>
              View Financials
              <Image
                src="/right-arrow.svg" // Path to the SVG in the public folder
                alt="Right arrow Icon"
                width={15} // Set the width
                height={15} // Set the height
              />
            </div>
          </div>

          <div className='flex flex-col justify-start items-center w-1/3 py-5 px-6'>
            <div className='flex py-2 justify-start items-center w-full text-[#D2D8C0] text-3xl font-dm-sans-500 font-bold'>
              03.
            </div>

            <div className='flex py-2 justify-start items-center w-full text-[#2C3A04] text-xl font-semibold'>
              Local partnerships
            </div>

            <div className='flex py-2 justify-start items-center w-full'>
              Building strong relationships with the community is vital and we work closely with local partners.
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


        <div className='flex flex-col w-4/5 top-[150px] relative'>
          <Image src="/work2.jpg" alt='work-image' width={1000} height={1000} className='w-full h-[80vh] rounded-3xl' />
        </div>
      </div>

      <div className='flex flex-col justify-center items-center w-4/5 mt-32 text-[#2C3A04] '>
        <div className='flex flex-col justify-center items-center w-2/3 mt-32'>
          <div className='flex justify-center items-center uppercase tracking-widest'>
            Make a Difference Today
          </div>

          <div className='flex justify-center items-center text-center text-[44px] leading-tight font-semibold my-4'>
            Your contribution matters. Support our cause by making a donation.
          </div>

          <div className='flex justify-center items-center text-center w-4/5 mb-4'>
            Every dollar counts and helps us bring hope, joy, and essential resources to those in need. Together, we can create a better tomorrow.
          </div>

          <div className='flex cursor-pointer justify-center items-center w-fit text-xl font-semibold my-4 px-6 py-4 text-white bg-[#66B40B] hover:bg-green-600/95 transition duration-800 rounded-xl'>
            Donate Today
          </div>
        </div>
      </div>

      <div className='flex justify-center items-center  bg-[#F7F9F1] w-full mt-24'>
        <div className='flex justify-center items-center w-4/5 p-6 mt-24 mb-24'>
          <div className='flex justify-center items-center w-1/2'>
            <Image src="/about5.jpg" alt='' width={300} height={300} className='rounded-3xl w-4/5 h-4/5 shadow-2xl' />
          </div>

          <div className='flex flex-col justify-center items-center w-1/2 text-[#2C3A04]'>
            <div className='flex  w-full text-5xl text-left tracking-wide font-semibold my-3'>
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