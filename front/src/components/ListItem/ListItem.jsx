import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import styles from './ListItem.module.css'

const ListItem = ({ item }) => {
  return (
    <Link className={styles.container} to={`/items/${item.id}`}>
      <article>
        <div className={styles.imageContainer}>
          <img alt={item.title} src={item.picture} />
        </div>
        <div className={styles.info}>
          <data className={styles.prices} value={`$${item.prices.amount}`}>
            ${Number(item.prices.amount).toLocaleString()}
          </data>
          <span className={styles.title}>{item.title}</span>
        </div>
        <div className={styles.address}>
          <span>{item.location}</span>
        </div>
      </article>
      <br />
    </Link>
  )
}

export default ListItem

ListItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    free_shipping: PropTypes.bool,
    condition: PropTypes.string,
    picture: PropTypes.string,
    prices: PropTypes.shape({
      currency: PropTypes.string,
      amount: PropTypes.number,
      decimals: PropTypes.number
    }),
    location: PropTypes.string
  })
}
