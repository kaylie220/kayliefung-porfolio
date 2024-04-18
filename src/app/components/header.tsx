"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { links } from "../../../lib/data";

import clsx from "clsx";
import Link from "next/link";
import { useActiveSectionContext } from "../../../context/active-section-context";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  return (
    <header className="relative z-[999]">
      <motion.div
        className="fixed top-0 left-1/2 -translate-x-1/2 w-full h-[4.5rem] bg-white bg-opacity-80 border border-white border-opacity-40 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:w-[36rem] sm:h-[3.25rem] sm:rounded-full min-[320px]:fixed"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      />

      <nav className="fixed top-0 left-1/2 transform -translate-x-1/2 py-2 sm:top-4 sm:h-auto sm:py-0">
        <ul className="flex flex-wrap items-center justify-center w-[22rem] gap-y-1 text-sm font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
          {links.map((link) => (
            <motion.li
              key={link.hash}
              className="flex items-center justify-center relative h-3/4"
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                href={link.hash}
                onClick={() => {
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now());
                }}
                className={clsx(
                  "flex items-center justify-center w-full px-3 py-6 transition hover:text-gray-950",
                  { "text-gray-950": activeSection === link.name }
                )}
              >
                {link.name}
                {link.name === activeSection && (
                  <motion.span
                    className="absolute inset-0 top-4 h-10 bg-gray-100 rounded-full -z-10"
                    layoutId="activeSection"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  ></motion.span>
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
