"use client";

import { useEffect, useState } from 'react';
import calTVLogo from '@/public/CalTVLogoBlack.png'

interface NavbarProps {
    barColor?: string;
    textColor?: string;
    currentPage?: string;
}

export default function Navbar({barColor, textColor, currentPage} : NavbarProps) {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        function handleScroll() {
            setScrolled(window.scrollY > 1);
        }

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll)
    }, []);

    return (
        <div className="sticky z-50 top-0 bg-white drop-shadow-sm/6">
            <nav className={`flex flex-row items-center w-full h-9 ${barColor}`}>
                <div className="flex justify-end md:w-[1100px] mx-auto gap-5 text-white">
                    <a href="/section/about">About CalTV</a>
                    <a href="/section/join">Join Our Team</a>
                    <a href="/section/feature">Get Featured</a>
                    <a href="/section/contact">Contact</a>
                </div>
            </nav>
            <div className="md:max-w-[1100px] mx-auto">
                <nav className={`flex flex-row items-center duration-350 ${scrolled ? "h-18" : "h-25"}`}>
                    <a href="/">
                        <img
                            src={calTVLogo.src}
                            className={`transition-all duration-350 ${scrolled ? "h-11" : "h-17"}`}
                        />
                    </a>
                    <div className={`flex items-center gap-5 ml-auto text-[1.6rem]`}>
                        <a href="/section/news" className={currentPage === "news" ? textColor : "text-black"}>News</a>
                        <a href="/section/entertainment" className={currentPage === "entertainment" ? textColor : "text-black"}>Entertainment</a>
                        <a href="#">Studios</a>
                        <p>search</p>
                    </div>
                </nav>
            </div>
        </div>
    )
}