import { Dates, Result } from "./types"

export interface ExternalCatalog {
  dates: Dates
  page: number
  results: Result[]
  total_pages: number
  total_results: number
}
