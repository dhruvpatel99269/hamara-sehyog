"use client";
import React, { useState } from 'react';
import HomeForm from "@/components/form/HomeForm"
import AboutForm from "@/components/form/AboutForm"
import WorkForm from "@/components/form/WorkForm"
import StoriesForm from "@/components/form/StoriesForm"
import ContactForm from "@/components/form/ContactForm"
import BlackForm from '@/components/form/BlackForm';

const Page = () => {
    const [activeForm, setActiveForm] = useState<"home" | "about" | "work" | "stories" | "contact" | null>(null);

    const renderActiveForm = () => {
        switch (activeForm) {
            case 'home':
                return <HomeForm />;
            case 'about':
                return <AboutForm />;
            case 'work':
                return <WorkForm />;
            case 'stories':
                return <StoriesForm />;
            case 'contact':
                return <ContactForm />;
            default:
                return <BlackForm />;
        }
    };

    return (
        <div className='flex flex-col md:flex-row lg:flex-row xl:flex-row justify-center items-center w-full'>
            <div className='w-full md:w-1/5 lg:w-1/5 xl:w-1/5 flex flex-col justify-start items-center h-fit md:h-screen lg:h-screen xl:h-screen bg-blue-200'>
                <div className='w-full flex flex-col justify-start items-start mt-12'>
                    <div className='w-full flex justify-center lg:justify-start xl:justify-start items-center cursor-pointer text-[20px] md:text-[20px] lg:text-[25px] xl:text-[25px] px-2'>
                        Manage Users
                    </div>
                    <div className='w-full flex justify-center lg:justify-start xl:justify-start items-center cursor-pointer text-[15px] md:text-[17px] lg:text-[20px] xl:text-[20px] px-4'>
                        Add User
                    </div>
                    <div className='w-full flex justify-center lg:justify-start xl:justify-start items-center cursor-pointer text-[15px] md:text-[17px] lg:text-[20px] xl:text-[20px] px-4'>
                        Remove User
                    </div>
                </div>

                <div className='w-full flex flex-col justify-center items-center my-4 md:mt-4 lg:mt-6 xl:mt-6'>
                    <div className='w-full flex justify-center lg:justify-start xl:justify-start items-center cursor-pointer text-[20px] md:text-[20px] lg:text-[25px] xl:text-[25px] px-2'>
                        Manage Site Content
                    </div>
                    <div className='w-full flex justify-center lg:justify-start xl:justify-start items-center cursor-pointer text-[15px] md:text-[17px] lg:text-[20px] xl:text-[20px] px-4' onClick={() => setActiveForm('home')}>
                        Home
                    </div>
                    <div className='w-full flex justify-center lg:justify-start xl:justify-start items-center cursor-pointer text-[15px] md:text-[17px] lg:text-[20px] xl:text-[20px] px-4' onClick={() => setActiveForm('about')}>
                        About Us
                    </div>
                    <div className='w-full flex justify-center lg:justify-start xl:justify-start items-center cursor-pointer text-[15px] md:text-[17px] lg:text-[20px] xl:text-[20px] px-4' onClick={() => setActiveForm('work')}>
                        Our Work
                    </div>
                    <div className='w-full flex justify-center lg:justify-start xl:justify-start items-center cursor-pointer text-[15px] md:text-[17px] lg:text-[20px] xl:text-[20px] px-4' onClick={() => setActiveForm('stories')}>
                        Stories
                    </div>
                    <div className='w-full flex justify-center lg:justify-start xl:justify-start items-center cursor-pointer text-[15px] md:text-[17px] lg:text-[20px] xl:text-[20px] px-4' onClick={() => setActiveForm('contact')}>
                        Contact
                    </div>
                </div>
            </div>

            <div className='w-full md:w-4/5 lg:w-4/5 xl:w-4/5 flex justify-center items-center'>
                {renderActiveForm()} {/* Render the active form component */}
            </div>
        </div>
    );
}

export default Page;
