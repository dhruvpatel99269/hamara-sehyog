import Image from 'next/image';

const Page = () => {
  return (
    <div className="flex flex-col justify-center relative items-center w-full text-[#2C3A04]">
      <div
        className="relative bg-cover flex justify-center items-center bg-center w-full h-[60vh] mt-0"
        style={{ backgroundImage: 'url(/work-main.jpg)' }}
      >
        {/* Overlay for dull effect */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative container mx-auto h-full flex flex-col justify-center items-start text-white px-4">
          <h1 className="text-6xl md:text-7xl font-semibold">Stories</h1>
          <p className="mt-4 font-light text-base md:text-lg max-w-2xl text-left">
            Learn more about our non-profit organization and our mission to make a positive impact on the world through our charitable initiatives.
          </p>
        </div>
      </div>

      <div className="flex justify-center items-center w-4/5 mt-24 mb-24">
        <div className="flex justify-start items-start w-1/4 text-lg font-semibold">
          OUR IMPACT
        </div>
        <div className="flex flex-col justify-center items-center w-3/4 gap-4">
          <div className="flex justify-center items-center w-full text-3xl font-bold leading-snug">
            The impact we have made in our community
          </div>
          <p className="text-center w-full text-lg">
            Join us on a journey towards compassion and hope. Through our non-profit organization, we strive to make a positive impact on the world. Give back to your community and be a part of something greater than yourself.
          </p>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center w-full mt-24 mb-24">
        <div className="flex justify-center items-center w-4/5 space-x-6">
          <div className="w-2/3">
            <Image src="/stories1.jpg" alt="story1" width={400} height={300} className="w-full h-2/3 rounded-2xl" />
          </div>
          <div className="w-1/3">
            <Image src="/stories2.jpg" alt="story2" width={200} height={200} className="w-full h-2/3 rounded-2xl" />
          </div>
          <div className="w-1/3">
            <Image src="/stories3.jpg" alt="story3" width={200} height={200} className="w-full h-2/3 rounded-2xl" />
          </div>
        </div>

        <div className="flex justify-around items-center w-full px-32 my-24">
          <div className="flex flex-col justify-center items-center w-1/4 border-r-2">
            <div className="text-[44px] font-semibold">20M+</div>
            <p>People served worldwide</p>
          </div>
          <div className="flex flex-col justify-center items-center w-1/4 border-r-2">
            <div className="text-[44px] font-semibold">142,790</div>
            <p>Projects funded</p>
          </div>
          <div className="flex flex-col justify-center items-center w-1/4 border-r-2">
            <div className="text-[44px] font-semibold">1.8M</div>
            <p>People to take action</p>
          </div>
          <div className="flex flex-col justify-center items-center w-1/4">
            <div className="text-[44px] font-semibold">5,246</div>
            <p>Partner Organizations</p>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center w-full bg-[#F7F9F1]">
        <div className="flex flex-col justify-center items-center w-4/5">
          <div className="flex justify-between items-center w-full bg-[#66B40B] p-14 rounded-2xl relative -top-16">
            <div className="text-white">
              <p className="text-4xl tracking-wide font-semibold mb-4">
                We can create a better tomorrow
              </p>
              <p className="text-lg tracking-wide">
                Every dollar counts and helps us bring hope and essential resources to those in need.
              </p>
            </div>

            <div className="flex items-center bg-white text-black rounded-lg px-5 py-3 cursor-pointer transition duration-500 hover:bg-black hover:text-white">
              Donate Now
            </div>
          </div>

          <div className="flex flex-col justify-center items-center w-full text-[#2C3A04]">
            <div className="text-[44px] mt-32 leading-tight font-semibold w-full text-center">
              Inspiring tales of transformation
            </div>

            <div className="text-center my-5 w-1/2 text-lg mb-10">
              Get inspired by the remarkable stories of transformation through our non-profit organization. Join us in making a positive impact today.
            </div>

            <div className="flex justify-center items-center w-full  bg-white border border-gray-300 text-[#2C3A04] rounded-3xl mx-12 my-24">
              <div className="flex flex-col items-center w-1/2 pb-20 border-r border-gray-300">
                <div className="w-4/5 relative -top-10">
                  <Image src="/impact2.jpg" alt="The Special One" width={500} height={500} className="w-full h-full rounded-xl" />
                </div>

                <div className="w-4/5 text-xl tracking-wide font-semibold">
                  The Special One
                </div>

                <div className="w-4/5 my-4">
                  Join our non-profit organization to help create a brighter future for those in need. Every donation counts towards making a difference in the lives of those less fortunate.
                </div>

                <div className="w-4/5 text-[18px] font-semibold flex items-center gap-2">
                  Read More
                  <Image src="/right-arrow.svg" alt="Right arrow icon" width={15} height={15} />
                </div>
              </div>

              <div className="flex flex-col items-center w-1/2 pb-20">
                <div className="w-4/5 relative -top-10">
                  <Image src="/impact3.jpg" alt="A Better Education for Everyone" width={400} height={300} className="w-full h-2/3 rounded-xl" />
                </div>

                <div className="w-4/5 text-xl tracking-wide font-semibold">
                  A Better Education for Everyone
                </div>

                <div className="w-4/5 my-4">
                  Our non-profit organization is dedicated to improving access to education for all. With your support, we can help provide the resources and opportunities needed for success.
                </div>

                <div className="w-4/5 text-[18px] font-semibold flex items-center gap-2">
                  Read More
                  <Image src="/right-arrow.svg" alt="Right arrow icon" width={15} height={15} />
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center w-full  bg-white border border-gray-300 text-[#2C3A04] rounded-3xl mx-12 mt-10 mb-36">
              <div className="flex flex-col items-center w-1/2 pb-20 border-r border-gray-300">
                <div className="w-4/5 relative -top-10">
                  <Image src="/stories7.jpg" alt="The Special One" width={500} height={500} className="w-full h-full rounded-xl" />
                </div>

                <div className="w-4/5 text-xl tracking-wide font-semibold">
                  The Special One
                </div>

                <div className="w-4/5 my-4">
                  Join our non-profit organization to help create a brighter future for those in need. Every donation counts towards making a difference in the lives of those less fortunate.
                </div>

                <div className="w-4/5 text-[18px] font-semibold flex items-center gap-2">
                  Read More
                  <Image src="/right-arrow.svg" alt="Right arrow icon" width={15} height={15} />
                </div>
              </div>

              <div className="flex flex-col items-center w-1/2 pb-20">
                <div className="w-4/5 relative -top-10">
                  <Image src="/stories8.jpg" alt="A Better Education for Everyone" width={400} height={300} className="w-full h-2/3 rounded-xl" />
                </div>

                <div className="w-4/5 text-xl tracking-wide font-semibold">
                  A Better Education for Everyone
                </div>

                <div className="w-4/5 my-4">
                  Our non-profit organization is dedicated to improving access to education for all. With your support, we can help provide the resources and opportunities needed for success.
                </div>

                <div className="w-4/5 text-[18px] font-semibold flex items-center gap-2">
                  Read More
                  <Image src="/right-arrow.svg" alt="Right arrow icon" width={15} height={15} />
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
