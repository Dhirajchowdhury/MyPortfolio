"use client"

import React from "react"

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-black text-white">

      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold">Contact Me</h2>
        <p className="text-gray-400 mt-2">
          Let's build something amazing together
        </p>
      </div>

      <div className="max-w-3xl mx-auto">

        <form className="space-y-6">

          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 bg-gray-900 border border-gray-800 rounded-lg"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 bg-gray-900 border border-gray-800 rounded-lg"
          />

          <textarea
            placeholder="Your Message"
            rows="5"
            className="w-full p-3 bg-gray-900 border border-gray-800 rounded-lg"
          />

          <button
            type="submit"
            className="bg-white text-black px-6 py-3 rounded-lg hover:bg-gray-200 transition"
          >
            Send Message
          </button>

        </form>

      </div>
    </section>
  )
}