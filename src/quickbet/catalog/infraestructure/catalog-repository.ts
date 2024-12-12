import { BaseProps } from "@/common/config/base/BaseRepository"
import { InternalCatalog } from "../domain/InternalCatalog"
import { http } from "@/common/config/connection/Http"
import { ExternalCatalog } from "../domain/ExternalCatalog"
import { catalogAdapter } from "./catalog-adapter"

export interface ICatalogProps {
  language?: string
  page?: number
  region?: string
}

type FetchCatalog = ICatalogProps & Omit<BaseProps, 'signal'>

export const fetchCatalog = ({
  endpoint,
  language = 'en-US',
  page = 1,
  ...catalogProps
}:FetchCatalog) : Promise<InternalCatalog> => {
  const params = new URLSearchParams()
  Object.entries({ language, page, ...catalogProps }).forEach(([key, value]) => {
    if (value !== undefined && value !== '') {
      params.append(key, value.toString());
    }
  });
  return http.get<ExternalCatalog>({
    endpoint: `${endpoint}?${params.toString()}`
  }).then(response => {
    return catalogAdapter(response)
  })
}