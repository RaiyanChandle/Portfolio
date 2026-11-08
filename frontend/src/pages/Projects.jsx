import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, ArrowRight, ExternalLink } from 'lucide-react';

// Project Screenshots from assets folder
import arogyaImg from '../assets/Projects/arogya.png';
import tabletalkImg from '../assets/Projects/tabletalk.png';
import hirehuntImg from '../assets/Projects/hirehunt.png';
import nexusImg from '../assets/Projects/nexus.png';
import codenestImg from '../assets/Projects/codenest.png';

// Tech Logos for Stack Badges
import reactLogo from '../assets/skillLogo/React.svg';
import nodeLogo from '../assets/skillLogo/Node.js.svg';
import postgresLogo from '../assets/skillLogo/PostgresSQL.svg';
import mysqlLogo from '../assets/skillLogo/MySQL.svg';
import tailwindLogo from '../assets/skillLogo/Tailwind CSS.svg';
import fastapiLogo from '../assets/skillLogo/FastAPI.svg';
import pythonLogo from '../assets/skillLogo/Python.svg';
import scikitLogo from '../assets/skillLogo/scikit-learn.svg';
import mongoLogo from '../assets/skillLogo/MongoDB.png';
import expressLogo from '../assets/skillLogo/Express.png';
import jsLogo from '../assets/skillLogo/JavaScript.svg';
import tensorflowLogo from '../assets/skillLogo/TensorFlow.svg';
import kerasLogo from '../assets/skillLogo/Keras.svg';

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Exact Sequence: arogya, tabletalk, hirehunt, nexus, codenest
  const projects = [
    {
      title: 'Arogya',
      tagline: 'Telemedicine & Rural Healthcare Platform',
      description:
        'A comprehensive telemedicine platform designed for underserved rural healthcare, connecting patients with doctors via live video consultations, digital prescriptions, and AI-assisted preliminary triage.',
      image: arogyaImg,
      techStack: [
        { name: 'React', icon: reactLogo },
        { name: 'Node.js', icon: nodeLogo },
        { name: 'Express', icon: expressLogo },
        { name: 'MongoDB', icon: mongoLogo },
        { name: 'Tailwind CSS', icon: tailwindLogo }
      ],
      github: 'https://github.com/RaiyanChandle',
      liveDemo: 'https://github.com/RaiyanChandle'
    },
    {
      title: 'TableTalk',
      tagline: 'Restaurant Reservation & Dining Platform',
      description:
        'A modern real-time restaurant reservation and table booking application with interactive floor plans, live seat availability tracking, and automated booking confirmations.',
      image: tabletalkImg,
      techStack: [
        { name: 'React', icon: reactLogo },
        { name: 'Node.js', icon: nodeLogo },
        { name: 'Express', icon: expressLogo },
        { name: 'MongoDB', icon: mongoLogo },
        { name: 'Tailwind CSS', icon: tailwindLogo }
      ],
      github: 'https://github.com/RaiyanChandle',
      liveDemo: 'https://github.com/RaiyanChandle'
    },
    {
      title: 'HireHunt',
      tagline: 'AI ATS Resume Analyzer',
      description:
        'An AI-powered ATS resume analyzer that scores resumes and matches them against job descriptions using LangChain and ChromaDB for evidence-based candidate scoring.',
      image: hirehuntImg,
      techStack: [
        { name: 'FastAPI', icon: fastapiLogo },
        { name: 'Python', icon: pythonLogo },
        { name: 'LangChain', icon: scikitLogo },
        { name: 'ChromaDB', icon: mongoLogo },
        { name: 'React', icon: reactLogo }
      ],
      github: 'https://github.com/RaiyanChandle/HireHunt',
      liveDemo: 'https://github.com/RaiyanChandle/HireHunt'
    },
    {
      title: 'NEXUS',
      tagline: 'School Management System',
      description:
        'A role-based web platform to manage institutional operations including students, academics, attendance, exams, and communication.',
      image: nexusImg,
      techStack: [
        { name: 'React', icon: reactLogo },
        { name: 'Node.js', icon: nodeLogo },
        { name: 'PostgreSQL', icon: postgresLogo },
        { name: 'Sequelize', icon: mysqlLogo },
        { name: 'Tailwind CSS', icon: tailwindLogo }
      ],
      github: 'https://github.com/RaiyanChandle/NEXUSUpdated',
      liveDemo: 'https://github.com/RaiyanChandle/NEXUSUpdated'
    },
    {
      title: 'CodeNest',
      tagline: 'Mock Interview & Live Coding Platform',
      description:
        'A mock interview platform for practicing coding problems like LeetCode, featuring real-time video calling, live chat, and isolated multilingual code execution.',
      image: codenestImg,
      techStack: [
        { name: 'React', icon: reactLogo },
        { name: 'Express', icon: expressLogo },
        { name: 'Node.js', icon: nodeLogo },
        { name: 'WebRTC', icon: jsLogo },
        { name: 'Tailwind CSS', icon: tailwindLogo }
      ],
      github: 'https://github.com/RaiyanChandle/CodeNest',
      liveDemo: 'https://github.com/RaiyanChandle/CodeNest'
    }
  ];

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  }, [projects.length]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  }, [projects.length]);

  // Keyboard arrow navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNext, handlePrev]);

  // Preload project images asynchronously on idle
  useEffect(() => {
    if (typeof window !== 'undefined' && 'requestIdleCallback' in window) {
      const handle = window.requestIdleCallback(() => {
        projects.forEach((p) => {
          const img = new Image();
          img.src = p.image;
        });
      });
      return () => window.cancelIdleCallback?.(handle);
    } else {
      const timer = setTimeout(() => {
        projects.forEach((p) => {
          const img = new Image();
          img.src = p.image;
        });
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [projects]);

  const activeProject = projects[currentIndex];

  return (
    <section
      id="projects"
      className="min-h-screen lg:h-screen w-full bg-black relative flex flex-col justify-center items-center overflow-hidden font-sans select-none px-4 sm:px-6 md:px-10 lg:px-12 py-12 lg:py-0"
    >
      {/* Proportionally Scaled Layout Container (fills view without excessive black voids) */}
      <div className="w-full max-w-[1600px] 2xl:max-w-[1720px] mx-auto flex flex-col justify-center z-10">
        
        {/* Section Heading matching other pages */}
        <div className="mb-8 md:mb-10 w-full text-center">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-white text-center select-none">
            Projects
          </h2>
        </div>

        {/* Content Layout: Preserves exact 62% / 36% relative proportions and 19:10 aspect ratio */}
        <div className="w-full flex flex-col lg:flex-row items-center lg:items-stretch justify-between gap-6 xl:gap-8">
          
          {/* Left Column: Image Box (Aspect Ratio 19:10, 62% width) */}
          <div className="w-full lg:w-[62%] aspect-[19/10] border-2 border-[#6bee18] rounded-2xl overflow-hidden bg-zinc-950 shadow-2xl flex items-center justify-center relative group shrink-0">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentIndex}
                src={activeProject.image}
                alt={activeProject.title}
                fetchPriority="high"
                decoding="async"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.02 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
              />
            </AnimatePresence>

            {/* Subtle bottom gradient tint */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Right Column: Info Card (36% width, height automatically matches the 19:10 image height via items-stretch) */}
          <div className="w-full max-w-[580px] lg:max-w-none lg:w-[36%] bg-[#0c0c10]/95 border border-zinc-800/90 rounded-2xl p-6 sm:p-7 xl:p-9 2xl:p-10 backdrop-blur-md shadow-2xl overflow-hidden flex flex-col justify-between shrink-0 relative">
            
            {/* Subtle corner purple/indigo ambient glow */}
            <div className="absolute -bottom-10 -right-10 w-44 h-44 bg-purple-600/20 blur-3xl rounded-full pointer-events-none" />

            {/* Top Bar: Counter & Navigation Buttons */}
            <div className="flex items-center justify-between pb-2">
              <div className="text-lg md:text-xl xl:text-2xl font-bold tracking-wider select-none">
                <span className="text-[#6bee18]">
                  {String(currentIndex + 1).padStart(2, '0')}
                </span>
                <span className="text-zinc-500 font-medium">
                  {' '}/ {String(projects.length).padStart(2, '0')}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={handlePrev}
                  aria-label="Previous project"
                  className="w-11 h-11 xl:w-12 xl:h-12 rounded-lg border border-zinc-800 bg-zinc-900/90 hover:bg-zinc-800 text-zinc-300 hover:text-white flex items-center justify-center transition-all cursor-pointer hover:border-zinc-700 active:scale-95 shrink-0"
                >
                  <ArrowLeft className="w-4 h-4 xl:w-5 xl:h-5" />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  aria-label="Next project"
                  className="w-11 h-11 xl:w-12 xl:h-12 rounded-lg bg-[#6bee18] hover:bg-[#85ff33] text-black font-extrabold flex items-center justify-center transition-all cursor-pointer shadow-md shadow-[#6bee18]/25 active:scale-95 shrink-0"
                >
                  <ArrowRight className="w-4 h-4 xl:w-5 xl:h-5 stroke-[2.5]" />
                </button>
              </div>
            </div>

            {/* Animated Project Details */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.22, ease: 'easeOut' }}
                className="flex-1 flex flex-col justify-between pt-2 xl:pt-3"
              >
                {/* Content Section (Heading, Subtitle, Description, Tech Stack) */}
                <div>
                  {/* Heading & Subtitle */}
                  <div>
                    <h3 className="text-2xl sm:text-3xl xl:text-4xl font-black text-white tracking-tight uppercase">
                      {activeProject.title}
                    </h3>
                    <p className="text-sm xl:text-base text-zinc-400 font-medium mt-1.5 xl:mt-2">
                      {activeProject.tagline}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm xl:text-base text-zinc-400 leading-relaxed mt-3.5 xl:mt-4 line-clamp-2 sm:line-clamp-3">
                    {activeProject.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="mt-4 xl:mt-6">
                    <div className="flex items-center gap-2 text-xs xl:text-sm font-bold tracking-widest text-zinc-300 uppercase mb-2.5 xl:mb-3">
                      <span className="w-1 h-3.5 xl:h-4 bg-[#6bee18] rounded-full inline-block"></span>
                      <span>Tech Stack</span>
                    </div>
                    {/* Chips Row: Proportionally scaled */}
                    <div className="flex flex-wrap gap-2.5 xl:gap-3">
                      {activeProject.techStack.map((tech, i) => (
                        <span
                          key={i}
                          className="h-[32px] xl:h-[38px] px-3.5 xl:px-4 rounded-full bg-zinc-900/90 border border-zinc-800 text-zinc-300 text-xs xl:text-sm font-medium flex items-center gap-2 shadow-sm hover:border-zinc-700 transition-colors shrink-0"
                        >
                          {tech.icon && (
                            <img
                              src={tech.icon}
                              alt=""
                              className="w-3.5 h-3.5 xl:w-4 xl:h-4 object-contain"
                            />
                          )}
                          <span>{tech.name}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Action Buttons */}
                <div className="flex items-center gap-3.5 xl:gap-4 pt-4 xl:pt-6">
                  <a
                    href={activeProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 h-[44px] xl:h-[50px] rounded-xl bg-black border border-zinc-800 hover:border-zinc-700 hover:bg-zinc-900 text-white font-semibold text-xs md:text-sm xl:text-base flex items-center justify-center gap-2 transition-all cursor-pointer group shadow-sm active:scale-[0.98]"
                  >
                    <svg
                      className="w-4 h-4 xl:w-5 xl:h-5 fill-zinc-300 group-hover:fill-white transition-colors"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    <span>GitHub</span>
                    <ExternalLink className="w-3.5 h-3.5 xl:w-4 xl:h-4 text-zinc-500 group-hover:text-zinc-300" />
                  </a>

                  <a
                    href={activeProject.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex-1 h-[44px] xl:h-[50px] rounded-xl border border-[#6bee18] bg-[#6bee18] text-black font-bold text-xs md:text-sm xl:text-base flex items-center justify-center gap-2 transition-all duration-300 cursor-pointer shadow-lg shadow-[#6bee18]/25 hover:bg-transparent hover:text-[#6bee18] hover:border-[#6bee18] active:scale-[0.98]"
                  >
                    <span>Visit</span>
                    <ExternalLink className="w-3.5 h-3.5 xl:w-4 xl:h-4 text-black group-hover:text-[#6bee18] stroke-[2.5] transition-colors duration-300" />
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

      </div>
    </section>
  );
}
