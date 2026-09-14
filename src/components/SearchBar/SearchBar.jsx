import React from 'react'
import { Search, X } from "lucide-react";

const SearchBar = ( { search, setSearch, onSearch }) => {

  const handleSubmit = (e) => {
    e.preventDefault();

    if (search.trim()) {
      onSearch(search.trim());
    }
  };

  const handleClear = () => {
    setSearch("");
  };

  return (
    <section className="bg-white px-4 py-10 transition-colors duration-300 dark:bg-black">
      <div className="mx-auto max-w-4xl">


        <div className="mb-6 text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-black sm:text-4xl dark:text-white">
            Find Your Next
            <span className="text-red-600">Movie</span>
          </h2>

          <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
            Search for movies, actors, genres and more
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-3 sm:flex-row"
        >
          <div className="relative flex-1">

            <Search
              size={21}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search for a movie..."
              className="h-14 w-full rounded-xl border border-gray-300 bg-gray-100 pl-12 pr-12 text-black outline-none transition-all duration-300 placeholder:text-gray-400 focus:border-red-600 focus:ring-2 focus:ring-red-600/20 dark:border-zinc-800 dark:bg-zinc-900 dark:text-white dark:placeholder:text-gray-500 dark:focus:border-red-500"
            />

            {search && (
              <button
                type="button"
                onClick={handleClear}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 transition hover:text-red-600"
                aria-label="Clear search"
              >
                <X size={19} />
              </button>
            )}

          </div>

          {/* Search Button */}
          <button
            type="submit"
            className="flex h-14 items-center justify-center gap-2 rounded-xl bg-red-600 px-7 font-semibold text-white shadow-lg shadow-red-600/20 transition-all duration-300 hover:bg-red-700 hover:shadow-red-600/30 active:scale-[0.98]"
          >
            <Search size={19} />
            Search
          </button>

        </form>

      </div>
    </section>
  )
}

export default SearchBar