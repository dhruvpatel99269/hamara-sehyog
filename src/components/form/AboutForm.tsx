"use client"
import React, { useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const Page = () => {
    const [data, setData] = React.useState({
        home: "",
        about: "",
        stories: "",
        contact: "",
        work: "",
    });

    // Fetch initial data from the API
    const fetchData = async () => {
        try {
            const response = await axios.get("/api/data"); // Update this to your correct API endpoint
            setData(response.data);
            console.log("Data fetched successfully", response.data);
        } catch (error) {
            if (axios.isAxiosError(error)) {
            console.error("Content Fetching Failed", error.message);
            toast.error("Failed to fetch About data")
            } else {
                console.error("Content Fetching Failed", error);
                toast.error("Failed to fetch About data")
            }
        }
    };

    // Update data on the server
    const updateData = async () => {
        try {
            await axios.post("/api/data", {
                type: 'about', // Specify the type of data to update
                value: data.about, // Use the current value of about
            });
            toast.success("Data updated successfully");
            console.log("Update success");
            fetchData(); // Fetch updated data after a successful update
        } catch (error) {
            if (axios.isAxiosError(error)) {
                toast.error("Error updating data");
                console.error("Update failed", error.message);
            } else {
                toast.error("Error updating data");
                console.error("Update failed", error);
            }
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className='flex flex-col justify-center items-center h-screen w-full'>
            <div className='flex flex-col justify-center items-center w-full'>
                <div className='flex justify-center items-center w-full my-4'>
                    <label htmlFor='about'>
                        About Content
                    </label>
                </div>

                <div className='flex justify-center items-center w-full h-1/2 my-4'>
                    <textarea
                        className="p-2 text-black border border-slate-400 shadow-lg rounded-lg focus:outline-none focus:border-gray-800 w-2/3 h-full"
                        id="about"
                        value={data.about} // Update value to use data state
                        onChange={(e) => setData({ ...data, about: e.target.value })} // Correctly set state
                        placeholder="about"
                    />
                </div>

                <div className="flex justify-center items-center w-full my-4">
                    <button
                        onClick={updateData}
                        className="bg-red-200 p-2 border-gray-300 rounded-lg mb-4 shadow-inner hover:shadow-xl hover:p-3 hover:text-lg hover:font-semibold"
                    >
                        {"Submit"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Page;
