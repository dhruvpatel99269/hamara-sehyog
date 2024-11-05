"use client"
import Link from "next/link";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";

export default function LoginPage() {
    const router = useRouter();
    const [user, setUser] = React.useState({
        email: "",
        password: "",
    })
    const [buttonDisabled, setButtonDisabled] = React.useState(false);
    const [loading, setLoading] = React.useState(false);

    const onLogin = async () => {
        try {
            setLoading(true);
            const response = await axios.post("/api/sign-in", user);
            console.log("Login success", response.data);
            toast.success("Login success");
            router.push("/settings");
        } catch (error) {
            if (axios.isAxiosError(error)) {
                console.log("Login failed", error.message);
                toast.error(error.response?.data?.message || "Login failed");
            } else {
                console.log("An unexpected error occurred", error);
                toast.error("An unexpected error occurred");
            }
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        if (user.email.length > 0 && user.password.length > 0) {
            setButtonDisabled(false);
        } else {
            setButtonDisabled(true);
        }
    }, [user]);

    return (
        <>
        <div className="flex flex-col justify-center items-center w-screen h-screen bg-gradient-to-br from-yellow-300 to-cyan-300">
            <div className="flex flex-col items-center justify-center text-black w-fit sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 h-fit py-6 md:py-8 lg:py-12 px-4 rounded-xl shadow-2xl bg-gradient-to-bl from-red-400 to-orange-300">
                <div className="flex text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold justify-center items-center pt-0 pb-4">
                    <h1>{loading ? "Processing" : "Admin Login"}</h1>
                </div>
                <hr />
                <div className="flex flex-col pt-4 pb-3">
                    <div className="flex w-full text-lg md:text-xl lg:text-2xl font-semibold">
                        <label htmlFor="email">Email</label>
                    </div>
                    <div className="flex">
                        <input
                            className="p-2 text-black border border-slate-400 shadow-lg rounded-lg focus:outline-none focus:border-gray-800"
                            id="email"
                            type="text"
                            value={user.email}
                            onChange={(e) => setUser({ ...user, email: e.target.value })}
                            placeholder="email"
                        />
                    </div>
                </div>
                <div className="flex flex-col py-3">
                    <div className="flex text-lg md:text-xl lg:text-2xl font-semibold font-sans">
                        <label htmlFor="password">Password</label>
                    </div>
                    <div>
                        <input
                            className="p-2 border text-black border-gray-500 shadow-lg rounded-lg focus:outline-none focus:border-gray-800"
                            id="password"
                            type="password"
                            value={user.password}
                            onChange={(e) => setUser({ ...user, password: e.target.value })}
                            placeholder="password"
                        />
                    </div>
                </div>
                <div className="flex py-3">
                    <button onClick={onLogin} className="bg-red-200 p-2 border-gray-300 rounded-lg mb-4 shadow-inner hover:shadow-xl hover:p-3 hover:text-lg hover:font-semibold">
                        {buttonDisabled ? "No Login" : "Login"}
                    </button>
                </div>
                <div className="flex text-blue-600 hover:text-violet-600 text-sm sm:text-md md:text-lg lg:text-lg xl:text-lg font-mono">
                    <Link href="/signup">Visit signup page</Link>
                </div>
            </div>
        </div>
        </>
    )
}