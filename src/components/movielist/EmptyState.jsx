import React from "react";
import { Film, Search } from "lucide-react";

const EmptyState = () => {
  return (
    <div className="col-span-full flex min-h-[300px] flex-col items-center justify-center rounded-2xl border border-dashed border-gray-300 bg-gray-50 px-6 text-center dark:border-zinc-800 dark:bg-zinc-900">
      <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-red-100 text-red-600 dark:bg-red-950/40 dark:text-red-500">
        <Film size={30} />
      </div>

      <h3 className="text-2xl font-bold text-black dark:text-white">
        No Movies Found
      </h3>

      <p className="mt-2 max-w-md text-sm text-gray-500 dark:text-gray-400">
        We couldn't find any movies matching your search. Try searching with
        another movie title.
      </p>

      <button
        className="mt-6 flex items-center gap-2 rounded-lg bg-red-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-red-700"
      >
        <Search size={17} />
        Search Again
      </button>
    </div>
  );
};

export default EmptyState;