import is from '@pluginjs/is'
import template from '@pluginjs/template'
import { addClass, removeClass, hasClass } from '@pluginjs/classes'
import { queryAll, parseHTML } from '@pluginjs/dom'
import { bindEvent } from '@pluginjs/events'

export default class TextTransform {
  constructor(instance) {
    this.instance = instance
    this.values = instance.options.textTransform.values
    this.defaultValue = instance.options.textTransform.value

    this.initialize()
  }

  initialize() {
    const that = this

    const html = template.compile(
      this.instance.options.textTransform.template()
    )({ namespace: this.instance.classes.NAMESPACE })
    this.$TextTransform = parseHTML(html)
    this.instance.$typoDecorations.append(...this.$TextTransform)

    this.$items = queryAll(
      `.${this.instance.classes.NAMESPACE}-textTransform`,
      this.instance.$expandPanel
    )

    this.values.forEach((value, key) => {
      if (that.$items[key]) {
        that.$items[key].dataset.textTransform = value
      }
    })

    const value = !is.undefined(this.instance.value.textTransform)
      ? this.instance.value.textTransform
      : this.defaultValue
    this.set(value)
    this.bind()
  }

  set(value) {
    this.$items.map(removeClass(this.instance.classes.ACTIVE))

    if (value === '') {
      this.instance.value.textTransform = this.defaultValue
    } else {
      for (let i = 0; i < this.values.length; i++) {
        if (value === this.values[i]) {
          this.instance.value.textTransform = value
          addClass(this.instance.classes.ACTIVE, this.$items[i])
        }
      }
    }

    return
  }

  clear() {
    this.set(this.defaultValue)
  }

  bind() {
    const that = this
    this.$items.map(
      bindEvent({
        type: 'click',
        handler: ({ target }) => {
          if (that.instance.is('disabled')) {
            return null
          }

          const transform = target.dataset.textTransform
          if (hasClass(that.instance.classes.ACTIVE, target)) {
            removeClass(that.instance.classes.ACTIVE, target)
            that.instance.value.textTransform =
              that.instance.options.textTransform.defaultValue
          } else {
            that.set(transform)
          }

          return null
        }
      })
    )
  }
}
