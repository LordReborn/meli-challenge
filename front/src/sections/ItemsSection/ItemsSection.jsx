import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Breadcrumbs, ListItems } from '../../components'
import { settings } from '../../settings'
import { isObjectEmpty } from '../../utils/common'

const ItemsSection = () => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [searchParams] = useSearchParams()

  useEffect(() => {
    const abortController = new AbortController()

    const getData = async () => {
      const query = searchParams.get('q')
      const url = `${settings.API_URL}/api/items?q=${query}`
      setLoading(true)
      try {
        const res = await fetch(url, { signal: abortController.signal })
        const json = await res.json()
        setData(json)
      } catch (e) {
        console.error(e)
      } finally {
        setLoading(false)
      }
    }

    getData()

    return () => {
      abortController.abort()
    }
  }, [searchParams])

  if (loading) return <h2>Cargando ...</h2>

  if (isObjectEmpty(data)) return <h2>Sin resultados</h2>

  return (
    <>
      <Breadcrumbs categories={data?.categories} />
      <ListItems items={data?.items} />
    </>
  )
}

export default ItemsSection
