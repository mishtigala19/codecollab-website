import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Section, Container } from '../components/SectionContainer';

const Join = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <Section className="flex-grow bg-gradient-to-b from-[#fbeaea] via-white to-[#a02c2c]/30">
                <Container className="py-8 flex items-center justify-center min-h-[calc(100vh-64px-80px)]">
                    <form 
                        action="https://formspree.io/f/myzpyabw" 
                        method="POST"
                        className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md flex flex-col items-center space-y-6"
                    >
                        <h1 className="font-serif text-3xl font-bold text-[#831c1c] mb-4">Join CodeCollab</h1>
                        
                        <div className="w-full">
                            <label htmlFor="yourName" className="block font-serif text-lg text-[#831c1c] mb-2">Your Name:</label>
                            <input
                                type="text"
                                id="yourName"
                                name="name"
                                required
                                className="w-full p-3 border border-gray-300 rounded-lg"
                                placeholder="Enter your name"
                            />
                        </div>

                        <div className="w-full">
                            <label htmlFor="email" className="block font-serif text-lg text-[#831c1c] mb-2">Your Email:</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                className="w-full p-3 border border-gray-300 rounded-lg"
                                placeholder="Enter your email"
                            />
                        </div>

                        <div className="w-full">
                            <label className="block font-serif text-lg text-[#831c1c] mb-3">Interested Projects:</label>
                            <div className="space-y-2">
                                <label className="flex items-center font-serif text-base text-[#831c1c] cursor-pointer">
                                    <input
                                        type="radio"
                                        name="interestedProjects"
                                        value="option1"
                                        className="mr-2 h-4 w-4"
                                        required
                                    />
                                    Option 1
                                </label>
                                <label className="flex items-center font-serif text-base text-[#831c1c] cursor-pointer">
                                    <input
                                        type="radio"
                                        name="interestedProjects"
                                        value="option2"
                                        className="mr-2 h-4 w-4"
                                    />
                                    Option 2
                                </label>
                                <label className="flex items-center font-serif text-base text-[#831c1c] cursor-pointer">
                                    <input
                                        type="radio"
                                        name="interestedProjects"
                                        value="option3"
                                        className="mr-2 h-4 w-4"
                                    />
                                    Option 3
                                </label>
                            </div>
                        </div>
                        
                        <button
                            type="submit"
                            className="w-full bg-[#831c1c] text-white font-serif text-xl py-3 rounded-lg shadow-md hover:bg-[#a02c2c] transition-colors duration-200"
                        >
                            Submit Form
                        </button>
                    </form>
                </Container>
            </Section>
            <Footer />
        </div>
    );
}

export default Join;
