"use client";

import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { useRouter, useSearchParams } from "next/navigation";
import { useGetBlogPostsQuery } from "../_services/binhindApi";
import Link from "next/link";
import { PAGE_SIZE } from "../_utils/config";
import Pagination from "./Pagination";

function Blogs() {
  const searchParams = useSearchParams();

  const page = Number(searchParams.get("page")) || 1;

  const { data: blogs } = useGetBlogPostsQuery(
    { page, pageSize: PAGE_SIZE },
    {
      suspense: true,
    }
  );
  const router = useRouter();

  const currentPage = blogs?.meta?.pagination?.page || 1;
  const pageCount = blogs?.meta.pagination.pageCount || 1;

  console.log(blogs);

  return (
    <section className="text-primary mx-auto grid grid-cols-10 items-start gap-8 py-10">
      <aside className="flex flex-col bg-veryLightGray max-w-fit p-4 gap-8 text-p18 mt-14">
        <Link href="#">Team</Link>
        <Link href="#">Services</Link>
      </aside>

      <article className="col-span-9 max-w-7xl">
        <button
          onClick={router.back}
          href="#"
          className="flex items-center mb-8 bg-transparent cursor-pointer md:text-p18 -ml-2"
        >
          <MdKeyboardArrowLeft className="" />
          <span className="">Back</span>
        </button>

        {blogs?.data.map((blog) => (
          <ul className="flex flex-col gap-4" key={blog.id}>
            <li className="flex flex-col gap-4 border-b-1 border-MeduimGray h-32">
              <p>{blog.title}</p>
              <Link href={`?blog/id=${blog.documentId}`} className="underline">
                Read more
              </Link>
            </li>
          </ul>
        ))}

        <Pagination currentPage={currentPage} pageCount={pageCount} />
      </article>
    </section>
  );
}

export default Blogs;
