import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      quote: "Duis aute irure dolor in reprehenderit new in voluptate velit esse cillum dolore eu fugiat pariatur. Excepteur sint occaecat cupidatat non proident.",
      author: "Duis aute irure",
      role: "Lorem ipsum new",
      date: "22nd May, 2025",
      avatar: null
    },
    {
      id: 2,
      quote: "Duis aute irure dolor in reprehenderit new in esse cillum dolore eu fugiat nulla name sint occaecat cupidatat non proident.",
      author: "Duis aute irure",
      role: "Lorem ipsum new",
      date: "22nd May, 2025",
      avatar: null
    },
    {
      id: 3,
      quote: "Duis aute irure dolor in reprehenderit new in esse cillum dolore eu fugiat nulla pariatur. Excepteur name sint occaecat cupidatat non proident.",
      author: "Duis aute irure",
      role: "Lorem ipsum new",
      date: "22nd May, 2025",
      avatar: null
    },
    {
      id: 4,
      quote: "Duis aute irure dolor in reprehenderit new in voluptate velit esse cillum dolore eu fugiat pariatur. Excepteur sint occaecat cupidatat non proident.",
      author: "Duis aute irure",
      role: "Lorem ipsum new",
      date: "22nd May, 2025",
      avatar: null
    },
    {
      id: 5,
      quote: "Duis aute irure dolor in reprehenderit new in esse cillum dolore eu fugiat nulla name sint occaecat cupidatat non proident.",
      author: "Duis aute irure",
      role: "Lorem ipsum new",
      date: "22nd May, 2025",
      avatar: null
    }
  ];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 3 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= testimonials.length - 3 ? 0 : prev + 1));
  };

  const visibleTestimonials = testimonials.slice(currentIndex, currentIndex + 3);

  return (
    <div className=" bg-[#0f1821] text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex justify-between items-start mb-16 flex-wrap">
          <div>
            <p className="text-amber-500 text-sm font-semibold tracking-widest uppercase mb-3">
              WHAT OUR CLIENTS SAY
            </p>
            <h1 className="text-3xl md:text-4xl font-bold mb-6">
              Client Testimonials
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl">
              Lorem ipsum dolor new sit amet, consec tetur adip iscing elit, new is sed do eiusmod tempor incididunt.
            </p>
          </div>

          {/* Navigation Buttons */}
          <div className="flex gap-3 mt-8">
            <button
              onClick={handlePrev}
              className="bg-slate-800/50 hover:bg-slate-700/70 backdrop-blur-sm border border-slate-700/50 p-4 rounded-xl transition-all duration-300 group"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors" />
            </button>
            <button
              onClick={handleNext}
              className="bg-slate-800/50 hover:bg-slate-700/70 backdrop-blur-sm border border-slate-700/50 p-4 rounded-xl transition-all duration-300 group"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors" />
            </button>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleTestimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="bg-linear-to-br from-slate-800/30 to-slate-900/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-slate-600/50 transition-all duration-300 group"
            >
              {/* Quote Icon and Date */}
              <div className="flex justify-between items-start mb-6">
                <svg
                  className="w-12 h-12 text-amber-500 opacity-80"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
                </svg>
                <span className="text-gray-500 text-sm">
                  {testimonial.date}
                </span>
              </div>

              {/* Quote Text */}
              <p className="text-gray-300 text-base leading-relaxed mb-8">
                {testimonial.quote}
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-4 pt-6 border-t border-slate-700/50">
                <div className="w-12 h-12 bg-slate-700/50 rounded-full flex items-center justify-center shrink-0">
                  <span className="text-gray-400 text-lg font-semibold">
                    {testimonial.author.charAt(0)}
                  </span>
                </div>
                <div>
                  <h4 className="font-semibold text-white">
                    {testimonial.author}
                  </h4>
                  <p className="text-sm text-gray-400">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}