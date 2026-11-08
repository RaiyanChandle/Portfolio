import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { PROJECTS_DATA } from '../components/Projects/projectsData';
import ProjectImageShowcase from '../components/Projects/ProjectImageShowcase';
import ProjectInfoCard from '../components/Projects/ProjectInfoCard';
import TechModal from '../components/Projects/TechModal';

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const projects = PROJECTS_DATA;
  const totalProjects = projects.length;

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % totalProjects);
  }, [totalProjects]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + totalProjects) % totalProjects);
  }, [totalProjects]);

  const handleOpenModal = useCallback(() => {
    setIsModalOpen(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  // Keyboard navigation & modal Escape handling
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsModalOpen(false);
      } else if (!isModalOpen) {
        if (e.key === 'ArrowRight') {
          handleNext();
        } else if (e.key === 'ArrowLeft') {
          handlePrev();
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNext, handlePrev, isModalOpen]);

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

  const activeProject = useMemo(() => projects[currentIndex], [projects, currentIndex]);

  return (
    <section
      id="projects"
      className="min-h-screen lg:h-screen w-full bg-black relative flex flex-col justify-center items-center overflow-hidden font-sans select-none px-4 sm:px-6 md:px-10 lg:px-12 py-12 lg:py-0"
    >
      {/* Proportionally Scaled Layout Container */}
      <div className="w-full max-w-[1600px] 2xl:max-w-[1720px] mx-auto flex flex-col justify-center z-10">
        
        {/* Section Heading matching other pages */}
        <div className="mb-8 md:mb-10 w-full text-center">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-white text-center select-none">
            Projects
          </h2>
        </div>

        {/* Content Layout: Strictly locked fixed dimensions across all projects */}
        <div className="w-full flex flex-col lg:flex-row items-center lg:items-start justify-between gap-6 xl:gap-8">
          {/* Left Column: Image Box strictly fixed to match card height */}
          <ProjectImageShowcase
            image={activeProject.image}
            title={activeProject.title}
            currentIndex={currentIndex}
          />

          {/* Right Column: Info Card strictly fixed to exact same dimensions */}
          <ProjectInfoCard
            activeProject={activeProject}
            currentIndex={currentIndex}
            totalProjects={totalProjects}
            onPrev={handlePrev}
            onNext={handleNext}
            onOpenModal={handleOpenModal}
          />
        </div>

      </div>

      {/* Detailed Tech Architecture Modal */}
      <TechModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        activeProject={activeProject}
      />
    </section>
  );
}
