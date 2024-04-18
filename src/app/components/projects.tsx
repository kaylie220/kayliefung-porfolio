"use client";
import React, { useEffect } from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "../../../lib/data";
import Project from "./project";
import { useSectionInView } from "../../../lib/hook";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);
  return (
    <section
      id="projects"
      ref={ref}
      className="relative flex flex-col justify-center items-center mx-auto my-40 mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-[7rem]"
    >
      <SectionHeading>My Projects</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
