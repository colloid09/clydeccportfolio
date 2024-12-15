import React from 'react';
import { ProjectType } from './types';

export function ProjectCard({ project }: { project: ProjectType }) {
  return (
    <div className="bg-gray-900/50 backdrop-blur-sm rounded-3xl overflow-hidden border border-gray-800 p-4 sm:p-6 hover:border-purple-500/30 transition-all duration-300 transform hover:scale-[1.02] h-full">
      <div className="relative mb-4 sm:mb-6">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-[200px] sm:h-[250px] lg:h-[300px] object-cover rounded-2xl"
          loading="lazy"
        />
      </div>
      <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-white">{project.title}</h3>
      <p className="text-gray-400 mb-4 sm:mb-6 text-base sm:text-lg">{project.description}</p>
      
      <div className="flex flex-wrap sm:flex-nowrap justify-between items-center gap-4 mt-auto">
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, techIndex) => (
            <span
              key={techIndex}
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-800 flex items-center justify-center text-sm sm:text-base"
              title={tech}
            >
              {getTechIcon(tech)}
            </span>
          ))}
        </div>
        <a
          href={project.liveUrl}
          className="text-purple-400 hover:text-purple-300 transition-colors inline-flex items-center gap-2 group text-sm sm:text-base"
        >
          View Project
          <svg 
            className="w-4 h-4 sm:w-5 sm:h-5 transform transition-transform group-hover:translate-x-1" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M14 5l7 7m0 0l-7 7m7-7H3" 
            />
          </svg>
        </a>
      </div>
    </div>
  );
}

function getTechIcon(tech: string) {
  switch (tech) {
    case 'React':
      return '⚛️';
    case 'TypeScript':
      return 'TS';
    case 'Three.js':
      return '3D';
    case 'Vite':
      return '⚡';
    case 'Motion':
      return 'M';
    case 'Next.js':
      return 'N';
    case 'WebRTC':
      return '📡';
    case 'Tailwind':
      return 'TW';
    default:
      return tech[0];
  }
}