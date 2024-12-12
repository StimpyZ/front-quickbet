import {
  BelongsToCollection,
  Genre,
} from './types'

export interface InternalDetailMovie {
  backdrop_path: string
  poster_path: string
  belongs_to_collection: BelongsToCollection
  id: number
  title: string
  release_date: string
  runtime: number
  overview: string
  vote_average: number
  genres: Genre[]
}
