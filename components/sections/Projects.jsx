"use client"

import React from "react"

const projects = [
  {
    title: "Portfolio Website",
    description: "My personal portfolio built with Next.js and Tailwind CSS.",
    tech: "Next.js, Tailwind, Framer Motion",
    link: "#",
  },
  {
    title: "Hotel Booking Web",
    description: "A hotel booking platform with modern UI.",
    tech: "React, Node.js, MongoDB",
    link: "#",
  },
  {
    title: "AI Learning Assistant",
    description: "AI based platform for interactive learning.",
    tech: "Gemini API, Three.js",
    link: "#",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 bg-black text-white">
      
      {/* Section Heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold">Projects</h2>
        <p className="text-gray-400 mt-2">
          Some things I've built recently
        </p>
      </div>

      {/* Project Cards */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-900 p-6 rounded-xl border border-gray-800 hover:border-white transition"
          >
            <h3 className="text-xl font-semibold mb-2">
              {project.title}
            </h3>

            <p className="text-gray-400 mb-3">
              {project.description}
            </p>

            <p className="text-sm text-gray-500 mb-4">
              {project.tech}
            </p>

            <a
              href={project.link}
              className="text-blue-400 hover:underline"
            >
              View Project →
            </a>
          </div>
        ))}

      </div>
    </section>
  )
}