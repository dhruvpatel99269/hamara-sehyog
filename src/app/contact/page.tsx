"use client";
import React, { useRef, useState, ChangeEvent, FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { styles } from '../styles';

// Define the form data type
interface FormData {
  name: string;
  email: string;
  message: string;
}

const Page: React.FC = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    // Simple validation
    if (!form.name || !form.email || !form.message) {
      alert("Please fill in all fields.");
      setLoading(false);
      return;
    }

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
    <div className='flex flex-col relative justify-center items-center w-full text-[#2C3A04] '>
      <div className="relative bg-cover flex justify-center items-center bg-center w-full h-[60vh] mt-0" style={{ backgroundImage: 'url(/work-main.jpg)' }}>
        {/* Overlay for dull effect */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative container mx-auto flex flex-col items-start justify-center h-full text-white pl-2 lg:pl-8">
          <h1 className="text-5xl md:text-7xl font-semibold">
            Contact
          </h1>
          <p className="mt-4 font-light text-base md:text-lg max-w-2xl text-left">
            Learn more about our non-profit organization and our mission to make a positive impact on the world through our charitable initiatives.
          </p>
        </div>
      </div>

      <div className='flex justify-center items-center w-full'>
        <div className='flex flex-col justify-center items-center w-4/5'>
          <div className='flex justify-center items-center w-full bg-white h-[180px] rounded-3xl border-2 top-[-50px] relative'>
            <div className='flex flex-col justify-center items-center w-1/3  px-9 py-8 tracking-wide '>
              <div className='flex justify-start items-center w-full text-base font-thin mb-2'>Phone:</div>
              <div className='flex justify-start items-center w-full text-lg font-semibold'>Tel: 9998011597</div>              
            </div>

            <div className='flex flex-col justify-center items-center w-1/3  tracking-wide px-6 py-8 '>
              <div className='flex justify-start items-start w-full text-base font-thin mb-2'>DONATION CENTER</div>
              <div className='flex justify-start items-center w-full text-lg font-semibold'>A6/1 EMERALAD CITY BANER PUNE 411045</div>
            </div>

            <div className='flex flex-col justify-center items-center w-1/3 tracking-wide px-6 py-8 '>
              <div className='flex justify-start items-center w-full text-base font-thin mb-2'>Need assistance?</div>
              <div className='flex justify-start items-center w-full text-lg font-semibold'>Check out our Help Center.</div>
            </div>
          </div>

          <div className='flex justify-center items-center w-full gap-10 mb-16'>
            <div className='flex flex-col justify-center items-center w-1/2 my-24  relative top-[-50px]'>
              <div className='flex justify-start items-center w-full py-8'>GET IN TOUCH</div>
              <div className='flex justify-start items-center w-full text-5xl font-bold'>How can I help you?</div>
              <div className='flex justify-start items-center w-full py-5'>
                Our Non-profit Organisation is dedicated to helping those in need. Contact us to see how we can help you or someone you know.
              </div>

              <div className='flex flex-col justify-center items-center border-b-[1px] border-gray-400 py-4 w-full'>
                <div className='flex justify-start items-center w-full mb-2 text-xl font-bold tracking-wide'>Headquarter</div>
                <div className='flex flex-col justify-start items-center w-full'>
                  <span className='flex justify-start items-center w-full'>A6/1 EMERALAD CITY BANER PUNE 411045</span>
                  <span className='flex justify-start items-start w-full mb-3'>+91-9998011597</span>
                </div>
              </div>
            </div>

            <div className='flex justify-start items-start w-1/2'>
              <div className='flex-col bg-black-100 py-8 px-12 rounded-2xl w-full sm:w-full md:w-full lg:w-full xl:w-full'>

                <form
                  ref={formRef}
                  onSubmit={handleSubmit}
                  className='mt-12 flex flex-col gap-8'
                >
                  <label className='flex flex-col'>
                    <span className='font-medium mb-4'>Your Name</span>
                    <input
                      type='text'
                      name='name'
                      value={form.name}
                      onChange={handleChange}
                      placeholder="What's your good name?"
                      className='bg-tertiary py-4 px-6 placeholder:text-secondary rounded-lg outline-none border border-gray-400 font-medium'
                      required
                    />
                  </label>
                  <label className='flex flex-col'>
                    <span className='font-medium mb-4'>Your email</span>
                    <input
                      type='email'
                      name='email'
                      value={form.email}
                      onChange={handleChange}
                      placeholder="What's your web address?"
                      className='bg-tertiary py-4 px-6 placeholder:text-secondary rounded-lg outline-none border border-gray-400 font-medium'
                      required
                    />
                  </label>
                  <label className='flex flex-col'>
                    <span className='font-medium mb-4'>Your Message</span>
                    <textarea
                      rows={7}
                      name='message'
                      value={form.message}
                      onChange={handleChange}
                      placeholder='What do you want to say?'
                      className='bg-tertiary  px-6 placeholder:text-secondary rounded-lg outline-none border border-gray-400 font-medium'
                      required
                    />
                  </label>

                  <div className='flex justify-center items-center'>
                    <button
                      type='submit'
                      className='bg-[#66B40B] text-white py-3 px-8 rounded-xl outline-none w-1/3 font-bold shadow-md shadow-primary'
                      disabled={loading} // Disable button while loading
                    >
                      {loading ? "Sending..." : "Send"}
                    </button>
                  </div>

                </form>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
