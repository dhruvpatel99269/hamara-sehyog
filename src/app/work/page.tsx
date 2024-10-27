import React from 'react';
import Image from 'next/image';
const WorkPage: React.FC = () => {
  return (
    <div className="bg-[#F7F9F1] min-h-screen pt-0">
      {/* Hero Section with Background Image */}
      <div className="relative bg-cover bg-center h-[400px] md:h-[500px] mt-0" style={{ backgroundImage: 'url(/work-main.jpg)' }}>
        {/* Overlay for dull effect */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative container mx-auto h-full flex flex-col justify-center items-start text-white">
          <h1 className="text-9xl md:text-7xl font-semibold">
            Our Work
          </h1>
          <p className="mt-4 font-light text-base md:text-lg max-w-2xl text-left">
            Discover how our non-profit organisation works towards building a better world through our impactful programs and initiatives.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 text-center mt-16">
        {/* Hero Content */}
        <div className="mb-12 flex items-center justify-center">
          <h1 className="w-[70%] text-4xl text-left md:text-5xl font-semibold text-[#2C3A04] mb-6">
            Every small act of kindness creates a ripple of positive change.
          </h1>
          <p className="w-[65%] text-lg md:text-lg text-left text-[#2C3A04] max-w-2xl ml-28">
            Join us in creating a positive change with our non-profit organization. Even the smallest act of kindness can make a significant impact on the lives of those in need. Come be a part of our cause today!
          </p>
        </div>

        {/* Image Grid Wrapper with Black Background */}
        <div>
          {/* Image Grid */}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Image 1 */}
            <div className="rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/work1.jpg"
                alt="Act of kindness 1"
                width={300}
                height={200}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Image 2 - Spans 2 columns */}
            <div className="rounded-lg overflow-hidden shadow-lg col-span-1 sm:col-span-2">
              <Image
                src="/work2.jpg"
                alt="Act of kindness 2"
                width={600}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>

            <div>
              {/* Image 3 - Takes the entire third column */}
              <div className="rounded-lg overflow-hidden shadow-lg col-span-1 mb-8">
                <Image
                  src="/work3.jpg"
                  alt="Act of kindness 3"
                  width={300}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Image 4 - Takes the entire fourth column */}
              <div className="rounded-lg overflow-hidden shadow-lg col-span-1">
                <Image
                  src="/work4.jpg"
                  alt="Act of kindness 4"
                  width={300}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className='flex w-[80vw] gap-60 mt-36 justify-between'>

            <div className='flex flex-col items-start justify-center text-[#2C3A04]'>
              <h3 className='text-2xl mb-5 font-semibold text-left'>
                How we work
              </h3>
              <p className='text-left '>We collaborate with local communities, volunteers, and donors to achieve our goal of making a meaningful impact on people&apos;s lives. Our non-profit organization strives to make a positive difference in society by supporting those in need.</p>
              <a href="#" className='mt-6 text-lg font-semibold'>Learn More →</a>
            </div>

            <div className='flex flex-col items-start justify-center text-[#2C3A04]'>
              <h3 className='text-2xl mb-5 font-semibold text-left'>
                Proofing our impact
              </h3>
              <p className='text-left '>We are committed to transparency and accountability which is why we regularly share our impact reports with our donors. Our non-profit organization&apos;s work is evidence-based, and we consistently strive to improve our impact through innovative solutions.</p>
              <a href="#" className='mt-6 text-lg font-semibold'>See Proof →</a>
            </div>
          </div>
        </div>

        <div className='flex justify-center items-center gap-20 mt-16 text-[#2C3A04]'>
          <div className='flex flex-col w-2/5 -ml-12 justify-center items-center text-left gap-5'>

            <div className='flex text-5xl font-medium'>
              Making the world a better place
            </div>

            <div className='flex flex-col '>
              <div className='flex mt-5 mb-5 w-[90%]'>
                Our Non-profit Organisation is dedicated to making the world a better place through various initiatives, such as providing education, healthcare, and disaster relief, to those in need. Join us in creating a brighter future for all.
              </div>
              <div className='flex w-[90%]'>
                Join us in our mission to create a positive impact in the world. Every little donation makes a huge difference.
              </div>
            </div>
          </div>

          <div className='flex w-1/2 justify-center items-center mb-28'>
            <div className='flex w-1/2'>
              <Image src="/about1.jpg" alt='image2' width={300} height={110} className='rounded-2xl' />
            </div>
            <div className='flex w-1/2 flex-col justify-center items-center'>
              <div className='flex mb-5 mt-5'>
                <Image src="/about2.jpg" alt='image2' width={300} height={70} className='rounded-2xl' />
              </div>
              <div className='flex '>
                <Image src="/about3.jpg" alt='image2' width={300} height={65} className='rounded-2xl' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkPage;
