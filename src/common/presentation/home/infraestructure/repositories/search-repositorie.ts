import { BaseProps } from '@/common/config/base/BaseRepository'
import { InternalSearch } from '../../domain/search/InternalSearch.interface'
import { ExternalSearch } from '../../domain/search/ExternalSearch.interface'
import { searchAdapter } from '../adapters/search-adapters'
import { http } from '@/common/config/connection/HttpBack'


export interface ISearchProps {
  query: string
  page?: number
}

type FetchSearch = ISearchProps & Omit<BaseProps, 'signal'>

export const fetchSearch = ({
  endpoint,
  page = 1,
  ...rest
}: FetchSearch): Promise<InternalSearch> => {
  const params = new URLSearchParams()
  Object.entries({ page, ...rest }).forEach(([key, value]) => {
    if (value !== undefined && value !== '') {
      params.append(key, value.toString())
    }
  })
  return http
    .get<ExternalSearch>({
      endpoint: `${endpoint}?${params.toString()}`
    })
    .then((response) => {
      return searchAdapter(response)
    })
}
