// app/admin/blogs/page.js
"use client";
import React, { useEffect, useState } from "react";

const AdminBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [editingBlog, setEditingBlog] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    tags: "",
    date: "",
    read_time: "",
    url: "",
    image: null,
  });
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const API_URL = "http://localhost/gr8_backend/blogs";

  // Fetch all blogs
  const fetchBlogs = async () => {
    setLoading(true);
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

  useEffect(() => {
    fetchBlogs();
  }, []);

  // Handle form input
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  // Add or update blog
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const form = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        if (value !== null && value !== undefined) {
          form.append(key, value);
        }
      });
      
      if (editingBlog) form.append("id", editingBlog.id);

      const endpoint = editingBlog ? "update_blog.php" : "add_blog.php";
      const response = await fetch(`${API_URL}/${endpoint}`, {
        method: "POST",
        body: form,
      });

      if (!response.ok) {
        throw new Error("Failed to save blog");
      }

      // Reset form
      setFormData({
        title: "",
        description: "",
        tags: "",
        date: "",
        read_time: "",
        url: "",
        image: null,
      });
      setEditingBlog(null);
      fetchBlogs();
      
      alert(editingBlog ? "Blog updated successfully!" : "Blog added successfully!");
    } catch (error) {
      console.error("Error saving blog:", error);
      alert("Error saving blog. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Delete blog
  const handleDelete = async (id) => {
    if (confirm("Are you sure you want to delete this blog?")) {
      setLoading(true);
      try {
        await fetch(`${API_URL}/delete_blog.php?id=${id}`);
        fetchBlogs();
        alert("Blog deleted successfully!");
      } catch (error) {
        console.error("Error deleting blog:", error);
        alert("Error deleting blog. Please try again.");
      } finally {
        setLoading(false);
      }
    }
  };

  // Edit blog
  const handleEdit = (blog) => {
    setEditingBlog(blog);
    setFormData({
      title: blog.title || "",
      description: blog.description || "",
      tags: blog.tags || "",
      date: blog.date || "",
      read_time: blog.read_time || "",
      url: blog.url || "",
      image: null,
    });
  };

  // Cancel edit
  const handleCancelEdit = () => {
    setEditingBlog(null);
    setFormData({
      title: "",
      description: "",
      tags: "",
      date: "",
      read_time: "",
      url: "",
      image: null,
    });
  };

  // Filter blogs based on search
  const filteredBlogs = blogs.filter(blog =>
    blog.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    blog.tags?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Blog Management</h1>
          <p className="text-gray-600">Create, edit, and manage your blog posts</p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search blogs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0E8A4D] focus:border-transparent"
            />
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
              🔍
            </span>
          </div>
        </div>
      </div>

      {/* Add/Edit Form */}
      <div className="bg-white rounded-xl shadow-sm border p-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          {editingBlog ? "Edit Blog Post" : "Create New Blog Post"}
        </h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
              <input
                name="title"
                placeholder="Enter blog title"
                value={formData.title}
                onChange={handleChange}
                className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#0E8A4D] focus:border-transparent"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Tags</label>
              <input
                name="tags"
                placeholder="Tags (comma separated)"
                value={formData.tags}
                onChange={handleChange}
                className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#0E8A4D] focus:border-transparent"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Date</label>
              <input
                name="date"
                type="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#0E8A4D] focus:border-transparent"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Read Time</label>
              <input
                name="read_time"
                placeholder="e.g., 5 min read"
                value={formData.read_time}
                onChange={handleChange}
                className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#0E8A4D] focus:border-transparent"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">URL Slug</label>
              <input
                name="url"
                placeholder="blog-url-slug"
                value={formData.url}
                onChange={handleChange}
                className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#0E8A4D] focus:border-transparent"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Featured Image</label>
              <input
                type="file"
                name="image"
                onChange={handleChange}
                className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#0E8A4D] focus:border-transparent"
                accept="image/*"
              />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
            <textarea
              name="description"
              placeholder="Enter blog description"
              value={formData.description}
              onChange={handleChange}
              className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#0E8A4D] focus:border-transparent"
              rows="4"
              required
            ></textarea>
          </div>
          
          <div className="flex space-x-3">
            <button
              type="submit"
              disabled={loading}
              className="bg-[#0E8A4D] hover:bg-[#10B981] disabled:bg-gray-400 px-6 py-2 rounded-lg text-white font-medium transition-colors"
            >
              {loading ? "Saving..." : editingBlog ? "Update Blog" : "Add Blog"}
            </button>
            
            {editingBlog && (
              <button
                type="button"
                onClick={handleCancelEdit}
                disabled={loading}
                className="bg-gray-500 hover:bg-gray-600 disabled:bg-gray-400 px-6 py-2 rounded-lg text-white font-medium transition-colors"
              >
                Cancel
              </button>
            )}
          </div>
        </form>
      </div>

      {/* Blog List */}
      <div className="bg-white rounded-xl shadow-sm border p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-semibold text-gray-800">Existing Blogs ({filteredBlogs.length})</h2>
          <span className="text-sm text-gray-500">
            {loading ? "Loading..." : `${blogs.length} total blogs`}
          </span>
        </div>

        {loading ? (
          <div className="text-center py-8">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#0E8A4D] mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading blogs...</p>
          </div>
        ) : filteredBlogs.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-gray-500">No blogs found. {searchTerm && "Try changing your search term."}</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredBlogs.map((blog) => (
              <div key={blog.id} className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                <div className="relative">
                  <img 
                    src={`http://localhost/gr8_backend/uploads/${blog.image}`} 
                    alt={blog.title}
                    className="w-full h-48 object-cover"
                    onError={(e) => {
                      e.target.src = '/api/placeholder/400/200';
                    }}
                  />
                  <div className="absolute top-2 right-2 bg-black bg-opacity-50 text-white px-2 py-1 rounded text-xs">
                    {blog.read_time}
                  </div>
                </div>
                
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-2 line-clamp-2">{blog.title}</h3>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">{blog.description}</p>
                  
                  <div className="flex flex-wrap gap-1 mb-3">
                    {blog.tags?.split(',').map((tag, index) => (
                      <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                        {tag.trim()}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex justify-between items-center text-sm text-gray-500">
                    <span>{blog.date}</span>
                    <div className="flex space-x-2">
                      <button 
                        onClick={() => handleEdit(blog)}
                        className="bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded text-white text-xs font-medium"
                      >
                        Edit
                      </button>
                      <button 
                        onClick={() => handleDelete(blog.id)}
                        className="bg-red-600 hover:bg-red-700 px-3 py-1 rounded text-white text-xs font-medium"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminBlogs;