const { sanitize } = require('./common')

const adapter = (() => {
  const list = (data) => {
    const author = { name: 'Jonás', lastname: 'Aguilar' }
    const categories =
      data.filters[0].values[0].path_from_root?.map(
        (categorie) => categorie.name
      ) || []
    const items = data.results.map((item) => {
      const [amount, decimals] = `${item.price}`.split('.')
      return {
        id: item.id,
        title: item.title,
        price: {
          currency: item.currency_id,
          amount: parseInt(amount),
          decimals: parseInt(decimals || 0)
        },
        picture: item.thumbnail,
        condition: item.condition,
        free_shipping: item.shipping.free_shipping,
        location: sanitize(item.address.city_name)
      }
    })
    return { author, categories, items }
  }

  const show = ([itemData, description]) => {
    const [amount, decimals] = `${itemData.price}`.split('.')

    const author = { name: 'Jonás', lastname: 'Aguilar' }
    const item = {
      id: itemData.id,
      title: itemData.title,
      price: {
        currency: itemData.currency_id,
        amount: parseInt(amount),
        decimals: parseInt(decimals)
      },
      picture: itemData.pictures[0].url,
      condition: itemData.condition,
      free_shipping: itemData.shipping.free_shipping,
      sold_quantity: itemData.sold_quantity,
      description: description.plain_text
    }
    return { author, item }
  }

  return { list, show }
})()

module.exports = adapter
