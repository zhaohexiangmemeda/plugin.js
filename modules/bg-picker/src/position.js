import is from '@pluginjs/is'
import template from '@pluginjs/template'
import {
  parseHTML,
  insertAfter,
  query,
  queryAll,
  parentWith
} from '@pluginjs/dom'
import { removeClass, addClass } from '@pluginjs/classes'
import { setStyle } from '@pluginjs/styled'
import { bindEvent } from '@pluginjs/events'

export default class Position {
  constructor(instance) {
    this.instance = instance
    this.values = instance.options.position.values
    this.defaultValue = instance.options.position.defaultValue

    this.initialize()
  }

  initialize() {
    const html = template.compile(this.instance.options.position.template())({
      namespace: this.instance.classes.NAMESPACE,
      bgPosition: this.instance.translate('bgPosition')
    })

    this.$Position = parseHTML(html)
    insertAfter(this.$Position, this.instance.$imageWrap)

    this.$position = query(
      `.${this.instance.classes.NAMESPACE}-position`,
      this.instance.$expandPanel
    )
    this.$items = queryAll('li', this.$position)
    this.values.forEach((value, key) => {
      this.$items[key].dataset.position = value
    })

    const value = !is.undefined(this.instance.value.position)
      ? this.instance.value.position
      : this.defaultValue
    this.set(value)

    this.bind()
  }

  set(value) {
    let found = false
    this.$items.map(removeClass(this.instance.classes.ACTIVE))
    for (let i = 0; i < this.values.length; i++) {
      if (value === this.values[i]) {
        this.instance.value.position = value
        addClass(this.instance.classes.ACTIVE, this.$items[i])
        setStyle({ 'background-position': value }, this.instance.$image)
        setStyle({ 'background-position': value }, this.instance.$infoImage)
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
          const value = el.dataset.position
          this.set(value)
          // that.instance.update();
          return false
        }
      },
      this.$position
    )
  }
}
