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

    const fetchData = async () => {
        try {
            const response = await axios.get("/api/data"); 
            setData(response.data);
            console.log("Data fetched successfully", response.data);
        } catch (error) {
            if (axios.isAxiosError(error)) {
            console.error("Content Fetching Failed", error.message);
            toast.error("Failed to fetch work data")
            } else {
                console.error("Content Fetching Failed", error);
                toast.error("Failed to fetch work data")
            }
        }
    };

    const updateData = async () => {
        try {
            await axios.post("/api/data", {
                type: 'work', 
                value: data.work,
            });
            toast.success("Data updated successfully");
            console.log("Update success");
            fetchData(); 
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
        <div className='flex justify-center items-center h-screen w-full'>
            <div className='flex flex-col justify-center items-center w-full'>
                <div className='flex justify-center items-center w-full my-4'>
                    <label htmlFor='work'>
                        Work Content
                    </label>
                </div>

                <div className='flex justify-center items-center w-full h-1/2 my-4'>
                    <textarea
                        className="p-2 text-black border border-slate-400 shadow-lg rounded-lg focus:outline-none focus:border-gray-800 w-2/3 h-full"
                        id="work"
                        value={data.work}
                        onChange={(e) => setData({ ...data, work: e.target.value })}
                        placeholder="work"
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
