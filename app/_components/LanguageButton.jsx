"use client";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

function LanguageButton() {
  const [langOpen, setLangOpen] = useState(false);
  return (
    <div className="relative">
      <button
        onClick={() => setLangOpen(!langOpen)}
        className="px-4 py-2 border rounded-md   flex items-center justify-between "
      >
        EN <ChevronDownIcon className="ml-1 h-4 w-4" />
      </button>
      {langOpen && (
        <div className="absolute w-full bg-white rounded-md overflow-auto ">
          <button className="block px-4 py-2 hover:bg-gray-100 w-full text-left">
            EN
          </button>
          <button className="block px-4 py-2 hover:bg-gray-100 w-full text-left">
            AR
          </button>
        </div>
      )}
    </div>
  );
}

export default LanguageButton;
