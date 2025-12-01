"use client";
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import colorBarAsset from "@/public/ColorBarAsset.svg"
import asucLogo from '@/public/ASUCLogoWhite.png'
import LeadershipCards from "@/components/LeadershipCards"
import { leadershipData } from "@/app/section/about/data"
import PopIn from "@/components/PopIn"
import CountUp from "@/components/CountUp"
import { motion } from "framer-motion"


export default function About() {
    return (
        <div>
            <Navbar barColor="bg-darkGrey"/>
            <h1 className="text-center text-5xl mt-24 font-bold">UC Berkeley's premier <br /> student-run media organization</h1>
            
            <video className="w-6xl h-auto mx-auto mt-20 mb-20" muted loop autoPlay>
                <source src="/CalTV_Promo.mp4" type="video/mp4" />
                Your browser does not support the video tag
            </video>

            <div className="w-160 mx-auto text-[1.2rem] font-bold mb-25">
                <p> 
                    CalTV is online, 24 hours a day, 7 days a week on YouTube, Instagram, TikTok, and Facebook. 
                    Since its founding in 2005, CalTV has grown into one of the largest student-run television 
                    organizations on the West Coast, producing interviews, spotlights, documentaries, sketches, 
                    short films, and more. As a Chartered Program of the ASUC, CalTV is one of only a few on-campus 
                    organizations considered to provide important services to all students.
                </p>
                <p className="mt-5">
                    CalTV is uniquely positioned for access to prominent Berkeley community members as well as 
                    notable celebrities and public figures in entertainment and politics. In the past, CalTV has 
                    featured individuals such as Kamala Harris, Will Smith, Jonah Hill, Chancellor Carol Christ, 
                    Professor Robert Reich, and Professor Josh Hug, and collaborated with companies such as Snackpass, 
                    Pudgy Penguins and Adobe.
                </p>
            </div>
            
            <img
                src={colorBarAsset.src}
                className="w-full h-6 object-cover"
            />
            <div className="w-full h-140 flex justify-center bg-black mb-20">
                <motion.div 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true}}
                    variants={{
                        visible: { transition: { staggerChildren: 0.3 } }
                    }}
                    className="w-[1100px] grid grid-cols-3 grid-rows-2 grid-flow-col place-items-center mt-10 mb-10"
                >
                    <PopIn className="flex flex-col items-center">
                        <img
                            src={asucLogo.src}
                            className="w-100 h-auto"
                        />
                        <p>
                            Chartered Program
                        </p>
                    </PopIn>

                    <PopIn className="flex flex-col items-center">
                        <CountUp value={567000} className="text-white text-6xl font-bold" />
                        <p>
                            Facebook Views & Counting
                        </p>
                    </PopIn>

                    <PopIn className="flex flex-col items-center">
                        <CountUp value={3632000} className="font-bold text-white text-6xl" />
                        <p className="translate-y-10">
                            Youtube Views & Counting
                        </p>
                    </PopIn>

                    <PopIn className="flex flex-col items-center">
                        <CountUp value={2296000} className="text-white text-6xl font-bold" />
                        <p>
                            TikTok Views & Counting
                        </p>
                    </PopIn>

                    <PopIn className="flex flex-col items-center">
                        <p className="text-white text-9xl font-bold">
                            MMV
                        </p>
                        <p>
                            Since 2005
                        </p>
                    </PopIn>

                    <PopIn className="flex flex-col items-center">
                        <CountUp value={416000} duration={2} className="text-white text-6xl font-bold" />
                        <p>
                            Instagram Views & Counting
                        </p>
                    </PopIn>
                </motion.div>
            </div>

            <h1 className="text-center text-4xl font-bold mb-20">
                Leadership Team
            </h1>

            <div className="w-[1100px] mx-auto flex flex-wrap justify-center gap-10">
                {
                    leadershipData.map((leader, index) => (
                        <LeadershipCards
                            key={index}
                            name={leader.name} 
                            title={leader.title} 
                            image={leader.image} 
                            pronouns={leader.pronouns} 
                        />
                    ))
                }
            </div>
            <Footer />
        </div>
    )
}