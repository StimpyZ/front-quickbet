'use client'

import { useQuery } from '@tanstack/react-query'
import { InternalCatalog } from '../../domain/InternalCatalog'
import { fetchCatalog } from '../../infraestructure/catalog-repository'
import useAppStore from '@/stores/useAppStore'

function useFetchCatalogs(endpoint: string) {
  
  return useQuery<InternalCatalog, Error>({
    queryKey: [endpoint],
    queryFn: () =>
      fetchCatalog({
        endpoint
      }),
    staleTime: 5 * 60 * 1000 // 5 minutes
  })
}

export default function useCatalog() {
  const favoriteMovies = useAppStore((state) => state.favoriteMovies)
  const { data: nowPlayingData, isLoading: nowPlayingIsLoading } = useFetchCatalogs('/movie/now_playing')
  const { data: popularData, isLoading: popularIsLoading } = useFetchCatalogs('/movie/popular')
  const { data: upcomingData, isLoading: upcomingIsLoading } = useFetchCatalogs('/movie/upcoming')
  const { data: topRatedData, isLoading: topRatedIsLoading } = useFetchCatalogs('/movie/top_rated')

  return {
    favoriteMovies,
    nowPlayingData,
    nowPlayingIsLoading,
    popularData,
    popularIsLoading,
    upcomingData,
    upcomingIsLoading,
    topRatedData,
    topRatedIsLoading
  }
}
