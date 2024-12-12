import UsersScore from '@/common/presentation/users-score/UsersScore'
import { formatDate } from '@/common/utils/utils'
import Image from 'next/image'
import React from 'react'
import { Result } from '../../domain/types'
import AddFavourite from '@/common/presentation/add-favourite/AddFavourite'
import Link from 'next/link'
import '../css/MovieSection.css';

export default function MovieCard({ ...movieProps }: Result ) {
  return (
    <div
      className='w-[200px] flex-shrink-0 flex flex-col transform transition-transform duration-300 hover:scale-105 mx-2 my-3 cursor-pointer'>
      <Link href={`/movies/${movieProps.id}`} passHref>
        <Image
          src={`${process.env.NEXT_PUBLIC_API_IMAGE_URL}${movieProps.poster_path}`}
          alt={movieProps.title}
          width={200}
          height={300}
          style={{ objectFit: 'cover' }}
          className='rounded-t-xl'
        />
      </Link>
      <div className='bg-primary-dark p-2 rounded-b-xl flex flex-col justify-between flex-grow'>
        <div>
          <Link href={`/movies/${movieProps.id}`} passHref className='hover:underline font-semibold'>{movieProps.title}</Link>
          <p className='text-xs'>
          {movieProps.release_date !== '' ? formatDate(movieProps.release_date) : 'Date not available'}
          </p>
        </div>
        <div className='flex text-xs justify-evenly'>
          <div>
            <p>Rating</p>
            <UsersScore sizeSvg='' size='sm' sizeText='' score={movieProps.vote_average} />
          </div>
          <div className='flex justify-center flex-col items-center'>
            <p>Favorite</p>
            <AddFavourite movie={movieProps} />
          </div>
        </div>
      </div>
    </div>
  )
}