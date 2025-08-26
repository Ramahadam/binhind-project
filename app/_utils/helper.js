// Helper to extract text from Strapi rich text blocks
export const extractSectionText = (data) => {
  const sectionHeaderText = data?.data?.section_header;

  const sectionIntroText =
    data?.data?.section_intro
      ?.map((block) => block.children.map((c) => c.text).join(""))
      .join("\n") || "";

  return { sectionHeaderText, sectionIntroText };
};

// export function extractHeaderFromStrapi(data) {
//   return data?.data.client_section_header;
// }

export function constructImageUrl(imageName) {
  return `${process.env.NEXT_PUBLIC_DEV_HOST}:${process.env.NEXT_PUBLIC_PORT}${imageName}`;
}
