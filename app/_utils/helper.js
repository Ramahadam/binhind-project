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

/**
 * getPageNumbers Algorithm
 * Source: https://gist.github.com/kottenator/9d936eb3e4e3c3e02598
 * Author: kottenator
 */

export function getPageNumbers(currentPage, pageCount) {
  let delta = 2,
    left = currentPage - delta,
    right = currentPage + delta + 1,
    range = [],
    rangeWithDots = [],
    l;

  for (let i = 1; i <= pageCount; i++) {
    if (i == 1 || i == pageCount || (i >= left && i < right)) {
      range.push(i);
    }
  }

  for (let i of range) {
    if (l) {
      if (i - l === 2) {
        rangeWithDots.push(l + 1);
      } else if (i - l !== 1) {
        rangeWithDots.push("...");
      }
    }
    rangeWithDots.push(i);
    l = i;
  }

  return rangeWithDots;
}
