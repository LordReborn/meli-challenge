import React from 'react'
import { Outlet } from 'react-router-dom'

const IndexContainer = () => {
  return (
    <>
    <header>
        <div>Logo</div>
        <div>Search</div>
    </header>
    <main>
        <Outlet/>
    </main>
    </>
  )
}

export default IndexContainer
