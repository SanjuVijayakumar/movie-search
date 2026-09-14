import React from 'react'
import { Heart, Star } from "lucide-react";

export const MovieCard = ({ movie }) => {

    const movies = [
    {
        id: 1,
        title: "The Batman",
        year: 2022,
        rating: 8.2,
        genre: "Action",
        poster: "..."
    },
    {
        id: 2,
        title: "Inception",
        year: 2010,
        rating: 8.8,
        genre: "Sci-Fi",
        poster: "..."
    }
    ];


  return (
    <div className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-red-600/10 dark:border-zinc-800 dark:bg-zinc-900">

      {/* Poster */}
      <div className="relative aspect-[2/3] overflow-hidden bg-zinc-200 dark:bg-zinc-800">

        <img
          src={movie.poster}
          alt={movie.title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />

        {/* Favorite Button */}
        <button
          className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-black/70 text-white backdrop-blur-sm transition hover:bg-red-600"
          aria-label={`Add ${movie.title} to favorites`}
        >
          <Heart size={17} />
        </button>

        {/* Rating */}
        <div className="absolute bottom-3 left-3 flex items-center gap-1 rounded-lg bg-black/75 px-2.5 py-1.5 text-sm font-semibold text-white backdrop-blur-sm">
          <Star
            size={15}
            className="fill-red-500 text-red-500"
          />
          {movie.rating}
        </div>

      </div>

      {/* Movie Info */}
      <div className="p-4">

        <h3 className="truncate text-lg font-bold text-black dark:text-white">
          {movie.title}
        </h3>

        <div className="mt-2 flex items-center justify-between text-sm">
          <span className="text-gray-500 dark:text-gray-400">
            {movie.year}
          </span>

          <span className="rounded-full bg-red-100 px-3 py-1 font-medium text-red-600 dark:bg-red-950/40 dark:text-red-400">
            {movie.genre}
          </span>
        </div>

        {/* Details Button */}
        <button
          className="mt-4 w-full rounded-lg border border-red-600 py-2.5 text-sm font-semibold text-red-600 transition hover:bg-red-600 hover:text-white"
        >
          View Details
        </button>

      </div>

    </div>
  )
}
