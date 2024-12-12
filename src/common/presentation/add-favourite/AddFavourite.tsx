import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import useAddFavourite from './view-model/useAddFavourite'
import { Result } from '@/quickbet/catalog/domain/types'

interface AddFavouriteProps {
  movie: Result
}

export default function AddFavourite({ movie }: AddFavouriteProps) {
  const { handleClickFavorite, isFavoriteMovie } = useAddFavourite()
  
  return (
    <button
      onClick={() => handleClickFavorite(movie)}
      className='flex items-center gap-2 p-2 rounded-lg text-white'>
      <FontAwesomeIcon key={movie.id}  icon={faHeart} size='lg' color={isFavoriteMovie(movie.id) ? 'red' : 'white'} />
    </button>
  )
}