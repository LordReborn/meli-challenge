import React from 'react'
import PropTypes from 'prop-types'
import ListItem from '../ListItem/ListItem'

const ListItems = ({ items = [] }) => {
  if (!items.length) return null

  return (
    <section>
      {items.map((item) => (
        <ListItem key={`item-list-${item?.id}`} item={item} />
      ))}
    </section>
  )
}

export default ListItems

ListItems.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      free_shipping: PropTypes.bool,
      condition: PropTypes.string,
      picture: PropTypes.string,
      prices: PropTypes.shape({
        currency: PropTypes.string,
        amount: PropTypes.number,
        decimals: PropTypes.number
      })
    })
  )
}
