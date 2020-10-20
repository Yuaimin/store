// 格式化金额
export const formatPrice = (val: number) => {
  const str = `${val.toFixed(2)}`
  const intSum = str.substring(0, str.indexOf('.')).replace(/\B(?=(?:\d{3})+$)/g, ',')
  const dot = str.substring(str.length, str.indexOf('.'))
  const ret = intSum + dot
  return ret
}
