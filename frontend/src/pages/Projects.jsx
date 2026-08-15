import React from 'react';
import MorphSlider from '../components/Projects/MorphSlider';

// Import all screenshot images provided in the Projects assets folder
import projectScreenshot1 from '../assets/Projects/Screenshot 2026-08-15 192519.png';
import projectScreenshot2 from '../assets/Projects/Screenshot 2026-08-15 201741.png';
import projectScreenshot3 from '../assets/Projects/Screenshot 2026-08-15 203328.png';
import projectScreenshot4 from '../assets/Projects/Screenshot 2026-08-15 203546.png';

export default function Projects() {
  const projectItems = [
    {
      image: projectScreenshot3,
      title: 'HireHunt',
      description: 'An AI-powered ATS resume analyzer that scores resumes and matches them against job descriptions using LangChain. Built with FastAPI and ChromaDB to give evidence-based, honest scoring instead of inflated results.',
      link: 'https://github.com/RaiyanChandle/HireHunt'
    },
    {
      image: projectScreenshot1,
      title: 'NEXUS',
      description: 'A full-stack school management system with role-based dashboards for Admin, Teacher, and Student. Built on the MERN stack with live classrooms, attendance tracking, and Gemini-powered AI chat assistance.',
      link: 'https://github.com/RaiyanChandle/NEXUSUpdated'
    },
    {
      image: projectScreenshot2,
      title: 'CodeNest',
      description: 'A mock interview platform for practicing coding problems like LeetCode, with real-time video calling and live chat. Supports isolated code execution across JavaScript, Python, and Java via the Piston API.',
      link: 'https://github.com/RaiyanChandle/CodeNest'
    },
    {
      image: projectScreenshot4,
      title: 'Portfolio',
      description: 'My personal developer portfolio showcasing projects, skills, and experience as a full-stack and AI/ML engineer. Built to reflect both technical depth and clean, intentional design.',
      link: 'https://github.com/'
    }
  ];

  return (
    <section 
      id="projects" 
      className="h-screen w-full bg-black relative overflow-hidden select-none font-sans"
    >
      {/* Outer Border Box - very close to screen edge */}
      <div className="absolute inset-3 border-2 border-[#6bee18] rounded-xl z-20 pointer-events-none" />

      {/* Inner Content Box (slightly smaller than outer box) */}
      <div className="absolute inset-6 rounded-lg overflow-hidden z-0">
        <MorphSlider 
          items={projectItems} 
          startIndex={0} 
          transition="melt" 
          duration={1.2} 
          ease="power2.inOut" 
          intensity={0.65}
          scale={2.2}
          aberration={0.35}
          drift={0.3}
          autoplay={true}
          autoplayDelay={5}
          radius={8}
          showCaptions={true}
          showControls={true}
          showIndicators={true}
          className="w-full h-full"
        />
      </div>

      {/* Heading overlayed on bottom right - white text with black outline */}
      <div className="absolute bottom-8 right-10 z-20 pointer-events-none">
        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-wider text-white [-webkit-text-stroke:1px_#000000] select-none">
          Projects
        </h2>
      </div>
    </section>
  );
}
