import { query } from '@pluginjs/dom'
import TimePicker from '@pluginjs/time-picker'

const htmlDOM = query('#range')
const elementstart = query('.time-picker-start', htmlDOM)
const elementfinish = query('.time-picker-finish', htmlDOM)
const elementrange = query('.time-picker-range', htmlDOM)

TimePicker.of(elementstart, {})
TimePicker.of(elementfinish, 'observeOtherTimePicker', {})
TimePicker.of(elementrange, { minTime: '10:00', maxTime: '22:00' })
