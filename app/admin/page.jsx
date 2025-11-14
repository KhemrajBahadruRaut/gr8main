"use client"
import React, { useState, useEffect } from "react";
import { Plus, Edit2, Trash2, Save, X, Menu, FileText, Upload } from "lucide-react";

const AdminPanel = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [blogs, setBlogs] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentBlog, setCurrentBlog] = useState(null);
  const [loading, setLoading] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image_url: "",
    date: "",
    read_time: "",
    url: "",
    is_featured: false,
    is_main_featured: false,
    tag: "Digital Growth",
    additional_tags: ""
  });

  const API_BASE = "http://localhost/gr8_backend/blogs/blogs.php";
  const UPLOAD_API = "http://localhost/gr8_backend/blogs/upload.php";

  useEffect(() => {
    fetchBlogs();
  }, []);

  const generateSlug = (title) => {
    return title
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .replace(/^-+|-+$/g, '');
  };

  const fetchBlogs = async () => {
    try {
      setLoading(true);
      const response = await fetch(API_BASE);
      const data = await response.json();
      setBlogs(data);
    } catch (error) {
      console.error("Error fetching blogs:", error);
      alert("Failed to fetch blogs");
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;
    
    setFormData(prev => {
      const updated = {
        ...prev,
        [name]: newValue
      };
      
      if (name === "title") {
        updated.url = `/blog/${generateSlug(value)}`;
      }
      
      return updated;
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (!file.type.startsWith('image/')) {
        alert('Please select an image file');
        return;
      }
      
      if (file.size > 5 * 1024 * 1024) {
        alert('Image size should be less than 5MB');
        return;
      }
      
      setImageFile(file);
      
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const uploadImage = async () => {
    if (!imageFile) return formData.image_url;

    const formDataImg = new FormData();
    formDataImg.append('image', imageFile);

    try {
      const response = await fetch(UPLOAD_API, {
        method: 'POST',
        body: formDataImg
      });

      const data = await response.json();
      
      if (data.success && data.image_url) {
        return data.image_url;
      } else {
        throw new Error(data.error || 'Image upload failed');
      }
    } catch (error) {
      console.error('Image upload error:', error);
      throw error;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      let imageUrl = formData.image_url;
      if (imageFile) {
        imageUrl = await uploadImage();
      }

      const submitData = {
        ...formData,
        image_url: imageUrl
      };

      const url = currentBlog ? `${API_BASE}/${currentBlog.id}` : API_BASE;
      const method = currentBlog ? "PUT" : "POST";

      const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(submitData)
      });

      const data = await response.json();

      if (data.success || data.id) {
        alert(currentBlog ? "Blog updated successfully!" : "Blog created successfully!");
        resetForm();
        fetchBlogs();
      } else {
        alert(data.error || "Operation failed");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Operation failed: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (blog) => {
    setCurrentBlog(blog);
    setFormData({
      title: blog.title,
      description: blog.description,
      image_url: blog.image_url,
      date: blog.date,
      read_time: blog.read_time,
      url: blog.url,
      is_featured: Boolean(blog.is_featured),
      is_main_featured: Boolean(blog.is_main_featured),
      tag: blog.tag,
      additional_tags: blog.additional_tags || ""
    });
    setImagePreview(blog.image_url);
    setImageFile(null);
    setIsEditing(true);
  };

  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this blog?")) return;

    try {
      setLoading(true);
      const response = await fetch(`${API_BASE}/${id}`, {
        method: "DELETE"
      });

      const data = await response.json();

      if (data.success) {
        alert("Blog deleted successfully!");
        fetchBlogs();
      } else {
        alert(data.error || "Delete failed");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Delete failed");
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setFormData({
      title: "",
      description: "",
      image_url: "",
      date: "",
      read_time: "",
      url: "",
      is_featured: false,
      is_main_featured: false,
      tag: "Digital Growth",
      additional_tags: ""
    });
    setCurrentBlog(null);
    setIsEditing(false);
    setImagePreview(null);
    setImageFile(null);
  };

  return (
    <div className="flex h-screen bg-[#101820]">
      {/* Sidebar */}
      <div className={`${sidebarOpen ? "w-64" : "w-20"} bg-[#0A1931] transition-all duration-300 flex flex-col border-r border-gray-800`}>
        <div className="p-4 border-b border-gray-800 flex items-center justify-between">
          {sidebarOpen && <h1 className="text-white text-xl font-bold">Admin Panel</h1>}
          <button onClick={() => setSidebarOpen(!sidebarOpen)} className="text-white p-2 hover:bg-gray-800 rounded-lg">
            <Menu className="w-5 h-5" />
          </button>
        </div>

        <nav className="flex-1 p-4">
          <div className="space-y-2">
            <div className="text-gray-400 text-xs font-semibold mb-2 px-3">
              {sidebarOpen ? "CMS" : ""}
            </div>
            <button className="w-full flex items-center gap-3 px-3 py-2 text-white bg-[#0E8A4D] rounded-lg">
              <FileText className="w-5 h-5" />
              {sidebarOpen && <span>Blogs</span>}
            </button>
          </div>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <div className="p-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-white">Blog Management</h2>
            {!isEditing && (
              <button onClick={() => setIsEditing(true)} className="bg-[#0E8A4D] text-white px-6 py-2 rounded-lg flex items-center gap-2 hover:bg-[#0c7a42] transition-colors">
                <Plus className="w-5 h-5" />
                Add New Blog
              </button>
            )}
          </div>

          {/* Form */}
          {isEditing && (
            <div className="bg-[#0A1931] rounded-2xl p-6 mb-8 border border-gray-800">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-white">
                  {currentBlog ? "Edit Blog" : "Create New Blog"}
                </h3>
                <button onClick={resetForm} className="text-gray-400 hover:text-white">
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="space-y-6">
                {/* Image Upload Section */}
                <div>
                  <label className="block text-gray-300 mb-2 font-medium">Featured Image *</label>
                  <div className="flex gap-6">
                    <div className="flex-1">
                      <div className="relative border-2 border-dashed border-gray-700 rounded-lg p-6 hover:border-[#0E8A4D] transition-colors">
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleImageChange}
                          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                        />
                        <div className="text-center">
                          <Upload className="w-12 h-12 mx-auto mb-4 text-gray-500" />
                          <p className="text-gray-400 mb-2">Click to upload or drag and drop</p>
                          <p className="text-gray-500 text-sm">PNG, JPG, GIF up to 5MB</p>
                        </div>
                      </div>
                    </div>
                    
                    {imagePreview && (
                      <div className="w-64">
                        <p className="text-gray-400 text-sm mb-2">Preview:</p>
                        <div className="relative">
                          <img 
                            src={imagePreview} 
                            alt="Preview" 
                            className="w-full h-40 object-cover rounded-lg border border-gray-700"
                          />
                          <button
                            onClick={() => {
                              setImagePreview(null);
                              setImageFile(null);
                              setFormData(prev => ({ ...prev, image_url: "" }));
                            }}
                            className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full hover:bg-red-600"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-300 mb-2 font-medium">Title *</label>
                    <input 
                      type="text" 
                      name="title" 
                      value={formData.title} 
                      onChange={handleInputChange} 
                      required 
                      className="w-full bg-[#101820] border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#0E8A4D]" 
                      placeholder="Enter blog title"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-300 mb-2 font-medium">
                      URL Slug *
                      <span className="text-gray-500 text-sm ml-2">(Auto-generated)</span>
                    </label>
                    <input 
                      type="text" 
                      name="url" 
                      value={formData.url} 
                      onChange={handleInputChange} 
                      required
                      className="w-full bg-[#101820] border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#0E8A4D]" 
                      placeholder="/blog/your-blog-slug"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-300 mb-2 font-medium">Description *</label>
                  <textarea 
                    name="description" 
                    value={formData.description} 
                    onChange={handleInputChange} 
                    required 
                    rows="4" 
                    className="w-full bg-[#101820] border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#0E8A4D]" 
                    placeholder="Enter blog description"
                  />
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-gray-300 mb-2 font-medium">Date</label>
                    <input 
                      type="text" 
                      name="date" 
                      value={formData.date} 
                      onChange={handleInputChange} 
                      placeholder="21st May, 2025" 
                      className="w-full bg-[#101820] border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#0E8A4D]" 
                    />
                  </div>

                  <div>
                    <label className="block text-gray-300 mb-2 font-medium">Read Time</label>
                    <input 
                      type="text" 
                      name="read_time" 
                      value={formData.read_time} 
                      onChange={handleInputChange} 
                      placeholder="5 min read" 
                      className="w-full bg-[#101820] border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#0E8A4D]" 
                    />
                  </div>

                  <div>
                    <label className="block text-gray-300 mb-2 font-medium">Primary Tag</label>
                    <select 
                      name="tag" 
                      value={formData.tag} 
                      onChange={handleInputChange} 
                      className="w-full bg-[#101820] border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#0E8A4D]"
                    >
                      <option value="Digital Growth">Digital Growth</option>
                      <option value="Online Presence">Online Presence</option>
                      <option value="Web Development">Web Development</option>
                      <option value="Business Growth">Business Growth</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-gray-300 mb-2 font-medium">Additional Tags</label>
                  <input 
                    type="text" 
                    name="additional_tags" 
                    value={formData.additional_tags} 
                    onChange={handleInputChange} 
                    placeholder="Featured, Popular, etc." 
                    className="w-full bg-[#101820] border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#0E8A4D]" 
                  />
                </div>

                <div className="flex gap-6">
                  <label className="flex items-center gap-2 text-gray-300 cursor-pointer">
                    <input 
                      type="checkbox" 
                      name="is_featured" 
                      checked={formData.is_featured} 
                      onChange={handleInputChange} 
                      className="w-5 h-5 rounded border-gray-700 text-[#0E8A4D] focus:ring-[#0E8A4D]" 
                    />
                    <span>Featured Blog</span>
                  </label>

                  <label className="flex items-center gap-2 text-gray-300 cursor-pointer">
                    <input 
                      type="checkbox" 
                      name="is_main_featured" 
                      checked={formData.is_main_featured} 
                      onChange={handleInputChange} 
                      className="w-5 h-5 rounded border-gray-700 text-[#0E8A4D] focus:ring-[#0E8A4D]" 
                    />
                    <span>Main Featured (Top)</span>
                  </label>
                </div>

                <div className="flex gap-4">
                  <button 
                    onClick={handleSubmit}
                    disabled={loading} 
                    className="bg-[#0E8A4D] text-white px-8 py-3 rounded-lg flex items-center gap-2 hover:bg-[#0c7a42] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Save className="w-5 h-5" />
                    {loading ? "Saving..." : (currentBlog ? "Update Blog" : "Create Blog")}
                  </button>
                  <button 
                    onClick={resetForm} 
                    className="bg-gray-700 text-white px-8 py-3 rounded-lg hover:bg-gray-600 transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Blogs List */}
          <div className="bg-[#0A1931] rounded-2xl overflow-hidden border border-gray-800">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-[#101820]">
                  <tr>
                    <th className="px-6 py-4 text-left text-gray-300 font-semibold">Image</th>
                    <th className="px-6 py-4 text-left text-gray-300 font-semibold">Title</th>
                    <th className="px-6 py-4 text-left text-gray-300 font-semibold">Tag</th>
                    <th className="px-6 py-4 text-left text-gray-300 font-semibold">Date</th>
                    <th className="px-6 py-4 text-left text-gray-300 font-semibold">Status</th>
                    <th className="px-6 py-4 text-left text-gray-300 font-semibold">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {loading && blogs.length === 0 ? (
                    <tr>
                      <td colSpan="6" className="px-6 py-12 text-center text-gray-400">
                        Loading blogs...
                      </td>
                    </tr>
                  ) : blogs.length === 0 ? (
                    <tr>
                      <td colSpan="6" className="px-6 py-12 text-center text-gray-400">
                        No blogs found. Create your first blog!
                      </td>
                    </tr>
                  ) : (
                    blogs.map((blog) => (
                      <tr key={blog.id} className="border-t border-gray-800 hover:bg-[#101820] transition-colors">
                        <td className="px-6 py-4">
                          <img src={blog.image_url} alt={blog.title} className="w-20 h-20 object-cover rounded-lg" />
                        </td>
                        <td className="px-6 py-4">
                          <div className="text-white font-medium max-w-md truncate">{blog.title}</div>
                        </td>
                        <td className="px-6 py-4">
                          <span className="px-3 py-1 bg-teal-500/20 text-teal-300 rounded-full text-sm">
                            {blog.tag}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-gray-400">{blog.date}</td>
                        <td className="px-6 py-4">
                          <div className="flex gap-2">
                            {blog.is_main_featured && (
                              <span className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded text-xs">Main</span>
                            )}
                            {blog.is_featured && (
                              <span className="px-2 py-1 bg-pink-500/20 text-pink-300 rounded text-xs">Featured</span>
                            )}
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex gap-2">
                            <button 
                              onClick={() => handleEdit(blog)} 
                              className="p-2 text-blue-400 hover:bg-blue-500/20 rounded-lg transition-colors"
                            >
                              <Edit2 className="w-5 h-5" />
                            </button>
                            <button 
                              onClick={() => handleDelete(blog.id)} 
                              className="p-2 text-red-400 hover:bg-red-500/20 rounded-lg transition-colors"
                            >
                              <Trash2 className="w-5 h-5" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;