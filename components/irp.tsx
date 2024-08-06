"use client";

import { Button } from "@mui/material";
import React, { useState } from "react";
import Image from "next/image";
import ProjectCard from "./projectcard";
import ProjectModal from "./projectmodal";

const Irp = () => {
  const [projectsToShow, setProjectsToShow] = React.useState(3);
  const [selectedProject, setSelectedProject] = useState<{
    projectImgSrc: string;
    projectTitle: string;
    projectDescription: string;
    company: string;
    students: { imgSrc: string; name: string; role: string }[];
  } | null>(null);

  const handleViewMoreProjects = () => {
    setProjectsToShow((prev) => prev + 3);
  };

  const handleProjectClick = (project: {
    projectImgSrc: string;
    projectTitle: string;
    projectDescription: string;
    company: string;
    students: { imgSrc: string; name: string; role: string }[];
  }) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  const projects = [
    {
      projectImgSrc: "/project1.jpg",
      projectTitle: "Project 1",
      projectDescription: "A project that addresses a specific industry need.",
      company: "Company A",
      students: [
        { imgSrc: "/project3.jpg", name: "Isha Patel", role: "IRP Lead" },
        {
          imgSrc: "/project2.jpg",
          name: "Arjun Sharma",
          role: "IRP Associate Lead",
        },
      ],
    },
    {
      projectImgSrc: "/project2.jpg",
      projectTitle: "Project 2",
      projectDescription:
        "Another project that showcases the capabilities of the IRP wing.",
      company: "Company B",
      students: [
        { imgSrc: "/project1.jpg", name: "Isha Patel", role: "IRP Lead" },
        {
          imgSrc: "/project2.jpg",
          name: "Arjun Sharma",
          role: "IRP Associate Lead",
        },
      ],
    },
    {
      projectImgSrc: "/project3.jpg",
      projectTitle: "Project 3",
      projectDescription:
        "A third project that demonstrates the impact of the IRP wing.",
      company: "Company C",
      students: [
        { imgSrc: "/placeholder.svg", name: "Isha Patel", role: "IRP Lead" },
        {
          imgSrc: "/placeholder.svg",
          name: "Arjun Sharma",
          role: "IRP Associate Lead",
        },
      ],
    },
    {
      projectImgSrc: "/project1.jpg",
      projectTitle: "Project 1",
      projectDescription: "A project that addresses a specific industry need.",
      company: "Company A",
      students: [
        { imgSrc: "/project3.jpg", name: "Isha Patel", role: "IRP Lead" },
        {
          imgSrc: "/project2.jpg",
          name: "Arjun Sharma",
          role: "IRP Associate Lead",
        },
      ],
    },
    {
      projectImgSrc: "/project2.jpg",
      projectTitle: "Project 2",
      projectDescription:
        "Another project that showcases the capabilities of the IRP wing.",
      company: "Company B",
      students: [
        { imgSrc: "/project1.jpg", name: "Isha Patel", role: "IRP Lead" },
        {
          imgSrc: "/project2.jpg",
          name: "Arjun Sharma",
          role: "IRP Associate Lead",
        },
      ],
    },
    {
      projectImgSrc: "/project3.jpg",
      projectTitle: "Project 3",
      projectDescription:
        "A third project that demonstrates the impact of the IRP wing.",
      company: "Company C",
      students: [
        { imgSrc: "/placeholder.svg", name: "Isha Patel", role: "IRP Lead" },
        {
          imgSrc: "/placeholder.svg",
          name: "Arjun Sharma",
          role: "IRP Associate Lead",
        },
      ],
    },
    {
      projectImgSrc: "/project1.jpg",
      projectTitle: "Project 1",
      projectDescription: "A project that addresses a specific industry need.",
      company: "Company A",
      students: [
        { imgSrc: "/project3.jpg", name: "Isha Patel", role: "IRP Lead" },
        {
          imgSrc: "/project2.jpg",
          name: "Arjun Sharma",
          role: "IRP Associate Lead",
        },
      ],
    },
    {
      projectImgSrc: "/project2.jpg",
      projectTitle: "Project 2",
      projectDescription:
        "Another project that showcases the capabilities of the IRP wing.",
      company: "Company B",
      students: [
        { imgSrc: "/project1.jpg", name: "Isha Patel", role: "IRP Lead" },
        {
          imgSrc: "/project2.jpg",
          name: "Arjun Sharma",
          role: "IRP Associate Lead",
        },
      ],
    },
    {
      projectImgSrc: "/project3.jpg",
      projectTitle: "Project 3",
      projectDescription:
        "A third project that demonstrates the impact of the IRP wing.",
      company: "Company C",
      students: [
        { imgSrc: "/placeholder.svg", name: "Isha Patel", role: "IRP Lead" },
        {
          imgSrc: "/placeholder.svg",
          name: "Arjun Sharma",
          role: "IRP Associate Lead",
        },
      ],
    },
    // Add more projects here
  ];

  return (
    <section className="bg-muted rounded-lg p-8 shadow-md mt-24 mb-36">
      <div className="space-y-4 container mx-auto mb-36 text-center px-6 md:px-8 lg:px-28">
        <img
          src="/pushingswing.svg"
          alt=""
          className="your-image-class mx-auto"
        />
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4">
          IRP
          <br />
          <span className="text-2xl md:text-3xl lg:text-4xl">
            (Industrial and Resource Planning)
          </span>
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl text-center px-4 md:px-8 lg:px-16 text-justify">
          The IRP (Industrial and Resource Planning) wing of the
          Entrepreneurship Cell focuses on bridging the gap between academia and
          industry. It aims to provide students with real-world exposure and
          opportunities to work on projects that address the needs of the
          industry.
        </p>
      </div>
      <div className="mt-8 grid grid-cols-2 gap-8 mb-24">
        <div className="bg-background rounded-lg p-6 shadow-md">
          <Image
            src="/testprofile.jpg"
            width={200}
            height={200}
            alt="IRP Lead"
            className="rounded-full mx-auto"
            style={{ aspectRatio: "200/200", objectFit: "cover" }}
          />
          <div className="space-y-2 text-center">
            <h3 className="text-xl font-bold">Isha Patel</h3>
            <p className="text-muted-foreground">IRP Lead</p>
          </div>
        </div>
        <div className="bg-background rounded-lg p-6 shadow-md">
          <Image
            src="/testprofile.jpg"
            width={200}
            height={200}
            alt="IRP Associate Lead"
            className="rounded-full mx-auto"
            style={{ aspectRatio: "200/200", objectFit: "cover" }}
          />
          <div className="space-y-2 text-center">
            <h3 className="text-xl font-bold">Arjun Sharma</h3>
            <p className="text-muted-foreground">IRP Associate Lead</p>
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-2xl font-bold text-center">Top Projects</h2>
        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
          {projects.slice(0, projectsToShow).map((project, index) => (
            <ProjectCard
              key={index}
              projectImgSrc={project.projectImgSrc}
              projectTitle={project.projectTitle}
              projectDescription={project.projectDescription}
              students={project.students}
              onClick={() => handleProjectClick(project)}
            />
          ))}
        </div>
        {projectsToShow < projects.length && (
          <div className="mt-8 flex justify-center">
            <Button onClick={handleViewMoreProjects}>View More Projects</Button>
          </div>
        )}
      </div>
      <div>
        <h3 className="text-2xl font-bold text-center mt-20">Company Logos</h3>
        <div className="mt-4 grid grid-cols-4 gap-4">
          <Image
            src="/irpcompany3.jpg"
            width={100}
            height={50}
            alt="Company Logo"
            className="object-contain"
            style={{ aspectRatio: "100/50", objectFit: "cover" }}
          />
          <Image
            src="/irpcompany4.jpg"
            width={100}
            height={50}
            alt="Company Logo"
            className="object-contain"
            style={{ aspectRatio: "100/50", objectFit: "cover" }}
          />
          <Image
            src="/irpcompany3.jpg"
            width={100}
            height={50}
            alt="Company Logo"
            className="object-contain"
            style={{ aspectRatio: "100/50", objectFit: "cover" }}
          />
          <Image
            src="/irpcompany4.jpg"
            width={100}
            height={50}
            alt="Company Logo"
            className="object-contain"
            style={{ aspectRatio: "100/50", objectFit: "cover" }}
          />
        </div>
      </div>
      {selectedProject && (
        <ProjectModal
          open={!!selectedProject}
          onClose={handleCloseModal}
          projectImgSrc={selectedProject.projectImgSrc}
          projectTitle={selectedProject.projectTitle}
          projectDescription={selectedProject.projectDescription}
          company={selectedProject.company}
          students={selectedProject.students}
        />
      )}
    </section>
  );
};

export default Irp;
