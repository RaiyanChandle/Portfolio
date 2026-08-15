import React from 'react';
import RippleGrid from '../components/Hero/HeroBackground';
import SplitFlapText from '../components/Hero/RotatingRoles';
import StrokeText from '../components/Hero/HeroText';
import Magnet from '../components/Hero/MagnetButton';
import resumePdf from '../assets/resume.pdf';

export default function Hero() {

  const handleNavClick = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen bg-black flex flex-col items-center relative overflow-hidden select-none font-sans"
    >
      {/* Background Ripple Grid */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none" style={{ position: 'absolute', height: '100%', width: '100%' }}>
        <RippleGrid
          enableRainbow={false}
          gridColor="#5227FF"
          rippleIntensity={0.05}
          gridSize={10}
          gridThickness={15}
          mouseInteraction
          mouseInteractionRadius={0.8}
          opacity={1}
          fadeDistance={1.5}
          vignetteStrength={2}
          glowIntensity={0.1}
          gridRotation={0}
        />
      </div>

      {/* Top Navbar */}
      <nav className="w-full py-12 z-10 px-6">
        <ul className="flex justify-center items-center gap-12 md:gap-20 text-lg md:text-xl font-semibold tracking-wide text-zinc-300">
          <li>
            <a
              href="#about"
              onClick={(e) => handleNavClick(e, 'about')}
              className="relative group hover:text-white transition duration-300 cursor-pointer pb-1 block"
            >
              About
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#6bee18] transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>
          <li>
            <a
              href="#skills"
              onClick={(e) => handleNavClick(e, 'skills')}
              className="relative group hover:text-white transition duration-300 cursor-pointer pb-1 block"
            >
              Skills
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#6bee18] transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>
          <li>
            <a
              href="#projects"
              onClick={(e) => handleNavClick(e, 'projects')}
              className="relative group hover:text-white transition duration-300 cursor-pointer pb-1 block"
            >
              Projects
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#6bee18] transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>

          <li>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, 'contact')}
              className="relative group hover:text-white transition duration-300 cursor-pointer pb-1 block"
            >
              Contact Me
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#6bee18] transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>
        </ul>
      </nav>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto z-10 flex flex-col items-center justify-center flex-grow space-y-8 px-6 -mt-16">



        {/* Big Name Title */}
        {/* Stroke Name Title */}
        <div className="w-full max-w-2xl md:max-w-4xl mx-auto ">
          <StrokeText
            text="Raiyan Chandle"
            strokeColor="#ffffff"
            fillColor="#F8FAFC"
            strokeWidth={2}
            drawDuration={1.6}
            fillDelay={0.0}
            stagger={0.05}
            ease="power2.out"
            trigger="mount"
            fillMode="wipe"
            fontSize={128}
            fontWeight={800}
            letterSpacing={-4}
            reverse={false}
          />
        </div>

        {/* Dynamic Highlighted Subtitle */}
        <div className="flex items-center justify-center flex-wrap gap-2 text-xl md:text-3xl text-zinc-300 font-light pt-2">
          <SplitFlapText
            words={[
              "FULL STACK DEVELOPER",
              "   AI/ML ENGINEER",
              "  GENAI DEVELOPER",
              "MERN STACK DEVELOPER",
              "   PROBLEM SOLVER"
            ]}
            flipDuration={0.12}
            stagger={0.06}
            cycleDelay={2400}
            charset="alphanumeric"
            flipsPerChar={8}
            tileColor="#6bee18"
            textColor="#000000"
            tileRadius={8}
            gap={6}
            fontSize="clamp(22px, 4vw, 44px)"
            loop
            padTo={20}
          />
        </div>

        {/* CTA Button */}
        <div className="pt-8">
          <Magnet padding={80} disabled={false} magnetStrength={3}>
            <a
              href={resumePdf}
              download="Raiyan_Riyaz_Chandle_Resume.pdf"
              className="group inline-flex items-center gap-3 px-8 py-3.5 rounded-lg border border-[#6bee18] bg-[#6bee18] text-black text-base font-bold tracking-wide transition-all duration-300 transform hover:-translate-y-0.5 hover:bg-transparent hover:text-[#6bee18] hover:border-[#6bee18] cursor-pointer shadow-lg shadow-[#6bee18]/25"
            >
              <svg 
                className="w-5 h-5 text-black group-hover:text-[#6bee18] transition-colors duration-300" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor" 
                strokeWidth="2.5"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              <span>Download Resume</span>
            </a>
          </Magnet>
        </div>

      </div>

      {/* Bottom spacer for layout balance */}
      <div className="h-16 w-full"></div>
    </section>
  );
}
