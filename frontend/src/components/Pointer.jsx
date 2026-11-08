import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useMotionValue } from "motion/react";

export function Pointer({
  className = "",
  style = {},
  children,
  ...props
}) {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const [isActive, setIsActive] = useState(false);
  const isActiveRef = useRef(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const parentElement =
      typeof window !== "undefined"
        ? (containerRef.current?.parentElement ?? null)
        : null;

    const handleMouseMove = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
      if (!isActiveRef.current) {
        isActiveRef.current = true;
        setIsActive(true);
      }
    };

    const handleMouseEnter = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
      if (!isActiveRef.current) {
        isActiveRef.current = true;
        setIsActive(true);
      }
    };

    const handleMouseLeave = () => {
      isActiveRef.current = false;
      setIsActive(false);
    };

    if (parentElement) {
      // Force disable system cursor on all interactive children globally
      const styleEl = document.createElement("style");
      styleEl.innerHTML = `
        * {
          cursor: none !important;
        }
      `;
      document.head.appendChild(styleEl);

      parentElement.style.cursor = "none";
      parentElement.addEventListener("mousemove", handleMouseMove, { passive: true });
      parentElement.addEventListener("mouseenter", handleMouseEnter, { passive: true });
      parentElement.addEventListener("mouseleave", handleMouseLeave, { passive: true });

      return () => {
        styleEl.remove();
        parentElement.style.cursor = "";
        parentElement.removeEventListener("mousemove", handleMouseMove);
        parentElement.removeEventListener("mouseenter", handleMouseEnter);
        parentElement.removeEventListener("mouseleave", handleMouseLeave);
      };
    }
  }, [x, y]);

  return (
    <>
      <div ref={containerRef} className="hidden" />
      <AnimatePresence>
        {isActive && (
          <motion.div
            className="pointer-events-none fixed top-0 left-0 z-50 will-change-transform"
            style={{
              x,
              y,
              ...style,
            }}
            initial={{
              scale: 0,
              opacity: 0,
            }}
            animate={{
              scale: 1,
              opacity: 1,
            }}
            exit={{
              scale: 0,
              opacity: 0,
            }}
            {...props}
          >
            {children || (
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="1"
                viewBox="0 0 16 16"
                height="24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
                className={`rotate-[-70deg] stroke-[#6bee18] text-[#6bee18] ${className}`}
              >
                <path d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103z" />
              </svg>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
