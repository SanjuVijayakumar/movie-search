import React from "react";
import { Film, Heart, ArrowUp} from "lucide-react";

const Footer = () => {
    const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <footer className="border-t border-gray-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-600 text-white shadow-lg shadow-red-600/20">
                <Film size={21} />
              </div>

              <span className="text-xl font-bold text-black dark:text-white">
                Movie<span className="text-red-600">Track</span>
              </span>
            </div>

            <p className="mt-4 max-w-sm text-sm leading-6 text-gray-500 dark:text-gray-400">
              Discover movies, explore details, check ratings, and find
              something great to watch.
            </p>

            {/* Social Icons */}
            {/* <div className="mt-6 flex gap-3">
              <a
                href="#"
                aria-label="GitHub"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 text-gray-600 transition hover:border-red-600 hover:bg-red-600 hover:text-white dark:border-zinc-800 dark:text-gray-400"
              >
                <Github size={17} />
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 text-gray-600 transition hover:border-red-600 hover:bg-red-600 hover:text-white dark:border-zinc-800 dark:text-gray-400"
              >
                <Instagram size={17} />
              </a>

              <a
                href="#"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 text-gray-600 transition hover:border-red-600 hover:bg-red-600 hover:text-white dark:border-zinc-800 dark:text-gray-400"
              >
                <Linkedin size={17} />
              </a> 
            </div> */}
          </div>

          {/* Explore */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-black dark:text-white">
              Explore
            </h3>

            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href="#"
                  className="text-gray-500 transition hover:text-red-600 dark:text-gray-400"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="#latest"
                  className="text-gray-500 transition hover:text-red-600 dark:text-gray-400"
                >
                  Latest Movies
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-gray-500 transition hover:text-red-600 dark:text-gray-400"
                >
                  Popular Movies
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-gray-500 transition hover:text-red-600 dark:text-gray-400"
                >
                  Search Movies
                </a>
              </li>
            </ul>
          </div>

          {/* Movie Track */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-black dark:text-white">
              Movie Track
            </h3>

            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <span className="text-gray-500 dark:text-gray-400">
                  Browse Movies
                </span>
              </li>

              <li>
                <span className="text-gray-500 dark:text-gray-400">
                  Movie Details
                </span>
              </li>

              <li>
                <span className="text-gray-500 dark:text-gray-400">
                  Ratings & Reviews
                </span>
              </li>

              <li>
                <span className="text-gray-500 dark:text-gray-400">
                  Find Your Next Movie
                </span>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-black dark:text-white">
              Discover
            </h3>

            <p className="mt-4 text-sm leading-6 text-gray-500 dark:text-gray-400">
              Looking for something to watch? Search for your favorite movie
              and explore more details.
            </p>

            <button
              onClick={scrollToTop}
              className="mt-5 inline-flex items-center gap-2 rounded-lg bg-red-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-red-700"
            >
              Back to Top
              <ArrowUp size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 dark:border-zinc-800">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-5 text-sm sm:px-6 md:flex-row lg:px-8">
          <p className="text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} MovieTrack. All rights reserved.
          </p>

          <p className="flex items-center gap-1 text-gray-500 dark:text-gray-400">
            Made with
            <Heart
              size={15}
              className="fill-red-600 text-red-600"
            />
            for movie lovers
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer