"use client"
import React from 'react';
import Image from 'next/image';
import { useEffect } from 'react';
import axios from 'axios';

const Page = () => {
  const [data, setData] = React.useState({
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
    <div className="flex flex-col items-center w-full">
      {/* Header Section */}
      <div className="relative flex items-center justify-center bg-cover bg-center w-full h-[60vh] mt-0" style={{ backgroundImage: 'url(/work-main.jpg)' }}>
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative container mx-auto flex flex-col items-start justify-center h-full text-white pl-2 lg:pl-8">
          <h1 className="text-5xl md:text-7xl font-semibold">About Us</h1>
          <p className="mt-4 text-base font-light md:text-lg max-w-2xl">
            {data ? data.about : "Loading..."}
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="flex flex-col justify-center items-center w-full bg-[#F7F9F1] p-4">
        <div className="flex flex-col lg:flex-row items-center gap-20 w-full lg:w-4/5">
          <div className="flex flex-col items-center w-full lg:w-1/2 text-[#2C3A04] space-y-6 px-4 py-8 lg:py-0">
            <h2 className="text-3xl lg:text-4xl font-semibold text-center">Making the world a better place</h2>
            <p className="text-base text-center">
              Join our non-profit organization in making positive change through various charitable initiatives and community outreach.
            </p>
            <div className="flex flex-col border-l-2 pl-4 space-y-8">
              <div>
                <h3 className="text-lg font-semibold">Changing Lives</h3>
                <p>Improving lives one step at a time with our non-profit organization.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Building Futures</h3>
                <p>Creating opportunities and a better future with our non-profit organization.</p>
              </div>
            </div>
          </div>

          {/* Images Section */}
          <div className="flex flex-wrap justify-center gap-8 w-full lg:w-1/2">
            {['/about1.jpg', '/about2.jpg', '/about3.jpg', '/about4.jpg'].map((src, index) => (
              <div key={index} className="rounded-2xl shadow-lg">
                <Image src={src} alt={`image${index + 1}`} width={300} height={200} className="rounded-2xl" priority />
              </div>
            ))}
          </div>
        </div>

        {/* Information Cards */}
        <div className="flex flex-col lg:flex-row items-center w-full md:w-4/5 border-2 rounded-2xl p-5 bg-white space-y-5 lg:space-y-0 lg:space-x-5">
          {[
            { title: 'Prove every project', description: 'Our organization delivers transparent results.', buttonText: 'See Proof' },
            { title: 'Open book', description: 'We maintain an open book approach with all stakeholders.', buttonText: 'View Financials' },
            { title: 'Local partnerships', description: 'Building strong relationships with the community.', buttonText: 'Learn More' },
          ].map((item, index) => (
            <div key={index} className="flex flex-col items-start w-full lg:w-1/3 p-4 border-b lg:border-b-0 lg:border-r last:border-none">
              <h3 className="text-3xl text-[#D2D8C0] font-bold">{`0${index + 1}.`}</h3>
              <h4 className="text-xl font-semibold">{item.title}</h4>
              <p>{item.description}</p>
              <div className="flex items-center space-x-2 cursor-pointer font-bold text-lg text-green-700">
                <span>{item.buttonText}</span>
                <Image src="/right-arrow.svg" alt="Right arrow icon" width={15} height={15} />
              </div>
            </div>
          ))}
        </div>

        {/* Large Image */}
        <div className="relative w-full md:w-4/5 h-[80vh] mt-10">
          <Image src="/work2.jpg" alt="work-image" layout="fill" objectFit="cover" className="rounded-3xl" priority />
        </div>

        {/* Call to Action */}
        <div className="flex flex-col items-center w-full md:w-4/5 text-[#2C3A04] mt-16 text-center space-y-4">
          <h2 className="text-2xl uppercase tracking-widest">Make a Difference Today</h2>
          <h3 className="text-2xl md:text-4xl font-semibold">Your contribution matters. Support our cause by making a donation.</h3>
          <p>Every dollar counts and helps us bring hope, joy, and resources to those in need. Together, we can create a better tomorrow.</p>
          <button className="px-6 py-3 text-xl font-semibold text-white bg-[#66B40B] rounded-xl hover:bg-green-600 transition duration-500">
            Donate Today
          </button>
        </div>

        {/* Vision Section */}
        <div className="flex flex-col lg:flex-row items-center w-full md:w-4/5 bg-[#F7F9F1] p-10 mt-20 mb-20">
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
            <Image src="/about5.jpg" alt="Our Vision & Mission" width={300} height={300} className="rounded-3xl shadow-xl" />
          </div>
          <div className="flex flex-col items-start text-[#2C3A04] space-y-4 lg:w-1/2">
            <h2 className="text-4xl font-semibold">Our Vision & Mission</h2>
            <p>Our vision is to create a world with equal access to education and healthcare. Our mission is to support underprivileged communities to improve their quality of life.</p>
            <div className="space-y-3">
              {['Changing lives one step at a time', 'Building strong local partnerships'].map((text, idx) => (
                <div key={idx} className="flex items-start space-x-2">
                  <Image src="/tick-circle.png" alt="tick" width={30} height={30} className="invert" />
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
