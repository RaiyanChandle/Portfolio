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

        {/* Centered body text with staggered fade-in-up animation */}
        <motion.div 
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
          className="space-y-6 md:space-y-8 text-center text-zinc-300 text-xl md:text-2xl lg:text-[26px] font-normal leading-relaxed mx-auto"
        >
          <p>
            Hi, I'm Raiyan Chandle, a final-year Computer Science student specializing in AI/ML, graduating in 2027. I build at the intersection of <strong className="text-white font-semibold">Full-Stack Development, Machine Learning, and Generative AI</strong>, combining strong engineering with intelligent systems to turn ideas into meaningful digital experiences.
          </p>
          
          <p>
            From crafting intuitive interfaces and scalable backends to exploring intelligent models and agents, I enjoy solving complex problems, connecting the dots, and spotting patterns others might miss, perhaps a little influenced by a certain consulting detective. Always learning, experimenting, and looking for better ways to build.
          </p>

          <p className="text-zinc-400 italic text-lg md:text-xl lg:text-[22px] pt-1">
            “My mind rebels at stagnation. Give me problems, give me work.”
            <br /> <span className="not-italic text-zinc-500 font-normal">(Sherlock Holmes)</span>
          </p>
        </motion.div>

      </div>
    </section>
  );
}
