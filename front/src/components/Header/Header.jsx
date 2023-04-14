import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styles from './Header.module.css'

const Header = () => {
  const [search, setSearch] = useState('')
  const navigator = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    navigator(`/items?q=${search}`)
  }

  return (
    <header className={styles.header}>
      <Link to="/" />
      <form onSubmit={handleSubmit}>
        <input
          value={search}
          onChange={({ target }) => setSearch(target.value)}
          placeholder="Nunca dejes de buscar"
        />
        <button>Buscar </button>
      </form>
    </header>
  )
}

export default Header
