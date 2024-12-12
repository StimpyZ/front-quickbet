'use client'

import { formatDate, formatDuration } from '@/common/utils/utils';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image'
import React from 'react'
import UsersScore from '../users-score/UsersScore';
import './css/Banner.css'
import { DefatultButton } from '@/common/utils/UtilsTsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { InternalDetailMovie } from '@/quickbet/movie-collection/domain/movie-detail/InternalDetailMovie.interface';
const results: InternalDetailMovie = {
  "backdrop_path": "/3V4kLQg0kSqPLctI5ziYWabAZYF.jpg",
  "belongs_to_collection": {
    "id": 558216,
    "name": "Venom Collection",
    "poster_path": "/4bXIKqdZIjR8wKgZaGDaLhLj4yF.jpg",
    "backdrop_path": "/vq340s8DxA5Q209FT8PHA6CXYOx.jpg"
  },
  "genres": [
    {
      "id": 28,
      "name": "Action"
    },
    {
      "id": 878,
      "name": "Science Fiction"
    },
    {
      "id": 12,
      "name": "Adventure"
    }
  ],
  "id": 912649,
  "overview": "Eddie and Venom are on the run. Hunted by both of their worlds and with the net closing in, the duo are forced into a devastating decision that will bring the curtains down on Venom and Eddie's last dance.",
  "poster_path": "/aosm8NMQ3UyoBVpSxyimorCQykC.jpg",
  "release_date": "2024-10-22",
  "runtime": 109,
  "title": "Venom: The Last Dance",
  "vote_average": 6.606,
}

interface BannerProps {
  movie?: InternalDetailMovie
}

export default function Banner({ movie = results }: BannerProps) {
  const pathname = usePathname()

  return (
    <div className="relative lg:h-[436px]">
      {/* Imagen de fondo */}
      <div
        className="bg-cover bg-center z-0 p-3 lg:h-[436px]"
        style={{
          backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.96) 15%, rgba(0, 0, 0, 0) 100%), url(${process.env.NEXT_PUBLIC_API_IMAGE_URL}${movie.backdrop_path})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}>
        {pathname !== '/' && (
          <Link href='/' passHref>
            <FontAwesomeIcon icon={faAngleLeft} size='xl' color='#f0b90b' className='z-20' />
          </Link>
        )}
        <div className='flex text-white px-10 gap-10 mx-auto'>
          <div className='flex flex-col'>
            <Image
              src={`${process.env.NEXT_PUBLIC_API_IMAGE_URL}${movie.poster_path}`}
              alt={movie.title}
              style={{ objectFit: 'cover' }}
              width={205}
              height={200}
            />
            <DefatultButton text='Official Trailer' className='lg:text-base text-sm text-black p-2 rounded-lg w-full mt-2 flex items-center justify-center gap-3' />
          </div>
          <div className='flex flex-col lg:flex-1 max-w-[900px]'>
            <h1 className=' text-xl lg:text-4xl font-extrabold'>{movie.title}</h1>
            <div className='flex lg:flex-row flex-col lg:justify-between text-base'>
              <p>{formatDate(movie.release_date)}</p>
              <p>{formatDuration(movie.runtime)}</p>
            </div>
            <div className='flex flex-col gap-5 mt-5'>
              <h2 className='font-extrabold'>OverView:</h2>
              <p className='ellipsis lg:text-base text-sm'>{movie.overview}</p>
              <div className='flex flex-row justify-between'>
                <UsersScore score={movie.vote_average} title='Users Score' />
                <div className='hidden lg:flex flex-wrap items-center gap-6'>
                  {movie.genres.map(genre => (
                    <p key={genre.id} className='border border-yellow-variant text-yellow-variant py-1 px-2 rounded-lg'>{genre.name}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='lg:hidden flex flex-wrap justify-center gap-6 mt-6'>
          {movie.genres.map(genre => (
            <p key={genre.id} className='border border-yellow-variant text-yellow-variant py-1 px-2 rounded-lg'>{genre.name}</p>
          ))}
        </div>
      </div>

    </div>
  );
}
