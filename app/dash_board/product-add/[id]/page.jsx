"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { FaPlus } from "react-icons/fa";
import imageCompression from "browser-image-compression";
import { useParams, useRouter } from "next/navigation";

const API = "https://jenganasisi-backend.vercel.app/api/products";
// const API = "http://localhost:4000/api/products";

export default function EditProduct() {
  const { id } = useParams();
  const router = useRouter();
  const [images, setImages] = useState([]);
  const [imageFiles, setImageFiles] = useState([]);

  const [form, setForm] = useState({
    name: "",
    image: "",
    category: "",
    stock: "",
    price: "",
    description: "",
    floor: "",
    bedrooms: "",
    bathrooms: "",
    length: "",
    width: "",
    area: "",
  });

  const [loading, setLoading] = useState(true);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  // FETCH SINGLE PRODUCT
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`${API}/${id}`);
        const data = res.data;

        // Load ALL fields
        setForm({
          name: data.name || "",
          image: data.image || "",
          category: data.category || "",
          stock: data.stock || "",
          price: data.price || "",
          description: data.description || "",
          floor: data.floor || "",
          bedrooms: data.bedrooms || "",
          bathrooms: data.bathrooms || "",
          length: data.length || "",
          width: data.width || "",
          area: data.area || "",
        });

        // Load existing images
        if (data.images && Array.isArray(data.images)) {
          setImages(data.images);
        } else if (data.image) {
          setImages([data.image]);
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchProduct();
  }, [id]);

  // HANDLE CHANGE
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // UPDATE PRODUCT
  const handleSubmit = async (e) => {
    e.preventDefault();

    // if (!form.name || !form.price || !form.stock) {
    //   setError("Product name, price, and stock are required");
    //   return;
    // }

    setLoading(true);
    setSuccess("");
    setError("");

    try {
      const formData = new FormData();

      // Object.keys(form).forEach((key) => {
      //   formData.append(key, form[key]);
      // });    // append text fields
  
      Object.keys(form).forEach((key) => {
      if (form[key] !== "" && form[key] !== null) {
        formData.append(key, form[key]);
      }
    });

      // append new images
      imageFiles.forEach((file) => {
        formData.append("images", file);
      });

      // keep old images if no new uploaded
      if (imageFiles.length === 0) {
        formData.append("image", JSON.stringify(images));
      }

      await axios.put(
        `${API}/update/${id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      alert("Product updated successfully!");

      router.push("/dash_board/products");
    } catch (err) {
      console.error(err);
      alert("Update failed");
    } finally {
      setLoading(false);
    }
  };

  const handleRemoveImage = (index) => {
    setImages((prev) => prev.filter((_, i) => i !== index));
    setImageFiles((prev) => prev.filter((_, i) => i !== index));
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
        })
      );

      setImageFiles((prev) => [...prev, ...compressedFiles]);

      const previewUrls = compressedFiles.map((file) =>
        URL.createObjectURL(file)
      );

      setImages((prev) => [...prev, ...previewUrls]);
    } catch (error) {
      console.error("Image compression error:", error);
    }
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
        <h1 className="text-2xl font-bold">Edit Product</h1>
        <p className="text-gray-500 text-sm">
          Update the product details below
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
          <label className="font-medium">Upload Images</label>

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

          <div className="flex flex-wrap gap-3 mt-3">
            {images.map((img, index) => (
              <div key={index} className="relative group">
                <img
                  src={img}
                  alt="preview"
                  className="w-55 h-70 object-cover rounded-lg border"
                />

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
          <label className="text-sm font-medium">Product Name</label>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Enter product name"
            className="border p-3 rounded-xl outline-none focus:ring-1 focus:ring-[#ffd061]"
          />
        </div>

        {/* CATEGORY */}
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium">Category</label>
          <input
            name="category"
            value={form.category}
            onChange={handleChange}
            placeholder="e.g. Apartment, House"
            className="border p-3 rounded-xl outline-none focus:ring-1 focus:ring-[#ffd061]"
          />
        </div>

        {/* PRICE */}
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium">Price (Tshs)</label>
          <input
            name="price"
            value={form.price}
            onChange={handleChange}
            type="number"
            placeholder="Enter price"
            className="border p-3 rounded-xl outline-none focus:ring-1 focus:ring-[#ffd061]"
          />
        </div>

        {/* STOCK */}
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium">Stock</label>
          <input
            name="stock"
            value={form.stock}
            onChange={handleChange}
            type="number"
            placeholder="Available units"
            className="border p-3 rounded-xl outline-none focus:ring-1 focus:ring-[#ffd061]"
          />
        </div>

        {/* DESCRIPTION */}
        <div className="flex flex-col gap-1 md:col-span-2">
          <label className="text-sm font-medium">Description</label>
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            rows={4}
            placeholder="Enter description..."
            className="border h-40 p-3 rounded-xl outline-none focus:ring-1 focus:ring-[#ffd061]"
          />
        </div>

        {/* FLOOR */}
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium">Floor</label>
          <input
            name="floor"
            value={form.floor}
            onChange={handleChange}
            className="border p-3 rounded-xl outline-none focus:ring-1 focus:ring-[#ffd061]"
          />
        </div>

        {/* BEDROOMS */}
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium">Bedrooms</label>
          <input
            name="bedrooms"
            value={form.bedrooms}
            onChange={handleChange}
            type="number"
            className="border p-3 rounded-xl outline-none focus:ring-1 focus:ring-[#ffd061]"
          />
        </div>

        {/* BATHROOMS */}
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium">Bathrooms</label>
          <input
            name="bathrooms"
            value={form.bathrooms}
            onChange={handleChange}
            type="number"
            className="border p-3 rounded-xl outline-none focus:ring-1 focus:ring-[#ffd061]"
          />
        </div>

        {/* LENGTH */}
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium">Length (m)</label>
          <input
            name="length"
            value={form.length}
            onChange={handleChange}
            type="number"
            className="border p-3 rounded-xl outline-none focus:ring-1 focus:ring-[#ffd061]"
          />
        </div>

        {/* WIDTH */}
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium">Width (m)</label>
          <input
            name="width"
            value={form.width}
            onChange={handleChange}
            type="number"
            className="border p-3 rounded-xl outline-none focus:ring-1 focus:ring-[#ffd061]"
          />
        </div>

        {/* AREA */}
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium">Area (sqm)</label>
          <input
            name="area"
            value={form.area}
            onChange={handleChange}
            type="number"
            className="border p-3 rounded-xl outline-none focus:ring-1 focus:ring-[#ffd061]"
          />
        </div>

        {/* BUTTON */}
        <div className="md:col-span-2 flex justify-end mt-4">
          <button
            type="submit"
            disabled={loading}
            className="cursor-pointer bg-[#ffd061] hover:bg-[#f5c84a] px-6 py-3 rounded-xl font-semibold shadow-sm transition disabled:opacity-50"
          >
            {loading ? "Saving..." : "Save Product"}
          </button>
        </div>
      </form>
    </div>
  );
}
