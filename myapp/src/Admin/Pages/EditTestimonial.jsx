// src/Admin/Pages/EditTestimonial.jsx
import React, { useEffect, useRef, useState, useMemo } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const GREEN = "#006600";

// Dummy data fallback if user loads page directly
const MOCK_TESTIMONIALS = [
  {
    id: "t1",
    name: "PEMA WANGMO",
    stayed: "Stayed July 2025",
    text:
      "Our stay was wonderful. The serene environment, excellent service, and delicious food made our trip memorable. Highly recommend the resort to anyone visiting Paro.",
    photo:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "t2",
    name: "PEMA WANGMO",
    stayed: "Stayed July 2025",
    text:
      "Our stay was wonderful. The serene environment, excellent service, and delicious food made our trip memorable. Highly recommend the resort to anyone visiting Paro.",
    photo:
      "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=800&auto=format&fit=crop",
  },
];

const EditTestimonial = () => {
  const { id } = useParams();
  const { state } = useLocation(); // { testimonial }
  const navigate = useNavigate();
  const fileRef = useRef(null);

  // Build initial testimonial from state or mock
  const initial = useMemo(() => {
    if (state?.testimonial) return state.testimonial;
    return (
      MOCK_TESTIMONIALS.find((t) => t.id === id) || {
        id,
        name: "",
        stayed: "",
        text: "",
        photo: "",
      }
    );
  }, [id, state]);

  const [form, setForm] = useState({ name: "", stay: "", text: "" });
  const [errors, setErrors] = useState({});
  // image: { file?, url } | null
  const [image, setImage] = useState(null);

  // hydrate on mount
  useEffect(() => {
    setForm({
      name: initial.name || "",
      stay: initial.stayed?.replace(/^Stayed\s+/i, "") || "", // keep only "July 2025"
      text: initial.text || "",
    });
    if (initial.photo) setImage({ url: initial.photo }); // existing image (no file)
  }, [initial]);

  const setField = (k, v) => {
    setForm((f) => ({ ...f, [k]: v }));
    setErrors((e) => ({ ...e, [k]: "" }));
  };

  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = "Name is required.";
    if (!form.stay.trim()) next.stay = "Stay is required.";
    if (!form.text.trim()) next.text = "Testimonial is required.";
    if (!image?.url) next.image = "Please add an image.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const openPicker = () => fileRef.current?.click();
  const onImageChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (image?.file == null && image?.url && image.url.startsWith("blob:")) {
      URL.revokeObjectURL(image.url);
    }
    setImage({ file, url: URL.createObjectURL(file) });
    setErrors((e2) => ({ ...e2, image: "" }));
  };
  const removeImage = () => {
    if (image?.url && image.url.startsWith("blob:")) URL.revokeObjectURL(image.url);
    setImage(null);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) {
      const first = document.querySelector("[data-error='true']");
      first?.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }

    // Example payload
    // const fd = new FormData();
    // fd.append("id", id);
    // fd.append("name", form.name);
    // fd.append("stayed", `Stayed ${form.stay}`);
    // fd.append("text", form.text);
    // if (image?.file) fd.append("image", image.file);
    // else fd.append("existingImageUrl", image?.url || "");

    await Swal.fire({
      title: "Saved",
      text: "Testimonial has been updated.",
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
        <h1 className="text-2xl font-semibold tracking-tight">EDIT TESTIMONIAL</h1>
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
            placeholder="Guest name"
            className={[
              "w-full h-11 px-3 bg-white text-black border outline-none rounded-none",
              errors.name ? "border-red-600" : "border-gray-300 focus:border-[color:var(--green)]",
            ].join(" ")}
            style={{ "--green": GREEN }}
          />
          {errors.name && <p className="mt-2 text-sm text-red-600">{errors.name}</p>}
        </div>

        {/* Stay */}
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium">Stay</label>
          <input
            data-error={!!errors.stay}
            value={form.stay}
            onChange={(e) => setField("stay", e.target.value)}
            placeholder="July 2025"
            className={[
              "w-full h-11 px-3 bg-white text-black border outline-none rounded-none",
              errors.stay ? "border-red-600" : "border-gray-300 focus:border-[color:var(--green)]",
            ].join(" ")}
            style={{ "--green": GREEN }}
          />
          {errors.stay && <p className="mt-2 text-sm text-red-600">{errors.stay}</p>}
        </div>

        {/* Testimonial */}
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium">Testimonial</label>
          <textarea
            data-error={!!errors.text}
            value={form.text}
            onChange={(e) => setField("text", e.target.value)}
            rows={5}
            placeholder="Write the testimonial…"
            className={[
              "w-full px-3 py-3 bg-white text-black border outline-none resize-y rounded-none",
              errors.text ? "border-red-600" : "border-gray-300 focus:border-[color:var(--green)]",
            ].join(" ")}
            style={{ "--green": GREEN }}
          />
          {errors.text && <p className="mt-2 text-sm text-red-600">{errors.text}</p>}
        </div>

        {/* Image */}
        <div className="mb-10" data-error={!!errors.image}>
          <label className="block mb-2 text-sm font-medium">Image</label>

          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={openPicker}
              className={[
                "px-4 h-10 inline-flex items-center justify-center text-sm font-medium border rounded-none hover:bg-gray-100",
                errors.image ? "border-red-600" : "border-gray-300",
              ].join(" ")}
            >
              {image ? "Replace" : "Upload"}
            </button>

            {image?.url && (
              <div className="w-28 h-28 border border-gray-300 overflow-hidden">
                <img src={image.url} alt="preview" className="w-full h-full object-cover" />
              </div>
            )}

            {image && (
              <button
                type="button"
                onClick={removeImage}
                className="px-3 h-10 inline-flex items-center justify-center text-sm font-medium border border-gray-300 rounded-none hover:bg-gray-100"
              >
                Remove
              </button>
            )}
          </div>

          <input
            ref={fileRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={onImageChange}
          />

          {errors.image && <p className="mt-2 text-sm text-red-600">{errors.image}</p>}
        </div>

        {/* Actions */}
        <div className="flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={() => navigate("/admin/testimonials")}
            className="w-40 h-12 border border-gray-400 text-black font-medium rounded-none hover:bg-gray-100"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="w-48 h-12 text-white font-semibold rounded-none"
            style={{ backgroundColor: GREEN }}
          >
            Save Changes
          </button>
        </div>
      </form>
    </main>
  );
};

export default EditTestimonial;
