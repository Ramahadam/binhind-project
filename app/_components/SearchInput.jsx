import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export default function SearchInput() {
  return (
    <div className="relative group">
      {/* Search icon */}
      <div className="flex items-center bg-primary rounded-md overflow-hidden cursor-pointer group-hover:bg-white">
        <MagnifyingGlassIcon className="h-5 w-5 text-white group-hover:text-primary group-hover:ml-2" />

        <input
          type="text"
          placeholder="Search..."
          className="opacity-0 w-0 px-0 py-0 transition-all duration-300 focus:outline-none group-hover:opacity-100 group-hover:w-40 group-hover:px-4 group-hover:py-2 sm:group-hover:w-56"
        />
      </div>
    </div>
  );
}
