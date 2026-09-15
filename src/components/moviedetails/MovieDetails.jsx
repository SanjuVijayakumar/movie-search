import React from "react";
import { X, Star, Clock, Calendar, Play } from "lucide-react";

const MovieDetails = ({ movie, onClose }) => {
  if (!movie) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm">

      {/* Modal */}
      <div className="relative max-h-[90vh] w-full max-w-5xl overflow-y-auto rounded-2xl bg-white shadow-2xl dark:bg-zinc-900">

        {/* close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/70 text-white transition hover:bg-red-600"
          aria-label="Close movie details"
        >
          <X size={20} />
        </button>

        {/* Backdrop */}
        <div className="relative h-56 overflow-hidden sm:h-72 md:h-80">

          {movie.backdrop ? (
            <img
              src={movie.backdrop}
              alt={movie.title}
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="h-full bg-zinc-800" />
          )}

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

          {/* Title */}
          <div className="absolute bottom-6 left-6 right-6">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              {movie.title}
            </h2>

            <p className="mt-2 text-sm text-gray-300">
              {movie.original_title !== movie.title
                ? movie.original_title
                : ""}
            </p>
          </div>

        </div>

        {/* Content */}
        <div className="p-6">

          <div className="flex flex-col gap-6 md:flex-row">

            {/* Poster */}
            <div className="mx-auto w-48 shrink-0 md:mx-0">

              {movie.posterLarge && (
                <img
                  src={movie.posterLarge}
                  alt={movie.title}
                  className="w-full rounded-xl shadow-lg"
                />
              )}

            </div>

            {/* Information */}
            <div className="flex-1">

              {/* Meta */}
              <div className="flex flex-wrap gap-3 text-sm">

                {/* Rating */}
                <div className="flex items-center gap-1 rounded-lg bg-red-100 px-3 py-2 text-red-600 dark:bg-red-950/40 dark:text-red-400">
                  <Star
                    size={16}
                    className="fill-red-500"
                  />
                  {movie.user_rating || "N/A"}
                </div>

                {/* Year */}
                <div className="flex items-center gap-1 rounded-lg bg-gray-100 px-3 py-2 text-gray-700 dark:bg-zinc-800 dark:text-gray-300">
                  <Calendar size={16} />
                  {movie.year || "N/A"}
                </div>

                {/* Runtime */}
                <div className="flex items-center gap-1 rounded-lg bg-gray-100 px-3 py-2 text-gray-700 dark:bg-zinc-800 dark:text-gray-300">
                  <Clock size={16} />
                  {movie.runtime_minutes
                    ? `${movie.runtime_minutes} min`
                    : "N/A"}
                </div>

                {/* Type */}
                <span className="rounded-lg bg-gray-100 px-3 py-2 text-gray-700 dark:bg-zinc-800 dark:text-gray-300">
                  {movie.type}
                </span>

              </div>

              {/* Genres */}
              {movie.genre_names?.length > 0 && (
                <div className="mt-5 flex flex-wrap gap-2">

                  {movie.genre_names.map((genre) => (
                    <span
                      key={genre}
                      className="rounded-full bg-red-100 px-3 py-1 text-sm font-medium text-red-600 dark:bg-red-950/40 dark:text-red-400"
                    >
                      {genre}
                    </span>
                  ))}

                </div>
              )}

              {/* Plot */}
              <div className="mt-6">

                <h3 className="text-lg font-bold text-black dark:text-white">
                  Overview
                </h3>

                <p className="mt-2 leading-7 text-gray-600 dark:text-gray-400">
                  {movie.plot_overview || "No overview available."}
                </p>

              </div>

              {/* Critic Score */}
              {movie.critic_score && (
                <div className="mt-5">

                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Critic Score
                  </span>

                  <p className="mt-1 text-xl font-bold text-black dark:text-white">
                    {movie.critic_score}/100
                  </p>

                </div>
              )}

              {/* Release Date */}
              {movie.release_date && (
                <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
                  Release Date:{" "}
                  <span className="font-medium text-black dark:text-white">
                    {movie.release_date}
                  </span>
                </p>
              )}

              {/* Trailer */}
              {movie.trailer && (
                <a
                  href={movie.trailer}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 rounded-xl bg-red-600 px-5 py-3 font-semibold text-white transition hover:bg-red-700"
                >
                  <Play size={18} className="fill-current" />
                  Watch Trailer
                </a>
              )}

            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

export default MovieDetails;