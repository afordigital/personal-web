import { useState, useEffect } from 'react'

export function useFetch (url, userToken, segmentAction, segmentData) {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    getData()
    async function getData () {
      const res = await fetch(url, {
        method: 'POST',
        headers: {
          Authorization: userToken,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ action: segmentAction, data: segmentData })
      }).catch(err => {
        setError(true)
      })
      const parseRes = await res.json()

      if (parseRes) {
        setData(parseRes.data)
      } else {
        setError(true)
      }

      return parseRes ? parseRes.data : null
    }
  }, [url])

  return { data, error }
}
