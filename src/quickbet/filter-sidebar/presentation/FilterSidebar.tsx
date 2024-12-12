'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import useFilterSidebar from './view-model/useFilterSidebar'
import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons'
import { Input, Select, SelectItem } from '@nextui-org/react'

interface FilterSidebarProps {
  handleSearch: (search: string) => void
  searchParams: URLSearchParams
  handleSelectGenre: (genre: number) => void
}

export default function FilterSidebar({ handleSearch, searchParams, handleSelectGenre }: FilterSidebarProps) {

  const { isOpen, sidebarRef, toggleSidebar, genresData, isLoadingGenres } = useFilterSidebar()
  return (
    <>
      <button
        className="md:hidden fixed py-1 px-2 bottom-0 z-50 bg-yellow-variant rounded-full mx-1"
        onClick={toggleSidebar}
      >
        <FontAwesomeIcon icon={faBars} size='xl' />
      </button>
      <aside
        ref={sidebarRef}
        className={`bg-primary-dark min-w-[300px] md:relative fixed top-0 ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 transition-transform duration-300 ease-in-out h-full md:h-auto z-[1000] md:z-0 p-4 dark`}>
        <div className='flex flex-col gap-4 sticky md:top-20'>
          <h2>Search</h2>
          <Input
            onChange={(e) => handleSearch(e.target.value as string)}
            endContent={
              <FontAwesomeIcon icon={faSearch} size='sm' color='white' />
            }
            labelPlacement="outside"
            placeholder="Venom..."
            type="text"
            defaultValue={searchParams.get('query')?.toString()}
          />
          <h2>Filter by genres</h2>
          {isLoadingGenres ? <p>Loading...</p> : (
            <Select
              onChange={(genre) => handleSelectGenre(Number(genre.target.value))}
              aria-label='Genres'
              className="max-w-xs"
              items={[{ id: 0, label: 'ALL' }, ...(genresData?.genres || [])]}
              placeholder="Select an genre"
            >
              {(genres) => <SelectItem className='dark'>{genres.label}</SelectItem>}
            </Select>
          )}
        </div>
      </aside>
    </>
  )
}
