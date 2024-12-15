import React from 'react';
import { siteConfig } from '../constants/siteConfig';
import { Github, Linkedin, Twitter, Facebook } from 'lucide-react';
import { FaInstagram } from "react-icons/fa";
import Lottie from 'lottie-react';
import techani from "../components/images/techani.json";
import { FaXTwitter } from "react-icons/fa6";
import pdf from '../components/Resume/clyderesume.pdf'

export function Hero() {
  return (
    <section className="min-h-[90vh] flex items-center bg-gray-900 relative overflow-hidden py-20 lg:py-0">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left side content */}
          <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left lg:pl-8">
            <div className="space-y-2">
              <h1 className="text-4xl md:text-5xl font-bold text-white">Hello,</h1>
              <h2 className="text-4xl md:text-5xl font-bold">
                This is{' '}
                <span className="bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text">
                  {siteConfig.owner.name}
                </span>
                ,
              </h2>
              <h2 className="text-4xl md:text-5xl font-bold">
               I'm a {''}
                <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 text-transparent bg-clip-text">
                   Python Developer
                </span>
                .
              </h2>
            </div>

            {/* Social Icons */}
            <div className="flex gap-6 pt-4 justify-center lg:justify-start">
              <a href={siteConfig.social.github} className="text-pink-500 hover:text-pink-400 transition-colors">
                <Github size={28} />
              </a>
              <a href={siteConfig.social.linkedin} className="text-pink-500 hover:text-pink-400 transition-colors">
                <Linkedin size={28} />
              </a>
              <a href={siteConfig.social.instagram || '#'} className="text-pink-500 hover:text-pink-400 transition-colors">
                <FaInstagram size={28} />
              </a>
              <a href={siteConfig.social.twitter} className="text-pink-500 hover:text-pink-400 transition-colors">
                <FaXTwitter size={28} />
              </a>
            </div>

            {/* Buttons */}
            <div className="flex gap-4 pt-6 justify-center lg:justify-start flex-wrap">
              <a
                href={`mailto:${siteConfig.owner.email}`} 
                className="px-8 py-3 rounded-full border-2 border-pink-500 text-white hover:bg-pink-500/10 transition-colors inline-flex items-center gap-2"
              >
                CONTACT ME
              </a>
              <a
                href={pdf}
                className="px-8 py-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white hover:opacity-70 transition-opacity inline-flex items-center gap-2"
              >
                GET RESUME
              </a>
            </div>
          </div>

          {/* Right side code editor */}
          <div className="w-full lg:w-1/2 px-4 lg:px-0">
          <Lottie animationData={techani}/>
          </div>
        </div>
      </div>
    </section>
  );
}