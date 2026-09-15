import React from 'react'

const MovieSkeleton = () => {
  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md dark:border-zinc-800 dark:bg-zinc-900">
      {/* Poster Skeleton */}
      <div className="aspect-[2/3] animate-pulse bg-gray-200 dark:bg-zinc-800"></div>

      {/* Content Skeleton */}
      <div className="space-y-4 p-4">
        <div className="h-5 w-3/4 animate-pulse rounded bg-gray-200 dark:bg-zinc-800"></div>

        <div className="flex items-center justify-between">
          <div className="h-4 w-12 animate-pulse rounded bg-gray-200 dark:bg-zinc-800"></div>

          <div className="h-7 w-20 animate-pulse rounded-full bg-gray-200 dark:bg-zinc-800"></div>
        </div>

        <div className="h-10 w-full animate-pulse rounded-lg bg-gray-200 dark:bg-zinc-800"></div>
      </div>
    </div>
  )
}

export default MovieSkeleton