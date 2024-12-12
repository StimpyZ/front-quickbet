import { Result } from '@/quickbet/catalog/domain/types'
import { SliceType } from '../generic/SliceType'

export interface FavouriteSlice {
  favoriteMovies: Result[]
  addFavoriteMovie: (movie: Result) => void
  removeFavoriteMovie: (movieId: number) => void
  getFavoriteMovie: (movieId: number) => Result | undefined
  isFavoriteMovie: (movieId: number) => boolean
}

type AuthState = SliceType<FavouriteSlice>

const createFavouriteSlice: AuthState = (set, get, _api) => ({
  favoriteMovies: [],
  addFavoriteMovie: (movie) => {
    set(state => {
      const currMovies = state.favoriteMovies
      const movieCard = { ...movie }
      state.favoriteMovies = [...currMovies, movieCard]
    })
  },
  removeFavoriteMovie: (movieId) => {
    set(state => {
      state.favoriteMovies = _api
        .getState()
        .favoriteMovies.filter(item => item.id !== movieId);
    });
  },
  getFavoriteMovie: movieId => {
    const movieCard = get().favoriteMovies.find(item => item.id === movieId)
    return movieCard
  },
  isFavoriteMovie: movieId => {
    const movieCard = get().favoriteMovies.find(item => item.id === movieId)
    return movieCard !== undefined
  }
})

export default createFavouriteSlice