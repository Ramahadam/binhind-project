import Link from "next/link";

export default function NotFound() {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-white">
      <h2 className="text-white text-h40">Page not found (404)</h2>
      <p>Ooops couldn&apos;t find the requested page &#9785;</p>
      <Link
        href="/"
        className="bg-lightGray py-3 px-4 mt-8 inline-block cursor-pointer transition hover:bg-MeduimGray rounded-md text-primary font-bold"
      >
        Return Home
      </Link>
    </div>
  );
}
