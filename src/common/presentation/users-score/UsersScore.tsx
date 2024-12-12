'use client'

import { CircularProgress } from '@nextui-org/react'
import React from 'react'

interface UsersScoreProps {
  score: number
  title?: string
  size?: 'sm' | 'md' | 'lg'
  sizeText?: string
  sizeSvg?: string
}

export default function UsersScore({ score = 20, title = '', sizeSvg = 'md:w-24 md:h-24', sizeText = 'md:text-2xl', size = 'lg'}: UsersScoreProps) {
  return (
    <div className='flex items-center gap-2'>
      <CircularProgress
        aria-label='Users Score'
        classNames={{
          svg: `${sizeSvg} drop-shadow-md`,
          value: `${sizeText} font-semibold text-white`
        }}
        size={size}
        color="success"
        showValueLabel={true}
        value={score * 10}
      />
      <p>{title}</p>
    </div>
  )
}
