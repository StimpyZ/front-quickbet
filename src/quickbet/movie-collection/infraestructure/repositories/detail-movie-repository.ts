import { BaseProps } from '@/common/config/base/BaseRepository'
import { InternalDetailMovie } from '../../domain/movie-detail/InternalDetailMovie.interface'
import { http } from '@/common/config/connection/Http'
import { ExternalDetailMovie } from '../../domain/movie-detail/ExternalDetailMovie.interface'
import { detailMovieAdapter } from '../adapters/detail-movie-adapter'

export interface IDetailMovieProps {
  movie_id: number
  append_to_response?: string
  language?: string
}

type FetchDetailMovie = IDetailMovieProps & Omit<BaseProps, 'signal'>

export const fetchDetailMovie = ({
  endpoint,
  language = 'en-US',
  ...detailMovieProps
}: FetchDetailMovie): Promise<InternalDetailMovie> => {
  const params = new URLSearchParams()
  Object.entries({ language, ...detailMovieProps }).forEach(([key, value]) => {
    if (value !== undefined && value !== '') {
      params.append(key, value.toString())
    }
  })
  return http
    .get<ExternalDetailMovie>({
      endpoint: `${endpoint}?${params.toString()}`
    })
    .then((response) => {
      return detailMovieAdapter(response)
    })
}
