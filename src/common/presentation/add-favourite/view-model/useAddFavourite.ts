import { Result } from "@/quickbet/catalog/domain/types"
import useAppStore from "@/stores/useAppStore"

export default function useAddFavourite() {
  const addFavoriteMovie = useAppStore((state) => state.addFavoriteMovie)
  const removeFavoriteMovie = useAppStore((state) => state.removeFavoriteMovie)
  const isFavoriteMovie = useAppStore((state) => state.isFavoriteMovie)

  const handleClickFavorite = (movie:Result) => {
    if (isFavoriteMovie(movie.id)) {
      removeFavoriteMovie(movie.id)
    } else {
      addFavoriteMovie(movie)
    }
  }
  
  return {
    handleClickFavorite,
    isFavoriteMovie,
    addFavoriteMovie,
    removeFavoriteMovie,
  }
}
