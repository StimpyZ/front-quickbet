import { Part } from "./types"

export interface ExternalCollection {
  id: number
  name: string
  overview: string
  poster_path: string
  backdrop_path: string
  parts: Part[]
}
