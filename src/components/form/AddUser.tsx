"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-hot-toast";

export default function SignupPage() {
    const router = useRouter();

    const [user, setUser] = React.useState({
        email: "",
        username: "",
        password: "",
    });

    const [buttonDisabled, setButtonDisabled] = React.useState(false);
    const [loading, setLoading] = React.useState(false);

    const onSignup = async () => {
        try {
            setLoading(true);
            const response = await axios.post("/api/sign-up", user);
            console.log("signup success", response.data);
            toast.success("User added successfully");
            router.push("/sign-in");
        } catch (error) {
            if (axios.isAxiosError(error)) {
                console.log("Signup failed", error.message);
                toast.error(error.message);
            } else {
                console.log("Signup failed", error);
                toast.error("Signup failed");
            }
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        if (user.email.length > 0 && user.password.length > 0 && user.username.length > 0) {
            setButtonDisabled(false);
        } else {
            setButtonDisabled(true);
        }
    }, [user]);

    return (
        <div className="flex justify-center items-center flex-col m-auto h-screen w-full bg-gradient-to-br from-yellow-300 to-cyan-300">
            <div className="flex flex-col items-center justify-center text-black bg-gradient-to-bl from-red-400 to-orange-300 w-fit sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 h-fit py-6 md:py-8 lg:py-12 px-4 rounded-xl shadow-2xl">
                <div className="flex text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold justify-center items-center pt-0 pb-4 px-2 md:px-4 lg:px-0 xl:px-0">
                    <h1>{loading ? "Loading" : "Add User"}</h1>
                </div>
                <hr />
                <div className="flex flex-col pt-4 pb-3 px-2 md:px-4 lg:px-0 xl:px-0">
                    <div className="flex w-full text-lg md:text-xl lg:text-2xl font-semibold font-sans">
                        <label htmlFor="username">Username</label>
                    </div>
                    <div className="flex">
                        <input
                            className="p-2 text-black border border-slate-400 shadow-lg rounded-lg focus:outline-none focus:border-gray-800"
                            id="username"
                            type="text"
                            value={user.username}
                            onChange={(e) => setUser({ ...user, username: e.target.value })}
                            placeholder="Username"
                        />
                    </div>
                </div>
                <div className="flex flex-col py-3 px-2 md:px-4 lg:px-0 xl:px-0">
                    <div className="flex w-full text-lg md:text-xl lg:text-2xl font-semibold font-sans">
                        <label htmlFor="email">Email</label>
                    </div>
                    <div className="flex">
                        <input
                            className="p-2 border text-black border-slate-400 shadow-lg rounded-lg focus:outline-none focus:border-gray-800"
                            id="email"
                            type="text"
                            value={user.email}
                            onChange={(e) => setUser({ ...user, email: e.target.value })}
                            placeholder="Email"
                        />
                    </div>
                </div>
                <div className="flex flex-col py-3">
                    <div className="flex text-lg md:text-xl lg:text-2xl font-semibold font-sans">
                        <label htmlFor="password">Password</label>
                    </div>
                    <div className="flex">
                        <input
                            className="p-2 border text-black border-slate-400 shadow-lg rounded-lg focus:outline-none focus:border-gray-800"
                            id="password"
                            type="password"
                            value={user.password}
                            onChange={(e) => setUser({ ...user, password: e.target.value })}
                            placeholder="Password"
                        />
                    </div>
                </div>
                <div className="flex py-3">
                    <button onClick={onSignup} className="bg-red-200 p-2 border-gray-300 rounded-lg mb-4 shadow-inner hover:shadow-xl hover:p-3 hover:text-lg hover:font-semibold">
                        {buttonDisabled ? "No Signup" : "Add User"}
                    </button>
                </div>
            </div>
        </div>
    )
}