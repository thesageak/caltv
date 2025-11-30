'use client';

import { motion, useScroll, useSpring, useTransform, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Carousel from '@/components/Carousel'
import TextReveal from '@/components/TextReveal'
import mountain from '../../../public/peak_mountain.png'
import calTVCircle from '@/public/CalTVLogoBlackCircle.png'
import officeImage from '@/public/office_cover.jpg'
import colorBarAsset from '@/public/ColorBarAsset.svg'
import colorBackAsset from '@/public/ColorBackAsset.svg'
import { companyData } from './data';

export default function Join() {
    const { scrollY } = useScroll();
    const rawBackY = useTransform(scrollY, [0, 500], [0, 200]);
    const backY = useSpring(rawBackY, { stiffness: 35, damping: 20 });
    const rawMiddleY = useTransform(scrollY, [0, 500], [0, 100]);
    const middleY = useSpring(rawMiddleY, { stiffness: 50, damping: 25 });

    const texts = ["MARKETING", "ANALYTICS", "PRODUCTION", "EDITING", ""]
    const [index, setIndex] = useState(0);
    const [showLogo, setShowLogo] = useState(false);

    useEffect(() => {
        if (index === texts.length - 1)
            return;
        const interval = setInterval(() => setIndex((prevIndex) => (prevIndex + 1) % texts.length), 4000);
        return () => clearInterval(interval);
    }, [index]);

    return (
        <div>
            <Navbar hideBottom={true} barColor='bg-darkGrey' />
            {/*-------------- Top Mountain Section --------------*/}
            <div className="relative w-full h-245 bg-lightGrey overflow-hidden">
                <motion.div
                    className="absolute w-px bottom-0 left-[55%] translate-x-50 -translate-y-20 bg-white"
                    initial={{ height: 0 }}
                    animate={{ height: "22.5rem" }}
                    transition={{ delay: 0.6 }}
                />
                <motion.div
                    className="absolute w-px bottom-0 left-[55%] translate-x-65 -translate-y-30 bg-white"
                    initial={{ height: 0 }}
                    animate={{ height: "25rem" }}
                    transition={{ delay: 0.7 }}
                />
                <motion.div
                    className="absolute w-px bottom-0 left-[55%] translate-x-80 -translate-y-40 bg-white"
                    initial={{ height: 0 }}
                    animate={{ height: "37.5rem" }}
                    transition={{ delay: 0.8 }}
                />

                <motion.img
                    src={mountain.src}
                    className="absolute w-full h-auto object-cover bottom-0 blur-sm translate-y-40 -scale-x-100"
                    initial={{ y: 200 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                    style={{ y: backY }}
                />

                <motion.img
                    src={mountain.src}
                    className="absolute w-full h-auto object-cover bottom-0 translate-y-40"
                    initial={{ y: 200 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                    style={{ y: middleY }}
                />

                <img
                    src={mountain.src}
                    className="absolute w-full h-auto object-cover bottom-0 blur-sm translate-y-90 -scale-x-120"
                />

                <motion.img
                    src={calTVCircle.src}
                    className="w-60 h-auto object-cover mt-10 ml-15"
                    initial={{ clipPath: "circle(0% at 50% 50%)" }}
                    animate={{ clipPath: "circle(100% at 50% 50%)" }}
                    transition={{ ease: "easeIn", duration: 0.25, delay: 0.5 }}
                />

                <motion.div
                    className="flex flex-col mx-75"
                    initial={{ y: 1000 }}
                    animate={{ y: 0 }}
                    transition={{
                        duration: 1,
                        ease: [0.16, 1, 0.3, 1]
                    }}
                >
                    <h1 className="text-white text-[4.5rem] font-extrabold leading-15 mb-7">
                        REACH NEW <br /> HEIGHTS <br /> WITH <br /> US.
                    </h1>
                    <a href="#info-session" className="scroll-smooth text-white text-[1.2rem]">
                        LEARN MORE
                    </a>
                </motion.div>

                <motion.div
                    className="absolute w-px bottom-0 left-[55%] translate-x-20 bg-white"
                    initial={{ height: 0 }}
                    animate={{ height: "17.5rem" }}
                    transition={{ delay: 0.5 }}
                />
                <motion.div
                    className="absolute w-px bottom-0 left-[55%] translate-x-35 -translate-y-10 bg-white"
                    initial={{ height: 0 }}
                    animate={{ height: "17.5rem" }}
                    transition={{ delay: 0.4 }}
                />

            </div>

            {/* ------- Info Sesssion Section ------- */}
            <div 
                id="info-session" 
                className="relative flex w-full gap-20 justify-center items-center h-[600px] mt-40 bg-[url(/ColorBackAsset.svg)] bg-cover bg-center bg-no-repeat bg-fixed"
            >
                <div className="flex-col -translate-y-16">
                    <h1 className="text-[2rem] font-bold text-white mb-8">Fall 2025 Applications open soon!</h1>
                    <p className="w-150 text-white font-bold mb-2">
                        Applications are due Friday, September 5th (11:59pm PT)
                        Interviews will be held by Department Directors from September 7th-9th.
                        Decisions will be announced by Wednesday, September 10th.
                    </p>
                    <button className="text-[1.5rem] font-bold mt-5 px-7 py-5 text-orange-600 bg-white">
                        Apply Now!
                    </button>
                </div>
                <div className="text-white">
                    <h1 className="font-bold text-[2rem] mb-4">
                        Want to learn more?
                    </h1>
                    <div className="felx-col w-110 h-30 bg-white/15 p-5 text-[1.2rem] font-bold mb-1">
                        <div>
                            <div className="flex justify-between">
                            <p>In-Person Tabling:</p>
                            <p>Sather Gate</p>
                        </div>
                            <p>September 2nd - 5th</p>
                        </div>
                    </div>
                    <div className="felx-col w-110 h-25 bg-white/15 p-5 py-10 text-[1.2rem] font-bold mb-1">
                        <div className="-translate-y-5">
                            <div className="flex justify-between">
                            <p>Info Session #1:</p>
                            <p>Social Science 175</p>
                        </div>
                            <p>
                                Tuesday, September 2nd (8-9:00pm PT)
                            </p>
                        </div>
                    </div>
                    <div className="felx-col w-110 h-25 bg-white/15 p-5 py-10 text-[1.2rem] font-bold">
                        <div className="-translate-y-5">
                            <div className="flex justify-between">
                            <p>Info Session #2:</p>
                            <p>SS 175, Zoom</p>
                        </div>
                            <p>
                                Thursday, September 4th (8-9:00 pm PT)
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* ------- Companies Section ------- */}
            <div className="flex flex-col w-full h-100 justify-center items-center mx-auto overflow-hidden">
                <div className="flex gap-20 mb-20">
                    <h1 className="text-[1.7rem] w-65 font-bold">
                        Fostering creativity for over a decade
                    </h1>
                    <p className="font-bold text-[1.1rem] w-180">
                        For 18 years, CalTV has helped students grow their creativity and bring their ideas to life. 
                        Our alumni have gone on to work in Marketing, Entertainment, Tech, among many other industries, 
                        in organizations like Airbnb, Paramount Networks, Nickelodeon, Yelp, The White House, Google, Uber, 
                        PwC, TikTok, and more.
                    </p>
               </div>

                <div className="flex justify-center">
                    <Carousel>
                        {companyData.map((src, i) => ( <img key={i} src={src} className="w-auto h-10"/>))}
                    </Carousel>
                </div>
            </div>

            {/*-------------- Banner Section --------------*/}
            <div className="flex flex-col">
                <div className="relative flex justify-center items-center">
                    <img
                        src={officeImage.src}
                        alt="Office Cover"
                        className="w-full h-80 object-cover"
                    />
                    <div className="absolute flex justify-center items-center gap-4 translate-x-10">
                        <p
                            className="text-white text-[4rem] font-extrabold"
                        >
                            WE LOVE
                        </p>
                        <div className="w-[30vw]">
                            <AnimatePresence
                                mode="wait"
                                onExitComplete={() => { if (index === texts.length - 1) setShowLogo(true); }}
                            >
                                <TextReveal
                                    key={texts[index]}
                                    text={texts[index]}
                                    className="text-orange-500 text-[4rem] font-extrabold"
                                />
                            </AnimatePresence>

                            {
                                showLogo && (
                                    <motion.img
                                        src={calTVCircle.src}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 0.5 }}
                                        className="w-60 h-auto"
                                    />
                                )}
                        </div>
                    </div>
                </div>
                <img
                    src={colorBarAsset.src}
                    alt="Color Bar Asset"
                    className="w-full h-6 object-cover"
                />
            </div>

            {/*-------------- Ending Section --------------*/}
            <div className="flex w-full h-60 mx-auto gap-20 justify-center items-center">
                <h1 className="font-bold text-[1.7rem]">
                    A home for everyone
                    </h1>
                <p className="w-180 font-bold text-[1.1rem]">
                    At CalTV, there’s a role for every interest. Whether you are interested in Journalism, 
                    Video Production, Marketing, Social Media, or analytics, we have a place for you.
                </p>
            </div>

            <Footer />
        </div>
    )
}