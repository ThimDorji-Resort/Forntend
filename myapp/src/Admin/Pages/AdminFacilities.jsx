import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Plus, Edit3, Trash2, Search } from "lucide-react";
import Swal from "sweetalert2";

const AdminFacilities = () => {
  // Demo data – replace with API data later
  const [facilities, setFacilities] = useState([
    {
      id: "f1",
      category: "LOFT",
      title: "The Loft",
      description:
        "The Loft is located on the top floor of the right guestroom wing. It is a column-free open space perfect for private events and quiet reading.",
    },
    {
      id: "f2",
      category: "RESTAURANT",
      title: "Riverside Restaurant",
      description:
        "All-day dining with river views, seasonal produce, and a cozy ambience. Breakfast, lunch, and dinner available.",
    },
    {
      id: "f3",
      category: "LOUNGE",
      title: "Sky Lounge",
      description:
        "An elegant rooftop lounge for evening cocktails and panoramic views of the river.",
    },
  ]);

  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    if (!query.trim()) return facilities;
    const q = query.toLowerCase();
    return facilities.filter(
      (f) =>
        f.title.toLowerCase().includes(q) ||
        f.category.toLowerCase().includes(q) ||
        f.description.toLowerCase().includes(q)
    );
  }, [facilities, query]);

  const confirmDelete = (id) => {
    const item = facilities.find((f) => f.id === id);
    Swal.fire({
      title: "Delete facility?",
      html: `<p style="font-size:14px">You are about to delete <b>${item?.title}</b>.</p>`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#006600",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete",
    }).then((res) => {
      if (res.isConfirmed) {
        setFacilities((prev) => prev.filter((f) => f.id !== id));
        Swal.fire({
          title: "Deleted",
          text: "Facility removed successfully.",
          icon: "success",
          confirmButtonColor: "#006600",
        });
      }
    });
  };

  return (
    <main
      className="px-6 md:px-10 lg:px-12 py-8 font-inter bg-white text-black min-h-screen"
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      {/* Top Bar */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <h1 className="text-2xl font-semibold tracking-tight">Facilities</h1>
          <span className="text-xs md:text-sm px-2 py-1 rounded-full bg-gray-100">
          
          </span>
        </div>

        <Link
          to="/admin/facilities/new"
          className="inline-flex items-center gap-2 rounded-md px-4 h-10 text-sm font-semibold text-white shadow-md hover:shadow-lg transition"
          style={{ backgroundColor: "#006600" }}
        >
          <Plus size={18} />
          ADD SERVICE
        </Link>
      </div>

      {/* Search Bar */}
      <div className="relative w-full max-w-md mb-8">
        <Search
          size={18}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
        />                      
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search facilities by title, category, or description…"
          className="w-full pl-9 pr-3 h-11 rounded-lg border border-gray-300 focus:border-[#006600] focus:ring-2 focus:ring-[#006600]/40 outline-none transition-all"
        />
      </div>

      {/* Table */}
      <div className="overflow-x-auto bg-white rounded-xl shadow border border-gray-200">
        <table className="w-full text-sm">
          <thead
            style={{ backgroundColor: "#006600" }}
            className="text-white uppercase tracking-wide"
          >
            <tr>
             
              <th className="py-3 px-3 text-left font-medium">Title</th>
              <th className="py-3 px-3 text-left font-medium">Description</th>
              <th className="py-3 px-5 text-right font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filtered.length === 0 && (
              <tr>
                <td
                  colSpan={4}
                  className="py-8 text-center text-gray-500 italic"
                >
                  No facilities found.
                </td>
              </tr>
            )}

            {filtered.map((f, i) => (
              <tr
                key={f.id}  
                className={`${
                  i % 2 === 0 ? "bg-gray-50" : "bg-white"
                } hover:bg-[#e8f5e9] transition-colors border-t border-gray-200`}
              >
                
                <td className="py-4 px-3 align-top font-semibold">
                  {f.title}
                </td>
                <td className="py-4 px-3 align-top text-gray-700 leading-6 max-w-3xl">
                  {f.description}
                </td>
                <td className="py-4 px-5 align-top text-right">
                  <div className="flex justify-end gap-4">
                    <Link
                      to={`/admin/facilities/edit/${f.id}`}
                      state={{ facility: f }}
                      className="inline-flex items-center gap-1 text-[#006600] font-medium hover:underline"
                    >
                      <Edit3 size={16} />
                      Edit
                    </Link>
                    <button
                      onClick={() => confirmDelete(f.id)}
                      className="inline-flex items-center gap-1 text-red-600 font-medium hover:underline"
                    >
                      <Trash2 size={16} />
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
};

export default AdminFacilities;
