import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Maximize2, Play, Pause } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { slides } from '@/src/data/slides';

export default function Presentation() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1 === slides.length ? prev : prev + 1));
  }, []);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev === 0 ? 0 : prev - 1));
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'Space') {
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        prevSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        if (currentSlide === slides.length - 1) {
          setIsPlaying(false);
        } else {
          nextSlide();
        }
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, currentSlide, nextSlide]);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch((err) => {
        console.error(`Error attempting to enable fullscreen: ${err.message}`);
      });
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.95,
    }),
  };

  const CurrentSlideComponent = slides[currentSlide].component;

  return (
    <div className="flex flex-col h-screen bg-[#0A0A0A] text-[#F5F5F5] overflow-hidden font-sans select-none">
      {/* Top Bar Navigation */}
      <header className="flex justify-between items-center px-10 py-8 border-b border-white/10 shrink-0 relative z-20">
        <div className="flex items-center gap-4">
          <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center font-bold text-sm tracking-tighter cursor-default">
            N/C
          </div>
          <div className="text-[10px] uppercase tracking-[0.3em] font-medium text-white/50">Neural Creative × Advysor</div>
        </div>
        
        <div className="flex gap-8 text-[10px] uppercase tracking-[0.2em] font-semibold items-center">
          <span className="text-blue-500 underline underline-offset-8 hidden sm:inline">Strategy</span>
          <span className="text-white/40 hidden sm:inline">Audit</span>
          <span className="text-white/40 hidden sm:inline">Execution</span>
          <span className="text-white/40 hidden sm:inline">Scale</span>
          <div className="flex space-x-2 sm:ml-4">
            <button 
              onClick={() => setIsPlaying(!isPlaying)}
              className="p-2 rounded hover:bg-white/5 transition-colors tooltip text-white/40 hover:text-white"
              title={isPlaying ? "Pause Slideshow" : "Play Slideshow"}
            >
              {isPlaying ? <Pause size={14} /> : <Play size={14} />}
            </button>
            <button 
              onClick={toggleFullscreen}
              className="p-2 rounded hover:bg-white/5 transition-colors text-white/40 hover:text-white"
              title="Toggle Fullscreen"
            >
              <Maximize2 size={14} />
            </button>
          </div>
        </div>
      </header>

      {/* Main Slide Area */}
      <main className="flex-1 flex relative">
        {/* Slide Counter (Vertical) */}
        <div className="w-24 border-r border-white/10 hidden md:flex flex-col items-center justify-center gap-6 shrink-0 z-20">
          <div className="text-4xl font-serif italic text-white/20">0{currentSlide + 1}</div>
          <div className="h-32 w-[1px] bg-white/10" />
          <div className="text-xs rotate-90 whitespace-nowrap tracking-[0.5em] text-white/30 uppercase">Slide {currentSlide + 1}</div>
        </div>

        <div className="flex-1 flex relative overflow-hidden bg-[#0A0A0A]">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentSlide}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.4 },
                scale: { duration: 0.5 }
              }}
              className="absolute inset-0 w-full h-full flex flex-col items-center justify-center"
            >
              <CurrentSlideComponent />
            </motion.div>
          </AnimatePresence>
        </div>
      </main>

      {/* Slide Navigation Footer */}
      <footer className="h-24 px-10 bg-[#0F0F0F] border-t border-white/5 flex items-center justify-between shrink-0 z-20 relative">
        <div className="flex gap-3">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setDirection(idx > currentSlide ? 1 : -1);
                setCurrentSlide(idx);
              }}
              className={cn(
                "w-2 h-2 rounded-full transition-all duration-300",
                currentSlide === idx ? "bg-blue-600 scale-125" : "bg-white/10 hover:bg-white/30"
              )}
            />
          ))}
        </div>
        <div className="flex items-center gap-12">
          <div className="flex flex-col items-end hidden sm:flex">
            <span className="text-[9px] uppercase tracking-widest text-white/30">Current Focus</span>
            <span className="text-[11px] font-bold text-white/80">Slide {currentSlide + 1}</span>
          </div>
          <div className="flex gap-4">
            <button
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className={cn(
                "w-10 h-10 border border-white/10 flex items-center justify-center rounded-full transition-colors",
                currentSlide === 0 
                  ? "opacity-30 cursor-not-allowed" 
                  : "hover:bg-white/5 text-white/80 cursor-pointer active:scale-95"
              )}
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={nextSlide}
              disabled={currentSlide === slides.length - 1}
              className={cn(
                "w-10 h-10 bg-blue-600 flex items-center justify-center rounded-full transition-colors",
                currentSlide === slides.length - 1
                  ? "opacity-30 cursor-not-allowed" 
                  : "hover:bg-blue-500 font-bold text-white cursor-pointer active:scale-95 shadow-[0_0_15px_rgba(37,99,235,0.4)]"
              )}
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
