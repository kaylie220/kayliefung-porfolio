"use client";
import React from "react";
import SectionHeading from "./section-heading";

import { motion } from "framer-motion";
import { useSectionInView } from "../../../lib/hook";
import Image from "next/image";
import { sendEmail } from "../../../actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";

export default function Contact() {
  const { ref } = useSectionInView("Contact");

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="relative mb-20 sm:mb-28 lg:w-[38rem] sm:w-[30rem] mx-auto text-center scroll-mt-24 min-[320px]:w-[20rem]"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <SectionHeading>Contact me</SectionHeading>
      <p className="text-gray-700 -mt-6">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:fkw220@gmail.com">
          fkw220@gmail.com
        </a>{" "}
        or through the form.
      </p>
      <p>or</p>
      <a href="https://wa.me/61928255" className="flex justify-center mt-2">
        <Image
          src="/WhatsAppButtonWhiteMedium.png"
          alt="whatsapp"
          width={200}
          height={200}
          quality="95"
          priority={true}
          className="object-cover border-[0.35rem] rounded-full border-white shadow-xl"
        />
      </a>

      <form
        className="mt-10 flex flex-col dark:text-black"
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }

          toast.success("Email sent successfully!");
        }}
      >
        <input
          type="email"
          name="senderEmail"
          className="h-14 px-4 rounded-lg borderBlack"
          placeholder="Your email"
          required
          maxLength={500}
        />
        <textarea
          name="message"
          className="h-40 my-3 rounded-lg borderBlack p-4"
          placeholder="Your message"
          required
          maxLength={5000}
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
}
