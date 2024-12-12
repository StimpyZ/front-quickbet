'use client'

import { useQuery } from '@tanstack/react-query'
import { InternalSearch } from '../../domain/search/InternalSearch.interface'
import { fetchSearch } from '../../infraestructure/repositories/search-repositorie'
import { useSearchParams, usePathname, useRouter } from 'next/navigation'
import { useDebouncedCallback } from 'use-debounce'
import { fetchFilterGenres } from '../../infraestructure/adapters/filter-genres-adapter'
import { useMemo, useState } from 'react'

export default function useHome() {
  const [selectedGenre, setSelectedGenre] = useState<number | null>(null)
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()
  const { data: dataSearch, isLoading: isLoadingSearch } = useQuery<
    InternalSearch,
    Error
  >({
    queryKey: ['search', searchParams.get('query')],
    queryFn: () =>
      fetchSearch({
        endpoint: '/movies/search',
        query: searchParams.get('query')?.toString() || ''
      }),
    enabled: searchParams.has('query')
  })

  const { data: filterGenresData, isLoading: isLoadingFilterGenres } = useQuery<
    InternalSearch,
    Error
  >({
    queryKey: ['filterGenres'],
    queryFn: () =>
      fetchFilterGenres({
        endpoint: `/movies/genre/${selectedGenre}`,
        id: selectedGenre
      }),
    enabled: selectedGenre !== null
  })

  const handleSelectGenre = (id: number) => {
    console
    if (id === 0) {
      setSelectedGenre(null)
    } else {
      setSelectedGenre(id)
    }
  }

  const handleSearch = useDebouncedCallback((search: string) => {
    const params = new URLSearchParams(searchParams)
    if (search) {
      params.set('query', search)
    } else {
      params.delete('query')
    }
    replace(`${pathname}?${params.toString()}`)
  }, 400)

  const combinedResults = useMemo(() => {
    if (isLoadingSearch || isLoadingFilterGenres) {
      return []
    }
  
    // Si hay búsqueda y filtro de género, combinar los resultados
    if (searchParams.has('query') && dataSearch && selectedGenre !== null && filterGenresData) {
      return dataSearch.results.filter(movie =>
        movie.genre_ids?.includes(selectedGenre)
      )
    }
  
    // Si solo hay búsqueda, devolver los resultados de la búsqueda
    if (searchParams.has('query') && dataSearch) {
      return dataSearch.results
    }
  
    // Si solo hay filtro de género, devolver los resultados del filtro de género
    if (selectedGenre !== null && filterGenresData) {
      return filterGenresData.results
    }
  
    // Si no hay búsqueda ni filtro de género, devolver un array vacío
    return []
  }, [dataSearch, filterGenresData, isLoadingSearch, isLoadingFilterGenres, selectedGenre, searchParams])


  const isLoading = isLoadingSearch || isLoadingFilterGenres

  return {
    handleSelectGenre,
    dataSearch: combinedResults,
    isLoading,
    searchParams,
    handleSearch
  }
}
