"use client";
import { useSelector } from "react-redux";
import { useGetAboutPageQuery } from "../_services/binhindApi";
import { extractSectionText } from "../_utils/helper";

function RenderAboutPage() {
  const { lang } = useSelector((state) => state.language);

  const { data } = useGetAboutPageQuery(lang);

  // Extract header and intro text
  const { sectionHeaderText, sectionIntroText } = extractSectionText(data);

  return (
    <div className="max-w-7xl mx-auto">
      <h2>{sectionHeaderText}</h2>
      <p>{sectionIntroText}</p>
    </div>
  );
}

export default RenderAboutPage;
