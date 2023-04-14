import React from 'react'
import PropTypes from 'prop-types'
import styles from './Breadcrumbs.module.css'

const Breadcrumbs = ({ categories = [] }) => {
  return (
    <div className={styles.container}>
      {categories.map((category) => (
        <span key={`breadcrum-${category.replace(' ', '-')}`}>{category}</span>
      ))}
    </div>
  )
}

export default Breadcrumbs

Breadcrumbs.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string)
}
