"use client"

import React from "react"

const blogs = [
  {
    title: "How I Built My Portfolio with Next.js",
    description:
      "A guide on building a modern developer portfolio using Next.js and Tailwind.",
    date: "March 2026",
  },
  {
    title: "My Experience at IIT Kharagpur Hackathon",
    description:
      "Sharing my experience presenting a blockchain project with my teammates.",
    date: "January 2026",
  },
  {
    title: "Learning Three.js for Interactive Websites",
    description:
      "How I started learning 3D web development with Three.js.",
    date: "December 2025",
  },
]

export default function Blog() {
  return (
    <section id="blog" className="py-20 px-6 bg-black text-white">

      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold">Blog</h2>
        <p className="text-gray-400 mt-2">
          Thoughts, learnings and experiences
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

        {blogs.map((blog, index) => (
          <div
            key={index}
            className="border border-gray-800 p-6 rounded-xl hover:border-white transition"
          >
            <h3 className="text-xl font-semibold mb-2">
              {blog.title}
            </h3>

            <p className="text-gray-400 mb-4">
              {blog.description}
            </p>

            <span className="text-sm text-gray-500">
              {blog.date}
            </span>
          </div>
        ))}

      </div>
    </section>
  )
}