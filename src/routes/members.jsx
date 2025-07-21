import Footer from '../components/Footer';
import { Section, Container, GridSection } from '../components/SectionContainer';
import Navbar from '../components/Navbar';
import MemberCard from '../components/MemberCard';
import { Link } from '@tanstack/react-router';


const Members = () => { 
    const memberFiles = import.meta.glob('/content/members/*.mdx', { eager: true });

    const membersData = Object.entries(memberFiles).map(([path, module]) => {
        const { frontmatter, default: Content } = module;
        const slug = path.split('/').pop().replace(/\.mdx?$/, ''); // get username for slug
        return {
            slug,
            name: frontmatter.name,
            role: frontmatter.role,
            avatar: frontmatter.avatar,
            github: frontmatter.github,
        };
    });
    return ( 
        
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <Section className="flex-grow bg-gradient-to-b from-[#fbeaea] via-white to-[#a02c2c]/30">
                <Container className="py-8 bg-[#fbeaea] min-h-[calc(100vh-64px-80px)]">
                    <h1 className="text-4xl font-bold text-[#831c1c] text-center mb-8 font-serif">Members</h1>
                    
                    <GridSection cols="3" className="max-w-5xl mx-auto">
                        {membersData.map((member) => (
                            <MemberCard 
                                key={member.slug}
                                slug={member.slug}
                                name={member.name}
                                role={member.role}
                                avatar={member.avatar}
                                github={member.github}
                                // description={member.content}
                            />
                        ))}
                    </GridSection>
                </Container>
            </Section>
            <Footer />
        </div>
    )
}

export default Members;