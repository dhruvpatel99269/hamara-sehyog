"use client"
import Image from 'next/image';
import axios from 'axios';
import { useEffect } from 'react';
import React from 'react';
import Link from 'next/link';

const Page = () => {

  const [data, setData] = React.useState({
    home: "",
    about: "",
    stories: "",
    contact: "",
    work: "",
  });

  const fetchData = async () => {
    try {
      const response = await axios.get("/api/data"); // Update this to your correct API endpoint
      setData(response.data);
      console.log("Data fetched successfully", response.data);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error("Content Fetching Failed", error.message);
      } else {
        console.error("Content Fetching Failed", error);
      }
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex flex-col justify-center relative items-center w-full text-[#2C3A04]">
      <div
        className="relative bg-cover flex justify-center items-center bg-center w-full h-[60vh] mt-0"
        style={{ backgroundImage: 'url(/work-main.jpg)' }}
      >
        {/* Overlay for dull effect */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative container mx-auto h-full flex flex-col justify-center items-start text-white px-4">
          <h1 className="text-5xl lg:text-7xl xl:text-7xl md:text-7xl font-semibold">
            Stories
          </h1>
          <p className="mt-4 font-light text-base md:text-lg lg:text-lg xl:text-lg max-w-2xl text-left">
            {data.stories}
          </p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row xl:flex-row justify-center items-center w-full lg:w-4/5 xl:w-4/5 mt-24 mb-24 px-10 lg:px-0 xl:px-0">
        <div className="flex justify-start items-start w-full lg:w-1/4 xl:w-1/4 text-lg font-semibold">
          OUR IMPACT
        </div>
        <div className="flex flex-col lg:flex-row xl:flex-row justify-center items-center w-full lg:w-3/4 xl:w-3/4 gap-4 mt-4 lg:mt-0 xl:mt-0">
          <div className="flex justify-center items-center w-full text-3xl font-bold leading-snug">
            The impact we have made in our community
          </div>
          <p className="flex justify-center items-center w-full text-lg">
            Join us on a journey towards compassion and hope. Through our non-profit organization, we strive to make a positive impact on the world. Give back to your community and be a part of something greater than yourself.
          </p>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center w-full mt-24 mb-24">
        <div className="flex flex-col lg:flex-row xl:flex-row justify-center items-center w-4/5 space-x-0 lg:space-x-6 xl:space-x-6">
          <div className="w-full lg:w-2/3 xl:w-2/3 my-2 lg:my-0 xl:my-0">
            <Image src="/stories1.jpg" alt="story1" width={400} height={300} className="w-full h-2/3 rounded-2xl" />
          </div>
          <div className="w-full lg:w-1/3 xl:w-1/3 my-2 lg:my-0 xl:my-0">
            <Image src="/stories2.jpg" alt="story2" width={200} height={200} className="w-full h-2/3 rounded-2xl" />
          </div>
          <div className="w-full lg:w-1/3 xl:w-1/3 my-2 lg:my-0 xl:my-0">
            <Image src="/stories3.jpg" alt="story3" width={200} height={200} className="w-full h-2/3 rounded-2xl" />
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center w-full bg-[#F7F9F1]">
        <div className="flex flex-col justify-center items-center w-4/5 ">
          <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row mt-20 justify-between items-center w-full bg-[#66B40B] p-14 rounded-2xl relative -top-16">
            <div className="text-white">
              <p className="text-4xl tracking-wide font-semibold mb-4">
                We can create a better tomorrow
              </p>
              <p className="text-lg tracking-wide">
                Every dollar counts and helps us bring hope and essential resources to those in need.
              </p>
            </div>

            <Link href="/contact">
              <div className="flex items-center bg-white text-black rounded-lg px-5 py-3 cursor-pointer transition duration-500 hover:bg-black hover:text-white mt-4 md:mt-0 lg:mt-0 xl:mt-0">
                Donate Now
              </div>
            </Link>
          </div>

          <div className="flex flex-col justify-center items-center w-full text-[#2C3A04]">
            <div className="text-[22px] md:text-[33px] lg:text-[44px] xl:text-[44px] mt-16 leading-tight font-semibold w-full text-center">
              Inspiring tales of transformation
            </div>

            <div className="text-center my-5 w-full lg: xl:w-1/2 text-lg mb-10">
              Get inspired by the remarkable stories of transformation through our non-profit organization. Join us in making a positive impact today.
            </div>

            <div className='flex flex-col lg:flex-row xl:flex-row justify-center items-center w-full text-[#2C3A04] mx-12 mb-24 space-x-0 md:space-x-12 lg:space-x-12 xl:space-x-12'>
              <div className='flex flex-col justify-center items-center w-full lg:w-1/2 xl:w-1/2 border-r pb-20 bg-white border-gray-300 border-[1px] rounded-xl lg:rounded-3xl xl:rounded-3xl mt-24'>
                <div className='flex justify-center items-center w-4/5 top-[-40px] relative'>
                  <Image src="/impact2.jpg" alt="The Special One" width={500} height={500} className='w-full h-full rounded-lg lg:rounded-xl xl:rounded-xl' />
                </div>

                <div className='flex justify-start items-center w-4/5 text-2xl font-medium'>
                  Building Stronger Communities Together
                </div>

                <div className='flex justify-start items-center w-4/5 my-4'>
                  Our non-profit organisation is dedicated to improving access to education for all. With your support, we can help provide the resources and opportunities needed for success.
                </div>
              </div>

              <div className='flex flex-col justify-center items-center w-full lg:w-1/2 xl:w-1/2 border-r pb-20 bg-white border-gray-300 border-[1px] rounded-xl lg:rpunded-3xl xl:rounded-3xl mt-24'>
                <div className='flex justify-center items-center w-4/5 top-[-40px] relative'>
                  <Image src="/impact3.jpg" alt="A Better Education for Everyone" width={400} height={300} className='w-full h-full rounded-lg lg:rounded-xl xl:rounded-xl' />
                </div>

                <div className='flex justify-start items-center w-4/5 text-2xl font-medium'>
                  A Better Education for Everyone
                </div>

                <div className='flex justify-start items-center w-4/5 my-4'>
                  Our non-profit organization is dedicated to improving access to education for all. With your support, we can help provide the resources and opportunities needed for success.
                </div>

              </div>
            </div>

            <div className='flex flex-col lg:flex-row xl:flex-row justify-center items-center w-full text-[#2C3A04] mx-12 mb-24 space-x-0 md:space-x-12 lg:space-x-12 xl:space-x-12'>
              <div className='flex flex-col justify-center items-center w-full lg:w-1/2 xl:w-1/2 border-r pb-20 bg-white border-gray-300 border-[1px] rounded-xl lg:rounded-3xl xl:rounded-3xl mt-24'>
                <div className='flex justify-center items-center w-4/5 top-[-40px] relative'>
                  <Image src="/stories7.jpg" alt="The Special One" width={500} height={500} className='w-full h-full rounded-lg lg:rounded-xl xl:rounded-xl' />
                </div>

                <div className='flex justify-start items-center w-4/5 text-2xl font-medium'>
                  The Special One
                </div>

                <div className='flex justify-start items-center w-4/5 my-4'>
                  Join our non-profit organization to help create a brighter future for those in need. Every donation counts towards making a difference in the lives of those less fortunate.
                </div>

              </div>

              <div className='flex flex-col justify-center items-center w-full lg:w-1/2 xl:w-1/2 border-r pb-20 bg-white border-gray-300 border-[1px] rounded-xl lg:rpunded-3xl xl:rounded-3xl mt-24'>
                <div className='flex justify-center items-center w-4/5 top-[-40px] relative'>
                  <Image src="/stories8.jpg" alt="A Better Education for Everyone" width={400} height={300} className='w-full h-full rounded-lg lg:rounded-xl xl:rounded-xl' />
                </div>

                <div className='flex justify-start items-center w-4/5 text-2xl font-medium'>
                  Bringing Smiles, One Meal at a Time
                </div>

                <div className='flex justify-start items-center w-4/5 my-4'>
                  Every contribution matters. Together, we can ensure that no child goes hungry and that every family receives the help they need. Your support helps us continue this vital work, spreading kindness and care to those who need it most.
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
