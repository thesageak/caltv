'use client';

import mountain from '../../../public/peak_mountain.png'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'

export default function Join() {
    const { scrollY } = useScroll();
    const rawY1 = useTransform(scrollY, [0, 100], [0, 230]);
    const y1 = useSpring(rawY1, { stiffness: 30, damping: 25 });
    const rawY2 = useTransform(scrollY, [0, 500], [0, 70]);
    const y2 = useSpring(rawY2, { stiffness: 50, damping: 25 });
    return (
        <div>
            <div className="relative w-full h-245 bg-gray-500 overflow-hidden">
                <motion.img
                    src={mountain.src}
                    className="absolute w-full h-auto object-cover bottom-0 blur-sm translate-y-45 -scale-x-100"
                    style={{ y: y1 }}
                />
                <motion.img
                    src={mountain.src}
                    className="absolute w-full h-auto object-cover bottom-0 translate-y-50"
                    style={{ y: y2 }}
                />
                <img
                    src={mountain.src}
                    className="absolute w-full h-auto object-cover bottom-0 blur-sm translate-y-90 -scale-x-120"
                />
            </div>

            <div className="h-1000" bg-white />

        </div>
    )
}