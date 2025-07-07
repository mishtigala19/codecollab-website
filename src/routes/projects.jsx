import React from 'react';
import ProjectCard from '../components/ProjectCard';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Projects = () => { 
    return ( 
        <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#fbeaea] via-white to-[#a02c2c]/30">
            <Navbar />
            <main className="flex-grow py-8 px-4 sm:px-6 md:px-8 bg-[#fbeaea]">
                <h1 className="text-4xl font-bold text-[#831c1c] text-center mb-8 font-serif"> Projects</h1>
                <div className="grid grid-cols-1 gap-y-8 max-w-4xl mx-auto"> 
                        <ProjectCard />
                        <ProjectCard />
                        <ProjectCard />
                        <ProjectCard />
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default Projects
// use /projects to access

