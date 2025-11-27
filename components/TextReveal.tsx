'use client';
import { motion, useInView, Variants } from 'framer-motion'
import React from 'react';

export default function TextReveal({text, className} : {text: string, className?: string}) {
    const splittedText = text.split('');
    const ref = React.useRef(null);
    const isInView = useInView(ref , { once: true });

    const revealVariants: Variants = {
        initial: { opacity: 0, scale: 0.3 },
        animate: (i: number) => ({
            opacity: 1,
            scale: 1,
            transition: { 
                delay: i * 0.1, 
                duration: 0.4, 
                ease: 'easeOut' 
            },
        }),
    } as const;

    return (
        <div ref={ref}>
            {
                splittedText.map((letter, index) => (
                    <motion.span
                        key={index}
                        variants={revealVariants}
                        initial="initial"
                        animate={isInView ? "animate" : ""}
                        exit={{
                            opacity: 0,
                            scale: 0,
                            transition: { 
                                delay: index * 0.1,
                                duration: 0.2, 
                                ease: 'easeIn' 
                            },
                        }}
                        custom={index}
                        className={className + " inline-block"}
                    >
                        {letter}
                    </motion.span>
            ))}
        </div>
    );
}