import React from 'react'
import { Users } from 'lucide-react';

export default function ProjectCard() {
    const project = {
        name:"Example Project",
        description: "example description",
        details: "extra details, maybe tech stack used",
        githubLink: "https://www.examplegithub.com"
    }

    return (
        <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col md:flex-row items-center md:items-start gap-6 w-full max-w-sm sm:max-w-md md:max-w-none md:w-[48rem] lg:w-[56rem] xl:w-[64rem] mx-auto">
            {/* Left Side Image Div */}
            <div className="flex-shrink-0 w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 bg-[#fbeaea] rounded-full flex items-center justify-center overflow-hidden shadow-inner">
                <Users size={90} strokeWidth={1.5} className="text-[#a02c2c] opacity-70" />
            </div>

            {/* Right Side Description div */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left flex-grow">
                {/* Project title */}
                <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#831c1c] tracking-tight mb-2">
                    {project.name}
                </h1>

                {/* Project description */}
                <p className="font-serif text-base sm:text-lg text-[#831c1c] mb-4">
                    {project.description}
                </p>

                {/* Details */}
                <p className="font-serif text-sm sm:text-base text-[#831c1c] mb-2">
                    Details: {project.details}
                </p>

                {/* github */}
                <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-serif text-base sm:text-lg text-[#a02c2c] hover:underline transition-colors duration-200"
                >
                    GitHub Link
                </a>

                {/* etc */}
                <p className="font-serif text-sm sm:text-base text-[#831c1c] mt-2">
                    etc etc
                </p>
            </div>
        </div>
    )
}