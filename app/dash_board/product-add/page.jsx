"use client";

import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";

function pageAddProduct() {
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

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <div className="p-6">
      {/* HEADER */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Add New Product</h1>
        <p className="text-gray-500 text-sm">
          Fill in the details below to add a new product
        </p>
      </div>

      {/* FORM */}
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-xl shadow-sm p-6 grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {/* IMAGE */}
        <div className="flex flex-col gap-1 md:col-span-2">
          <label className="font-medium">Upload Image</label>
          <div className="ml-3 cursor-pointer bg-[#ffd061] w-12 h-12 rounded-full flex items-center justify-center hover:bg-[#f5c84a] hover:rotate-90 transition-all duration-300 shadow-md border-2 border-[#ffd061]">
            <FaPlus className="text-black text-sm" />
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
            className="border p-3 rounded-md outline-none focus:ring-1 focus:ring-[#ffd061]"
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
            className="border p-3 rounded-md outline-none focus:ring-1 focus:ring-[#ffd061]"
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
            className="border p-3 rounded-md outline-none focus:ring-1 focus:ring-[#ffd061]"
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
            className="border p-3 rounded-md outline-none focus:ring-1 focus:ring-[#ffd061]"
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
            className="border h-40 p-3 rounded-md outline-none focus:ring-1 focus:ring-[#ffd061]"
          />
        </div>

        {/* FLOOR */}
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium">Floor</label>
          <input
            name="floor"
            value={form.floor}
            onChange={handleChange}
            placeholder="e.g. 2nd Floor"
            className="border p-3 rounded-md outline-none focus:ring-1 focus:ring-[#ffd061]"
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
            placeholder="Number of bedrooms"
            className="border p-3 rounded-md outline-none focus:ring-1 focus:ring-[#ffd061]"
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
            placeholder="Number of bathrooms"
            className="border p-3 rounded-md outline-none focus:ring-1 focus:ring-[#ffd061]"
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
            placeholder="e.g. 20"
            className="border p-3 rounded-md outline-none focus:ring-1 focus:ring-[#ffd061]"
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
            placeholder="e.g. 15"
            className="border p-3 rounded-md outline-none focus:ring-1 focus:ring-[#ffd061]"
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
            placeholder="Auto or manual"
            className="border p-3 rounded-md outline-none focus:ring-1 focus:ring-[#ffd061]"
          />
        </div>

        {/* SUBMIT BUTTON */}
        <div className="md:col-span-2 flex justify-end mt-4">
          <button
            type="submit"
            className="cursor-pointer bg-[#ffd061] hover:bg-[#f5c84a] px-6 py-3 rounded-md font-semibold shadow-sm transition"
          >
            Save Product
          </button>
        </div>
      </form>
    </div>
  );
}

export default pageAddProduct;
