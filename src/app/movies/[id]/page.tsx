'use client'

import Layout from '@/common/layouts/Layout'
import SkeletonCollection from '@/quickbet/movie-collection/presentation/components/SkeletonCollection'
import MovieCollection from '@/quickbet/movie-collection/presentation/MovieCollection'
import useMovieCollection from '@/quickbet/movie-collection/presentation/view-model/useMovieCollection'
import { use } from 'react'

interface Params {
  id: string
}

export default function MoviePage({ params }: { params: Promise<Params> }) {
  const { id } = use(params)

  const { movieDetailData, filterMovieCollection, movieCollectionIsLoading } =
    useMovieCollection({ id: Number(id) })
  console.log(filterMovieCollection)
  return (
    <Layout movieDetaiMovie={movieDetailData}>
      <div className='p-4'>
        <h2 className="font-bold text-lg mb-2">Recomendations</h2>
        {movieCollectionIsLoading ? (
          <SkeletonCollection />
        ) : (
          <div
            className="flex overflow-x-auto overflow-visible custom-scrollbar mb-3 gap-4"
            aria-label="Movies"
          >
            {filterMovieCollection?.map((movie) => (
              <MovieCollection key={movie.id} {...movie} />
            ))}
          </div>
        )}
      </div>
    </Layout>
  )
}
