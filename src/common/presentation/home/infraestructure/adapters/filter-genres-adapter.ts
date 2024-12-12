import { BaseProps } from "@/common/config/base/BaseRepository";
import { InternalSearch } from "../../domain/search/InternalSearch.interface";
import { ExternalSearch } from "../../domain/search/ExternalSearch.interface";
import { http } from "@/common/config/connection/HttpBack";
import { searchAdapter } from "./search-adapters";

export interface IFilterGenresProps {
  id: number | null;
  page?: number;
}

type FetchFilterGenres = IFilterGenresProps & Omit<BaseProps, "signal">;

export const fetchFilterGenres = ({
  endpoint,
  page = 1,
}: FetchFilterGenres): Promise<InternalSearch> => {
  const params = new URLSearchParams();
  Object.entries({ page }).forEach(([key, value]) => {
    if (value !== undefined && value !== null) {
      params.append(key, value.toString());
    }
  });
  return http
    .get<ExternalSearch>({
      endpoint: `${endpoint}?${params.toString()}`,
    })
    .then((response) => {
      return searchAdapter(response);
    });
}