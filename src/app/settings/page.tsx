import React from 'react'

const page = () => {
    return (
        <div className='flex justify-center items-center w-full'>
            <div className='w-1/5 flex flex-col justify-center items-center h-screen'>
                <div className='w-full flex flex-col justify-start items-start'>
                    <div className='w-full flex justify-center items-center'>
                        Manage Users
                    </div>

                    <div className='w-full flex justify-center items-center'>
                        Add User
                    </div>

                    <div className='w-full flex justify-center items-center'>
                        Remove User
                    </div>
                </div>
                
                <div className='w-full flex flex-col justify-center items-center'>
                    <div className='w-full flex justify-center items-center'>
                        Manage Site Content
                    </div>

                    <div className='w-full flex justify-center items-center'>
                        Home
                    </div>

                    <div className='w-full flex justify-center items-center'>
                        About
                    </div>

                    <div className='w-full flex justify-center items-center'>
                        Contact
                    </div>
                </div>
            </div>

            <div className='w-4/5 flex justify-center items-center'>
                Site Settings
            </div>
        </div>
    )
}

export default page;