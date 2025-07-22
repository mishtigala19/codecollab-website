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
                <Container className="py-8 min-h-[calc(100vh-64px-80px)]">
                    <h1 className="text-4xl font-bold text-[#831c1c] text-center mb-8 font-serif">Projects</h1>
                    
                    <GridSection cols="1" className="max-w-4xl mx-auto justify-items-center">
                        <ProjectCard
                        username="ptajwani"
                        repos={["Financial-News-Sentiment-Analysis-Stock-Movement-Prediction"]}/>
                        <ProjectCard username="mishtigala19" repos={["weather-event-notifier"]} />
                        <ProjectCard username="mishtigala19" repos={["codecollab-website"]}/> 
                        <ProjectCard username="supriyaahejib" repos={["personal-portfolio-template"]} />
                    </GridSection>
                </Container>
            </Section>
            <Footer />
        </div>
    )
}

export default Projects;
