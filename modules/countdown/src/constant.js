export const namespace = 'countdown'

export const classes = {
  NAMESPACE: `pj-${namespace}`,
  DISABLED: '{namespace}-disabled',
  MODE: '{namespace}-{mode}',
  TIME: `${namespace}-time`,
  NUMBER: `${namespace}-number`,
  LABEL: `${namespace}-label`
}

export const events = {
  READY: 'ready',
  ENABLE: 'enable',
  DISABLE: 'disable',
  DESTROY: 'destroy',
  START: 'start',
  STOP: 'stop'
}

export const methods = ['init', 'enable', 'disable', 'destroy']

export const labelMap = {
  Y: 'years',
  M: 'months',
  W: 'weeks',
  WM: 'weeks', // weekToMonths
  DM: 'days', // dayToMonths
  DW: 'days', // dayToWeeks
  TS: 'seconds', // totalMinutes
  TM: 'minutes', // totalMinutes
  TH: 'hours', // totalMinutes
  d: 'days',
  h: 'hours',
  m: 'minutes',
  s: 'seconds'
}

export const defaults = {
  mode: 'ordinary', // 'ordinary','flip','progress
  modes: {
    ordinary: {},

    flip: {
      flipClass: {
        CURR: `${namespace}-curr`,
        NEXT: `${namespace}-next`,
        TOP: `${namespace}-top`,
        BOTTOM: `${namespace}-bottom`,
        FLIP: `${namespace}-flip`
      }
    },
    progress: {
      size: 100, // progress circle size
      barcolor: '#ccc', // progress circle base color
      barsize: 4, // progress circle bar size
      trackcolor: '#55a4f2' // progress circle bar color
    }
  },
  format: 'd,h,m,s',
  label: true, // "天,时，分，秒"
  site: 'under', // under | above
  due: '2018-12-28 19:32:28', // scheduled time
  now: new Date(), // now time
  templates: {
    wrap() {
      return '<div class="{classes.TIME} {labelType}"></div>'
    },
    label() {
      return '<span class="{classes.LABEL}">{text}</span>'
    },
    time() {
      return '<span class="{classes.NUMBER} {classes.NAMESPACE}-{labelType}"></span>'
    }
  }
}

export const info = { version: '0.2.2' }
