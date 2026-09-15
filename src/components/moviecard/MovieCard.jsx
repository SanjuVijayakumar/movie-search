import React from "react";
import { Heart, Star, Clock } from "lucide-react";

export const MovieCard = ({ movie, onViewDetails }) => {
  return (
    <div className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-red-600/10 dark:border-zinc-800 dark:bg-zinc-900">

      {/* Poster */}
      <div className="relative aspect-[2/3] overflow-hidden bg-zinc-200 dark:bg-zinc-800">

        {movie.posterLarge ? (
          <img
            src={movie.posterLarge}
            alt={movie.title}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-gray-500">
            No Poster
          </div>
        )}

        {/* Favorite Button */}
        <button
          className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-black/70 text-white backdrop-blur-sm transition hover:bg-red-600"
          aria-label={`Add ${movie.title} to favorites`}
        >
          <Heart size={17} />
        </button>

        {/* Rating */}
        {movie.user_rating && (
          <div className="absolute bottom-3 left-3 flex items-center gap-1 rounded-lg bg-black/75 px-2.5 py-1.5 text-sm font-semibold text-white backdrop-blur-sm">
            <Star
              size={15}
              className="fill-red-500 text-red-500"
            />
            {movie.user_rating}
          </div>
        )}

      </div>

      {/* Movie Info */}
      <div className="p-4">

        <h3 className="truncate text-lg font-bold text-black dark:text-white">
          {movie.title}
        </h3>

        <div className="mt-2 flex items-center justify-between text-sm">

          <span className="text-gray-500 dark:text-gray-400">
            {movie.year || "N/A"}
          </span>

          <span className="rounded-full bg-red-100 px-3 py-1 font-medium text-red-600 dark:bg-red-950/40 dark:text-red-400">
            {movie.type || "Movie"}
          </span>

        </div>

        {/* Genres */}
        {movie.genre_names?.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-1">

            {movie.genre_names
              .slice(0, 2)
              .map((genre) => (
                <span
                  key={genre}
                  className="text-xs text-gray-500 dark:text-gray-400"
                >
                  #{genre}
                </span>
              ))}

          </div>
        )}

        {/* Runtime */}
        {movie.runtime_minutes && (
          <div className="mt-3 flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">

            <Clock size={14} />

            {movie.runtime_minutes} min

          </div>
        )}

        {/* Details Button */}
        <button onClick={() => onViewDetails(movie)}
          className="mt-4 w-full rounded-lg border border-red-600 py-2.5 text-sm font-semibold text-red-600 transition hover:bg-red-600 hover:text-white"
        >
          View Details
        </button>

      </div>

    </div>
  );
};