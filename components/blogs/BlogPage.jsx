"use client";
import React, { useState, useEffect, useMemo, useCallback } from "react";
import { Clock, Calendar, Sparkles, Search } from "lucide-react";

// Constants
// const API_URL = "https://gr8.com.np/gr8_backend/blogs";
const API_URL = "http://localhost/gr8_backend/blogs";
const FALLBACK_IMAGE = "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80";

// Utility functions
const formatTags = (tagsString) => {
  if (!tagsString) return [];
  return tagsString.split(',').map(tag => tag.trim());
};

const getImageUrl = (imagePath) => {
  if (!imagePath) return FALLBACK_IMAGE;
  return `${API_URL.replace('/blogs', '')}/uploads/${imagePath}`;
};

// Loading Component
const LoadingState = () => (
  <div className="bg-[#101820] text-white min-h-screen flex items-center justify-center">
    <div className="text-center">
      <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-[#0E8A4D] mx-auto"></div>
      <p className="mt-4 text-gray-400">Loading blogs...</p>
    </div>
  </div>
);

// Header Component
const BlogHeader = () => (
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
);

// Blog Card Component
const BlogCard = ({ 
  blog, 
  onClick, 
  buttonId, 
  clickedButton, 
  showImage = true, 
  layout = 'vertical',
  featured = false 
}) => {
  const tags = useMemo(() => formatTags(blog.tags), [blog.tags]);
  const imageUrl = getImageUrl(blog.image);

  const handleImageError = useCallback((e) => {
    e.target.src = FALLBACK_IMAGE;
  }, []);

  const cardContent = (
    <>
      {showImage && (
        <div className="overflow-hidden">
          <img
            src={imageUrl}
            alt={blog.title}
            className={`w-full ${
              layout === 'horizontal' ? 'h-48 md:h-full' : 'h-48'
            } object-cover transform transition-transform duration-500 group-hover:scale-105`}
            onError={handleImageError}
            loading="lazy"
          />
        </div>
      )}
      
      <div className={layout === 'horizontal' ? "md:col-span-2 p-6 flex flex-col justify-between" : "p-6"}>
        <div>
          <div className="flex gap-2 mb-3 flex-wrap">
            {tags.map((tag, tagIdx) => (
              <span
                key={tagIdx}
                className={`px-3 py-1 rounded-full text-xs font-medium ${
                  tag === "Featured"
                    ? "bg-pink-500/20 text-pink-300"
                    : tag === "Online Presence"
                    ? "bg-purple-500/20 text-purple-300"
                    : "bg-teal-500/20 text-teal-300"
                }`}
              >
                {tag}
              </span>
            ))}
          </div>
          
          <h3 className={`font-bold mb-3 ${
            featured ? "text-2xl" : "text-xl"
          }`}>
            {blog.title}
          </h3>
          
        <p className={`text-gray-400 mb-4 ${
            featured ? "leading-relaxed line-clamp-3" : "text-sm line-clamp-2"
          }`}>
            {blog.description}
          </p>
        </div>
        
        <div className="flex items-center gap-3 text-xs text-gray-400">
          <span className="flex items-center gap-1">
            <Calendar className="w-3 h-3" />
            {blog.date}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            {blog.read_time}
          </span>
        </div>
        
        {onClick && (
          <button 
            onClick={(e) => {
              e.stopPropagation();
              onClick(blog.url, buttonId);
            }}
            className={`bg-linear-to-br from-[#0E8A4D] to-[#4FBF87] hover:bg-teal-600 text-white px-6 py-2 rounded-lg transition-all duration-300 font-medium transform hover:scale-105 active:scale-95 mt-4 ${
              clickedButton === buttonId ? 'scale-95' : ''
            }`}
          >
            Read now
          </button>
        )}
      </div>
    </>
  );

  const baseClasses = "bg-linear-to-br from-[#0A1931] to-[#26323D] rounded-2xl overflow-hidden transform transition-all duration-500 shadow-lg hover:shadow-2xl group cursor-pointer";
  const hoverClass = featured ? "hover:scale-102" : "hover:scale-[1.02]";

  if (layout === 'horizontal') {
    return (
      <div 
        className={`${baseClasses} ${hoverClass}`}
        onClick={() => onClick?.(blog.url, buttonId)}
      >
        <div className="grid md:grid-cols-3 gap-4">
          {cardContent}
        </div>
      </div>
    );
  }

  return (
    <div 
      className={`${baseClasses} ${hoverClass}`}
      onClick={() => onClick?.(blog.url, buttonId)}
    >
      {cardContent}
    </div>
  );
};

// Search and Topics Component
const SearchAndTopics = ({ searchTerm, setSearchTerm, selectedTopic, setSelectedTopic, topics }) => (
  <div className="bg-linear-to-br from-[#0A1931] to-[#26323D] rounded-2xl p-6 shadow-lg sticky top-6 transform transition-all duration-500 hover:shadow-xl">
    <div className="relative mb-6">
      <input
        type="text"
        placeholder="Search topics..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full bg-[#101820] border border-gray-700 rounded-lg px-4 py-3 pr-10 text-white placeholder-gray-500 focus:outline-none focus:border-teal-500 transition-all duration-300 transform focus:scale-[1.02]"
      />
      <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
    </div>

    <div className="space-y-2">
      <button
        onClick={() => setSelectedTopic("")}
        className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-300 transform hover:scale-[1.02] ${
          selectedTopic === "" 
            ? "bg-[#0E8A4D] text-white" 
            : "hover:bg-[#101820] text-gray-300 hover:text-white"
        }`}
      >
        All Topics
      </button>
      {topics.map((topic) => (
        <button
          key={topic}
          onClick={() => setSelectedTopic(topic)}
          className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-300 transform hover:scale-[1.02] ${
            selectedTopic === topic 
              ? "bg-[#0E8A4D] text-white" 
              : "hover:bg-[#101820] text-gray-300 hover:text-white"
          }`}
        >
          {topic}
        </button>
      ))}
    </div>
  </div>
);

