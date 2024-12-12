import { useQuery } from '@tanstack/react-query'
import { InternalDetailMovie } from '../../domain/movie-detail/InternalDetailMovie.interface'
import { fetchDetailMovie } from '../../infraestructure/repositories/detail-movie-repository'
import { InternalCollectionMovie } from '../../domain/movie-collection/InternalMovieCollection.inteface'
import { fetchCollectionMovie } from '../../infraestructure/repositories/collection-movie-adapter'

export default function useMovieCollection({ id }: { id: number }) {
  const { data: movieDetailData, isLoading: movieDetailIsLoading } = useQuery<
    InternalDetailMovie,
    Error
  >({
    queryKey: ['detail-movie', id],
    queryFn: () =>
      fetchDetailMovie({
        endpoint: `/movie/${id}`,
        movie_id: id
      }),
    staleTime: 5 * 60 * 1000,
    enabled: !!id
  })

  const collectionId = movieDetailData?.belongs_to_collection?.id;

  const { data: movieCollectionData, isLoading: movieCollectionIsLoading } = useQuery<InternalCollectionMovie, Error>({
    queryKey: ['collection-movie', collectionId],
    queryFn: () =>
      fetchCollectionMovie({
        endpoint: `/collection/${collectionId}`,
        collection_id: collectionId as number
      }),
    staleTime: 5 * 60 * 1000,
    enabled: !!collectionId
  })

  const filterMovieCollection = movieCollectionData?.parts.filter( movie => movie.id !== id)

  return {
    movieDetailData,
    movieDetailIsLoading,
    filterMovieCollection,
    movieCollectionIsLoading
  }
}