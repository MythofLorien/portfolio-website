"use client";
import React, { useTransition, useState } from "react";
import Image from 'next/image';
import TabButton from "./TabButton";

const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className="list-disc pl-2">
                <li>React.js</li>
                <li>Next.js</li>
                <li>Javascript</li>
                <li>CSS - SASS</li>
                <li>HTML</li>
                <li>APIs (Firebase - Restful) Postman</li>
                <li>Git</li>
            </ul>
        )
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul className="list-disc pl-2">
                <li>FrontEnd Developer</li>
                <li>React.js Developer</li>
                <li>Web Designer & Developer</li>
                <li>JavaScript Developer</li>
                <li>UX-UI Researcher & Designer</li>

            </ul>
        )
    }
]

const AboutSection = () => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(
            () => {
                setTab(id);
            });
    };
    return (
        <section className='text-white rounded-b-xl '>
            <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
                <Image src="/images/about-image.png" width={500} height={500} alt="About image" className="rounded border:radius-5" />
                <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                    <h2 className='text-4xl font-semibold mb-4 mt-2'>About Me</h2>
                    <p className='text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl'>I&apos;m a 32-year-old developer from Buenos Aires, Argentina.<br />

                        For the past 4 years, I&apos;ve been deeply involved in coding, constantly striving for excellence in my projects. <br />
                        I&apos;m passionate about crafting high-quality solutions and pushing the boundaries of my skills.
                        I thrive on collaboration and enjoy sharing knowledge with fellow developers. When I&apos;m not coding, I spend time with my 3 cats and imagine possible projects to come.


                    </p>
                    <div className='flex flex-row justify-start mt-8'>
                        <TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills"}>Skills</TabButton>
                        <TabButton selectTab={() => handleTabChange("education")} active={tab === "education"}>Education</TabButton>

                    </div>
                    <div className="mt8">{TAB_DATA.find((t) => t.id === tab).content}

                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection;