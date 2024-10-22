"use client"
import Link from 'next/link';
import React from 'react'
import { useRouter } from "next/navigation";

const Navbar = () => {
    const router = useRouter();

    const onHome = () => {
        router.push('/');
    }

    const onAbout = () => {
        router.push('/about');
    }

    const onContact = () => {
        router.push('/contact');
    }

    const onProducts = () => {
        router.push('/products');
    }

    const onEvents = () => {
        router.push('/events');
    }

    return (
        <div className='flex justify-center items-center space-x-12'> 
            <div className='flex justify-center items-center'>
                <Link href='/' onClick={onHome} className='text-blue-200 flex justify-center items-center'>
                    Home
                </Link>
            </div>

            <div className='flex justify-center items-center'>
                <Link href='/about' onClick={onAbout} className='text-blue-200 flex justify-center items-center'>
                    About Us
                </Link> 
            </div>

            <div className='flex justify-center items-center'>
                <Link href='/contact' onClick={onContact} className='text-blue-200 flex justify-center items-center'>
                    Contact Us
                </Link>
            </div>     

            <div className='flex justify-center items-center'>
                <Link href='/products' onClick={onProducts} className='text-blue-200 flex justify-center items-center'>
                    Products
                </Link>
            </div>    

            <div className='flex justify-center items-center'>
                <Link href='/events' onClick={onEvents} className='text-blue-200 flex justify-center items-center'>
                    Events
                </Link>
            </div>     
        </div>
    )
}

export default Navbar;