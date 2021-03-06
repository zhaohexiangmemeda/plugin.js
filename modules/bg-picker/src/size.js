import is from '@pluginjs/is'
import template from '@pluginjs/template'
import { addClass, removeClass } from '@pluginjs/classes'
import {
  query,
  queryAll,
  parseHTML,
  parentWith,
  insertAfter
} from '@pluginjs/dom'
import { bindEvent } from '@pluginjs/events'
import { setStyle } from '@pluginjs/styled'

export default class Size {
  constructor(instance) {
    this.instance = instance
    this.values = instance.options.size.values
    this.defaultValue = instance.options.size.defaultValue

    this.initialize()
  }

  initialize() {
    const html = template.compile(this.instance.options.size.template())({
      namespace: this.instance.classes.NAMESPACE,
      bgSize: this.instance.translate('bgSize')
    })

    this.$Size = parseHTML(html)
    insertAfter(this.$Size, this.instance.$imageWrap)

    this.$size = query(
      `.${this.instance.classes.NAMESPACE}-size`,
      this.instance.$expandPanel
    )
    this.$items = queryAll('li', this.$size)

    this.values.forEach((value, key) => {
      this.$items[key].dataset.size = value
    })

    const value = !is.undefined(this.instance.value.size)
      ? this.instance.value.size
      : this.defaultValue
    this.set(value)

    this.bind()
  }

  set(value) {
    let found = false
    this.$items.map(removeClass(this.instance.classes.ACTIVE))
    for (let i = 0; i < this.values.length; i++) {
      if (value === this.values[i]) {
        this.instance.value.size = value
        addClass(this.instance.classes.ACTIVE, this.$items[i])
        setStyle({ 'background-size': value }, this.instance.$image)
        setStyle({ 'background-size': value }, this.instance.$infoImage)
        found = true
      }
    }
    if (!found) {
      this.set(this.defaultValue)
    }
  }

  clear() {
    this.set(this.defaultValue)
  }

  bind() {
    bindEvent(
      {
        type: 'click',
        identity: { type: 'tagName', value: 'li' },
        handler: ({ target }) => {
          const el =
            target.tagName === 'LI'
              ? target
              : parentWith(el => el.tagName === 'LI', target)
          if (this.instance.disabled) {
            return null
          }
          const value = el.dataset.size
          this.set(value)
          // that.instance.update();
          return false
        }
      },
      this.$size
    )
  }
}
