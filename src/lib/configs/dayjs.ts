import dayjs from 'dayjs'
import duration from 'dayjs/plugin/duration'
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore'

import 'dayjs/locale/id'

dayjs.extend(isSameOrBefore)
dayjs.extend(duration)
