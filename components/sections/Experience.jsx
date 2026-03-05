"use client"

import React from "react"

const experiences = [
  {
    role: "Frontend Developer",
    company: "Freelance",
    duration: "2024 - Present",
    description:
      "Building modern web applications using React, Next.js, and Tailwind CSS.",
  },
  {
    role: "Hackathon Participant",
    company: "IIT Kharagpur",
    duration: "2025",
    description:
      "Worked on blockchain-based fractional government bond project with my team.",
  },
  {
    role: "Student Developer",
    company: "Personal Projects",
    duration: "2023 - Present",
    description:
      "Learning full stack development and building portfolio projects.",
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-6 bg-black text-white">

      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold">Experience</h2>
        <p className="text-gray-400 mt-2">
          My journey so far
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-8">

        {experiences.map((exp, index) => (
          <div
            key={index}
            className="border border-gray-800 p-6 rounded-xl hover:border-white transition"
          >
            <h3 className="text-xl font-semibold">{exp.role}</h3>

            <p className="text-gray-400">
              {exp.company} • {exp.duration}
            </p>

            <p className="text-gray-300 mt-2">
              {exp.description}
            </p>
          </div>
        ))}

      </div>
    </section>
  )
}