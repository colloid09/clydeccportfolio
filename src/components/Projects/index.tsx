import React from 'react';

const projects = [
  {
    title: '3D Solar System Explorer',
    description: 'An interactive 3D visualization of our solar system with detailed information about each planet.',
    image: 'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=1200&h=800&fit=crop',
    technologies: ['React', 'Three.js', 'TypeScript', 'Vite'],
    liveUrl: '#'
  },
  {
    title: 'Yoom - Video Conferencing',
    description: 'A modern video conferencing platform with real-time chat and screen sharing capabilities.',
    image: 'https://images.unsplash.com/photo-1629904853716-f0bc54eea481?w=1200&h=800&fit=crop',
    technologies: ['Next.js', 'WebRTC', 'TypeScript', 'Tailwind'],
    liveUrl: '#'
  },
  {
    title: 'AI Code Assistant',
    description: 'An intelligent code completion and suggestion tool powered by machine learning.',
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=1200&h=800&fit=crop',
    technologies: ['React', 'TypeScript', 'Next.js', 'Tailwind'],
    liveUrl: '#'
  },
  {
    title: 'Smart Home Dashboard',
    description: 'A comprehensive dashboard for monitoring and controlling smart home devices.',
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827?w=1200&h=800&fit=crop',
    technologies: ['React', 'TypeScript', 'Vite', 'Motion'],
    liveUrl: '#'
  }
];

export function Projects() {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold">
            A small selection of{' '}
            <span className="bg-gradient-to-r from-purple-400 to-purple-600 text-transparent bg-clip-text">
              recent projects
            </span>
          </h2>
        </div>

        <div className="max-w-7xl mx-auto">
          <ProjectSlider projects={projects} />
        </div>
      </div>
    </section>
  );
}

export * from './ProjectCard';
export * from './ProjectSlider';
export * from './types';