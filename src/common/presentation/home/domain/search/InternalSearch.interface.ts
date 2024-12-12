import { Result } from "@/quickbet/catalog/domain/types"


export interface InternalSearch {
  page: number
  results: Result[]
  total_pages: number
  total_results: number
}
