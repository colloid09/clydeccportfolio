import React from 'react';
import { siteConfig } from '../constants/siteConfig';

export function Contact() {
  return (
    <section className="py-32 bg-gray-900 relative">
      {/* Grid background */}
      
      <div className="container mx-auto px-4 text-center relative">
        <h2 className="text-6xl font-bold mb-4">
          Reach Out to{' '}
          <span className="bg-gradient-to-r from-purple-400 to-purple-600 text-transparent bg-clip-text">
            Me
          </span>
        </h2>
        <p className="text-xl text-gray-400 mb-12">
          Built by {siteConfig.owner.name}
        </p>
        <a
          href={`mailto:${siteConfig.owner.email}`}
          className="inline-flex items-center gap-2 px-8 py-4 text-lg font-medium text-white rounded-full border-2 border-gray-700 hover:border-purple-500 transition-colors"
        >
          Let's get in touch
          <svg 
            className="w-5 h-5" 
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
    </section>
  );
}