"use client";

import { FaAlignJustify } from "react-icons/fa";
import Sidebar from "@/app/components/layouts/Sidebar";

interface NavbarProps {
    toggleSidebar: () => void;
    isOpen: boolean;
}
const Navbar: React.FC<NavbarProps> = ({ toggleSidebar, isOpen }) => {
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
                    <img src="https://cdn-icons-png.flaticon.com/512/9203/9203764.png" className={`max-w-10 h-auto`} alt="icon" />
                </div>
            </div>
            <Sidebar isOpen={isOpen}/>
        </>
    );
};

export default Navbar;