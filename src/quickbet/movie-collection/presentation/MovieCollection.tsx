import React from 'react'
import { Part } from '../domain/movie-collection/types'
import Image from 'next/image'
import Link from 'next/link'

export default function MovieCollection({ ...movieProps }: Part) {
  return (
    <div className='flex flex-col max-w-[200px] transform transition-transform duration-300 hover:scale-105 mx-2 my-3 cursor-pointer'>
      <Link href={`/movies/${movieProps.id}`} passHref>
        <Image
          src={`${process.env.NEXT_PUBLIC_API_IMAGE_URL}${movieProps.poster_path}`}
          alt={movieProps.poster_path}
          width={200}
          height={223}
          style={{ objectFit: 'cover' }}
          className='rounded-t-xl'
        />
      </Link>
      <div className='bg-primary-dark rounded-b-xl p-3 flex-col flex-grow flex justify-between'>
        <Link href={`/movies/${movieProps.id}`} passHref>
          <h2 className='hover:underline font-semibold text-wrap'>{movieProps.title}</h2>
        </Link>
      </div>
    </div>
  )
}