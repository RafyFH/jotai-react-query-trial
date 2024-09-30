"use client"; // Pastikan ini ditambahkan untuk menunjukkan bahwa ini adalah komponen client

import { useEffect, useState } from 'react';
import "../globals.css";
import QueryWrapper from "@/app/components/layouts/QueryWrapper";
import Navbar from "@/app/components/layouts/Topbar";

export default function PagesLayout({
                                        children,
                                    }: Readonly<{
    children: React.ReactNode;
}>) {
    const [isMounted, setIsMounted] = useState(false);

    // Set state isMounted setelah komponen dimount di client
    useEffect(() => {
        setIsMounted(true);
    }, []);

    // Jika belum dimount, render loading atau null
    if (!isMounted) {
        return null; // atau bisa menampilkan loading spinner
    }

    return (
        <html lang="en">
        <body className="antialiased">
        <div className="mt-20">
            <QueryWrapper>
                {children}
            </QueryWrapper>
        </div>
        </body>
        </html>
    );
}