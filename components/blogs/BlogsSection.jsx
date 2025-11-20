"use client";
import { useRef, useState, useEffect } from 'react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { motion  } from 'framer-motion';

// const API_URL = "https://gr8.com.np/gr8_backend/blogs";
const API_URL = "http://localhost/gr8_backend/blogs";
const FALLBACK_IMAGE = "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80";

const getImageUrl = (imagePath) => {
  if (!imagePath) return FALLBACK_IMAGE;
  return `${API_URL.replace('/blogs', '')}/uploads/${imagePath}`;
};

const formatTags = (tagsString) => {
  if (!tagsString) return [];
  return tagsString.split(',').map(tag => tag.trim());
};

const getTagColor = (tag) => {
  if (tag === "Featured") return "purple";
  if (tag === "Online Presence") return "purple";
  return "teal";
};

export default function BlogsSection() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const blogsRef = useRef(null);
  const buttonRef = useRef(null);
  
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const headerInView = true;
  const blogsInView = true;
  const buttonInView = true;

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        console.log("Fetching from:", `${API_URL}/get_blogs.php`);
        const res = await fetch(`${API_URL}/get_blogs.php`);
        console.log("Response status:", res.status);
        
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        
        const data = await res.json();
        console.log("Fetched data:", data);
        
        if (Array.isArray(data)) {
          setBlogs(data.slice(0, 3));
        } else if (data.blogs && Array.isArray(data.blogs)) {
          setBlogs(data.blogs.slice(0, 3));
        } else {
          console.error("Unexpected data format:", data);
          setBlogs([]);
        }
      } catch (error) {
        console.error("Error fetching blogs:", error);
        setBlogs([]);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.8
      }
    }
  };

  const headerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      y: -8,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const imageVariants = {
    hidden: { scale: 1.1, opacity: 0.8 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut"
      }
    }
  };

  const tagVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "backOut"
      }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    },
    tap: {
      scale: 0.95
    }
  };

  const handleImageError = (e) => {
    e.target.src = FALLBACK_IMAGE;
  };

  if (loading) {
    return (
      <div className="bg-[#0f1821] text-white sm:py-10 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-500 mx-auto"></div>
            <p className="mt-4 text-gray-400">Loading blogs...</p>
          </div>
        </div>
      </div>
    );
  }

  if (blogs.length === 0) {
    return (
      <div className="bg-[#0f1821] text-white sm:py-10 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center py-12">
            <p className="text-gray-400">No blogs available</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div ref={sectionRef} className="bg-[#0f1821] text-white sm:py-10 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div 
          ref={headerRef}
          className="text-center mb-16"
          initial="hidden"
          animate={headerInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.p 
            className="text-[#0E8A4D] text-sm font-semibold tracking-widest uppercase mb-3"
            variants={headerVariants}
          >
            OUR LATEST BLOGS
          </motion.p>
          <motion.h1 
            className="text-3xl md:text-4xl font-bold mb-6"
            variants={headerVariants}
          >
            Blogs & Articles
          </motion.h1>
        </motion.div>

        {/* Blog Cards Grid */}
        <motion.div 
          ref={blogsRef}
          className="relative"
          initial="hidden"
          animate={blogsInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <div className="relative grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {blogs.map((blog, index) => {
              const tags = formatTags(blog.tags);
              const imageUrl = getImageUrl(blog.image);
              
              return (
                <motion.div
                  key={blog.id}
                  className="bg-linear-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-sm border border-slate-700/50 rounded-2xl overflow-hidden hover:border-slate-600/50 transition-all duration-300 group cursor-pointer shadow-[0px_-2px_13px] shadow-white/15"
                  variants={cardVariants}
                  whileHover="hover"
                  onClick={() => window.location.href = `/blogs/${blog.url}`}
                >
                  {/* Blog Image */}
                  <div className="relative h-48 overflow-hidden p-6">
                    <motion.div
                      variants={imageVariants}
                      initial="hidden"
                      animate={blogsInView ? "visible" : "hidden"}
                      transition={{ delay: index * 0.1 }}
                    >
                      <img
                        src={imageUrl}
                        alt={blog.title}
                        className="w-full h-full object-cover group-hover:scale-110 rounded-xl transition-transform duration-500"
                        onError={handleImageError}
                        loading="lazy"
                      />
                    </motion.div>
                    <div className="absolute inset-0 bg-linear-to-t from-slate-900/80 to-transparent"></div>
                  </div>

                  {/* Blog Content */}
                  <div className="p-6">
                    {/* Tags */}
                    <motion.div 
                      className="flex flex-wrap gap-2 mb-4"
                      initial="hidden"
                      animate={blogsInView ? "visible" : "hidden"}
                      variants={containerVariants}
                    >
                      {tags.map((tag, tagIndex) => (
                        <motion.span
                          key={tagIndex}
                          className={`px-3 py-1 rounded-full text-xs font-medium ${
                            getTagColor(tag) === 'teal'
                              ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                              : 'bg-purple-500/20 text-purple-400 border border-purple-500/30'
                          }`}
                          variants={tagVariants}
                          transition={{ delay: index * 0.1 + tagIndex * 0.1 }}
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </motion.div>

                    {/* Title */}
                    <motion.h3 
                      className="text-xl font-bold mb-3 group-hover:text-emerald-400 transition-colors line-clamp-2"
                      initial={{ opacity: 0, y: 20 }}
                      animate={blogsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                    >
                      {blog.title}
                    </motion.h3>

                    {/* Description */}
                    <motion.p 
                      className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-2"
                      initial={{ opacity: 0 }}
                      animate={blogsInView ? { opacity: 1 } : { opacity: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                    >
                      {blog.description}
                    </motion.p>

                    {/* Meta Info */}
                    <motion.div 
                      className="flex items-center justify-between text-sm text-gray-500 pt-4 border-t border-slate-700/50"
                      initial={{ opacity: 0 }}
                      animate={blogsInView ? { opacity: 1 } : { opacity: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
                    >
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{blog.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span>{blog.read_time}</span>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* See All Blogs Button */}
        <motion.div 
          ref={buttonRef}
          className="flex justify-center mt-12"
          initial="hidden"
          animate={buttonInView ? "visible" : "hidden"}
          variants={buttonVariants}
        >
          <motion.a 
            href="/blogs"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <button className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-8 py-3 rounded-full flex items-center gap-2 transition-all duration-300 group shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/40">
              See all blogs
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
}