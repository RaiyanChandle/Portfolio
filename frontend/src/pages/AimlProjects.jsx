import React, { useRef, useState, useEffect } from 'react';

// Import screenshot images from the aimlProject assets folder
import aimlScreenshot1 from '../assets/aimlProject/Screenshot 2026-08-15 231915.png';
import aimlScreenshot2 from '../assets/aimlProject/Screenshot 2026-08-15 233010.png';

export default function AimlProjects() {
  const scrollContainerRef = useRef(null);
  const scrollTimeoutRef = useRef(null);
  const mountedRef = useRef(false);
  
  const [activeIndex, setActiveIndex] = useState(0);
  const [currentDomIndex, setCurrentDomIndex] = useState(8);

  const aimlItems = [
    {
      title: 'Chest X-Ray Pathology Classifier',
      description: 'A deep learning clinical diagnostics tool using a custom DenseNet121 architecture to classify 14 thoracic findings from chest radiographs, integrated with Grad-CAM heatmaps for localized anomaly verification. Evaluated on NIH chest dataset with high accuracy.',
      link: 'https://github.com/',
      image: aimlScreenshot1
    },
    {
      title: 'Autonomous Multi-Agent Triage System',
      description: 'A generative AI orchestration framework using CrewAI and LangChain to automate software engineering triage. Coordinates specialized LLM agents for code parsing, unit testing, and sandbox execution, accelerating code reviews.',
      link: 'https://github.com/',
      image: aimlScreenshot2
    },
    {
      title: 'Stock Trend Time-Series Predictor',
      description: 'A quantitative financial forecasting model integrating LSTM recurrent neural networks with VADER sentiment analysis of financial news feeds to predict intraday equity price movements, tested on market data.',
      link: 'https://github.com/',
      image: aimlScreenshot1
    },
    {
      title: 'Conversational Document RAG Pipeline',
      description: 'An enterprise semantic search pipeline built with ChromaDB, OpenAI embeddings, and HyDE (Hypothetical Document Embeddings) to deliver context-aware, low-latency document QA over large document corpuses.',
      link: 'https://github.com/',
      image: aimlScreenshot2
    }
  ];

  // Render 5 copies of the list to ensure infinite horizontal scrolling room
  const extendedItems = [
    ...aimlItems, // Copy 0 (indices 0-3)
    ...aimlItems, // Copy 1 (indices 4-7)
    ...aimlItems, // Copy 2 (indices 8-11 - Middle active set)
    ...aimlItems, // Copy 3 (indices 12-15)
    ...aimlItems  // Copy 4 (indices 16-19)
  ];

  // Set initial scroll position to show index 8 (the first real project in the middle copy) on mount
  useEffect(() => {
    if (!mountedRef.current) {
      mountedRef.current = true;
      const initScroll = () => {
        if (scrollContainerRef.current) {
          const container = scrollContainerRef.current;
          const cards = container.querySelectorAll('.project-card');
          if (cards[8]) {
            container.scrollTo({
              left: cards[8].offsetLeft - container.clientWidth / 2 + cards[8].clientWidth / 2,
              behavior: 'auto'
            });
            setCurrentDomIndex(8);
          }
        }
      };
      const timer = setTimeout(initScroll, 80);
      return () => clearTimeout(timer);
    }
  }, []);

  // Scroll to extended index with smooth or instant behavior
  const scrollToProject = (domIndex, smooth = true) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cards = container.querySelectorAll('.project-card');
      if (cards[domIndex]) {
        cards[domIndex].scrollIntoView({
          behavior: smooth ? 'smooth' : 'auto',
          block: 'nearest',
          inline: 'center'
        });
        setCurrentDomIndex(domIndex);
        setActiveIndex(domIndex % aimlItems.length);
      }
    }
  };

  const handlePrev = () => {
    scrollToProject(currentDomIndex - 1);
  };

  const handleNext = () => {
    scrollToProject(currentDomIndex + 1);
  };

  const handleScroll = () => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const cards = container.querySelectorAll('.project-card');
    const containerCenter = container.scrollLeft + container.clientWidth / 2;
    
    let closestIndex = 8;
    let minDistance = Infinity;
    
    cards.forEach((card, idx) => {
      const cardCenter = card.offsetLeft + card.clientWidth / 2;
      const distance = Math.abs(containerCenter - cardCenter);
      if (distance < minDistance) {
        minDistance = distance;
        closestIndex = idx;
      }
    });

    const realIndex = closestIndex % aimlItems.length;
    if (realIndex !== activeIndex) {
      setActiveIndex(realIndex);
    }

    // Detect scroll end to perform loop reset (silently snaps scroll position back to middle set)
    if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    scrollTimeoutRef.current = setTimeout(() => {
      const safeIndex = realIndex + 8; // Middle copy equivalent index
      
      // If we landed outside the middle copy (indices 8-11), swap instantly in background
      if (closestIndex < 8 || closestIndex > 11) {
        const targetCard = cards[safeIndex];
        container.scrollTo({
          left: targetCard.offsetLeft - container.clientWidth / 2 + targetCard.clientWidth / 2,
          behavior: 'auto'
        });
        setCurrentDomIndex(safeIndex);
      } else {
        setCurrentDomIndex(closestIndex);
      }
    }, 120); // wait 120ms after scrolling stops to make the swap invisible
  };

  return (
    <section 
      id="aiml-projects" 
      className="h-screen w-full bg-black flex flex-col justify-between items-center font-sans py-6 text-white overflow-hidden relative select-none"
    >
      {/* Hide scrollbars visually while maintaining snapping */}
      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      {/* Top Header */}
      <div className="w-full z-10 text-center pt-2 pb-0">
        <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-white">
          AI/ML Projects
        </h2>
      </div>

      {/* Main Scroller Content Area */}
      <div className="relative w-full overflow-hidden flex items-center justify-center flex-grow py-6 my-4">
        
        {/* Left and Right Fade-out masks */}
        <div className="absolute left-0 top-0 bottom-0 w-[12vw] bg-gradient-to-r from-black via-black/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-[12vw] bg-gradient-to-l from-black via-black/80 to-transparent z-10 pointer-events-none" />

        {/* Scrollable Container with exact padding to center cards */}
        <div 
          ref={scrollContainerRef}
          className="flex gap-10 overflow-x-auto no-scrollbar snap-x snap-mandatory w-full py-4 px-[10vw] md:px-[calc(50vw-325px)]"
          onScroll={handleScroll}
        >
          {extendedItems.map((project, idx) => {
            const isCurrentActive = idx % aimlItems.length === activeIndex;

            return (
              <div 
                key={idx}
                className={`project-card group w-[80vw] md:w-[650px] h-[340px] md:h-[500px] flex-shrink-0 snap-center bg-[#0c0c0e] border rounded-2xl transition-all duration-500 ease-out flex flex-col justify-between text-left select-text p-5 md:p-6 ${
                  isCurrentActive 
                    ? 'border-[#5227FF]/80 scale-100 opacity-100 shadow-[0_0_30px_rgba(82,39,255,0.25)]' 
                    : 'border-zinc-900 scale-90 opacity-40 hover:opacity-60'
                }`}
              >
                {/* Project Image */}
                {project.image && (
                  <div className="w-full h-[130px] md:h-[220px] overflow-hidden rounded-xl bg-transparent flex items-center justify-center">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-contain select-none pointer-events-none rounded-xl" 
                    />
                  </div>
                )}

                {/* Project Card Text Content */}
                <div className="flex flex-col justify-between flex-grow pt-4">
                  <div className="space-y-2 md:space-y-3">
                    <h3 className={`text-lg md:text-2xl font-bold tracking-wide transition-colors duration-300 ${isCurrentActive ? 'text-white' : 'text-zinc-500'}`}>
                      {project.title}
                    </h3>
                    <p className="text-xs md:text-sm text-zinc-400 leading-relaxed overflow-hidden line-clamp-3 md:line-clamp-4">
                      {project.description}
                    </p>
                  </div>
                  
                  {project.link && (
                    <div className="pt-2 md:pt-4">
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className={`inline-flex items-center text-xs md:text-sm font-bold transition-colors duration-200 gap-1.5 w-fit ${
                          isCurrentActive ? 'text-[#6bee18] hover:text-white' : 'text-zinc-600 pointer-events-none'
                        }`}
                      >
                        View Project
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom Center Controls - absolutely positioned to overlay the bottom of the card */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex justify-center items-center gap-8 z-30 pointer-events-none">
        <button
          type="button"
          className="pointer-events-auto inline-flex items-center justify-center w-14 h-14 rounded-full text-white border border-white/20 bg-[rgba(12,12,14,0.6)] backdrop-blur-md cursor-pointer transition-all duration-200 hover:scale-105 hover:bg-[rgba(24,24,28,0.8)] active:scale-95 shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-white/80"
          onClick={handlePrev}
          aria-label="Previous Project"
        >
          <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          type="button"
          className="pointer-events-auto inline-flex items-center justify-center w-14 h-14 rounded-full text-white border border-white/20 bg-[rgba(12,12,14,0.6)] backdrop-blur-md cursor-pointer transition-all duration-200 hover:scale-105 hover:bg-[rgba(24,24,28,0.8)] active:scale-95 shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-white/80"
          onClick={handleNext}
          aria-label="Next Project"
        >
          <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </section>
  );
}
