import { useEffect, useState } from "react"

interface FetchState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

export function useFetch<T>(url: string): FetchState<T> {
  const [state, setState] = useState<FetchState<T>>({
    data: null,
    loading: true,
    error: null,
  })

  
  useEffect(() => {
   
    setState({ data: null, loading: true, error: null })

    let cancelled = false

    async function fetchData() {
      try {
        const res = await fetch(url)

        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`)
        }

        const json: T = await res.json()

        if (!cancelled) {
          setState({ data: json, loading: false, error: null })
        }

      } catch (err) {
        if (!cancelled) {
          setState({
            data: null,
            loading: false,
            error: err instanceof Error ? err.message : "Unknown error",
          })
        }
      }
    }

    fetchData()

    return () => {
      cancelled = true
    }

  }, [url]) 

  return state
}