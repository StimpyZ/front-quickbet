import { AxiosResponse } from 'axios'

export interface RequestCallEntity<T> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  call: Promise<AxiosResponse<T, any> | null>
  controller?: AbortController
}
