export const getDecimals = (decimals) => {
  if (!decimals) return '00'
  if (decimals.length === 2) return `${decimals}0`
  return `${decimals}`
}

export const isObjectEmpty = (objectName) => {
  return objectName && Object.keys(objectName).length === 0
}
