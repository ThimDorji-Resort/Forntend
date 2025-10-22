// src/Admin/Pages/AdminTestimonials.jsx
import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const GREEN = "#006600";

const AdminTestimonials = () => {
  const [items, setItems] = useState([
    {
      id: "t1",
      name: "PEMA WANGMO",
      stayed: "Stayed July 2025",
      text:
        "Our stay was wonderful. The serene environment, excellent service, and delicious food made our trip memorable. Highly recommend the resort to anyone visiting Paro.",
      photo:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=800&auto=format&fit=crop",
      status: "published",
    },
    {
      id: "t2",
      name: "PEMA WANGMO",
      stayed: "Stayed July 2025",
      text:
        "Our stay was wonderful. The serene environment, excellent service, and delicious food made our trip memorable. Highly recommend the resort to anyone visiting Paro.",
      photo:
        "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=800&auto=format&fit=crop",
      status: "published",
    },
    {
      id: "t3",
      name: "PEMA WANGMO",
      stayed: "Stayed July 2025",
      text:
        "Our stay was wonderful. The serene environment, excellent service, and delicious food made our trip memorable. Highly recommend the resort to anyone visiting Paro.",
      photo:
        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=800&auto=format&fit=crop",
      status: "published",
    },
    {
      id: "t4",
      name: "PEMA WANGMO",
      stayed: "Stayed July 2025",
      text:
        "Our stay was wonderful. The serene environment, excellent service, and delicious food made our trip memorable. Highly recommend the resort to anyone visiting Paro.",
      photo:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop",
      status: "archived",
    },
  ]);

  const [tab, setTab] = useState("published");

  const filtered = useMemo(
    () => items.filter((t) => t.status === tab),
    [items, tab]
  );

  const archiveItem = (id) => {
    const item = items.find((x) => x.id === id);
    const goingTo = item?.status === "published" ? "archive" : "restore";
    Swal.fire({
      title:
        goingTo === "archive"
          ? "Archive testimonial?"
          : "Restore testimonial?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: GREEN,
      cancelButtonColor: "#d33",
      confirmButtonText:
        goingTo === "archive" ? "Archive" : "Restore",
    }).then((res) => {
      if (res.isConfirmed) {
        setItems((prev) =>
          prev.map((t) =>
            t.id === id
              ? {
                  ...t,
                  status:
                    t.status === "published" ? "archived" : "published",
                }
              : t
          )
        );
        Swal.fire({
          title: "Done",
          text:
            goingTo === "archive"
              ? "Moved to Archived."
              : "Moved to Published.",
          icon: "success",
          confirmButtonColor: GREEN,
        });
      }
    });
  };

  return (
    <main
      className="px-6 md:px-10 lg:px-12 py-6 font-inter bg-white text-black min-h-screen"
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      {/* Top Row */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setTab("published")}
            className={`h-9 px-3 text-sm font-medium border rounded-none ${
              tab === "published"
                ? "text-white"
                : "bg-white text-black"
            }`}
            style={{
              backgroundColor:
                tab === "published" ? GREEN : "transparent",
              borderColor:
                tab === "published" ? GREEN : "#e5e7eb",
            }}
          >
            PUBLISHED
          </button>
          <button
            onClick={() => setTab("archived")}
            className={`h-9 px-3 text-sm font-medium border rounded-none ${
              tab === "archived"
                ? "text-white"
                : "bg-white text-black"
            }`}
            style={{
              backgroundColor:
                tab === "archived" ? GREEN : "transparent",
              borderColor:
                tab === "archived" ? GREEN : "#e5e7eb",
            }}
          >
            ARCHIVED
          </button>
        </div>

        <Link
          to="/admin/testimonials/new"
          className="inline-flex items-center gap-2 rounded-none px-4 h-10 text-sm font-semibold text-white shadow"
          style={{ backgroundColor: GREEN }}
        >
          ADD TESTIMONIALS
        </Link>
      </div>

      {/* Testimonials List */}
      <div className="space-y-5">
        {filtered.map((t) => (
          <article
            key={t.id}
            className="border border-gray-200 bg-white rounded-none p-4 md:p-5"
          >
            <div className="flex items-start gap-4 md:gap-5">
              {/* Photo */}
              <div className="w-28 h-28 bg-gray-100 overflow-hidden flex-shrink-0 border border-gray-200">
                <img
                  src={t.photo}
                  alt={t.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Text Content */}
              <div className="flex-1">
                <h3
                  className="text-sm font-bold uppercase"
                  style={{ color: GREEN }}
                >
                  {t.name}
                </h3>
                <p className="text-sm font-semibold mt-1 text-black">
                  {t.stayed}
                </p>
                <p className="text-sm mt-2 leading-6 text-gray-800">
                  {t.text}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col gap-2 items-end">
                <Link
                  to={`/admin/testimonials/edit/${t.id}`}
                  state={{ testimonial: t }}
                  className="w-24 h-9 inline-flex items-center justify-center text-sm font-semibold text-white rounded-none"
                  style={{ backgroundColor: GREEN }}
                >
                  EDIT
                </Link>
                <button
                  onClick={() => archiveItem(t.id)}
                  className="w-24 h-9 inline-flex items-center justify-center text-sm font-semibold text-white rounded-none"
                  style={{
                    backgroundColor:
                      t.status === "published" ? "#b91c1c" : GREEN,
                  }}
                >
                  {t.status === "published" ? "ARCHIVE" : "RESTORE"}
                </button>
              </div>
            </div>
          </article>
        ))}

        {filtered.length === 0 && (
          <div className="text-sm text-gray-500 italic">
            No testimonials.
          </div>
        )}
      </div>
    </main>
  );
};

export default AdminTestimonials;
