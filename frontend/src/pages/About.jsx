import React from 'react';
import { motion } from 'motion/react';

export default function About() {
  return (
    <section 
      id="about" 
      className="h-screen w-full bg-black flex flex-col justify-center items-center relative select-none font-sans px-6"
    >
      <div className="max-w-5xl mx-auto w-full space-y-12 z-10">
        
        {/* Section Heading with subtle fade-in-up animation on scroll */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-bold tracking-tight text-white text-center"
        >
          About Me
        </motion.h2>

        {/* Left-aligned plain body text with staggered fade-in-up animation */}
        <motion.div 
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
          className="space-y-8 text-left text-zinc-300 text-xl md:text-2xl lg:text-[26px] font-normal leading-relaxed"
        >
          <p>
            Hi, I'm Raiyan Chandle, a final-year Computer Science student specializing in AI/ML, set to graduate in 2027. I build full-stack, AI-powered applications by combining the MERN stack with Machine Learning and Generative AI — from telemedicine platforms serving rural healthcare to intelligent agentic systems that solve real problems.
          </p>
          
          <p>
            My work sits at the intersection of solid engineering and applied AI — I enjoy working across Machine Learning, Deep Learning, and Generative AI, and designing systems that feel genuinely intelligent, not just functional. I work across a vast tech stack spanning frontend, backend, and ML/AI tooling, and I'm always exploring new technologies to stay sharp and push what I build further.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
