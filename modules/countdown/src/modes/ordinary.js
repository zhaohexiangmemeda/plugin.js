import { deepMerge } from '@pluginjs/utils'
import templateEngine from '@pluginjs/template'
import { append, parseHTML, prepend } from '@pluginjs/dom'
import { labelMap as LABELMAP } from '../constant'
import { updateDomValue } from '../util'

class Ordinary {
  constructor(instance) {
    this.options = deepMerge(instance.options.modes.ordinary)
    this.instance = instance
  }

  html(type, getLabel) {
    const wrap = []
    const label = []
    const number = []

    let $wrap
    let $number
    let $label

    wrap[type] = templateEngine.render(this.instance.options.templates.wrap(), {
      classes: this.instance.classes,
      labelType: getLabel.labelMap
    })

    label[type] = templateEngine.render(
      this.instance.options.templates.label(),
      {
        classes: this.instance.classes,
        text: getLabel.labelName
      }
    )

    number[type] = templateEngine.render(
      this.instance.options.templates.time(),
      {
        classes: this.instance.classes,
        labelType: getLabel.labelMap
      }
    )

    for (type in wrap) {
      if (Object.prototype.hasOwnProperty.call(wrap, type)) {
        $wrap = parseHTML(wrap[type])
        $number = parseHTML(number[type])
        $label = parseHTML(label[type])

        append($number, $wrap)

        if (this.instance.options.site === 'above') {
          prepend($label, $wrap)
        } else {
          append($label, $wrap)
        }

        append($wrap, this.instance.element)
      }
    }
  }

  animate(countDownTime, type) {
    const name = LABELMAP[type]

    updateDomValue(
      `.${this.instance.classes.NAMESPACE}-${name}`,
      this.instance.element,
      countDownTime.current
    )
  }
}

Ordinary.classes = { ORDINARY: '{namespace}-ordinary' }

export default Ordinary
