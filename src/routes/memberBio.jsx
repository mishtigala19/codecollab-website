import React from 'react';
import { useParams } from '@tanstack/react-router';
import { MDXProvider } from '@mdx-js/react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Section, Container } from '../components/SectionContainer';

const memberFiles = import.meta.glob('/content/members/*.mdx', { eager: true });

const membersData = Object.entries(memberFiles).map(([path, module]) => {
    const { frontmatter, default: Content } = module;
    const slug = path.split('/').pop().replace(/\.mdx?$/, ''); // get username for slug
    return {
        slug,
        name: frontmatter.name,
        role: frontmatter.role,
        avatar: frontmatter.avatar,
        github: frontmatter?.github,
    };
});

const MemberBio = () => {
    const { slug } = useParams();
    const member = membersData.find(m => m.slug === slug);

    if (!member) {
        return (
            <div className="min-h-screen flex flex-col">
                <Navbar />
                <Section className="flex-grow bg-gradient-to-b from-[#fbeaea] via-white to-[#a02c2c]/30">
                    <Container className="py-8 text-center text-[#831c1c] text-2xl">
                        Member not found.
                    </Container>
                </Section>
                <Footer />
            </div>
        );
    }

    const { name, role, avatar, github } = member;

    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <Section className="flex-grow bg-gradient-to-b from-[#fbeaea] via-white to-[#a02c2c]/30">
                <Container className="py-8 bg-white rounded-xl shadow-lg my-8 max-w-3xl">
                    <div className="flex flex-col items-center mb-6">
                        {avatar && (
                            <img
                                src={avatar}
                                alt={`${name}'s avatar`}
                                className="w-32 h-32 rounded-full object-cover mb-4 shadow-md"
                            />
                        )}
                        <h1 className="font-serif text-4xl font-bold text-[#831c1c] mb-1">{name}</h1>
                        <p className="font-serif text-xl text-[#831c1c]">{role}</p>
                        {links?.github && (
                            <a
                                href={github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-serif text-lg text-[#a02c2c] hover:underline mt-2"
                            >
                                GitHub Profile
                            </a>
                        )}
                        {/* Add other links as needed */}
                    </div>
                    <div className="prose max-w-none font-serif text-[#831c1c]">
                        {/* MDXProvider is crucial for rendering MDX content */}
                        <MDXProvider>
                            <BioContent />
                        </MDXProvider>
                    </div>
                </Container>
            </Section>
            <Footer />
        </div>
    );
};

export default MemberBio;