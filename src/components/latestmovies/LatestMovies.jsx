import React from "react";
import { MovieCard } from "../moviecard/MovieCard";

const LatestMovies = ({ movies, loading, onViewDetails }) => {
  return (
    <section className="bg-white px-4 py-10 dark:bg-black">

      <div className="mx-auto max-w-7xl">

        <div className="mb-6 flex items-center justify-between">

          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-red-600">
              Discover
            </p>

            <h2 className="mt-1 text-2xl font-bold text-black dark:text-white">
              Latest <span className="text-red-600">Movies</span>
            </h2>
          </div>

          <button className="text-sm font-semibold text-red-600 hover:text-red-700">
            View All
          </button>

        </div>


        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">

          {loading ? (

            Array.from({ length: 4 }).map((_, index) => (
              <div
                key={index}
                className="h-[450px] animate-pulse rounded-2xl bg-gray-200 dark:bg-zinc-900"
              />
            ))

          ) : (

            movies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} onViewDetails={onViewDetails} />
            ))

          )}

        </div>

      </div>

    </section>
  );
};

export default LatestMovies;