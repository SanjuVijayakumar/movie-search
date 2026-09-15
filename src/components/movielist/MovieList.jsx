import React, { useState } from "react";
import { MovieCard } from "../moviecard/MovieCard";
import MovieSkeleton from "./MovieSkeleton";
import EmptyState from "./EmptyState";

const MovieList = ({ movies, loading, showEmpty }) => { 

  return (
    <section className="bg-white px-4 py-10 dark:bg-black">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-6 text-2xl font-bold text-black dark:text-white">
          Search <span className="text-red-600">Movies</span>
        </h2>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {loading ? (
            Array.from({ length: 4 }).map((_, index) => (                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
              <MovieSkeleton key={index} />
            ))
          ) : showEmpty ? (
            <EmptyState />
          ) : (
            movies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default MovieList;
