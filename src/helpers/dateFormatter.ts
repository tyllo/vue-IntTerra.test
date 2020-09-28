import moment from 'moment'
import TDate from '@/models/TDate'

moment.locale('ru')


export const dateFormatter = (date: TDate) => [
  date.day,
  moment().month(date.month).format('MMMM').slice(0, 3),
  date.year,
].join(' ')
