"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "./AnimationText.module.css";

interface AnimationTextProps {
  heading: string;
  paragraph: string;
}

export default function AnimationText({ heading, paragraph }: AnimationTextProps) {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!headingRef.current) return;

    // Function to check if element is in the animation range
    const checkPosition = () => {
      if (headingRef.current) {
        const rect = headingRef.current.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        
        // Calculate the top position as percentage of viewport
        const topPercentage = (rect.top / viewportHeight) * 100;
        
        // Animation is active when top is between 50% and 80% of viewport
        if (topPercentage < 70 && topPercentage > 40) {
          setInView(true);
        } else {
          setInView(false);
        }
      }
    };

    // Initial check
    checkPosition();

    // Set up scroll listener
    window.addEventListener('scroll', checkPosition);

    // We still use IntersectionObserver for efficiency
    const observer = new IntersectionObserver(
      (entries) => {
        // When element enters or leaves viewport, check position
        if (entries[0].isIntersecting) {
          checkPosition();
        } else {
          setInView(false);
        }
      },
      { threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1] }
    );

    observer.observe(headingRef.current);

    return () => {
      if (headingRef.current) {
        observer.unobserve(headingRef.current);
      }
      window.removeEventListener('scroll', checkPosition);
    };
  }, []);

  return (
    <>
      <h2
        ref={headingRef}
        className={`text-5xl md:text-7xl text-[#222222] font-bold mb-6 ${styles.animationText} ${inView ? styles.animate : ""} lg:block`}
      >
        {heading}
      </h2>

      <p className="text-gray-500 mb-16">{paragraph}</p>
      <div className="border-t border-gray-200 mt-8 pt-8"></div>
    </>
  );
}