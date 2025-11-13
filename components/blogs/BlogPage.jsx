"use client";
import React, { useState } from "react";
import { Clock, Calendar, Sparkles, Search } from "lucide-react";

const BlogPage = () => {
  const [clickedButton, setClickedButton] = useState(null);

  const featuredMainBlog = {
    tags: ["Digital Growth", "Featured"],
    title: "Why Every Business Needs a Strong Digital Presence in 2025",
    description:
      "Lorem dolor ipsum lauditor new sit amet, consecw elt presemce tetur adip elee liscing elit, sed do eiusmod tempor incididunt ut labore eek ut goirona magna sequa. Ut enim ad minim veniam, quis mauride exercitation ullamco...",
    date: "21st May, 2025",
    readTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80",
    url: "/blog/why-every-business-needs-strong-digital-presence-2025"
  };

  const featuredBlogs = [
    {
      tags: ["Digital Growth", "Featured"],
      title: "Why Every Business Needs a Strong Digital Presence in 2025",
      description:
        "Lorem dolor ipsum lauditor new sit amet, consecw elt presemce tetur adip elee liscing elit, sed do eiusmod tempor incididunt ut labore...",
      date: "21st May, 2025",
      readTime: "5 min read",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&q=80",
      url: "/blog/why-every-business-needs-strong-digital-presence-2025"
    },
    {
      tags: ["Digital Growth", "Featured"],
      title: "Why Every Business Needs a Strong Digital Presence in 2025",
      description:
        "Lorem dolor ipsum lauditor new sit amet, consecw elt presemce tetur adip elee liscing elit, sed do eiusmod tempor incididunt ut labore...",
      date: "21st May, 2025",
      readTime: "5 min read",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&q=80",
      url: "/blog/why-every-business-needs-strong-digital-presence-2025"
    },
    {
      tags: ["Online Presence", "Featured"],
      title:
        "Discover why a strong online presence is essential for business...",
      description:
        "Lorem dolor ipsum lauditor new sit amet, consecw elt presemce tetur adip elee liscing elit, sed do eiusmod tempor incididunt ut labore...",
      date: "25th Sept, 2025",
      readTime: "8 min read",
      image:
        "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&q=80",
      url: "/blog/strong-online-presence-essential-business"
    },
  ];

  const latestBlogs = [
    {
      tag: "Digital Growth",
      title: "Why Every Business Needs a Strong Digital Presence in 2025",
      description:
        "Lorem dolor ipsum lauditor new sit amet, consecw elt presemce tetur adip elee liscing elit, sed do eiusmod tempor incididunt ut...",
      date: "21st May, 2025",
      readTime: "5 min read",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&q=80",
      url: "/blog/why-every-business-needs-strong-digital-presence-2025"
    },
    {
      tag: "Online Presence",
      title:
        "Discover why a strong online presence is essential for business...",
      description:
        "Lorem dolor ipsum lauditor new sit amet, consecw elt presemce tetur adip elee liscing elit, sed do eiusmod tempor incididunt ut...",
      date: "25th Sept, 2025",
      readTime: "8 min read",
      image:
        "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&q=80",
      url: "/blog/strong-online-presence-essential-business"
    },
  ];

  const topics = [
    "Digital Marketing",
    "Web Development",
    "Business Growth",
    "Online Presence",
  ];

  // Function to handle read now click
  const handleReadNow = (url, buttonId) => {
    setClickedButton(buttonId);
    setTimeout(() => {
      window.open(url, '_blank', 'noopener,noreferrer');
      setClickedButton(null);
    }, 300);
  };

  return (
    <div className="bg-[#101820] text-white pt-10 sm:pt-20">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12 relative">
          <p className="text-[#0E8A4D] text-sm font-medium mb-2 tracking-wider">
            OUR BLOGS & ARTICLES
          </p>
          <div className="absolute hidden md:flex gap-3 top-3">
            <div className="bg-linear-to-br from-[#101820] to-[#26323D] w-30 h-25 rounded-2xl animate-pulse"></div>
            <div className="bg-[#26323D] w-20 h-20 rounded-2xl animate-pulse delay-150"></div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold animate-fade-in">Insights & Ideas</h1>
        </div>

        {/* Main Featured Blog Card */}
        <div className="bg-linear-to-br from-[#0A1931] to-[#26323D] rounded-2xl overflow-hidden mb-16 shadow-xl transform transition-all duration-500 hover:shadow-2xl">
          <div className="grid md:grid-cols-2 gap-6 p-8">
            {/* Left Content */}
            <div className="flex flex-col justify-between">
              <div>
                <div className="flex gap-2 mb-4">
                  {featuredMainBlog.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className={`px-4 py-1 rounded-full text-xs font-medium animate-fade-in-up ${
                        tag === "Featured"
                          ? "bg-purple-500/20 text-purple-300"
                          : "bg-teal-500/20 text-teal-300"
                      }`}
                      style={{ animationDelay: `${idx * 100}ms` }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                  {featuredMainBlog.title}
                </h2>
                <p className="text-gray-400 mb-6 leading-relaxed animate-fade-in-up" style={{ animationDelay: '300ms' }}>
                  {featuredMainBlog.description}
                </p>
              </div>
              <div>
                <div className="flex items-center gap-4 text-sm text-gray-400 mb-4 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {featuredMainBlog.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {featuredMainBlog.readTime}
                  </span>
                </div>
                <button 
                  onClick={() => handleReadNow(featuredMainBlog.url, 'main')}
                  className={`bg-linear-to-br from-[#0E8A4D] to-[#4FBF87] hover:bg-teal-600 text-white px-6 py-2 rounded-lg transition-all duration-300 font-medium transform hover:scale-105 active:scale-95 ${
                    clickedButton === 'main' ? 'scale-95' : ''
                  }`}
                >
                  Read now
                </button>
              </div>
            </div>

            {/* Right Image */}
            <div className="order-first md:order-last animate-fade-in">
              <img
                src={featuredMainBlog.image}
                alt={featuredMainBlog.title}
                className="w-full h-64 md:h-full object-cover rounded-xl transform transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>
        </div>

        {/* Featured Section */}
        <div className="mb-16 relative">
          <div className="absolute sm:flex hidden gap-3 -top-14 right-0">
            <div className="bg-[#26323D] w-20 h-20 rounded-2xl animate-pulse"></div>
            <div className="bg-linear-to-br from-[#26323D] to-[#101820] w-30 h-25 rounded-2xl animate-pulse delay-300"></div>
          </div>
          <div className="flex items-center gap-2 mb-8 animate-fade-in">
            <Sparkles className="w-6 h-6 text-teal-400 animate-pulse" />
            <h2 className="text-3xl font-bold">Featured</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {featuredBlogs.map((blog, idx) => (
              <div
                key={idx}
                className="bg-linear-to-br from-[#0A1931] to-[#26323D] rounded-2xl overflow-hidden transform transition-all duration-500 hover:scale-102 shadow-lg hover:shadow-2xl group cursor-pointer"
                onClick={() => handleReadNow(blog.url, `featured-${idx}`)}
              >
                <div className="overflow-hidden">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-48 object-cover transform transition-transform duration-500 group-hover:scale-102"
                  />
                </div>
                <div className="p-6">
                  <div className="flex gap-2 mb-3">
                    {blog.tags.map((tag, tagIdx) => (
                      <span
                        key={tagIdx}
                        className={`px-3 py-1 rounded-full text-xs font-medium animate-fade-in-up ${
                          tag === "Featured"
                            ? "bg-pink-500/20 text-pink-300"
                            : tag === "Online Presence"
                            ? "bg-purple-500/20 text-purple-300"
                            : "bg-teal-500/20 text-teal-300"
                        }`}
                        style={{ animationDelay: `${tagIdx * 100}ms` }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-xl font-bold mb-3 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
                    {blog.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-3 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                    {blog.description}
                  </p>
                  <div className="flex items-center gap-3 text-xs text-gray-400 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {blog.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {blog.readTime}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Latest Blogs & Topics Section */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Latest Blogs */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold mb-8 animate-fade-in">Latest Blogs</h2>
            <div className="space-y-6">
              {latestBlogs.map((blog, idx) => (
                <div
                  key={idx}
                  className="bg-linear-to-br from-[#0A1931] to-[#26323D] rounded-2xl overflow-hidden transform transition-all duration-500 hover:scale-[1.02] shadow-lg hover:shadow-2xl group cursor-pointer"
                  onClick={() => handleReadNow(blog.url, `latest-${idx}`)}
                >
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="overflow-hidden">
                      <img
                        src={blog.image}
                        alt={blog.title}
                        className="w-full h-48 md:h-full object-cover transform transition-transform duration-500 group-hover:scale-102"
                      />
                    </div>
                    <div className="md:col-span-2 p-6 flex flex-col justify-between">
                      <div>
                        <span
                          className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-3 animate-fade-in-up ${
                            blog.tag === "Online Presence"
                              ? "bg-purple-500/20 text-purple-300"
                              : "bg-[#EAF7F2] text-[#0E8A4D]"
                          }`}
                        >
                          {blog.tag}
                        </span>
                        <h3 className="text-xl font-bold mb-3 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
                          {blog.title}
                        </h3>
                        <p className="text-gray-400 text-sm mb-4 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                          {blog.description}
                        </p>
                      </div>
                      <div className="flex items-center gap-3 text-xs text-gray-400 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {blog.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {blog.readTime}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Topics Sidebar */}
          <div>
            <h2 className="text-3xl font-bold mb-6 animate-fade-in">Topics</h2>
            <div className="bg-linear-to-br from-[#0A1931] to-[#26323D] rounded-2xl p-6 shadow-lg sticky top-6 transform transition-all duration-500 hover:shadow-xl">
              {/* Search Bar */}
              <div className="relative mb-6 animate-fade-in-up">
                <input
                  type="text"
                  placeholder="Search topics..."
                  className="w-full bg-[#101820] border border-gray-700 rounded-lg px-4 py-3 pr-10 text-white placeholder-gray-500 focus:outline-none focus:border-teal-500 transition-all duration-300 transform focus:scale-[1.02]"
                />
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
              </div>

              {/* Topics List */}
              <div className="space-y-2">
                {topics.map((topic, idx) => (
                  <button
                    key={idx}
                    className="w-full text-left px-4 py-3 rounded-lg hover:bg-[#101820] transition-all duration-300 transform hover:scale-[1.02] text-gray-300 hover:text-white animate-fade-in-up"
                    style={{ animationDelay: `${idx * 100}ms` }}
                  >
                    {topic}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add CSS animations */}
      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes fade-in-up {
          from { 
            opacity: 0;
            transform: translateY(20px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.1s ease-out;
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.1s ease-out;
          animation-fill-mode: both;
        }
      `}</style>
    </div>
  );
};

export default BlogPage;