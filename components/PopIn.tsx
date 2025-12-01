'use client';
import { motion } from "framer-motion"

interface PopInProps {
    children: React.ReactNode;
    className: string;
}

export default function PopIn({children, className} : PopInProps) {

    const popInVariant = {
        hidden: {opacity: 0, scale: 0},
        visible: {opacity: 1, scale: 1, transition:{duration: 1}}
    }

    return (
        <motion.div 
            className={className}
            variants={popInVariant}
        >
            {children}
        </motion.div>
    )
}