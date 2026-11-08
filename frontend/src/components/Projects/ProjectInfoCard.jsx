import React, { memo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, ArrowRight, ExternalLink, Sparkles } from 'lucide-react';

const ProjectInfoCard = memo(({
  activeProject,
  currentIndex,
  totalProjects,
  onPrev,
  onNext,
  onOpenModal
}) => {
  return (
    <div className="w-full max-w-[580px] lg:max-w-none lg:w-[36%] h-[490px] xl:h-[530px] bg-[#0c0c10]/95 border border-zinc-800/90 rounded-2xl p-6 sm:p-7 xl:p-8 backdrop-blur-md shadow-2xl overflow-hidden flex flex-col justify-between shrink-0 relative">
      {/* Subtle corner purple/indigo ambient glow */}
      <div className="absolute -bottom-10 -right-10 w-44 h-44 bg-purple-600/20 blur-3xl rounded-full pointer-events-none" />

      {/* Top Bar: Counter & Navigation Buttons */}
      <div className="flex items-center justify-between pb-2">
        <div className="text-lg md:text-xl xl:text-2xl font-bold tracking-wider select-none">
          <span className="text-[#6bee18]">
            {String(currentIndex + 1).padStart(2, '0')}
          </span>
          <span className="text-zinc-500 font-medium">
            {' '}/ {String(totalProjects).padStart(2, '0')}
          </span>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onPrev}
            aria-label="Previous project"
            className="group w-11 h-11 xl:w-12 xl:h-12 rounded-lg border border-zinc-800 bg-zinc-900/90 hover:bg-zinc-800/80 hover:border-[#6bee18] text-zinc-300 hover:text-[#6bee18] flex items-center justify-center transition-all duration-300 cursor-pointer active:scale-95 shrink-0 shadow-sm hover:shadow-[0_0_12px_rgba(107,238,24,0.15)]"
          >
            <ArrowLeft className="w-4 h-4 xl:w-5 xl:h-5 transition-colors duration-300" />
          </button>
          <button
            type="button"
            onClick={onNext}
            aria-label="Next project"
            className="group w-11 h-11 xl:w-12 xl:h-12 rounded-lg border border-zinc-800 bg-zinc-900/90 hover:bg-zinc-800/80 hover:border-[#6bee18] text-zinc-300 hover:text-[#6bee18] flex items-center justify-center transition-all duration-300 cursor-pointer active:scale-95 shrink-0 shadow-sm hover:shadow-[0_0_12px_rgba(107,238,24,0.15)]"
          >
            <ArrowRight className="w-4 h-4 xl:w-5 xl:h-5 transition-colors duration-300" />
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
          className="flex-1 flex flex-col justify-between pt-2 xl:pt-3 overflow-hidden"
        >
          {/* Content Section (Heading, Subtitle, Description, Tech Stack) */}
          <div className="flex flex-col">
            {/* Heading & Subtitle */}
            <div>
              <h3 className="text-lg sm:text-xl xl:text-2xl font-black text-white tracking-tight uppercase">
                {activeProject.title}
              </h3>
              <p className="text-xs sm:text-[13px] xl:text-sm text-zinc-400 font-medium mt-0.5 xl:mt-1">
                {activeProject.tagline}
              </p>
            </div>

            {/* Description - fits cleanly and completely within fixed height container */}
            <div className="overflow-y-auto max-h-[105px] xl:max-h-[125px] scrollbar-none mt-2 xl:mt-2.5 pr-1">
              <p className="text-xs sm:text-[13px] xl:text-sm text-zinc-400 leading-relaxed">
                {activeProject.description}
              </p>
            </div>

            {/* Tech Stack */}
            <div className="mt-3 xl:mt-3.5">
              <div className="flex items-center justify-between mb-1.5 xl:mb-2">
                <div className="flex items-center gap-2 text-xs xl:text-sm font-bold tracking-widest text-zinc-300 uppercase">
                  <span className="w-1 h-3.5 xl:h-4 bg-[#6bee18] rounded-full inline-block"></span>
                  <span>Tech Stack</span>
                </div>
              </div>

              {/* Chips Row: 5 primary tags + View More button without changing card dimensions */}
              <div className="flex flex-wrap items-center gap-2 xl:gap-2.5">
                {activeProject.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="h-[32px] xl:h-[36px] px-3 xl:px-3.5 rounded-full bg-zinc-900/90 border border-zinc-800 text-zinc-300 text-xs xl:text-sm font-medium flex items-center gap-1.5 shadow-sm hover:border-zinc-700 transition-colors shrink-0"
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

                {/* View More Tech Stack Button */}
                <button
                  type="button"
                  onClick={onOpenModal}
                  className="h-[32px] xl:h-[36px] px-3 xl:px-3.5 rounded-full bg-zinc-900 hover:bg-[#6bee18] border border-zinc-700 hover:border-[#6bee18] text-zinc-300 hover:text-black text-xs xl:text-sm font-semibold transition-all duration-200 cursor-pointer inline-flex items-center gap-1.5 shadow-sm active:scale-95 shrink-0"
                  title="View Full Tech Architecture"
                >
                  <span>View More</span>
                  <Sparkles className="w-3 h-3 xl:w-3.5 xl:h-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Action Buttons */}
          <div className="flex items-center gap-3.5 xl:gap-4 pt-3 xl:pt-4">
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
  );
});

ProjectInfoCard.displayName = 'ProjectInfoCard';

export default ProjectInfoCard;
