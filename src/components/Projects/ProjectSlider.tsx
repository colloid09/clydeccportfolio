import React, { useRef, useState, useEffect } from 'react';
import { ProjectCard } from './ProjectCard';
import { ProjectType } from './types';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ProjectSliderProps {
  projects: ProjectType[];
}

export function ProjectSlider({ projects }: ProjectSliderProps) {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardWidth, setCardWidth] = useState(432);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) { // mobile
        setCardWidth(320);
        setIsMobile(true);
      } else if (width < 1024) { // tablet
        setCardWidth(384);
        setIsMobile(false);
      } else { // desktop
        setCardWidth(432);
        setIsMobile(false);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (sliderRef.current && !isAnimating) {
      setIsAnimating(true);
      const newIndex = direction === 'left' 
        ? Math.max(0, currentIndex - 1)
        : Math.min(projects.length - 1, currentIndex + 1);
      
      sliderRef.current.style.transform = `translateX(-${newIndex * cardWidth}px)`;
      setCurrentIndex(newIndex);
      
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  return (
    <div className="relative group">
      {/* Navigation Buttons - Hidden on mobile */}
      {!isMobile && (
        <>
          <button
            onClick={() => scroll('left')}
            disabled={currentIndex === 0 || isAnimating}
            className={`absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full transition-all duration-300 
              ${currentIndex === 0 
                ? 'opacity-0 cursor-not-allowed' 
                : 'opacity-0 group-hover:opacity-100 hover:bg-purple-500/20 bg-gray-900/80'}`}
          >
            <ChevronLeft className="text-white w-6 h-6" />
          </button>

          <button
            onClick={() => scroll('right')}
            disabled={currentIndex === projects.length - 1 || isAnimating}
            className={`absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full transition-all duration-300
              ${currentIndex === projects.length - 1 
                ? 'opacity-0 cursor-not-allowed' 
                : 'opacity-0 group-hover:opacity-100 hover:bg-purple-500/20 bg-gray-900/80'}`}
          >
            <ChevronRight className="text-white w-6 h-6" />
          </button>
        </>
      )}

      {/* Slider Container */}
      <div className="overflow-hidden mx-4">
        <div 
          ref={sliderRef}
          className="flex transition-transform duration-500 ease-out"
          style={{ 
            willChange: 'transform',
          }}
        >
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="flex-shrink-0 w-[300px] sm:w-[360px] lg:w-[400px] mx-2 sm:mx-3 lg:mx-4"
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center gap-2 mt-6">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (!isAnimating && sliderRef.current) {
                setIsAnimating(true);
                sliderRef.current.style.transform = `translateX(-${index * cardWidth}px)`;
                setCurrentIndex(index);
                setTimeout(() => setIsAnimating(false), 500);
              }
            }}
            className={`w-2 h-2 rounded-full transition-all duration-300 
              ${currentIndex === index 
                ? 'bg-purple-500 w-4' 
                : 'bg-gray-600 hover:bg-purple-400'}`}
          />
        ))}
      </div>
    </div>
  );
}