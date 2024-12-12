import { ExternalGenres } from "../../domain/genres/ExternalGenres.interface";
import { InternalGenres } from "../../domain/genres/InernalGenres.interface";

export const genresAdapter = (externalGenres: ExternalGenres): InternalGenres => {
  return {
    genres: externalGenres.genres.map((genre) => ({
      key: genre.id,
      label: genre.name,
    })),
  }
}