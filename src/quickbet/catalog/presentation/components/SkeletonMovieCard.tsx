import { Card, Skeleton } from '@nextui-org/react'
import React from 'react'
interface SkeletonMovieCardProps {
  count?: number;
}

export default function SkeletonMovieCard({ count = 5 }: SkeletonMovieCardProps) {
  return (
    <div className="flex flex-wrap gap-4">
      {Array.from({ length: count }).map((_, index) => (
        <Card key={index} className="dark w-[200px] h-[452px] space-y-5 p-4" radius="lg">
          <Skeleton className="rounded-lg">
            <div className="h-[300px] rounded-lg bg-default-300" />
          </Skeleton>
          <div className="space-y-3">
            <Skeleton className="w-3/5 rounded-lg">
              <div className="h-3 w-3/5 rounded-lg bg-default-200" />
            </Skeleton>
            <Skeleton className="w-4/5 rounded-lg">
              <div className="h-3 w-4/5 rounded-lg bg-default-200" />
            </Skeleton>
            <Skeleton className="w-2/5 rounded-lg">
              <div className="h-3 w-2/5 rounded-lg bg-default-300" />
            </Skeleton>
            <Skeleton className="w-4/5 rounded-lg">
              <div className="h-3 w-4/5 rounded-lg bg-default-200" />
            </Skeleton>
          </div>
        </Card>
      ))}
    </div>

  )
}
