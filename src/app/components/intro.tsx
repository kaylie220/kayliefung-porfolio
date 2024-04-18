"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsGithub, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { useActiveSectionContext } from "../../../context/active-section-context";
import { useSectionInView } from "../../../lib/hook";
import { Lobster } from "next/font/google";

const lobster = Lobster({ subsets: ["latin"], weight: ["400"] });

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  return (
    <section
      className="relative pt-[130px] pb-8 px-4 sm:px-8"
      id="home"
      ref={ref}
    >
      <div className="max-w-2xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-center sm:flex-row ">
          <div className="mb-8 lg:mb-0 lg:mr-8">
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "tween", duration: 0.25 }}
              className="relative w-48 h-48 min-[320px]:w-60 h-60 rounded-full"
            >
              <Image
                src="/icon.jpg"
                alt="Kaylie Fung"
                layout="fill"
                quality="95"
                priority={true}
                className="object-cover border-[0.35rem] rounded-full border-white shadow-xl"
              />
              {/* Adjust the size and position of the emoji */}
              <motion.span
                className="absolute bottom-4 right-4 text-5xl lg:text-6xl" // Adjust the size and position for different screen sizes
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 125,
                  delay: 0.1,
                  duration: 0.7,
                }}
              >
                👋🏻
              </motion.span>
            </motion.div>
          </div>
          <motion.div
            className={`${lobster.className}text-base lg:text-[50px] font-medium leading-tight text-gray-700 sm:text-[40px] text-center lg:text-justify min-[320px]:text-[40px]`}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            Hello, I am <br />
            Kaylie Fung.
            <p className={`${lobster.className}text-base lg:text-[17px]`}>
              Front-end Web Developer
            </p>
          </motion.div>
        </div>
        <br />
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.1,
          }}
        >
          <Link
            href="#contact"
            className="group bg-orange-800 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-orange-900 active:scale-105 transition"
            onClick={() => {
              setActiveSection("Contact");
              setTimeOfLastClick(Date.now());
            }}
          >
            Contact me here{" "}
            <BsArrowRight className="opacity-70 group-hover:translate-x-2 transition" />
          </Link>
          <a
            href="\Kaylie_Fung_resume.pdf"
            download={true}
            className="bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-orange-400 active:scale-105 transition cursor-pointer borderBlack"
          >
            Download CV{" "}
            <HiDownload className="opacity-60 group-hover:translate-y-3 transition" />
          </a>
          <div className="flex min-[320px]:flex gap-2">
            <a className="bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack">
              <BsLinkedin />
            </a>
            <a className="bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack">
              <BsGithub />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
