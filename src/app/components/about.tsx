"use client";

import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";
import { useActiveSectionContext } from "../../../context/active-section-context";
import { useInView } from "react-intersection-observer";
import { useSectionInView } from "../../../lib/hook";

export default function About() {
  const { ref } = useSectionInView("About");
  // const controls = useAnimation();
  // const ref = useRef(null);
  // const inView = useInView(ref, { once: true });

  // React.useEffect(() => {
  //   if (inView) {
  //     controls.start({ opacity: 1, y: 0 });
  //   }
  // }, [controls, inView]);

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
      className="relative flex flex-col justify-center items-center mx-auto my-[2rem] mb-28 lg:w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-[10rem] min-[320px]:w-[20rem]"
    >
      <SectionHeading>About Me</SectionHeading>
      <p className="px-4">
        I am a back-to-school student majoring in Digital Marketing Strategy. I
        learned relevant technical skills in a Front-end Web Developer Program.
        With a friendly and helpful personality, willing to collaborate with
        others, I am confident and ready to start my career in the technology
        industry.
      </p>
    </motion.section>
  );
}
