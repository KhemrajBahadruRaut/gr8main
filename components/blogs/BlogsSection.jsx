import React from 'react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

export default function BlogsSection() {
  const blogs = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=800&q=80",
      tags: [
        { label: "Digital Growth", color: "teal" },
        { label: "Featured", color: "purple" }
      ],
      title: "Why Every Business Needs a Strong Digital Presence in 2025",
      description: "Lorem dolor ipsum itsdolor new sit amet, consec wait tetur adip see iscing elit, sed do eiusmod tempor incididunt ut labore ...",
      date: "21st May, 2025",
      readTime: "5 min read"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?w=800&q=80",
      tags: [
        { label: "Online Presence", color: "teal" }
      ],
      title: "Discover why a strong online presence is essential for...",
      description: "Lorem dolor ipsum itsdolor new sit amet, consec wait presence tetur adip see iscing eiusmod tempor incididunt ut labore ...",
      date: "25th Sept, 2025",
      readTime: "8 min read"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?w=800&q=80",
      tags: [
        { label: "Online Presence", color: "teal" }
      ],
      title: "Discover why a strong online presence is essential for...",
      description: "Lorem dolor ipsum itsdolor new sit amet, consec wait presence tetur adip see iscing elit, sed do tempor incididunt ut labore ...",
      date: "25th Sept, 2025",
      readTime: "8 min read"
    }
  ];

  return (
    <div className=" bg-[#0f1821] text-white py-20 px-6 ">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <p className="text-emerald-400 text-sm font-semibold tracking-widest uppercase mb-3">
            OUR LATEST BLOGS
          </p>
          <h1 className="text-3xl md:text-4xl font-bold mb-6">
            Blogs & Articles
          </h1>
        </div>

        {/* Blog Cards Grid */}
        <div className="relative">
        
          <div className="relative grid md:grid-cols-2 lg:grid-cols-3 gap-10  ">
            {blogs.map((blog) => (
              <div
                key={blog.id}
                className="bg-linear-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-sm border border-slate-700/50 rounded-2xl overflow-hidden hover:border-slate-600/50 transition-all duration-300 group cursor-pointer  shadow-lg shadow-white/15"
              >
                {/* Blog Image */}
                <div className="relative h-48 overflow-hidden p-6 ">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover group-hover:scale-110  rounded-xl transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-slate-900/80 to-transparent"></div>
                </div>

                {/* Blog Content */}
                <div className="p-6">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {blog.tags.map((tag, index) => (
                      <span
                        key={index}
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          tag.color === 'teal'
                            ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                            : 'bg-purple-500/20 text-purple-400 border border-purple-500/30'
                        }`}
                      >
                        {tag.label}
                      </span>
                    ))}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold mb-3 group-hover:text-emerald-400 transition-colors">
                    {blog.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 text-sm leading-relaxed mb-6">
                    {blog.description}
                  </p>

                  {/* Meta Info */}
                  <div className="flex items-center justify-between text-sm text-gray-500 pt-4 border-t border-slate-700/50">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{blog.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{blog.readTime}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* See All Blogs Button */}
        <div className="flex justify-center mt-12">
          <button className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-8 py-4 rounded-full flex items-center gap-2 transition-all duration-300 group shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/40">
            See all blogs
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
}