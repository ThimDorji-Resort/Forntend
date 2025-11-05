import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const GREEN = "#006600";

const AddTestimonial = () => {
  const navigate = useNavigate();
  const fileRef = useRef(null);

  const [form, setForm] = useState({
    name: "",
    stay: "",
    text: "",
  });
  const [errors, setErrors] = useState({});
  const [image, setImage] = useState(null); // { file, url } | null

  const setField = (k, v) => {
    setForm((f) => ({ ...f, [k]: v }));
    setErrors((e) => ({ ...e, [k]: "" }));
  };

  const pickImage = () => fileRef.current?.click();
  const onImageChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (image?.url) URL.revokeObjectURL(image.url);
    setImage({ file, url: URL.createObjectURL(file) });
    setErrors((e) => ({ ...e, image: "" }));
  };

  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = "Name is required.";
    if (!form.stay.trim()) next.stay = "Stay is required.";
    if (!form.text.trim()) next.text = "Testimonial is required.";
    if (!image) next.image = "Please upload an image.";
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

    // Example payload (for API submission)
    // const fd = new FormData();
    // fd.append("name", form.name);
    // fd.append("stay", form.stay);
    // fd.append("text", form.text);
    // fd.append("image", image.file);

    await Swal.fire({
      title: "Published",
      text: "New testimonial has been added.",
      icon: "success",
      confirmButtonColor: GREEN,
    });
    navigate("/admin/testimonials");
  };

  return (
    <main
      className="min-h-screen px-6 md:px-10 lg:px-12 py-8 font-inter bg-white text-black"
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-semibold tracking-tight">
          NEW TESTIMONIALS
        </h1>
        <Link
          to="/admin/testimonials"
          className="px-4 h-10 inline-flex items-center justify-center text-sm font-medium border border-gray-400 hover:bg-gray-100 transition rounded-none"
        >
          Back
        </Link>
      </div>

      {/* Form */}
      <form onSubmit={onSubmit} className="max-w-3xl">
        {/* Name */}
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium">Name</label>
          <input
            data-error={!!errors.name}
            value={form.name}
            onChange={(e) => setField("name", e.target.value)}
            placeholder="Enter your name"
            className={[
              "w-full h-11 px-3 bg-white text-black border outline-none rounded-none placeholder-gray-500",
              errors.name
                ? "border-red-600"
                : "border-gray-300 focus:border-[color:var(--green)]",
            ].join(" ")}
            style={{ "--green": GREEN }}
          />
          {errors.name && (
            <p className="mt-2 text-sm text-red-600">{errors.name}</p>
          )}
        </div>

        {/* Stay */}
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium">Stay</label>
          <input
            data-error={!!errors.stay}
            value={form.stay}
            onChange={(e) => setField("stay", e.target.value)}
            placeholder="Enter your stay"
            className={[
              "w-full h-11 px-3 bg-white text-black border outline-none rounded-none placeholder-gray-300",
              errors.stay
                ? "border-red-600"
                : "border-gray-300 focus:border-[color:var(--green)]",
            ].join(" ")}
            style={{ "--green": GREEN }}
          />
          {errors.stay && (
            <p className="mt-2 text-sm text-red-600">{errors.stay}</p>
          )}
        </div>

        {/* Testimonial */}
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium">Testimonial</label>
          <textarea
            data-error={!!errors.text}
            value={form.text}
            onChange={(e) => setField("text", e.target.value)}
            rows={5}
            placeholder="Write your testimonial here..."
            className={[
              "w-full px-3 py-3 bg-white text-black border outline-none resize-y rounded-none placeholder-gray-500",
              errors.text
                ? "border-red-600"
                : "border-gray-300 focus:border-[color:var(--green)]",
            ].join(" ")}
            style={{ "--green": GREEN }}
          />
          {errors.text && (
            <p className="mt-2 text-sm text-red-600">{errors.text}</p>
          )}
        </div>

        {/* Image */}
        <div className="mb-10" data-error={!!errors.image}>
          <label className="block mb-2 text-sm font-medium">Image</label>

          {/* Upload control */}
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={pickImage}
              className={[
                "px-4 h-10 inline-flex items-center justify-center text-sm font-medium border rounded-none transition",
                errors.image
                  ? "border-red-600 hover:bg-red-50"
                  : "border-gray-300 hover:bg-gray-100",
              ].join(" ")}
            >
              Upload
            </button>

            {/* Preview (if any) */}
            {image?.url && (
              <div className="w-28 h-28 border border-gray-300 overflow-hidden">
                <img
                  src={image.url}
                  alt="preview"
                  className="w-full h-full object-cover"
                />
              </div>
            )}
          </div>

          <input
            ref={fileRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={onImageChange}
          />

          {errors.image && (
            <p className="mt-2 text-sm text-red-600">{errors.image}</p>
          )}
        </div>

        {/* Publish */}
        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="w-64 h-12 text-white font-semibold rounded-none hover:opacity-90 transition"
            style={{ backgroundColor: GREEN }}
          >
            Publish
          </button>
        </div>
      </form>
    </main>
  );
};

export default AddTestimonial;
