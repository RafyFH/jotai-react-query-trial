"use client";

import { FaAlignJustify } from "react-icons/fa";
import {useEffect, useState} from "react";
import Sidebar from "@/app/components/layouts/Sidebar";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen((prev) => !prev);
    };

    useEffect(() => {
        const checkMobile = () => {
            if (window.innerWidth >= 768) {
                setIsOpen(true);
            } else {
                setIsOpen(false);
            }
        };

        checkMobile();

        window.addEventListener("resize", checkMobile);

        return () => {
            window.removeEventListener("resize", checkMobile);
        };
    },[])

    return (
        <>
            <div
                className={`dark:bg-palletedark2 bg-pallete2 flex text-white p-4 justify-between shadow-black h-16 transition-all duration-300 ease-in-out ${
                    isOpen ? "ml-72" : "ml-0"
                } w-full`}
            >
                <div className={`flex items-center space-x-3`}>
                    <button onClick={toggleSidebar}>
                        <FaAlignJustify/>
                    </button>
                </div>
                <div className={`flex items-center`}>
                    <p>profile</p>
                </div>
            </div>
            <Sidebar isOpen={isOpen}/>
        </>
    );
};

export default Navbar;