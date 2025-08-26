import Link from "next/link";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { getPageNumbers } from "../_utils/helper";

function Pagination({ currentPage, pageCount }) {
  // Hide the Pagination if we have one page or no result
  console.log(currentPage);
  if (pageCount <= 1) return null;

  //   const pages = [];

  //   for (let i = 1; i <= pageCount; i++) {
  //     pages.push(i);
  //   }

  const pages = getPageNumbers(currentPage, pageCount);

  return (
    <div className="flex justify-end mt-18 ">
      <div className="flex flex-end flex-col">
        <p className="text-lightGray">Pagination</p>

        <ul className="flex justify-end gap-8 items-center">
          <li>
            <Link href={`?page=${currentPage > 1 ? currentPage - 1 : 1}`}>
              <MdKeyboardArrowLeft className="" />
            </Link>
          </li>

          {pages.map((p) =>
            p === "..." ? (
              <span>....</span>
            ) : (
              <li key={p}>
                <Link
                  href={`?page=${p}`}
                  className={`${p === currentPage && "underline"} `}
                >
                  {p}
                </Link>
              </li>
            )
          )}

          <li>
            <Link
              href={`?page=${
                currentPage < pageCount ? currentPage + 1 : currentPage
              }`}
            >
              <MdKeyboardArrowRight className="" />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Pagination;
