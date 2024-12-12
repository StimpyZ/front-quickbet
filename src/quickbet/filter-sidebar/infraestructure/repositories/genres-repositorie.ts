
import { BaseProps } from '@/common/config/base/BaseRepository'
import { InternalGenres } from '../../domain/genres/InernalGenres.interface'
import { ExternalGenres } from '../../domain/genres/ExternalGenres.interface'
import { genresAdapter } from '../adapters/genres-adapter'
import { http } from '@/common/config/connection/Http'

export interface IGenresProps {
  language?: string
}
type FetchGenres = IGenresProps & Omit<BaseProps, 'signal'>

export const fetchGenres = ({
  endpoint,
  language = 'en-US'
}: FetchGenres): Promise<InternalGenres> => {
  const params = new URLSearchParams()
  Object.entries({ language }).forEach(([key, value]) => {
    if (value !== undefined && value !== '') {
      params.append(key, value.toString())
    }
  })
  return http
    .get<ExternalGenres>({
      endpoint: `${endpoint}?${params.toString()}`
    })
    .then((response) => {
      return genresAdapter(response)
    })
}
