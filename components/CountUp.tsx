'use client';
import { animate, motion, useMotionValue, useTransform, useInView } from "framer-motion"
import { useState, useEffect, useRef } from "react";

interface CountUpProps {
    value: number;
    duration?: number;
    className?: string;
}

export default function CountUp({ value, duration = 1, className }: CountUpProps) {
    const count = useMotionValue(0);
    const rounded = useTransform(count, latest => Math.round(latest).toLocaleString());
    const ref = useRef(null);
    const inView = useInView(ref, { once: true });
    const [showPlus, setShowPlus] = useState(false);

    useEffect(() => {
        if (!inView) 
            return;
        const controls = animate(count, value, { duration, onComplete() { setShowPlus(true) } });
        return () => controls.stop();
    }, [inView]);

    return (
        <div ref={ref} className={className}>
            <motion.span>
                {rounded}
            </motion.span>
            {showPlus && "+"}
        </div>
    )
}