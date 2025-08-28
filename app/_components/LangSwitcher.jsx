"use client";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLanguage } from "../features/languageSlice";
import Button from "./Button";

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

  return (
    <div className="relative z-50 " ref={langRef}>
      <Button
        onClick={() => setLangOpen(!langOpen)}
        icon={<ChevronDownIcon className="h-4 w-4" />}
        iconPosition={lang === "en" ? "right" : "left"}
        className="btn-lang px-4 py-2 border rounded-md flex !items-center gap-2 !justify-between border-MeduimGray"
      >
        {lang}
      </Button>
      {langOpen && (
        <div className="absolute w-full bg-white rounded-md overflow-auto ">
          <Button
            variant="secondary"
            size="sm"
            fullWidth
            onClick={() => dispatch(setLanguage("en"))}
            disabled={lang === "eng"}
            className="border-0"
          >
            EN
          </Button>

          <Button
            variant="secondary"
            size="sm"
            fullWidth
            onClick={() => dispatch(setLanguage("ar-SA"))}
            disabled={lang === "ar"}
            className="border-0"
          >
            AR
          </Button>
        </div>
      )}
    </div>
  );
}

export default LangSwitcher;
