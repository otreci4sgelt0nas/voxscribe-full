import useSWR from 'swr'
import { SessionData } from './session'

const fetcher = (url: string) => fetch(url).then((res) => res.json())

export function useUser() {
  const { data, error, mutate } = useSWR<SessionData>('/api/session', fetcher)

  return {
    user: data,
    isLoading: !error && !data,
    isError: error,
    mutate,
  }
}
