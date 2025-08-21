"use client";

import { useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export default function SearchInput() {
  const [open, setOpen] = useState(false);

  return (
    <div className={`relative flex items-center `}>
      {/* Search icon */}

      {/* Expanding search input */}
      <div
        className={`${
          open ? "bg-white" : "bg-primary"
        } flex items-center rounded-md overflow-hidden`}
      >
        <MagnifyingGlassIcon
          className={`h-5 w-5 ${open ? "text-primary" : "text-white"}`}
          onClick={() => setOpen(!open)}
        />
        <input
          type="text"
          placeholder="Search..."
          className={`px-4 py-1  border-gray-300 transition-all duration-300 focus:outline-none ${
            open
              ? "opacity-100 w-40 sm:w-56"
              : "opacity-0 w-0 px-0 py-0 border-0"
          }`}
        />
      </div>
    </div>
  );
}
