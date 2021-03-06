const namespace = 'pj-swipeable'

const events = {
  READY: 'ready',
  ENABLE: 'enable',
  DISABLE: 'disable',
  DESTROY: 'destroy',
  DRAGSTART: 'dragstart',
  DRAGMOVE: 'dragmove',
  DRAGEND: 'dragend',
  RESIZE: 'resize',
  DECAYMOVEEND: 'decaymoveend'
}

const classes = {
  NAMESPACE: `${namespace}`,
  CONTAINER: '{namespace}-container',
  VERTICAL: '{namespace}-vertical',
  DISABLED: '{namespace}-disabled'
}

const methods = ['enable', 'disable', 'destroy']

const defaults = {
  container: null,
  rebound: false,
  reboundPos: 100, // 1%~100% (without %)
  offset: 0,
  duration: 400,
  power: 2,
  decay: false,
  axis: 'x' // 'x' or 'y'
}

const dependencies = ['Hammer', 'anime']

const info = { version: '0.0.1' }

export { namespace, classes, defaults, events, methods, dependencies, info }
