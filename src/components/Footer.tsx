import React from 'react';
import { siteConfig } from '../constants/siteConfig';
import { Youtube, Twitter, Instagram, Linkedin } from 'lucide-react';
import { FaXTwitter } from "react-icons/fa6";
import { LuGithub } from "react-icons/lu";

export function Footer() {
  return (
    <footer className="py-6 bg-transparent border-t border-gray-800/30">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <p className="text-gray-400">© 2024. All rights reserved.</p>
          <div className="flex items-center gap-8">
            <a 
              href={siteConfig.social.twitter} 
              className="text-gray-400 hover:text-white transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X (Twitter)"
            >
              <FaXTwitter size={20} />
            </a>
            <a 
              href={siteConfig.social.github} 
              className="text-gray-400 hover:text-white transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X (Twitter)"
            >
              <LuGithub size={20} />
            </a>
            <a 
              href={siteConfig.social.instagram} 
              className="text-gray-400 hover:text-white transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
            <a 
              href={siteConfig.social.linkedin} 
              className="text-gray-400 hover:text-white transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}