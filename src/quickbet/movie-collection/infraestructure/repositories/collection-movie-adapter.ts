import { BaseProps } from "@/common/config/base/BaseRepository"
import { InternalCollectionMovie } from "../../domain/movie-collection/InternalMovieCollection.inteface"
import { ExternalCollection } from "../../domain/movie-collection/ExternalMovieCollection.inteface"
import { collectionMovieAdapter } from "../adapters/collection-movie-adapter"
import { http } from "@/common/config/connection/Http"

export interface ICollectionMovieProps {
  collection_id: number
  language?: string
}

type FetchCollectionMovie = ICollectionMovieProps & Omit<BaseProps, 'signal'>

export const fetchCollectionMovie = ({
  endpoint,
  language = 'en-US',
}: FetchCollectionMovie): Promise<InternalCollectionMovie> => {
  const params = new URLSearchParams()
  Object.entries({ language }).forEach(([key, value]) => {
    if (value !== undefined && value !== '') {
      params.append(key, value.toString())
    }
  })
  return http
    .get<ExternalCollection>({
      endpoint: `${endpoint}?${params.toString()}`
    })
    .then((response) => {
      return collectionMovieAdapter(response)
    })
}