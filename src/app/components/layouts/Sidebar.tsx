import { menuItems } from "@/app/components/layouts/MenuItems";
import SidebarMenu from "@/app/components/layouts/SidebarMenu";

interface SidebarProps {
    isOpen: boolean; // Tambahkan prop isOpen
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen }) => {
    console.log(isOpen);
    return (
        <div
            className={`fixed w-72 h-screen bg-pallete3 dark:bg-blue-900 shadow-2xl shadow-zinc-700 text-white py-4 border-r-2 border-pallete2 dark:border-palletedark3 transition-transform duration-300 ease-in-out 
                ${isOpen ? "translate-x-0" : "-translate-x-full"}`} // Sidebar tampil di desktop
        >
            <div className={`flex flex-col space-y-10`}>
                <div className={`flex space-x-1 items-center justify-center`}>
                    <img
                        className={`w-12 h-auto`}
                        src={`https://fivaldicyberstudio.wordpress.com/wp-content/uploads/2022/01/logo-tut-wuri-handayani.png`}
                        alt="Logo"
                    />
                    <span className={`font-bold text-pallete4 dark:text-palletedark4 text-lg`}>
                        EPERPUS
                    </span>
                </div>
                <ul className="space-y-1">
                    {menuItems.map((item, index) => (
                        <SidebarMenu key={index} item={item} />
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
