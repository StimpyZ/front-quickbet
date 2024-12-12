import { ExternalCollection } from '../../domain/movie-collection/ExternalMovieCollection.inteface'
import { InternalCollectionMovie } from '../../domain/movie-collection/InternalMovieCollection.inteface'

export const collectionMovieAdapter = (
  data: ExternalCollection
): InternalCollectionMovie => {
  return {
    backdrop_path: data.backdrop_path,
    id: data.id,
    name: data.name,
    overview: data.overview,
    parts: data.parts,
    poster_path: data.poster_path
  }
}
