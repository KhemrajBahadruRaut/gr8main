"use client";
import { useState, useEffect } from "react";
import { Calendar, Clock, Tag, ArrowLeft, Facebook, Twitter, Linkedin, Link as LinkIcon } from "lucide-react";
import { useRouter, useParams } from "next/navigation";

const BlogDetailPage = () => {
  const router = useRouter();
  const params = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [relatedBlogs, setRelatedBlogs] = useState([]);
  const [copied, setCopied] = useState(false);

  const API_URL = "http://localhost/gr8_backend/blogs/get_blogs.php/";

  useEffect(() => {
    if (params?.slug) {
      fetchBlogByUrl();
    }
  }, [params?.slug]);

  const fetchBlogByUrl = async () => {
    setLoading(true);
    try {
      
      // Fetch all blogs
      const allBlogsRes = await fetch(`${API_URL}/getblog.php`);
      
      if (!allBlogsRes.ok) {
        throw new Error(`HTTP error! status: ${allBlogsRes.status}`);
      }
      
      const allBlogsData = await allBlogsRes.json();
      console.log("Raw API response:", allBlogsData);
      
      // Handle different response structures
      let allBlogs = allBlogsData;
      
      // If response has a data property, use that
      if (allBlogsData && typeof allBlogsData === 'object' && allBlogsData.data) {
        allBlogs = allBlogsData.data;
      }
      
      // If response has blogs property
      if (allBlogsData && Array.isArray(allBlogsData.blogs)) {
        allBlogs = allBlogsData.blogs;
      }
      
      // If response has success property
      if (allBlogsData && typeof allBlogsData === 'object' && allBlogsData.success !== undefined) {
        allBlogs = allBlogsData.data || allBlogsData.blogs || [];
      }
      
      // Ensure it's an array
      if (!Array.isArray(allBlogs)) {
        console.warn('Expected array but got:', typeof allBlogs, allBlogs);
        allBlogs = [];
      }
      
      console.log("Processed blogs array:", allBlogs);
      console.log("Looking for blog with URL:", params.slug);
      
      // Find blog by URL slug - try different variations
      const foundBlog = allBlogs.find(b => {
        if (!b || !b.url) return false;
        
        // Try exact match
        if (b.url === params.slug) return true;
        
        // Try case-insensitive match
        if (b.url.toLowerCase() === params.slug.toLowerCase()) return true;
        
        // Try matching after decoding URL encoded characters
        if (decodeURIComponent(b.url) === params.slug) return true;
        
        return false;
      });
      
      // If not found with URL, try with id as fallback
      if (!foundBlog) {
        console.log("Blog not found by URL, trying to find by ID...");
        // Check if slug might be an ID
        const blogById = allBlogs.find(b => b && b.id == params.slug);
        if (blogById) {
          console.log("Found blog by ID:", blogById);
          setBlog(blogById);
          
          // Get related blogs
          const related = allBlogs
            .filter(b => b.id !== blogById.id && 
              b.tags && blogById.tags && 
              b.tags.split(',').some(tag => 
                blogById.tags.split(',').map(t => t.trim()).includes(tag.trim())
              )
            )
            .slice(0, 3);
          setRelatedBlogs(related);
          return;
        }
      }
      
      if (foundBlog) {
        console.log("Found blog:", foundBlog);
        setBlog(foundBlog);
        
        // Get related blogs (same tags)
        const related = allBlogs
          .filter(b => b.id !== foundBlog.id && 
            b.tags && foundBlog.tags && 
            b.tags.split(',').some(tag => 
              foundBlog.tags.split(',').map(t => t.trim()).includes(tag.trim())
            )
          )
          .slice(0, 3);
        setRelatedBlogs(related);
      } else {
        console.error("Blog not found for URL:", params.slug);
        console.log("Available blogs URLs:", allBlogs.map(b => ({ id: b.id, url: b.url, title: b.title })));
      }
    } catch (error) {
      console.error("Error fetching blog:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleShare = (platform) => {
    const url = window.location.href;
    const text = blog?.title || '';
    
    const shareUrls = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`
    };

    if (shareUrls[platform]) {
      window.open(shareUrls[platform], '_blank', 'width=600,height=400');
    }
  };

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#101820] flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-[#0E8A4D] mx-auto"></div>
          <p className="mt-4 text-gray-400">Loading blog...</p>
        </div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="min-h-screen bg-[#101820] flex items-center justify-center ">
        <div className="text-center">
          <h1 className="text-6xl mb-4">📝</h1>
          <h2 className="text-2xl text-white mb-2">Blog Not Found</h2>
          <p className="text-gray-400 mb-4">The blog you're looking for doesn't exist.</p>
          <p className="text-gray-500 text-sm mb-6">URL: {params.slug}</p>
          <button
            onClick={() => router.push('/blogs')}
            className="bg-[#0E8A4D] text-white px-6 py-3 rounded-lg hover:bg-[#10B981] transition-colors"
          >
            Back to Blogs
          </button>
        </div>
      </div>
    );
  }

  // Format tags safely
  const formatTags = (tagsString) => {
    if (!tagsString) return [];
    return tagsString.split(',').map(tag => tag.trim()).filter(tag => tag);
  };

  const tags = formatTags(blog.tags);
  const firstTag = tags[0] || '';

  return (
    <div className=" bg-[#101820] text-white ">

      {/* Header Section */}
      <div className="bg-linear-to-br from-[#0A1931] to-[#26323D] border-b border-gray-800 pt-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <button
            onClick={() => router.push('/blogs')}
            className="flex items-center gap-2 text-gray-400 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Blogs
          </button>

          {/* Tags */}
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {tags.map((tag, idx) => (
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
          )}

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            {blog.title}
          </h1>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-4 text-gray-400 mb-6">
            <span className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              {blog.date || 'No date'}
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              {blog.read_time || 'No read time'}
            </span>
          </div>

          {/* Share Buttons */}
          <div className="flex items-center gap-3">
            <span className="text-gray-400 text-sm">Share:</span>
            <button
              onClick={() => handleShare('facebook')}
              className="p-2 bg-blue-600 hover:bg-blue-700 rounded-full transition-colors"
              title="Share on Facebook"
            >
              <Facebook className="w-4 h-4" />
            </button>
            <button
              onClick={() => handleShare('twitter')}
              className="p-2 bg-sky-500 hover:bg-sky-600 rounded-full transition-colors"
              title="Share on Twitter"
            >
              <Twitter className="w-4 h-4" />
            </button>
            <button
              onClick={() => handleShare('linkedin')}
              className="p-2 bg-blue-700 hover:bg-blue-800 rounded-full transition-colors"
              title="Share on LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </button>
            <button
              onClick={copyLink}
              className="p-2 bg-gray-700 hover:bg-gray-600 rounded-full transition-colors relative"
              title="Copy Link"
            >
              <LinkIcon className="w-4 h-4" />
              {copied && (
                <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                  Copied!
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Featured Image */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8  pt-10 ">
        <img
          src={`http://localhost/gr8_backend/uploads/${blog.image}`}
          alt={blog.title}
          className="w-full h-96 object-cover rounded-2xl shadow-2xl"
          onError={(e) => {
            e.target.src = 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80';
          }}
        />
      </div>

      {/* Content Section */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 ">
        <article className="prose prose-invert prose-lg ">
          <div className="text-gray-300 leading-relaxed space-y-6">
            {/* Description as introduction */}
            {blog.description && (
              <p className="text-lg text-gray-200 font-medium leading-relaxed">
                {blog.description}
              </p>
            )}

            {/* You can add more content sections here */}
            <div className="border-l-4 border-[#0E8A4D] pl-6 my-8">
              <p className="text-gray-400 italic">
                "This blog post provides valuable insights into {blog.title.toLowerCase()}. 
                Stay tuned for more detailed content coming soon."
              </p>
            </div>

            {/* Placeholder for full content */}
            <div className="space-y-4 text-gray-300">
              <h2 className="text-3xl font-bold text-white mt-8 mb-4">Key Takeaways</h2>
              <p>
                In today's digital landscape, understanding {firstTag.toLowerCase() || 'these concepts'} 
                is crucial for success. This comprehensive guide explores the essential aspects you need to know.
              </p>
             
              <h2 className="text-3xl font-bold text-white mt-8 mb-4">Getting Started</h2>
              <p>
                The first step is understanding the fundamentals. With the right approach and tools, 
                you can achieve remarkable results in your journey.
              </p>
            </div>
          </div>
        </article>

        {/* Call to Action */}
        <div className="mt-12 p-8 bg-linear-to-br from-[#0E8A4D] to-[#10B981] rounded-2xl">
          <h3 className="text-2xl font-bold mb-2">Ready to take action?</h3>
          <p className="text-gray-100 mb-4">
            Get in touch with us to learn more about how we can help you succeed.
          </p>
          <button 
            onClick={() => router.push('/contact')}
            className="bg-white text-[#0E8A4D] px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
          >
            Contact Us
          </button>
        </div>
      </div>

      {/* Related Blogs */}
      {relatedBlogs.length > 0 && (
        <div className="bg-linear-to-br from-[#0A1931] to-[#26323D] py-16 mt-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
              <Tag className="w-8 h-8 text-[#0E8A4D]" />
              Related Articles
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              {relatedBlogs.map((relatedBlog) => (
                <div
                  key={relatedBlog.id}
                  onClick={() => router.push(`/blogs/${relatedBlog.url}`)}
                  className="bg-[#101820] rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer group"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={`http://localhost/gr8_backend/uploads/${relatedBlog.image}`}
                      alt={relatedBlog.title}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                      onError={(e) => {
                        e.target.src = 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&q=80';
                      }}
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex gap-2 mb-3">
                      {formatTags(relatedBlog.tags).slice(0, 2).map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-teal-500/20 text-teal-300 rounded-full text-xs font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-xl font-bold mb-2 line-clamp-2 group-hover:text-[#0E8A4D] transition-colors">
                      {relatedBlog.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                      {relatedBlog.description}
                    </p>
                    <div className="flex items-center gap-3 text-xs text-gray-500">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {relatedBlog.date || 'No date'}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {relatedBlog.read_time || 'No read time'}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogDetailPage;