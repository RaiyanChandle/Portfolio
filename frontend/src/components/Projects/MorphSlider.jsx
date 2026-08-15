import React, { useState, useEffect, useCallback, useRef } from 'react';

const DEFAULT_ITEMS = [
  {
    image: 'https://images.unsplash.com/photo-1782977389500-dd7adad33ebe?q=80&w=1600&auto=format&fit=crop',
    caption: 'One'
  },
  {
    image: 'https://images.unsplash.com/photo-1781499455083-6ccc3beb20cd?q=80&w=1600&auto=format&fit=crop',
    caption: 'Two'
  }
];

export default function MorphSlider({
  items = DEFAULT_ITEMS,
  startIndex = 0,
  transition = 'melt',
  duration = 1.1,
  ease = 'power2.inOut',
  intensity = 0.55,
  scale = 2.4,
  aberration = 0.35,
  drift = 0.4,
  autoplay = false,
  autoplayDelay = 4,
  loop = true,
  radius = 16,
  overlayColor = '#000000',
  showCaptions = true,
  showControls = true,
  showIndicators = true,
  className = '',
  ...props
}) {
  const [index, setIndex] = useState(startIndex);
  const [hovering, setHovering] = useState(false);
  const touchStartX = useRef(0);

  // Wrap index logic
  const wrap = useCallback((i) => {
    const n = items.length;
    return ((i % n) + n) % n;
  }, [items.length]);

  // Navigate slides
  const goTo = useCallback((dir) => {
    if (items.length < 2) return;
    if (!loop) {
      const nextIndex = index + dir;
      if (nextIndex >= 0 && nextIndex < items.length) {
        setIndex(nextIndex);
      }
    } else {
      setIndex((prev) => wrap(prev + dir));
    }
  }, [index, items.length, loop, wrap]);

  const handleNext = useCallback(() => goTo(1), [goTo]);
  const handlePrev = useCallback(() => goTo(-1), [goTo]);

  // Autoplay functionality
  useEffect(() => {
    if (!autoplay || hovering || items.length < 2) return undefined;
    const id = setInterval(() => {
      handleNext();
    }, Math.max(autoplayDelay, 1) * 1000);
    return () => clearInterval(id);
  }, [autoplay, autoplayDelay, hovering, handleNext, items.length]);

  // Keyboard navigation
  const onKeyDown = useCallback((e) => {
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      handleNext();
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      handlePrev();
    }
  }, [handleNext, handlePrev]);

  // Swipe Gestures
  const handleTouchStart = (e) => {
    touchStartX.current = e.changedTouches[0].screenX;
  };

  const handleTouchEnd = (e) => {
    const touchEndX = e.changedTouches[0].screenX;
    const diff = touchEndX - touchStartX.current;
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        handlePrev();
      } else {
        handleNext();
      }
    }
  };

  if (!items || items.length === 0) return null;

  return (
    <div
      className={`relative w-full h-full overflow-hidden select-none bg-[#0c0c0e] ${className}`.trim()}
      style={{
        borderRadius: `${radius}px`,
        touchAction: 'pan-y'
      }}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onKeyDown={onKeyDown}
      tabIndex={0}
      role="region"
      aria-roledescription="carousel"
      aria-label="Projects slider"
      {...props}
    >
      {/* Project Images - simple CSS cross-fade transition */}
      {items.map((item, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            idx === index ? 'opacity-100 z-0' : 'opacity-0 z-0 pointer-events-none'
          }`}
        >
          <img
            src={item.image}
            alt={item.title || item.caption || `Slide ${idx + 1}`}
            className="w-full h-full object-cover pointer-events-none select-none"
          />
        </div>
      ))}



      {/* Uniform project info card in bottom-left */}
      {showCaptions && items[index] && (
        <div
          className="absolute bottom-8 left-8 z-[20] w-[360px] md:w-[440px] h-[190px] md:h-[210px] bg-black/80 border border-zinc-800 rounded-xl p-5 md:p-6 backdrop-blur-md shadow-2xl flex flex-col justify-between text-left pointer-events-auto select-text"
          aria-live="polite"
        >
          <div>
            <h3 className="text-lg md:text-xl font-bold text-white tracking-wide truncate">
              {items[index].title || items[index].caption}
            </h3>
            <p className="text-xs md:text-sm text-zinc-400 mt-1.5 md:mt-2 leading-relaxed overflow-hidden line-clamp-4">
              {items[index].description || 'No description provided.'}
            </p>
          </div>
          {items[index].link && (
            <a 
              href={items[index].link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-xs font-bold text-[#6bee18] hover:text-white transition-colors duration-200 mt-2 gap-1 w-fit"
            >
              View Project
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          )}
        </div>
      )}

      {/* Left/Right controls */}
      {showControls && items.length > 1 && (
        <div className="absolute top-1/2 left-0 right-0 z-[3] flex justify-between px-6 -translate-y-1/2 pointer-events-none">
          <button
            type="button"
            className="pointer-events-auto inline-flex items-center justify-center w-14 h-14 rounded-full text-white border border-white/20 bg-[rgba(12,12,14,0.4)] backdrop-blur-md cursor-pointer transition-transform duration-200 hover:scale-105 hover:bg-[rgba(24,24,28,0.6)] active:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/80"
            aria-label="Previous slide"
            onClick={handlePrev}
          >
            <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
              <path
                d="M15 5l-7 7 7 7"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button
            type="button"
            className="pointer-events-auto inline-flex items-center justify-center w-14 h-14 rounded-full text-white border border-white/20 bg-[rgba(12,12,14,0.4)] backdrop-blur-md cursor-pointer transition-transform duration-200 hover:scale-105 hover:bg-[rgba(24,24,28,0.6)] active:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/80"
            aria-label="Next slide"
            onClick={handleNext}
          >
            <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
              <path
                d="M9 5l7 7-7 7"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      )}

      {/* Navigation Dot Indicators */}
      {showIndicators && items.length > 1 && (
        <div
          className="absolute left-0 right-0 bottom-[18px] z-[3] flex gap-2 justify-center items-center pointer-events-auto"
          role="tablist"
          aria-label="Slides"
        >
          {items.map((item, i) => (
            <button
              key={i}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-2 rounded-full cursor-pointer transition-all duration-300 ease-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/80 ${
                i === index ? 'w-[22px] bg-white/95' : 'w-2 bg-white/35'
              }`}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
