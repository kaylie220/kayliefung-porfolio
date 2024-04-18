"use client";
import React from "react";
import SectionHeading from "./section-heading";
import { skillsData } from "../../../lib/data";
import { useSectionInView } from "../../../lib/hook";
import { animate, delay, motion } from "framer-motion";

const fadeInAnimationsVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView("Skills");

  return (
    <div className="flex justify-center w-full">
      {/* Centering container */}
      <section
        id="skills"
        ref={ref}
        className="relative mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40 min-[320px]:w-[40rem]"
      >
        <SectionHeading>My Skills</SectionHeading>
        <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
          {skillsData.map((skill, index) => (
            <motion.li
              className="bg-white border borderBlack rounded-xl px-5 py-3"
              key={index}
              variants={fadeInAnimationsVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              custom={index}
            >
              {skill}
            </motion.li>
          ))}
        </ul>
      </section>
    </div>
  );
}
