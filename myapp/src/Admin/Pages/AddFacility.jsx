import React, { useMemo, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const THEME_GREEN = "#006600";
const MAX_IMAGES = 6;

const AddFacility = () => {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);

  const [form, setForm] = useState({
    title: "",
    category: "",
    description: "",
  });
  const [errors, setErrors] = useState({});
  const [images, setImages] = useState([]); // [{file, url}]

  const remainingSlots = useMemo(
    () => Math.max(0, MAX_IMAGES - images.length),
    [images.length]
  );

  const setField = (name, value) => {
    setForm((f) => ({ ...f, [name]: value }));
    setErrors((e) => ({ ...e, [name]: "" }));
  };

  const openPicker = () => fileInputRef.current?.click();

  const onPickFiles = (e) => {
    const files = Array.from(e.target.files || []);
    if (!files.length) return;

    const capacity = MAX_IMAGES - images.length;
    const batch = files.slice(0, capacity).map((file) => ({
      file,
      url: URL.createObjectURL(file),
    }));
    setImages((prev) => [...prev, ...batch]);
    e.target.value = "";
  };

  const removeImage = (idx) => {
    setImages((prev) => {
      const copy = [...prev];
      URL.revokeObjectURL(copy[idx].url);
      copy.splice(idx, 1);
      return copy;
    });
  };

  const validate = () => {
    const next = {};
    if (!form.title.trim()) next.title = "Title is required.";
    if (!form.category.trim()) next.category = "Category is required.";
    if (!form.description.trim()) next.description = "Description is required.";
    if (images.length === 0) next.images = "Please add at least one photo.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) {
      const first = document.querySelector("[data-error='true']");
      first?.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }

    await Swal.fire({
      title: "Saved",
      text: "Facility has been created.",
      icon: "success",
      confirmButtonColor: THEME_GREEN,
    });
    navigate("/admin/facilities");
  };

  return (
    <main
      className="min-h-screen px-6 md:px-10 lg:px-12 py-10 font-inter bg-white text-black"
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      {/* Top Bar */}
      <div className="flex items-center justify-between mb-10">
        <div>
          <h1
            className="text-3xl font-semibold tracking-tight"
            style={{ color: THEME_GREEN }}
          >
            Add Facility
          </h1>
          <p className="text-sm text-gray-700 mt-1">
            Create a new facility and upload photos.
          </p>
        </div>
        <Link
          to="/admin/facilities"
          className="px-5 h-10 inline-flex items-center justify-center text-sm font-medium border border-gray-400 hover:bg-gray-100 transition rounded-none text-black"
        >
          Back
        </Link>
      </div>

      {/* Form */}
      <form onSubmit={onSubmit} className="max-w-5xl">
        {/* Title */}
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-black">
            Title
          </label>
          <input
            data-error={!!errors.title}
            value={form.title}
            onChange={(e) => setField("title", e.target.value)}
            placeholder="e.g., The Loft"
            className={[
              "w-full h-11 px-3 bg-[#f5f5f5] text-black border outline-none rounded-none",
              errors.title
                ? "border-red-600"
                : "border-gray-300 focus:border-[color:var(--green)]",
            ].join(" ")}
            style={{ "--green": THEME_GREEN }}
          />
          {errors.title && (
            <p className="mt-2 text-sm text-red-500">{errors.title}</p>
          )}
        </div>

        {/* Category */}
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-black">
            Category
          </label>
          <select
            data-error={!!errors.category}
            value={form.category}
            onChange={(e) => setField("category", e.target.value)}
            className={[
              "w-full h-11 px-3 bg-[#f5f5f5] text-black border outline-none rounded-none",
              errors.category
                ? "border-red-600"
                : "border-gray-300 focus:border-[color:var(--green)]",
            ].join(" ")}
            style={{ "--green": THEME_GREEN }}
          >
            <option value="" disabled>
              Select category
            </option>
            <option value="LOFT">LOFT</option>
            <option value="RESTAURANT">RESTAURANT</option>
            <option value="LOUNGE">LOUNGE</option>
            <option value="GYM">GYM</option>
            <option value="POOL">POOL</option>
            <option value="SPA">SPA</option>
          </select>
          {errors.category && (
            <p className="mt-2 text-sm text-red-500">{errors.category}</p>
          )}
        </div>

        {/* Description */}
        <div className="mb-8">
          <label className="block mb-2 text-sm font-medium text-black">
            Description
          </label>
          <textarea
            data-error={!!errors.description}
            value={form.description}
            onChange={(e) => setField("description", e.target.value)}
            rows={5}
            placeholder="Write a short description…"
            className={[
              "w-full px-3 py-3 bg-[#f5f5f5] text-black border outline-none resize-y rounded-none",
              errors.description
                ? "border-red-600"
                : "border-gray-300 focus:border-[color:var(--green)]",
            ].join(" ")}
            style={{ "--green": THEME_GREEN }}
          />
          {errors.description && (
            <p className="mt-2 text-sm text-red-500">{errors.description}</p>
          )}
        </div>

        {/* Photos */}
        <div className="mb-10" data-error={!!errors.images}>
          <div className="flex items-center justify-between mb-3">
            <label className="block text-sm font-medium text-black">
              Photos
            </label>
            <span className="text-xs text-gray-500">
              {images.length}/{MAX_IMAGES}
            </span>
          </div>

          {/* Selected images */}
          {images.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mb-5">
              {images.map((img, idx) => (
                <div
                  key={idx}
                  className="relative group border border-gray-300 bg-[#f5f5f5] rounded-none h-40 overflow-hidden"
                >
                  <img
                    src={img.url}
                    alt={`facility-${idx}`}
                    className="w-full h-full object-cover"
                  />
                  <button
                    type="button"
                    onClick={() => removeImage(idx)}
                    className="absolute top-2 right-2 px-2 py-1 bg-red-600 text-white text-xs hover:bg-red-700 rounded-none"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
          )}

          {/* Empty slots */}
          {remainingSlots > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
              {Array.from({ length: remainingSlots }).map((_, i) => (
                <button
                  type="button"
                  key={`slot-${i}`}
                  onClick={openPicker}
                  className={[
                    "h-40 border-2 border-dashed flex flex-col items-center justify-center text-gray-500",
                    "hover:border-[color:var(--green)] hover:text-[color:var(--green)] transition rounded-none",
                    errors.images ? "border-red-600" : "border-gray-400",
                  ].join(" ")}
                  style={{ "--green": THEME_GREEN }}
                >
                  <span className="text-3xl leading-none">＋</span>
                  <span className="text-xs mt-2">Add photo</span>
                </button>
              ))}
            </div>
          )}

          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            multiple
            className="hidden"
            onChange={onPickFiles}
          />

          {errors.images && (
            <p className="mt-2 text-sm text-red-500">{errors.images}</p>
          )}
        </div>

        {/* Actions */}
        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="w-64 h-12 text-white font-semibold rounded-none"
            style={{ backgroundColor: THEME_GREEN }}
          >
            Save
          </button>
        </div>
      </form>
    </main>
  );
};

export default AddFacility;
