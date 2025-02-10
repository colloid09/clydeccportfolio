import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { siteConfig } from '../constants/siteConfig';
import pdf from '../components/Resume/clyderesume.pdf'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full top-4 z-50">
      <nav className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          <div className="backdrop-blur-md bg-gray-900/50 rounded-full px-4 sm:px-6 py-3 flex items-center justify-between shadow-lg">
            {/* Logo */}
            <a href="#Hero" className="text-xl font-semibold text-white">
              clyde charles
            </a>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-400 hover:text-white md:hidden"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                Home
              </a>
              <a href="#projects" className="text-gray-300 hover:text-white transition-colors">
                Projects
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                About
              </a>
              <a 
                href={pdf} 
                className="px-6 py-2 text-white rounded-full bg-purple-600 transition-all duration-300 hover:bg-purple-700 hover:shadow-lg hover:shadow-purple-500/20 hover:-translate-y-0.5"
              >
               Resume
              </a>
            </div>
          </div>

          {/* Mobile Menu */}
          <div className={`
            md:hidden fixed inset-x-4 top-20 p-4 rounded-lg backdrop-blur-lg bg-gray-900/90 border border-gray-800
            transform transition-all duration-300 ease-in-out
            ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}
          `}>
            <div className="flex flex-col space-y-4">
              <a 
                href="#home" 
                className="text-gray-300 hover:text-white transition-colors px-4 py-2 rounded-lg hover:bg-gray-800"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
              <a 
                href="#projects" 
                className="text-gray-300 hover:text-white transition-colors px-4 py-2 rounded-lg hover:bg-gray-800"
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </a>
              <a 
                href="#about"
                className="text-gray-300 hover:text-white transition-colors px-4 py-2 rounded-lg hover:bg-gray-800"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <a 
                href={pdf} 
                className="text-white px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-700 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Resume
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
