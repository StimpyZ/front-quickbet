import { Result } from "@/quickbet/catalog/domain/types"


export interface ExternalSearch {
  page: number
  results: Result[]
  total_pages: number
  total_results: number
}
