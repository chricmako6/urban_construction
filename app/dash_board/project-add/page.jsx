"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import imageCompression from "browser-image-compression";
import { FaPlus } from "react-icons/fa";
import { useRouter } from "next/navigation";

const API = "http://localhost:4000/api/projects"; 

function pageAddProject() {
  const router = useRouter();
  const [images, setImages] = useState([]);
  const [imageFiles, setImageFiles] = useState([]);

  const [form, setForm] = useState({
    name: "",
    image: "",
    category: "",
    solution:"",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.solution || !form.image) {
      setError("Project name, solution, and image are required");
      return;
    }

    setLoading(true);
    setSuccess("");
    setError("");

    try {
      const formData = new FormData();

      // append text fields
      Object.keys(form).forEach((key) => {
        formData.append(key, form[key]);
      });

      // append images
      imageFiles.forEach((file) => {
        formData.append("images", file); // backend should expect "images"
      });

      const res = await axios.post(
        `${API}/add`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        },
      );

      console.log(res.data);

      setSuccess("Project added successfully");

      // reset
      setForm({
        name: "",
        image: "",
        category: "",
        solution: "",
      });

      setImages([]);
      setImageFiles([]);

      setTimeout(() => {
        router.push("/dash_board/projects");
      }, 1000);
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleImageUpload = async (e) => {
    const files = Array.from(e.target.files);

    try {
      const compressedFiles = await Promise.all(
        files.map(async (file) => {
          return await imageCompression(file, {
            maxSizeMB: 0.5,
            maxWidthOrHeight: 800,
            useWebWorker: true,
          });
        }),
      );

      // store REAL files for backend
      setImageFiles((prev) => [...prev, ...compressedFiles]);

      // preview (same UI as before)
      const previewUrls = compressedFiles.map((file) =>
        URL.createObjectURL(file),
      );

      setImages((prev) => [...prev, ...previewUrls]);
    } catch (error) {
      console.error("Image compression error:", error);
    }
  };

  const handleRemoveImage = (index) => {
    setImages((prev) => prev.filter((_, i) => i !== index));
    setImageFiles((prev) => prev.filter((_, i) => i !== index));
  };

   if (loading)
    return (
      <div className="flex flex-col items-center justify-center min-h-screen gap-4">
        <div className="relative">
          <div className="w-16 h-16 border-4 border-[#ffd061]/30 rounded-full"></div>
          <div className="w-16 h-16 border-4 border-[#ffd061] border-t-transparent rounded-full animate-spin absolute top-0 left-0"></div>
        </div>
        <p className="text-sm tracking-wide font-bold">Loading...</p>
      </div>
    );

  return (
    <div className="p-6">
      {/* HEADER */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Add New Project</h1>
        <p className="text-gray-500 text-sm">
          Fill in the details below to add a new project
        </p>
      </div>

      {/* FORM */}
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-xl shadow-sm p-6 grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {success && <p className="text-green-600 mb-4">{success}</p>}
        {error && <p className="text-red-600 mb-4">{error}</p>}

        {/* IMAGE */}
        <div className="flex flex-col gap-2 md:col-span-2">
          <label className="font-medium">Upload Images <span className="text-red-500 text-sm">(Before & After)*</span> </label>

          <label className="ml-3 cursor-pointer bg-[#ffd061] w-12 h-12 rounded-full flex items-center justify-center hover:bg-[#f5c84a] hover:rotate-90 transition-all duration-300 shadow-md border-2 border-[#ffd061]">
            <FaPlus className="text-black text-sm" />
            <input
              type="file"
              multiple
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
            />
          </label>

          {/* PREVIEW GALLERY */}
          <div className="flex flex-wrap gap-3 mt-3">
            {images.map((img, index) => (
              <div key={index} className="relative group">
                <img
                  src={img}
                  alt="preview"
                  className="w-55 h-70 object-cover rounded-lg border"
                />

                {/* DELETE BUTTON */}
                <button
                  type="button"
                  onClick={() => handleRemoveImage(index)}
                  className="absolute cursor-pointer top-1 right-1 bg-black/60 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* PRODUCT NAME */}
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium">Project Title <span className="text-red-500">*</span></label>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Enter project title..."
            className="border p-3 rounded-xl outline-none focus:ring-1 focus:ring-[#ffd061]"
          />
        </div>

        {/* CATEGORY */}
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium">Category<span className="text-red-500">*</span></label>
          <input
            name="category"
            value={form.category}
            onChange={handleChange}
            placeholder="e.g. Apartment, House"
            className="border p-3 rounded-xl outline-none focus:ring-1 focus:ring-[#ffd061]"
          />
        </div>


        {/* SOLUTION */}
        <div className="flex flex-col gap-1 md:col-span-2">
          <label className="text-sm font-medium">Solution <span className="text-red-500">*</span></label>
          <textarea
            name="solution"
            value={form.solution}
            onChange={handleChange}
            rows={4}
            placeholder="Enter solution..."
            className="border h-40 p-3 rounded-xl outline-none focus:ring-1 focus:ring-[#ffd061]"
          />
        </div>

        {/* BUTTON */}
        <div className="md:col-span-2 flex justify-end mt-4">
          <button
            type="submit"
            disabled={loading}
            className="cursor-pointer bg-[#ffd061] hover:bg-[#f5c84a] px-6 py-3 rounded-xl font-semibold shadow-sm transition disabled:opacity-50"
          >
            {loading ? "Saving..." : "Save Project"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default pageAddProject;
