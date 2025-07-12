import React from 'react';
import ProjectCard from '../components/ProjectCard';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Section, Container, GridSection } from '../components/SectionContainer';

const Projects = () => { 
    return ( 
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <Section className="flex-grow bg-gradient-to-b from-[#fbeaea] via-white to-[#a02c2c]/30">
                <Container className="py-8 bg-[#fbeaea] min-h-[calc(100vh-64px-80px)]">
                    <h1 className="text-4xl font-bold text-[#831c1c] text-center mb-8 font-serif">Projects</h1>
                    
                    <GridSection cols="1" className="max-w-4xl mx-auto justify-items-center">
                        <ProjectCard />
                        {/* <ProjectCard /> */}
                        {/* <ProjectCard /> */}
                        {/* <ProjectCard /> */}
                    </GridSection>
                </Container>
            </Section>
            <Footer />
        </div>
    )
}

export default Projects;
