"use client"
import React from 'react'
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { styles } from '../styles';

const Page = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { target } = e;
    const { name, value } = target;
  
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
  
    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
        {
          from_name: form.name,
          to_name: "Dhruv Patel",
          from_email: form.email,
          to_email: "99269dhruvpatel@gmail.com",
          message: form.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");
          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };
  

  return (
    <div className='flex flex-col justify-center items-center w-full'>
      <div className="relative bg-cover flex justify-center items-center bg-center w-full h-[60vh] mt-0" style={{ backgroundImage: 'url(/work-main.jpg)' }}>
        {/* Overlay for dull effect */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative container mx-auto h-full flex flex-col justify-center items-start text-white">
          <h1 className="text-9xl md:text-7xl font-semibold">
            Contact
          </h1>
          <p className="mt-4 font-light text-base md:text-lg max-w-2xl text-left">
            Learn more about our non-profit organization and our mission to make a positive impact on the world through our charitable initiatives
          </p>
        </div>
      </div>

      <div className='flex justify-center items-center w-full bg-orange-50'>
        <div className='flex flex-col justify-center items-center w-4/5'>
          <div className='flex justify-center items-center w-full bg-white rounded-3xl border-2 top-[-50px] relative'>
            <div className='flex flex-col justify-center items-center w-1/3 border-r-2 px-6 py-8'>
              <div className='flex justify-start items-center w-full'>
                Phone:
              </div>

              <div className='flex justify-start items-center w-full'>
                Tel: (555) 123-2222
              </div>

              <div className='flex justify-start items-center w-full'>
                Fax: (555) 123-2225
              </div>
            </div>

            <div className='flex flex-col justify-center items-center w-1/3 border-r-2 px-6 py-8'>
              <div className='flex justify-start items-center w-full'>
                DONATION CENTER
              </div>

              <div className='flex justify-start items-center w-full'>
                Om Paradise, Sus Gaon, Pune
              </div>
            </div>

            <div className='flex flex-col justify-center items-center w-1/3 px-6 py-8'>
              <div className='flex justify-start items-center w-full'>
                Need assistance?
              </div>

              <div className='flex justify-start items-center w-full'>
                Check out our Help Center.
              </div>
            </div>
          </div>

          <div className='flex justify-center items-center w-full'>
            <div className='flex flex-col justify-center items-center w-1/2 my-24 px-12'>
              <div className='flex justify-start items-center w-full'>
                GET IN TOUCH
              </div>

              <div className='flex justify-start items-center w-full'>
                How can I help you ?
              </div>

              <div className='flex justify-start items-center w-full'>
                Our Non-profit Organisation is dedicated to helping those in need. Contact us to see how we can help you or someone you know.
              </div>

              <div className='flex flex-col justify-center items-center border-b-2 py-4 w-full'>
                <div className='flex justify-start items-center w-full'>
                  Headquarter
                </div>
                <div className='flex flex-col justify-start items-center w-full'>
                  <span className='flex justify-start items-center w-full'>2715 Demo St. San Jose, South Dakota 83475</span>
                  <span className='flex justify-start items-start w-full'>(205) 555-0100</span>
                </div>
              </div>

              <div className='flex flex-col justify-center items-center border-b-2 py-4 w-full'>
                <div className='flex justify-start items-center w-full'>
                  Illinois Office
                </div>
                <div className='flex flex-col justify-start items-center w-full'>
                  <span className='flex justify-start items-center w-full'>2972 Example Rd. Santa Ana, Illinois 85486</span>
                  <span className='flex justify-start items-start w-full'>(603) 555-0123</span>
                </div>
              </div>
            </div>

            <div className='flex justify-center items-center w-1/2'>
              <div className='flex-col bg-black-100 py-8 px-12 rounded-2xl w-full sm:w-full md:w-3/4 lg:w-1/2 xl:w-1/2'>
                <p className={styles.sectionSubText}>Get in touch</p>
                <h3 className={styles.sectionHeadText}>Contact.</h3>

                <form
                  ref={formRef}
                  onSubmit={handleSubmit}
                  className='mt-12 flex flex-col gap-8'
                >
                  <label className='flex flex-col'>
                    <span className='text-white font-medium mb-4'>Your Name</span>
                    <input
                      type='text'
                      name='name'
                      value={form.name}
                      onChange={handleChange}
                      placeholder="What's your good name?"
                      className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
                    />
                  </label>
                  <label className='flex flex-col'>
                    <span className='text-white font-medium mb-4'>Your email</span>
                    <input
                      type='email'
                      name='email'
                      value={form.email}
                      onChange={handleChange}
                      placeholder="What's your web address?"
                      className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
                    />
                  </label>
                  <label className='flex flex-col'>
                    <span className='text-white font-medium mb-4'>Your Message</span>
                    <textarea
                      rows={7}
                      name='message'
                      value={form.message}
                      onChange={handleChange}
                      placeholder='What you want to say?'
                      className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
                    />
                  </label>

                  <button
                    type='submit'
                    className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
                  >
                    {loading ? "Sending..." : "Send"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page;