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

//https://gist.github.com/kottenator/9d936eb3e4e3c3e02598
// Implementation in ES6

export function getPageNumbers(c, m) {
  var current = c, // current =1
    last = m, // pafeCount = 8
    delta = 2,
    left = current - delta, // 1 - 2 = -1
    right = current + delta + 1, // 1+2+1 = 4
    range = [],
    rangeWithDots = [],
    l;

  for (let i = 1; i <= last; i++) {
    if (i == 1 || i == last || (i >= left && i < right)) {
      range.push(i);
    }
  }
  // range 1,2,3,8
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

/* 
Test it:
for (let i = 1, l = 20; i <= l; i++)
    console.log(`Selected page ${i}:`, pagination(i, l));
Expected output:
Selected page 1: [1, 2, 3, "...", 20]
Selected page 2: [1, 2, 3, 4, "...", 20]
Selected page 3: [1, 2, 3, 4, 5, "...", 20]
Selected page 4: [1, 2, 3, 4, 5, 6, "...", 20]
Selected page 5: [1, 2, 3, 4, 5, 6, 7, "...", 20]
Selected page 6: [1, "...", 4, 5, 6, 7, 8, "...", 20]
Selected page 7: [1, "...", 5, 6, 7, 8, 9, "...", 20]
Selected page 8: [1, "...", 6, 7, 8, 9, 10, "...", 20]
Selected page 9: [1, "...", 7, 8, 9, 10, 11, "...", 20]
Selected page 10: [1, "...", 8, 9, 10, 11, 12, "...", 20]
Selected page 11: [1, "...", 9, 10, 11, 12, 13, "...", 20]
Selected page 12: [1, "...", 10, 11, 12, 13, 14, "...", 20]
Selected page 13: [1, "...", 11, 12, 13, 14, 15, "...", 20]
Selected page 14: [1, "...", 12, 13, 14, 15, 16, "...", 20]
Selected page 15: [1, "...", 13, 14, 15, 16, 17, "...", 20]
Selected page 16: [1, "...", 14, 15, 16, 17, 18, 19, 20]
Selected page 17: [1, "...", 15, 16, 17, 18, 19, 20]
Selected page 18: [1, "...", 16, 17, 18, 19, 20]
Selected page 19: [1, "...", 17, 18, 19, 20]
Selected page 20: [1, "...", 18, 19, 20]
*/
