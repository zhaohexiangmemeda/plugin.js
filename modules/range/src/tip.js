import is from '@pluginjs/is'

import { addClass, removeClass } from '@pluginjs/classes'
import { setStyle } from '@pluginjs/styled'
import { bindEvent } from '@pluginjs/events'
import { append, parseHTML } from '@pluginjs/dom'

class tip {
  constructor(instance) {
    this.defaults = { active: 'always' }
    this.init(instance)
  }

  init(instance) {
    const that = this
    const opts = Object.assign({}, this.defaults, instance.options.tip)

    this.opts = opts
    this.classes = {
      tip: instance.classes.TIP,
      show: instance.classes.SHOW
    }

    instance.pointer.map((p, i) => {
      const tip = parseHTML('<span></span>')
      append(tip, instance.pointer[i].element)

      addClass(that.classes.tip, tip)
      if (that.opts.active === 'onMove') {
        setStyle({ display: 'none' }, tip)
        bindEvent(
          {
            type: `${instance.plugin}:moveEnd`,
            handler: () => {
              that.hide(tip)
              return false
            }
          },
          p.element
        )
        bindEvent(
          {
            type: `${instance.plugin}:moveStart`,
            handler: () => {
              // const pointer = e.detail
              that.show(tip)
              return false
            }
          },
          p.element
        )
      }

      bindEvent(
        {
          type: `${instance.plugin}:move`,
          handler: () => {
            let value
            if (instance.options.isRange) {
              value = instance.getPointerVal()[i]
            } else {
              value = instance.getPointerVal()
            }
            if (is.function(instance.options.format)) {
              if (instance.options.replaceFirst && !is.number(value)) {
                if (is.string(instance.options.replaceFirst)) {
                  value = instance.options.replaceFirst
                }
                if (is.object(instance.options.replaceFirst)) {
                  for (const key in instance.options.replaceFirst) {
                    if (
                      Object.hasOwnProperty(instance.options.replaceFirst, key)
                    ) {
                      value = instance.options.replaceFirst[key]
                    }
                  }
                }
              } else if (!instance.is('units') && !instance.options.isRange) {
                value = instance.options.format(value)
              }
            }
            tip.textContent = value
            // return false
          }
        },
        p.element
      )
    })
  }

  show(tip) {
    addClass(this.classes.show, tip)
    setStyle({ display: 'block' }, tip)
  }

  hide(tip) {
    removeClass(this.classes.show, tip)
    setStyle({ display: 'none' }, tip)
  }

  static init(instance) {
    return new tip(instance)
  }
}

export default tip
