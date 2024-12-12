import { ExternalCatalog } from "../domain/ExternalCatalog";
import { InternalCatalog } from "../domain/InternalCatalog";

export const catalogAdapter = (externalCatalog: ExternalCatalog): InternalCatalog => {
  return {
    dates: externalCatalog.dates,
    page: externalCatalog.page,
    results: externalCatalog.results,
    total_pages: externalCatalog.total_pages,
    total_results: externalCatalog.total_results
  }
}