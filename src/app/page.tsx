'use client'

import Layout from '@/common/layouts/Layout'
import useHome from '@/common/presentation/home/presentation/view-model/useHome'
import Catalog from '@/quickbet/catalog/presentation/Catalog'
import FilterSidebar from '@/quickbet/filter-sidebar/presentation/FilterSidebar'

export default function Home() {
  const { ...props } = useHome()
  return (
    <Layout>
      <div className="flex h-full">
        <FilterSidebar
          handleSelectGenre={props.handleSelectGenre}
          handleSearch={props.handleSearch}
          searchParams={props.searchParams}
        />
        <div className="p-4 overflow-x-auto h-full">
          <Catalog search={props.dataSearch} loading={props.isLoading} />
        </div>
      </div>
    </Layout>
  )
}