const BlogPage = () => {
  const [clickedButton, setClickedButton] = useState(null);
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTopic, setSelectedTopic] = useState("");

  // Fetch blogs from API
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch(`${API_URL}/get_blogs.php`);
        const data = await res.json();
        setBlogs(data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  // Memoized derived data
  const topics = useMemo(() => 
    [...new Set(blogs.flatMap(blog => 
      blog.tags ? blog.tags.split(',').map(tag => tag.trim()) : []
    ))], 
    [blogs]
  );

  const filteredBlogs = useMemo(() => 
    blogs.filter(blog => {
      const matchesSearch = blog.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           blog.description?.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesTopic = !selectedTopic || blog.tags?.includes(selectedTopic);
      return matchesSearch && matchesTopic;
    }),
    [blogs, searchTerm, selectedTopic]
  );

  const featuredBlogs = useMemo(() => 
    filteredBlogs
      .filter(blog => blog.tags?.includes("Featured"))
      .slice(0, 3),
    [filteredBlogs]
  );

  const featuredMainBlog = useMemo(() => 
    featuredBlogs[0] || filteredBlogs[0],
    [featuredBlogs, filteredBlogs]
  );

  const latestBlogs = useMemo(() => 
    filteredBlogs
      .filter(blog => blog.id !== featuredMainBlog?.id)
      .slice(0, 10000),
    [filteredBlogs, featuredMainBlog]
  );

  // Event handlers
  const handleReadNow = useCallback((url, buttonId) => {
    setClickedButton(buttonId);
    setTimeout(() => {
      window.location.href = `/blogs/${url}`;
      setClickedButton(null);
    }, 300);
  }, []);

  const handleImageError = useCallback((e) => {
    e.target.src = FALLBACK_IMAGE;
  }, []);

  if (loading) {
    return <LoadingState />;
  }

  return (
    <div className="bg-[#101820] text-white pt-10 sm:pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <BlogHeader />

        {/* Main Featured Blog Card */}
        {featuredMainBlog && (
          <div className="bg-linear-to-br from-[#0A1931] to-[#26323D] rounded-2xl overflow-hidden mb-16 shadow-xl transform transition-all duration-500 hover:shadow-2xl">
            <div className="grid md:grid-cols-2 gap-6 p-8">
              <div className="flex flex-col justify-between">
                <div>
                  <div className="flex gap-2 mb-4">
                    {formatTags(featuredMainBlog.tags).map((tag, idx) => (
                      <span
                        key={idx}
                        className={`px-4 py-1 rounded-full text-xs font-medium ${
                          tag === "Featured"
                            ? "bg-purple-500/20 text-purple-300"
                            : "bg-teal-500/20 text-teal-300"
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">
                    {featuredMainBlog.title}
                  </h2>
                  <p className="text-gray-400 mb-6 leading-relaxed line-clamp-3">
                    {featuredMainBlog.description}
                  </p>
                </div>
                <div>
                  <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {featuredMainBlog.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {featuredMainBlog.read_time}
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

              <div className="order-first md:order-last">
                <img
                  src={getImageUrl(featuredMainBlog.image)}
                  alt={featuredMainBlog.title}
                  className="w-full h-64 md:h-full object-cover rounded-xl transform transition-transform duration-500 hover:scale-105"
                  onError={handleImageError}
                  loading="eager"
                />
              </div>
            </div>
          </div>
        )}

        {/* Featured Section */}
        {featuredBlogs.length > 0 && (
          <div className="mb-16 relative">
            <div className="absolute sm:flex hidden gap-3 -top-14 right-0">
              <div className="bg-[#26323D] w-20 h-20 rounded-2xl animate-pulse"></div>
              <div className="bg-linear-to-br from-[#26323D] to-[#101820] w-30 h-25 rounded-2xl animate-pulse delay-300"></div>
            </div>
            <div className="flex items-center gap-2 mb-8">
              <Sparkles className="w-6 h-6 text-teal-400 animate-pulse" />
              <h2 className="text-3xl font-bold">Featured</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {featuredBlogs.map((blog, idx) => (
                <BlogCard
                  key={blog.id}
                  blog={blog}
                  onClick={handleReadNow}
                  buttonId={`featured-${idx}`}
                  clickedButton={clickedButton}
                  featured={true}
                />
              ))}
            </div>
          </div>
        )}

        {/* Latest Blogs & Topics Section */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Latest Blogs */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold mb-8">Latest Blogs</h2>
            {latestBlogs.length === 0 ? (
              <div className="text-center py-12 text-gray-400">
                <p>No blogs available yet. Check back soon!</p>
              </div>
            ) : (
              <div className="space-y-6">
                {latestBlogs.map((blog, idx) => (
                  <BlogCard
                    key={blog.id}
                    blog={blog}
                    onClick={handleReadNow}
                    buttonId={`latest-${idx}`}
                    clickedButton={clickedButton}
                    layout="horizontal"
                    showImage={true}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Topics Sidebar */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Topics</h2>
            <SearchAndTopics
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              selectedTopic={selectedTopic}
              setSelectedTopic={setSelectedTopic}
              topics={topics}
            />
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
          animation: fade-in 0.8s ease-out;
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out;
          animation-fill-mode: both;
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default BlogPage;