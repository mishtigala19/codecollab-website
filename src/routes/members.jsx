import React from 'react';
import MemberCard from '../components/MemberCard';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Members = () => { 
    return ( 
        <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#fbeaea] via-white to-[#a02c2c]/30">
            <Navbar />
            <main className="flex-grow py-8 px-4 sm:px-6 md:px-8 bg-[#fbeaea]">
                <h1 className="text-4xl font-bold text-[#831c1c] text-center mb-8 font-serif"> Members</h1>
                <div className="grid grid-cols-[repeat(auto-fit,minmax(192px,1fr))] justify-items-center gap-6 max-w-5xl mx-auto">
                    <MemberCard />
                    <MemberCard />
                    <MemberCard />
                    <MemberCard />
                    <MemberCard />
                    <MemberCard />
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default Members
// use /members