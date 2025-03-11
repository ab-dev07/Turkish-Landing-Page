"use client"
import React, { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
interface AnimationTextProps {
  heading: { heading1: string; heading2: string }
  paragraph: string
  animate?: boolean
  onViewChange?: (section: string) => void
}

export default function AnimatedText({ heading, paragraph, animate, onViewChange }: AnimationTextProps) {
  const ref = useRef(null)
  const [color, setColor] = useState<boolean>(false)
  const view = useInView(ref, { once: false, margin: "-0% 0% -66% 0%" })

  // Call the onViewChange callback when view changes
  React.useEffect(() => {
    if (onViewChange) {
      if (view) {
        onViewChange("panama")
      } else {
        onViewChange("costaRica")
      }
    }
  }, [view, onViewChange])

  return (
    <>
      <motion.div
        ref={ref}
        initial={{ color: animate ? "#D6D8DA" : "#222222" }}
        whileInView={{ color: animate ? "#222222" : "#D6D8DA" }}
        transition={{ duration: 0.2 }}
        viewport={{ once: false, margin: animate ? "0% 0% -40% 0%" : "-0% 0% -66% 0%" }}
      >
        <h1 className={`text-5xl md:text-8xl font-bold mb-6 lg:block`}>{heading.heading1}</h1>

        <p className="text-gray-500 mb-16">{paragraph}</p>
        <div className="border-t border-gray-200 mt-8 pt-8"></div>
      </motion.div>
      <motion.div
        initial={{ color: "#D6D8DA" }}
        transition={{ duration: 0.2 }}
        animate={view ? { color: "#222222" } : { color: "#D6D8DA" }}
      >
        <h1 className={`text-5xl md:text-8xl font-bold mb-6 lg:block`}>{heading.heading2}</h1>

        <p className="text-gray-500 mb-16">{paragraph}</p>
        <div className="border-t border-gray-200 mt-8 pt-8"></div>
      </motion.div>
    </>
  )
}