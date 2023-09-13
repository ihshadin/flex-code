import { gsap } from "gsap";
import React, { useEffect, useRef } from "react";

const SectionTitle = ({ title, descrition }) => {
  const animatedTextRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          gsap.fromTo(
            animatedTextRef.current,
            { opacity: 0, x: 80 },
            { opacity: 1, x: 0, duration: 1, stagger: 0.1 }
          );
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(animatedTextRef.current);

    return () => observer.disconnect();
  }, []);

  const animatedTextDesRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          gsap.fromTo(
            animatedTextDesRef.current,
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.5, stagger: 0.1 }
          );
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(animatedTextDesRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="mb-12">
      <h2
        ref={animatedTextRef}
        className="text-3xl md:text-5xl text-center text-white font-bold"
      >
        {title}
      </h2>
      <p
        ref={animatedTextDesRef}
        className="max-w-xl w-full text-center mx-auto mt-2 text-white"
      >
        {descrition}
      </p>
    </div>
  );
};

export default SectionTitle;
