import React from 'react'
import PropTypes from 'prop-types'
import styles from './ShowItem.module.css'
import { CONDITION_TEXT, DEFAULT_CONDITION_TEXT } from '../../i18n/item'
import { getDecimals } from '../../utils/common'

const ShowItem = ({ item }) => {
  return (
    <article className={styles.container}>
      <div className={styles.top}>
        <dl>
          <img alt={item.title} src={item.picture} />
        </dl>
        <dl className={styles.info}>
          <p>
            <span>
              {CONDITION_TEXT.spanish[item.condition] ||
                DEFAULT_CONDITION_TEXT.spanish}
              {' - '}
              {item.sold_quantity}
            </span>
          </p>
          <h3>{item.title}</h3>
          <p>
            ${Number(item.price.amount).toLocaleString()}
            <sup>{getDecimals(item.price.decimals)}</sup>
          </p>
          <button>Comprar</button>
        </dl>
      </div>
      <hr />
      <dl>
        <h1>Descripción del producto</h1>
        <p>{item.description}</p>
      </dl>
    </article>
  )
}

export default ShowItem

ShowItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    free_shipping: PropTypes.bool,
    condition: PropTypes.string,
    picture: PropTypes.string,
    price: PropTypes.shape({
      currency: PropTypes.string,
      amount: PropTypes.number,
      decimals: PropTypes.number
    }),
    sold_quantity: PropTypes.number,
    description: PropTypes.string
  })
}
