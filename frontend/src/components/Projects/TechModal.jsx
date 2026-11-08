import React, { memo, useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ExternalLink } from 'lucide-react';

const TechModal = memo(({ isOpen, onClose, activeProject }) => {
  const modalScrollRef = useRef(null);
  const modalTrackRef = useRef(null);
  const [scrollRatio, setScrollRatio] = useState(0);
  const [thumbPercent, setThumbPercent] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const isDraggingRef = useRef(false);
  const dragStartYRef = useRef(0);
  const dragStartScrollRef = useRef(0);

  const handleModalScroll = useCallback(() => {
    if (!modalScrollRef.current) return;
    const { scrollTop, scrollHeight, clientHeight } = modalScrollRef.current;
    if (scrollHeight <= clientHeight) {
      setThumbPercent(0);
      return;
    }
    const visibleRatio = clientHeight / scrollHeight;
    setThumbPercent(Math.max(18, visibleRatio * 100)); // Minimum 18% height for tactile grabbing
    const maxScroll = scrollHeight - clientHeight;
    setScrollRatio(maxScroll > 0 ? scrollTop / maxScroll : 0);
  }, []);

  // Update scroll metrics on mount and when modal opens/changes project
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(handleModalScroll, 60);
      return () => clearTimeout(timer);
    }
  }, [isOpen, activeProject, handleModalScroll]);

  // Escape key closes modal
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const handleThumbMouseDown = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
    isDraggingRef.current = true;
    dragStartYRef.current = e.clientY;
    dragStartScrollRef.current = modalScrollRef.current ? modalScrollRef.current.scrollTop : 0;

    const handleMouseMove = (moveEvent) => {
      if (!isDraggingRef.current || !modalScrollRef.current || !modalTrackRef.current) return;
      const trackHeight = modalTrackRef.current.clientHeight;
      const thumbHeightPx = (thumbPercent / 100) * trackHeight;
      const scrollableTrackHeight = trackHeight - thumbHeightPx;
      if (scrollableTrackHeight <= 0) return;

      const deltaY = moveEvent.clientY - dragStartYRef.current;
      const { scrollHeight, clientHeight } = modalScrollRef.current;
      const maxScroll = scrollHeight - clientHeight;

      const newScrollTop = dragStartScrollRef.current + (deltaY / scrollableTrackHeight) * maxScroll;
      modalScrollRef.current.scrollTop = Math.max(0, Math.min(maxScroll, newScrollTop));
    };

    const handleMouseUp = () => {
      setIsDragging(false);
      isDraggingRef.current = false;
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
  };

  const handleTrackClick = (e) => {
    if (!modalScrollRef.current || !modalTrackRef.current) return;
    const rect = modalTrackRef.current.getBoundingClientRect();
    const clickY = e.clientY - rect.top;
    const trackHeight = rect.height;
    const thumbHeightPx = (thumbPercent / 100) * trackHeight;
    const targetTop = clickY - thumbHeightPx / 2;
    const scrollableTrackHeight = trackHeight - thumbHeightPx;
    if (scrollableTrackHeight <= 0) return;

    const clickRatio = Math.max(0, Math.min(1, targetTop / scrollableTrackHeight));
    const { scrollHeight, clientHeight } = modalScrollRef.current;
    const maxScroll = scrollHeight - clientHeight;

    modalScrollRef.current.scrollTo({
      top: clickRatio * maxScroll,
      behavior: 'smooth'
    });
  };

  if (!isOpen || !activeProject) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-hidden">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/85 backdrop-blur-md cursor-pointer"
        />

        {/* Modal Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.22, ease: 'easeOut' }}
          className="relative w-full max-w-2xl bg-[#0c0c11] border border-zinc-800 rounded-2xl shadow-2xl overflow-hidden z-10 flex flex-col max-h-[85vh]"
        >
          {/* Modal Header */}
          <div className="flex items-center justify-between p-6 border-b border-zinc-800/80 bg-zinc-950/60">
            <div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#6bee18]" />
                <span className="text-xs font-bold uppercase tracking-widest text-[#6bee18]">
                  {activeProject.tagline}
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white mt-1 uppercase tracking-tight">
                {activeProject.title}
              </h3>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Body with Custom DOM Scrollbar (thick, draggable, preserves custom pointer) */}
          <div className="relative flex-1 overflow-hidden flex max-h-[calc(85vh-160px)]">
            <div
              ref={modalScrollRef}
              onScroll={handleModalScroll}
              className="flex-1 p-6 pr-4 overflow-y-auto space-y-6 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
            >
              {Object.entries(activeProject.fullStack).map(([category, items]) => (
                <div key={category} className="space-y-2.5">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-zinc-400">
                    <span className="w-1.5 h-3 bg-[#6bee18] rounded-full inline-block" />
                    <span>{category}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {items.map((item, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1.5 rounded-lg bg-zinc-900/90 border border-zinc-800 text-zinc-200 text-xs font-medium hover:border-zinc-700 transition-colors"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Custom Draggable Scrollbar Track & Thumb */}
            {thumbPercent > 0 && (
              <div className="w-6 py-4 pr-3 flex items-center justify-center select-none shrink-0">
                <div
                  ref={modalTrackRef}
                  onClick={handleTrackClick}
                  className="w-2.5 sm:w-3 h-full bg-zinc-900/95 rounded-full relative border border-zinc-800/80 cursor-pointer"
                >
                  <div
                    onMouseDown={handleThumbMouseDown}
                    style={{
                      height: `${thumbPercent}%`,
                      top: `${scrollRatio * (100 - thumbPercent)}%`
                    }}
                    className={`w-full rounded-full absolute transition-colors duration-150 cursor-grab active:cursor-grabbing ${
                      isDragging
                        ? 'bg-[#9eff47] shadow-[0_0_14px_rgba(107,238,24,0.8)]'
                        : 'bg-[#6bee18] hover:bg-[#85ff33] shadow-sm shadow-[#6bee18]/40'
                    }`}
                  />
                </div>
              </div>
            )}
          </div>

          {/* Modal Footer */}
          <div className="p-4 px-6 border-t border-zinc-800/80 bg-zinc-950/80 flex items-center justify-between">
            <span className="text-xs text-zinc-500 font-mono hidden sm:inline">
              Tech Architecture & Tools
            </span>
            <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
              <a
                href={activeProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-black border border-zinc-800 hover:border-zinc-700 text-white text-xs font-semibold flex items-center gap-1.5 transition-colors"
              >
                <span>GitHub</span>
                <ExternalLink className="w-3 h-3 text-zinc-400" />
              </a>
              <button
                type="button"
                onClick={onClose}
                className="px-5 py-2 rounded-xl bg-[#6bee18] hover:bg-[#85ff33] text-black text-xs font-bold transition-colors cursor-pointer"
              >
                Done
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
});

TechModal.displayName = 'TechModal';

export default TechModal;

