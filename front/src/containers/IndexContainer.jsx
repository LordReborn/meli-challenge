import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from '../components'
import styles from './IndexContainer.module.css'

const IndexContainer = () => {
  return (
    <>
      <Header />
      <main className={styles.container}>
        <Outlet />
      </main>
    </>
  )
}

export default IndexContainer
