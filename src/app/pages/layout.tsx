"use client"; // Pastikan ini ditambahkan untuk menunjukkan bahwa ini adalah komponen client

import { useEffect, useState } from 'react';
import "../globals.css";
import QueryWrapper from "@/app/components/layouts/QueryWrapper";
import Navbar from "@/app/components/layouts/Topbar";
import localFont from "next/font/local";


const geistSans = localFont({
    src: "../fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const geistMono = localFont({
    src: "../fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});
export default function PagesLayout({ children } : Readonly<{
    children: React.ReactNode;
}>) {
    const [isMounted, setIsMounted] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    // Set state isMounted setelah komponen dimount di client
    useEffect(() => {
        setIsMounted(true);
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
    }, []);

    // Jika belum dimount, render loading atau null
    const toggleSidebar = () => {
        setIsOpen(prev => !prev);
    };

    if (!isMounted) {
        return null; // atau bisa menampilkan loading spinner
    }

    return (
        <html lang="en">
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased dark:bg-palletedark1 bg-gray-100`}>
                <div className={`flex fixed top-0 w-full `}>
                    <Navbar toggleSidebar={toggleSidebar} isOpen={isOpen} />
                </div>
                <div className={`mt-20 transition-all duration-300 ease-in-out ${isOpen ? 'ml-72' : 'ml-0'}`}>
                    <QueryWrapper>
                        {children}
                    </QueryWrapper>
                </div>
            </body>
        </html>
    );
}