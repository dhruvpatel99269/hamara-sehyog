"use client";
import React, { useState } from "react";
import {
    motion,
    AnimatePresence,
    useScroll,
    useMotionValueEvent,
} from "framer-motion";
import { useRouter } from "next/navigation"; // Import useRouter for routing
import { cn } from "@/lib/utils";
import Image from "next/image";
import { FaBars, FaTimes } from "react-icons/fa"; // Import icons for hamburger menu

type NavItem = {
    name: string;
    link: string;
    icon?: JSX.Element;
};

export const FloatingNav = ({
    navItems,
    className,
}: {
    navItems: NavItem[];
    className?: string;
}) => {
    const { scrollYProgress } = useScroll();
    const [visible, setVisible] = useState(true);
    const [isMenuOpen, setIsMenuOpen] = useState(false); // State for menu toggle
    const router = useRouter(); // useRouter for routing

    useMotionValueEvent(scrollYProgress, "change", (current) => {
        if (typeof current === "number") {
            const previous = scrollYProgress.getPrevious();
            
            if (previous !== undefined) {
                const direction = current - previous;
    
                if (scrollYProgress.get() < 0.05) {
                    setVisible(true);
                } else {
                    setVisible(direction < 0);
                }
            }
        }
    });
    

    return (
        <AnimatePresence mode="wait">
            <motion.div
                initial={{
                    opacity: 1,
                    y: -100,
                }}
                animate={{
                    y: visible ? 0 : -100,
                    opacity: visible ? 1 : 0,
                }}
                transition={{
                    duration: 0.2,
                }}
                className={cn(
                    "flex w-full fixed z-[5000] inset-x-0 mx-auto justify-between lg:justify-around h-[15vh] px-10 py-5 bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] items-center space-x-24",
                    className
                )}
                style={{
                    backdropFilter: "blur(16px) saturate(180%)",
                    border: "1px solid rgba(255, 255, 255, 0.125)",
                }}
            >
                <div className="flex justify-center items-center">
                    <Image src="/logo.jpg" alt="logo" width={100} height={100} />
                </div>
                {/* Hamburger menu for mobile */}
                <div className="lg:hidden">
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle Menu">
                        {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                    </button>
                </div>
                {/* Links for larger screens */}
                <div className="hidden lg:flex justify-end items-center space-x-4">
                    {navItems.map((navItem: NavItem, idx: number) => (
                        <button
                            key={`link=${idx}`}
                            onClick={() => router.push(navItem.link)} // Route to the link
                            className={cn(
                                "relative text-blue-500 items-center flex space-x-1 dark:hover:text-blue-300 hover:text-blue-700"
                            )}
                        >
                            <span className="block sm:hidden">{navItem.icon}</span>
                            <span className="text-sm !cursor-pointer">{navItem.name}</span>
                        </button>
                    ))}
                </div>
                {/* Mobile menu dropdown */}
                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -50 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -50 }}
                            transition={{ duration: 0.3 }}
                            className="absolute top-[100%] inset-x-0 bg-white p-5 shadow-lg lg:hidden flex flex-col space-y-4"
                        >
                            {navItems.map((navItem: NavItem, idx: number) => (
                                <button
                                    key={`mobile-link=${idx}`}
                                    onClick={() => {
                                        router.push(navItem.link);
                                        setIsMenuOpen(false); // Close menu after clicking a link
                                    }}
                                    className={cn(
                                        "relative text-blue-500 items-center flex space-x-1 dark:hover:text-blue-300 hover:text-blue-700"
                                    )}
                                >
                                    <span>{navItem.name}</span>
                                </button>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </AnimatePresence>
    );
};
