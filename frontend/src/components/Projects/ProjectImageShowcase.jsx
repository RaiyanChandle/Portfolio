import React, { memo } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const ProjectImageShowcase = memo(({ image, title, currentIndex }) => {
  return (
    <div className="w-full lg:w-[62%] aspect-[19/10] lg:aspect-auto lg:h-[490px] xl:h-[530px] border-2 border-[#6bee18] rounded-2xl overflow-hidden bg-zinc-950 shadow-2xl flex items-center justify-center relative group shrink-0">
      <AnimatePresence mode="wait">
        <motion.img
          key={currentIndex}
          src={image}
          alt={title}
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
  );
});

ProjectImageShowcase.displayName = 'ProjectImageShowcase';

export default ProjectImageShowcase;

