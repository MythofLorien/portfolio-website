"use client";
import React from "react";
import ProjectCard from "./ProjectCard";
import { motion, useInView } from "framer-motion";

const projectsData = [
    {
        id: 1,
        title: "JavaScript e-commerce",
        description:
            "First update of a basic html page to a new brand face and work-page",
        image: "images/projects/project01.png",
    },
    {
        id: 2,
        title: "WordPress e-commerce",
        description:
            "Second update for Finara Yachts, looking for a new and fresh interface in order to offer the new services only for high quality clients",
        image: "images/projects/projecto04.png",
    },
    {
        id: 3,
        title: "React e-commerce",
        description:
            "Project designed ready to be deployed. I've been working with multiple wine brands always helping to achieve upgrades on the brands",
        image: "images/projects/project08.png",
    },
];

const ProjectsSection = () => {
    return (
        <>
            <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
                My Projects
            </h2>
            <div className="flex flex-nowrap justify-center">
                {projectsData.map((project) => (
                    <div
                        key={project.id}
                        className="w-64 h-96 overflow-hidden rounded-t-xl m-4 md:w-1/3 md:mx-2"
                    >
                        <ProjectCard
                            title={project.title}
                            description={project.description}
                            imgUrl={project.image}
                        />
                    </div>
                ))}
            </div>
        </>
    );
};

export default ProjectsSection;