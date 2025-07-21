import React from 'react';
import { Users } from 'lucide-react';
import { CardContainer } from './SectionContainer';
import ReactMarkdown from 'react-markdown'
import { Link } from '@tanstack/react-router';

export default function MemberCard(props) {
    const { name, role, avatar, github, slug } = props
    
    return (
        <CardContainer className="min-w-[16rem] max-w-[20rem] w-full flex flex-col items-center md:items-start gap-6 mx-auto">
            <div className="flex-shrink-0 w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 bg-[#fbeaea] rounded-full flex items-center justify-center overflow-hidden shadow-inner">
                {/* <Users size={45} strokeWidth={1.5} className="text-[#a02c2c] opacity-70 items-center" /> */}
                <img src={avatar} alt={`${name}'s avatar`}  />
            </div>
            
            <div className="flex flex-row items-center md:items-start text-center md:text-left flex-grow">
                <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#831c1c] tracking-tight mb-2">
                    <Link to={`/members/${slug}`}>
                        {name}
                    </Link>
                </h1>
            </div>
            
            <div className="flex flex-row items-center md:items-start text-center md:text-left flex-grow">
                <p className="font-serif text-xl sm:text-lg text-[#831c1c] mb-4">
                    Role: {role}
                </p>
            </div>
            
            <div className="flex flex-row items-center md:items-start text-center md:text-left flex-grow">
                <a
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-serif text-base sm:text-lg text-[#a02c2c] hover:underline transition-colors duration-200"
                >
                    GitHub
                </a>
            </div>
        </CardContainer>
    );
}
