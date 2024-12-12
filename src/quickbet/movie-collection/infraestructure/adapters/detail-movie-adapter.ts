import { ExternalDetailMovie } from "../../domain/movie-detail/ExternalDetailMovie.interface";
import { InternalDetailMovie } from "../../domain/movie-detail/InternalDetailMovie.interface";

export const detailMovieAdapter = (data: ExternalDetailMovie): InternalDetailMovie => {
  return {
    backdrop_path: data.backdrop_path,
    genres: data.genres,
    id: data.id,
    overview: data.overview,
    poster_path: data.poster_path,
    release_date: data.release_date,
    runtime: data.runtime,
    title: data.original_title,
    vote_average: data.vote_average,
    belongs_to_collection: data.belongs_to_collection,
  }
}