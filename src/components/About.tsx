import React, { useState } from 'react';
import { siteConfig } from '../constants/siteConfig';
import  photo  from "../components/images/about.jpg";
import laptop from "../components/images/animated.json";
import Lottie from 'lottie-react';
import { FaReact } from "react-icons/fa";
import { SiPython } from "react-icons/si";
import { FaCss3Alt } from "react-icons/fa";
import { DiJavascript } from "react-icons/di";
import { SiMysql } from "react-icons/si";
import { FaJava } from "react-icons/fa6";
import { FaPhp } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaWindows } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { IoLogoVercel } from "react-icons/io5";
import { DiVisualstudio } from "react-icons/di";
import { IoLogoGithub } from "react-icons/io5";
import { ImPointRight } from "react-icons/im";

export function About() {
  const [isPhotoActive, setIsPhotoActive] = useState(false);

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* About Me Header */}
        <h2 className="text-3xl font-bold text-center mb-16">About {''}
          <span className="bg-gradient-to-r from-purple-400 to-purple-600 text-transparent bg-clip-text">
             Myself
          </span>
        </h2>

        {/* Who I Am Section */}
        <div className="mb-20 px-4 md:px-8">
          <h2 className="text-2xl font-bold text-emerald-400 mb-8">WHO AM I?</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-gray-300 text-lg leading-relaxed text-justify">
              Hello! My name is {siteConfig.owner.name}. I'm from Mangalore, India. I'm a self-taught amateur Python developer with a passion for solving problems and creating efficient solutions through code. I am a quick learner with a self-learning attitude. With a strong foundation in Python programming, I enjoy exploring diverse applications of the language, from automating tasks to building small-scale projects.
              <br/>
              <br/>
              As I continue to grow, I aim to refine my skills, expand my knowledge in Data Engineering and contribute to impactful projects. I am excited to collaborate, learn, and take on challenges that push my abilities further.
                       
            </div>
            
            <div className="flex justify-center">
              <div 
                className={`profile-image ${isPhotoActive ? 'active' : ''}`}
                onClick={() => setIsPhotoActive(!isPhotoActive)}
              >
                <img 
                  src={photo}
                  alt="Profile"
                  className="w-80 max-w-md"
                /> 
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mb-20 px-4 md:px-8">
          <h2 className="text-5xl font-bold text-center mb-16">
            Professional{' '}
            <span className="bg-gradient-to-r from-purple-400 to-purple-600 text-transparent bg-clip-text">Skillset</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {siteConfig.owner.skills.map((skill, index) => (
              <div key={index} className="skill-card group">
                <div className="flex items-center justify-center h-full">
                  <div className="text-white text-4xl">
                    {getSkillIcon(skill)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tools Section */}
        <div className="mb-20 px-4 md:px-8">
          <h2 className="text-5xl font-bold text-center mb-16">
            Tools{' '}
            <span className="bg-gradient-to-r from-purple-400 to-purple-600 text-transparent bg-clip-text">I use</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {siteConfig.owner.tools.map((tool, index) => (
              <div key={index} className="skill-card group">
                <div className="flex items-center justify-center h-full">
                  <div className="text-white text-4xl">
                    {getToolIcon(tool)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div className="px-4 md:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-purple-400 to-purple-600 text-transparent bg-clip-text">
              Education
            </span>
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Lottie animationData={laptop}/> 
            </div>
            <div className="space-y-6">
              {siteConfig.owner.education.map((edu, index) => (
                <div 
                  key={index}
                  className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg border border-gray-700 hover:border-purple-500/30 transition-colors"
                >
                  <div className="text-emerald-400 text-sm mb-2">{edu.period}</div>
                  <h3 className="text-xl font-bold text-white mb-2">{edu.degree}</h3>
                  <p className="text-gray-400">{edu.institution}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function getSkillIcon(skill: string) {
  switch (skill.toLowerCase()) {
    case 'python':
      return <SiPython />;
    case 'react':
      return <FaReact />;
    case 'css':
      return <FaCss3Alt />;
    case 'js':
      return <DiJavascript />;
    case 'mysql':
      return <SiMysql />;
    case 'java':
      return <FaJava />;
    case 'php':
      return <FaPhp />;
    case 'html':
      return <FaHtml5 />;
    default:
      return '💻';
  }
}

function getToolIcon(tool: string) {
  switch (tool.toLowerCase()) {
    case 'vscode':
      return <DiVisualstudio />;
    case 'windows':
      return <FaWindows />;
    case 'discord':
      return <FaDiscord />;
    case 'vercel':
      return <IoLogoVercel />;
    case 'github':
      return <IoLogoGithub />;
    default:
      return '🔧';
  }
}