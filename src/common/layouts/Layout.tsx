// src/common/layouts/Layout.tsx
import React from 'react'
import Header from '@/quickbet/header/presentation/Header'
import Banner from '@/common/presentation/banner/Banner'
import { InternalDetailMovie } from '@/quickbet/movie-collection/domain/movie-detail/InternalDetailMovie.interface'

interface LayoutProps {
  children: React.ReactNode
  movieDetaiMovie?: InternalDetailMovie
}

export default function Layout ({ children, movieDetaiMovie }: LayoutProps) {
  return (
    <div className="font-[family-name:var(--font-geist-sans)] min-h-dvh bg-primary-light text-white">
      <Header />
      <Banner movie={movieDetaiMovie}/>
      <main className="">
        {children}
      </main>
    </div>
  )
}