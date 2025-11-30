import { useState, useEffect } from "react"
import { animate, motion, useMotionValue } from "framer-motion"
import useMeasure from "react-use-measure"

// Inspiration: https://www.youtube.com/watch?v=Ot4nZ6UjJLE

interface CarouselProps {
    children: React.ReactNode[];
    interval?: number;
    speed?: number;
}


export default function Carousel({ children, interval, speed }: CarouselProps) {
    const [index, setIndex] = useState(0);

    let [ref, { width }] = useMeasure();

    const xTranslation = useMotionValue(0);

    useEffect(() => {
        let controls;
        let finalPosition = -width / 2;
        console.log(finalPosition);

        controls = animate(xTranslation, [0, finalPosition], {
            ease: 'linear',
            duration: 20,
            repeat: Infinity,
            repeatType: 'loop',
            repeatDelay: 0,
        });

        return controls.stop;
    }, [xTranslation, width]);

    return (
        <div className="overflow-hidden absolute w-200">
            <motion.div className="flex" ref={ref} style={{ x: xTranslation, width: 'max-content' }}>
                {
                    [...children, ...children].map((child, i) => (
                        <div key={i} className="flex shrink-0 px-4">
                            {child}
                        </div>
                    ))
                }
            </motion.div>
            <div className="pointer-events-none absolute top-0 left-0 h-full w-32 
                    bg-linear-to-r from-white to-transparent" />

            <div className="pointer-events-none absolute right-0 top-0 h-full w-32
                bg-linear-to-l from-white to-transparent" />
        </div>
    )
}