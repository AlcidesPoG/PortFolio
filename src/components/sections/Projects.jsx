import React from "react";
import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-white/10 hover:translate-y-1 hover:border-blue-500/30 hover:shadow">
              <h3 className="text-xl font-bold mb-2">E-Commerce BookStore</h3>
              <p className="text-gray-300 mb-4">
                Mock up platform for buying books having the whole process of
                Online buying except for the payment part.
              </p>
              <div className="">
                {["React", "Node.js", "MongoDB"].map((tech, key) => (
                  <span
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition-all"
                    key={key}
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://book-store-frontend-eta-tawny.vercel.app/"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →{" "}
                </a>
              </div>
            </div>
            <div className="p-6 rounded-xl border border-white/10 hover:translate-y-1 hover:border-blue-500/30 hover:shadow">
              <h3 className="text-xl font-bold mb-2">Job Posting Website</h3>
              <p className="text-gray-300 mb-4">Web Page for Viewing</p>
              <div className="">
                {["React", ".NET", "SqlServer"].map((tech, key) => (
                  <span
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition-all"
                    key={key}
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://job-post-front-end.vercel.app/"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
