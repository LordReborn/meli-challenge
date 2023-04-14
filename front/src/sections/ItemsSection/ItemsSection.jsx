import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { settings } from '../../settings'

const ItemsSection = () => {
  const [data, setData] = useState(null)
  const [searchParams] = useSearchParams()

  useEffect(() => {
    const abortController = new AbortController()

    const getData = async () => {
      const query = searchParams.get('q')
      const url = `${settings.API_URL}/api/items?q=${query}`
      try {
        const res = await fetch(url, { signal: abortController.signal })
        const json = await JSON.parse(res)
        setData(json)
      } catch (e) {
        console.error(e)
      }
    }

    getData()

    return () => {
      abortController.abort()
    }
  }, [searchParams])

  return <div>ItemsSection</div>
}

export default ItemsSection
