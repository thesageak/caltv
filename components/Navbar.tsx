"use client";

import { useEffect, useState } from 'react';
import calTVLogo from '@/public/CalTVLogoBlack.png'

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        function handleScroll() {
            setScrolled(window.scrollY > 1);
        }

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll)
    }, []);

    return (
        <div className="sticky z-50 top-0 bg-white drop-shadow-sm">
            <nav className="flex flex-row items-center w-full h-10 bg-darkGrey">
                <div className="flex justify-end md:w-[1100px] mx-auto gap-5 text-white">
                    <a href="#">About CalTV</a>
                    <a href="#">Join Our Team</a>
                    <a href="#">Get Featured</a>
                    <a href="#">Contact</a>
                </div>
            </nav>
            <div className="md:max-w-[1100px] mx-auto">
                <nav className={`flex flex-row items-center duration-350 ${scrolled ? "h-18" : "h-25"}`}>
                    <a href="/">
                        <img
                            src={calTVLogo.src}
                            className={`transition-all duration-350 ${scrolled ? "h-12" : "h-17"}`}
                        />
                    </a>
                    <div className="flex items-center gap-5 ml-auto text-black text-[1.6rem]">
                        <a href="/section/news">News</a>
                        <a href="/section/entertainment">Entertainment</a>
                        <a href="#">Studios</a>
                        <p>search</p>
                    </div>
                </nav>
            </div>
        </div>
    )
}