'use client'

import React from 'react'
import useCatalog from './view-model/useCatalog'
import MovieSection from './components/MovieSection'
import MovieCard from './components/MovieCard'

import { InternalCatalog } from '../domain/InternalCatalog'
import { Result } from '../domain/types'

interface CatalogProps {
  search: Result[] | undefined
  loading: boolean
}

export default function Catalog({ search, loading }: CatalogProps) {
  const { ...data } = useCatalog()

  return (
    <>

      {!!search?.length && !loading ? (
        <MovieSection title="Search Results" data={search} isLoading={loading} />
      ) : (
        <h2 className='text-2xl font-semibold mb-4'>There are no results</h2>
      )}
      <MovieSection title="Now Playing" data={data.nowPlayingData} isLoading={data.nowPlayingIsLoading} />
      <MovieSection title="Popular" data={data.popularData} isLoading={data.popularIsLoading} />
      <MovieSection title="Upcoming" data={data.upcomingData} isLoading={data.upcomingIsLoading} />
      <MovieSection title="Top Rated" data={data.topRatedData} isLoading={data.topRatedIsLoading} />

      <h2 className='font-bold text-lg mb-2'>{'Favourites'}</h2>
      <div className='flex overflow-x-auto overflow-visible custom-scrollbar mb-3' >
        {...data?.favoriteMovies.map(movie => (
          <MovieCard key={movie.id} {...movie} />
        ))}
      </div>
    </>
  )
}
