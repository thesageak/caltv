'use client';

import { motion, useScroll, useSpring, useTransform, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react';
import TextReveal from '@/components/TextReveal';
import mountain from '../../../public/peak_mountain.png'
import calTVCircle from '@/public/CalTVLogoBlackCircle.png'
import officeImage from '@/public/office_cover.jpg'

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
        if (index === texts.length - 1) return;
        const interval = setInterval(() => setIndex((prevIndex) => (prevIndex + 1) % texts.length), 4000);
            return () => clearInterval(interval);
        }, [index]);

    return (
        <div>
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
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1}}
                    style={{ y: backY }}
                />
                <motion.img
                    src={mountain.src}
                    className="absolute w-full h-auto object-cover bottom-0 translate-y-40"
                    initial={{ y: 200 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1}}
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
                    <p className="text-white text-[1.2rem]">
                        LEARN MORE
                    </p>
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

            {/* <div className="h-100" bg-white /> */}


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
                            onExitComplete ={() => {if (index === texts.length - 1) setShowLogo(true);}}
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
                                initial={{ opacity: 0}}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5 }}
                                className="w-60 h-auto"
                            />
                        )}
                    </div>
                </div>
            </div>
            
            

            <div className="h-100" bg-white />

        </div>
    )
}