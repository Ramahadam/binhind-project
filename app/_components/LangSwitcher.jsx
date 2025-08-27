"use client";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLanguage } from "../features/languageSlice";

function LangSwitcher() {
  const dispatch = useDispatch();
  const lang = useSelector((state) => state.language.lang);
  const langRef = useRef(null);
  const [langOpen, setLangOpen] = useState(false);

  useEffect(() => {
    function handleOutsideClick(e) {
      if (langRef.current && !langRef.current.contains(e.target)) {
        setLangOpen(() => false);
      }
    }

    document.addEventListener("mousemove", handleOutsideClick);

    return () => document.removeEventListener("mousemove", handleOutsideClick);
  });

  function handleClick(e) {}

  return (
    <div className="relative z-50 " ref={langRef}>
      <button
        onClick={() => setLangOpen(!langOpen)}
        className="px-4 py-2 border rounded-md   flex items-center justify-between "
      >
        EN <ChevronDownIcon className="ml-1 h-4 w-4" />
      </button>
      {langOpen && (
        <div className="absolute w-full bg-white rounded-md overflow-auto ">
          <button
            onClick={() => dispatch(setLanguage("en"))}
            disabled={lang === "eng"}
            className="block px-4 py-2 hover:bg-lightGray w-full text-left cursor-pointer"
          >
            EN
          </button>
          <button
            disabled={lang === "ar"}
            onClick={() => dispatch(setLanguage("ar-SA"))}
            className="block px-4 py-2 hover:bg-lightGray w-full text-left cursor-pointer"
          >
            AR
          </button>
        </div>
      )}
    </div>
  );
}

export default LangSwitcher;
