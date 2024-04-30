"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";


const projectsData = [
    {
        id: 1,
        title: "JavaScript e-commerce",
        description:
            "First update of a basic html page to a new brand face and work-page",
        image: "images/projects/project01.png",
        tag: ["All", "JavaScript"],
        gitUrl: "https://github.com/MythofLorien/PorjectBarcosMezquida",
        previewUrl: "https://porject-boats.vercel.app/",
    },
    {
        id: 2,
        title: "WordPress e-commerce",
        description:
            "Second update for Finara Yachts, looking for a new and fresh interface.",
        image: "images/projects/projecto04.png",
        tag: ["All", "WordPress"],
        gitUrl: "/",
        previewUrl: "https://finara.com.ar/"
    },
    {
        id: 3,
        title: "React e-commerce",
        description:
            "Project designed ready to be deployed. Experience with multiple Wine Brands",
        image: "images/projects/project08.png",
        tag: ["All", "React"],
        gitUrl: "/",
        previewUrl: "https://www.figma.com/proto/gySMUZz0mSBj8LPRIjUd3X/FDLVI-web-Maqueta?node-id=4-138&starting-point-node-id=4%3A138",
    },
];

const ProjectsSection = () => {
    const [tag, setTag] = useState("All");
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const handleTagChange = (newTag) => {
        setTag(newTag);
    };

    const filteredProjects = projectsData.filter((project) =>
        project.tag.includes(tag)
    );

    const cardVariants = {
        initial: { y: 50, opacity: 0 },
        animate: { y: 0, opacity: 1 },
    };

    return (
        <section id="projects">
            <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
                My Projects
            </h2>
            <div className="text-white flex flex-wrap justify-center items-center gap-2 py-6">
                <ProjectTag
                    onClick={handleTagChange}
                    name="All"
                    isSelected={tag === "All"}
                />
                <ProjectTag
                    onClick={handleTagChange}
                    name="React"
                    isSelected={tag === "React"}
                />
                <ProjectTag
                    onClick={handleTagChange}
                    name="JavaScript"
                    isSelected={tag === "Javascript"}
                />
                <ProjectTag
                    onClick={handleTagChange}
                    name="WordPress"
                    isSelected={tag === "Wordpress"}
                />
            </div>
            <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
                {filteredProjects.map((project, index) => (
                    <motion.li
                        key={index}
                        variants={cardVariants}
                        initial="initial"
                        animate={isInView ? "animate" : "initial"}
                        transition={{ duration: 0.3, delay: index * 0.4 }}
                    >
                        <ProjectCard
                            key={project.id}
                            title={project.title}
                            description={project.description}
                            imgUrl={project.image}
                            gitUrl={project.gitUrl}
                            previewUrl={project.previewUrl}
                        />
                    </motion.li>
                ))}
            </ul>
        </section>
    );
};

export default ProjectsSection;