import { motion, useInView } from "framer-motion"
import React, { useRef } from "react"

interface Props {
    children: React.ReactNode
}

export const Section: React.FC<Props> = ({ children }) => {
    const ref = useRef(null)
    const isInView = useInView(ref)

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: isInView ? 1 : 0 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -100 }}
            transition={{ duration: 0.5 }}
        >
            {children}
        </motion.div>
    )
}

export const VerticalTimelineSection: React.FC<Props> = ({ children }) => {
    const ref = useRef(null)
    const isInView = useInView(ref, {amount: 0.1})

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: isInView ? 1 : 0 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
        >
            {children}
        </motion.div>
    )
}