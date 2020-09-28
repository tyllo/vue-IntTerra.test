import TDate from '@/models/TDate'


const getKey = (date: TDate) => `${date.year}-${date.month}-${date.day}`

export const dateComparator = (a: TDate, b: TDate): -1|0|1 => {
  const keyA = getKey(a)
  const keyB = getKey(b)

  // eslint-disable-next-line no-nested-ternary
  return (keyA === keyB) ? 0 : keyA > keyB ? 1 : -1
}
