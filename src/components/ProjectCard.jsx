import React, { useEffect, useState } from 'react';
import { Users } from 'lucide-react';
import { fetchReposForUser } from '../api/fetchprojects'; // adjust path

export default function ProjectCard({ username, repos }) {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      try {
        const data = await fetchReposForUser(username, repos);
        setProjects(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetch();
  }, [username, repos]);

  return (
    <>
      {projects.map((project, idx) => (
        <div
          key={idx}
          className="bg-white rounded-xl shadow-lg p-6 flex flex-col md:flex-row items-center md:items-start gap-6 w-full max-w-sm sm:max-w-md md:max-w-none md:w-[48rem] lg:w-[56rem] xl:w-[64rem] mx-auto"
        >
          {/* Left Side Image Div */}
          <div className="flex-shrink-0 w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 bg-[#fbeaea] rounded-full flex items-center justify-center overflow-hidden shadow-inner">
            {project.avatar ? (
              <img src={project.avatar} alt="Owner Avatar" className="w-full h-full object-cover" />
            ) : (
              <Users size={90} strokeWidth={1.5} className="text-[#a02c2c] opacity-70" />
            )}
          </div>

          {/* Right Side Description div */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left flex-grow">
            <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#831c1c] tracking-tight mb-2">
              {project.name}
            </h1>
            <p className="font-serif text-base sm:text-lg text-[#831c1c] mb-4">
              {project.description}
            </p>
            <p className="font-serif text-sm sm:text-base text-[#831c1c] mb-2">
              Details: {project.language}
            </p>
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-serif text-base sm:text-lg text-[#a02c2c] hover:underline transition-colors duration-200"
            >
              GitHub Link
            </a>
          </div>
        </div>
      ))}
    </>
  );
}
