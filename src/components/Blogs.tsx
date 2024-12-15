import React from 'react';
import { siteConfig } from '../constants/siteConfig';

export function Blogs() {
  return (
    <section id="blogs" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">Latest Blog Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {siteConfig.blogs.map((blog, index) => (
            <article key={index} className="bg-gray-800 rounded-lg overflow-hidden shadow-xl">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <p className="text-indigo-400 text-sm mb-2">{blog.date}</p>
                <h3 className="text-xl font-semibold mb-3 text-white">{blog.title}</h3>
                <p className="text-gray-400 mb-4">{blog.excerpt}</p>
                <a
                  href={blog.link}
                  className="text-indigo-400 hover:text-indigo-300 transition-colors inline-flex items-center"
                >
                  Read More
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}