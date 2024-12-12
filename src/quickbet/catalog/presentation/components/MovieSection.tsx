import { InternalCatalog } from "../../domain/InternalCatalog";
import MovieCard from "./MovieCard";
import SkeletonMovieCard from "./SkeletonMovieCard";
import '../css/MovieSection.css';
import { Result } from "../../domain/types";
import { InternalSearch } from "@/common/presentation/home/domain/search/InternalSearch.interface";


interface MovieSectionProps {
  title: string;
  data: InternalCatalog | Result[] | InternalSearch | undefined;
  isLoading: boolean;
}

export default function MovieSection({ title, data, isLoading }: MovieSectionProps) {
  return (
    <>
      <h2 className='font-bold text-lg mb-2'>{title}</h2>
      {isLoading ? (
        <SkeletonMovieCard count={7} />
      ) : (
        <div className='flex overflow-x-auto overflow-visible custom-scrollbar mb-3' aria-label={`${title} movies`}>
          {Array.isArray(data) ? (
            data.map(movie => (
              <MovieCard key={movie.id} {...movie} />
            ))
          ) : (
            data?.results.map(movie => (
              <MovieCard key={movie.id} {...movie} />
            ))
          )}
        </div>
      )}
    </>
  )
}
