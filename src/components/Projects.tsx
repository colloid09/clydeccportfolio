import React from 'react';
import { VscGithub } from "react-icons/vsc";
import { FaReact, FaPython, } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa6";
import { RiTailwindCssLine } from "react-icons/ri";
import { SiVite } from "react-icons/si";
import { DiCss3, DiJavascript } from "react-icons/di";
import { SiMysql } from "react-icons/si";
import { FaPhp } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";

const projects = [
  {
    title: 'Vehicle Rental System',
    description: 'The Vehicle Rental System is a web-based application designed to simplify the process of renting vehicles. Built using HTML, CSS, and JavaScript for a dynamic and user-friendly front-end interface, the system is powered by PHP and MySQL for robust back-end operations and data management.',
    image: 'https://www.techpocket.org/wp-content/uploads/2023/07/Photo-To-Sketch-Converter.jpg',
    technologies: ['html', 'css', 'js', 'bootstrap','MySql', 'php'],
    liveUrl: 'https://github.com/colloid09/vehicle-rental-system'
  },
  {
    title: 'Image To Sketch Converter',
    description: 'Image-To-Sketch Converter is developed using python. Converts the colored image into a grayscale sketch',
    image: 'https://private-user-images.githubusercontent.com/191140990/393912267-35dfc835-414c-482a-95ed-7a83265c1757.jpg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MzQyMzQyMjAsIm5iZiI6MTczNDIzMzkyMCwicGF0aCI6Ii8xOTExNDA5OTAvMzkzOTEyMjY3LTM1ZGZjODM1LTQxNGMtNDgyYS05NWVkLTdhODMyNjVjMTc1Ny5qcGc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQxMjE1JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MTIxNVQwMzM4NDBaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT05OGRkYTYzMmE4NjI3NjY3MWI3ZmJkMTQ2ZjY2Y2Q0YzFiOTNiNjkzYWRlNmY1YTAyMjAyMjEwZjIwY2Q2MzgzJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.WHM_2QvzkpFQe9rWZM1vzjOsNL2krL1qdnaJk7E4ssA',
    technologies: ['Python'],
    liveUrl: 'https://github.com/colloid09/Image-to-Sketch-converter?tab=readme-ov-file'
  },

];

export function Projects() {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold">
            A Small Selection Of{' '}
            <span className="bg-gradient-to-r from-purple-400 to-purple-600 text-transparent bg-clip-text">
              Recent Projects
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-900/50 backdrop-blur-sm rounded-3xl overflow-hidden border border-gray-800 p-6 hover:border-purple-500/30 transition-colors">
              <div className="relative mb-6">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-[300px] object-cover rounded-2xl"
                />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white">{project.title}</h3>
              <p className="text-gray-400 mb-6 text-lg">{project.description}</p>
              
              <div className="flex justify-between items-center">
                <div className="flex gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center"
                      title={tech}
                    >
                      {tech === 'React' && <div className="text-blue-400"><FaReact /></div>}
                      {tech === 'php' && <div className="text-blue-500"><FaPhp /></div>}
                      {tech === 'bootstrap' && <div className="text-red-500"><FaBootstrap /></div>}
                      {tech === 'Python' && <div className="text-white"><FaPython /></div>}
                      {tech === 'Vite' && <div className="text-purple-500"><SiVite /></div>}
                      {tech === 'html' && <div className="text-pink-500"><FaHtml5 /></div>}
                      {tech === 'css' && <div className="text-white"><DiCss3 /></div>}
                      {tech === 'js' && <div className="text-blue-400"><DiJavascript /></div>}
                      {tech === 'MySql' && <div className="text-cyan-400"><SiMysql /></div>}
                    </span>
                  ))}
                </div>
                <div className="flex gap-2">
                <a 
                href={project.liveUrl} 
                className="px-10 py-2 text-white rounded-full bg-purple-600 transition-all duration-300 hover:bg-purple-700 hover:shadow-lg hover:shadow-purple-500/20 hover:-translate-y-0.5">
                  GitHub
                </a>             
                </div>             
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
