"use client";
import React from 'react'

const Newsletter = () => {
  return (
    <section className="bg-[#101820] text-white py-16 px-6 flex justify-center">
      <div className="w-full max-w-7xl bg-linear-to-r from-[#101820] to-[#26323D] rounded-2xl p-10 shadow-[0_0_25px_rgba(0,0,0,0.4)]">
        <h2 className="text-center text-2xl md:text-3xl font-semibold mb-8">
          Subscribe to our newsletter
        </h2>

        <form className="flex flex-col md:flex-row justify-center items-center gap-6">
          <input
            type="text"
            placeholder="First Name"
            className="w-full md:w-1/5 px-4 py-3 rounded-xl border border-gray-600 bg-transparent text-gray-200 placeholder-gray-400 focus:outline-none focus:border-[#EFC27E] transition"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="w-full md:w-1/5 px-4 py-3 rounded-xl border border-gray-600 bg-transparent text-gray-200 placeholder-gray-400 focus:outline-none focus:border-[#EFC27E] transition"
          />
          <button
            type="submit"
            className="w-full md:w-1/5 px-6 py-3 bg-white text-black font-medium rounded-xl hover:bg-[#EFC27E] hover:text-black transition"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  )
}

export default Newsletter
