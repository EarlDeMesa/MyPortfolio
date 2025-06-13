import React from "react";
import projectsData from "../components/ProjectData";
import ProjectCard from "../components/ProjectCard";
import SectionHeader from "../components/SectionHeader";
import Button from "../components/Buttons";

export default function Projects() {
  const [selectedTech, setSelectedTech] = React.useState("All");

  const techTags = [
    "All",
    ...new Set(projectsData.flatMap((proj) => proj.tech)),
  ];
  const filteredProjects =
    selectedTech === "All"
      ? projectsData
      : projectsData.filter((proj) => proj.tech.includes(selectedTech));

  return (
    <div className='flex flex-col lg:flex-row'>
      <aside
        className='
          w-full lg:w-[45%]
          lg:fixed lg:left-0 lg:top-0
          z-10
          py-8 lg:py-32
          px-6
          transition-all duration-300 ease-in-out
          sidebar-height-adjust
        '
      >
        <div className='max-w-md mx-auto lg:px-12'>
          <SectionHeader title='Projects' />
          <div className='mb-16 flex flex-wrap gap-5'>
            {techTags.map((tech) => (
              <Button
                key={tech}
                onClick={() => setSelectedTech(tech)}
                type='secondary'
                isActive={selectedTech === tech}
              >
                {tech}
              </Button>
            ))}
          </div>
        </div>
      </aside>

      <main
        className='
          w-full
          lg:ml-[40%] lg:w-[60%]
          min-h-screen
          py-8 lg:py-24
          px-[5%]
          transition-all duration-300 ease-in-out
        '
      >
        <div className='flex flex-col gap-10 lg:gap-20'>
          {filteredProjects.map((proj, index) => (
            <ProjectCard key={proj.id} {...proj} isEven={index % 2 === 0} />
          ))}
        </div>
      </main>
    </div>
  );
}
