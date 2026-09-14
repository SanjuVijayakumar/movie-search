import React from "react";
import { MovieCard } from "../moviecard/MovieCard";

const MovieList = () => {

  const movies = [
    {
      id: 1,
      title: "The Batman",
      year: 2022,
      rating: 8.2,
      genre: "Action",
      poster: "https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg",
    },
    {
      id: 2,
      title: "Inception",
      year: 2010,
      rating: 8.8,
      genre: "Sci-Fi",
      poster: "https://image.tmdb.org/t/p/w500/oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg",
    },
  ];

  return (
    <section className="bg-white px-4 py-10 dark:bg-black">
      <div className="mx-auto max-w-7xl">

        <h2 className="mb-6 text-2xl font-bold text-black dark:text-white">
          Popular <span className="text-red-600">Movies</span>
        </h2>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {movies.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default MovieList;