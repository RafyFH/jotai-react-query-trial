"use client";
import { AiOutlineDown, AiOutlineRight } from "react-icons/ai";
import { useState } from "react";

type SidebarMenuProps = {
    title: string;
    children?: SidebarMenuProps[];
};

const SidebarMenu: React.FC<{ item: SidebarMenuProps }> = ({ item }) => {
    const [isOpen, setIsOpen] = useState(false);

    const hasChildren = item.children && item.children.length > 0;

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <li>
            <button
                className={`flex items-center justify-between w-full py-2 px-5 transition duration-200 ease-in-out hover:border-l-4 hover:border-white
                    ${isOpen ? 'bg-pallete4 dark:bg-palletedark2 text-white border-l-4 border-white text-palletedark4' : 'hover:bg-pallete4 hover:dark:bg-palletedark2'}`}
                onClick={handleToggle}
            >
                <span>{item.title}</span>
                {hasChildren && (isOpen ? <AiOutlineDown /> : <AiOutlineRight />)}
            </button>

            {/* Submenu with animation */}
            {hasChildren && (
                <ul
                    className={`ml-4 mt-2 space-y-2 overflow-hidden transition-all duration-300 ease-in-out 
                    ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                    {item.children?.map((child, index) => (
                        <SidebarMenu key={index} item={child} />
                    ))}
                </ul>
            )}
        </li>
    );
};

export default SidebarMenu;