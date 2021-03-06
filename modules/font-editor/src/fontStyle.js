import template from '@pluginjs/template'
import { parseHTML } from '@pluginjs/dom'
import { removeClass, addClass } from '@pluginjs/classes'
import { bindEvent } from '@pluginjs/events'

export default class FontStyle {
  constructor(instance) {
    this.instance = instance
    this.value = instance.options.fontStyle.value
    this.defaultValue = instance.options.fontStyle.value

    this.initialize()
  }

  initialize() {
    const html = template.compile(this.instance.options.fontStyle.template())({
      namespace: this.instance.classes.NAMESPACE
    })
    this.$FontStyle = parseHTML(html)
    this.instance.$typoDecorations.append(this.$FontStyle)

    this.$FontStyle.dataset.fontStyle = this.value

    this.set(this.value)

    this.bind()
  }

  set(value) {
    if (value === 'normal') {
      removeClass(this.instance.classes.ACTIVE, this.$FontStyle)
      this.instance.value.fontStyle = 'normal'
    } else {
      addClass(this.instance.classes.ACTIVE, this.$FontStyle)
      this.instance.value.fontStyle = 'italic'
    }
  }

  clear() {
    this.set(this.defaultValue)
  }

  bind() {
    const that = this
    bindEvent(
      {
        type: 'click',
        handler: () => {
          if (that.instance.is('disabled')) {
            return this
          }
          const $this = $(this)
          if (that.instance.value.fontStyle === 'normal') {
            that.instance.value.fontStyle = 'italic'
            $this.addClass(that.instance.classes.ACTIVE)
          } else {
            that.instance.value.fontStyle = 'normal'
            $this.removeClass(that.instance.classes.ACTIVE)
          }
          return null
        }
      },
      this.$FontStyle
    )
  }
}
