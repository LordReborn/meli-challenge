import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { settings } from '../../settings'

const ItemSection = () => {
  const [data, setData] = useState(null)
  const { id } = useParams()

  useEffect(() => {
    const abortController = new AbortController()

    const getData = async () => {
      const url = `${settings.API_URL}/api/items/${id}`
      try {
        const res = await fetch(url, { signal: abortController.signal })
        const json = await res.json()
        setData(json)
      } catch (e) {
        console.error(e)
      }
    }

    getData()

    return () => {
      abortController.abort()
    }
  }, [id])

  return <div></div>
}

export default ItemSection
