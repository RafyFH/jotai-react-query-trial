"use client"

import {FaAlignJustify} from "react-icons/fa";

const Navbar = () => {
    return (
        <div className="dark:bg-palletedark2 bg-pallete2 flex text-white p-4 justify-between shadow-2xl shadow-black">
            <div className={`flex items-center space-x-3`}>
                <FaAlignJustify />
                <div className={`flex space-x-1 items-center`}>
                    <img className={`w-12 h-auto`}
                         src={`https://fivaldicyberstudio.wordpress.com/wp-content/uploads/2022/01/logo-tut-wuri-handayani.png`}
                         alt="Logo"
                    />
                    <span className={`font-bold text-pallete4 dark:text-palletedark4 text-lg`}>
                        EPERPUS
                    </span>
                </div>
            </div>
            <div className={`flex items-center`}>
                <p>profile</p>
            </div>
        </div>
    )
}

export default Navbar