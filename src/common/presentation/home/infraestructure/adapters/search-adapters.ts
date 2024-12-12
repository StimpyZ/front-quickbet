import { ExternalSearch } from "../../domain/search/ExternalSearch.interface"
import { InternalSearch } from "../../domain/search/InternalSearch.interface"


export const searchAdapter = (externalSearch: ExternalSearch): InternalSearch => {
  return {
    page: externalSearch.page,
    results: externalSearch.results,
    total_pages: externalSearch.total_pages,
    total_results: externalSearch.total_results,
  }
}