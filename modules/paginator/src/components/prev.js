import templateEngine from '@pluginjs/template'
import { deepMerge } from '@pluginjs/utils'
import { addClass, removeClass } from '@pluginjs/classes'
import { bindEvent, removeEvent } from '@pluginjs/events'
import { query } from '@pluginjs/dom'

class Prev {
  constructor(instance) {
    this.options = deepMerge(Prev.defaults, instance.options.components.prev)
    this.instance = instance
  }

  generate() {
    return templateEngine.render(this.options.template.call(this), {
      classes: this.instance.classes,
      label: this.instance.translate('prev')
    })
  }

  bind() {
    const instance = this.instance

    if (!this.prev) {
      this.prev = query(`.${instance.classes.PREV}`, instance.element)
    }
    bindEvent(
      {
        type: 'click',
        handler: instance.prev.bind(instance)
      },
      this.prev
    )

    bindEvent(
      {
        type: 'paginator:change',
        handler: ({
          detail: {
            instance,
            data: [page]
          }
        }) => {
          if (page === 1) {
            addClass(instance.classes.DISABLED, this.prev)
          } else {
            removeClass(instance.classes.DISABLED, this.prev)
          }
        }
      },
      instance.element
    )
  }

  unbind() {
    removeEvent('click', this.prev)
    removeEvent('paginator:change', this.instance.element)
  }
}

Prev.defaults = {
  template() {
    return '<li class="{classes.ITEM} {classes.PREV}"><a class="{classes.LINK}" alt="{label}"><i class="{classes.PREVICON}" aria-hidden="true"></i>Prev</a></li>'
  }
}

Prev.translations = {
  en: { prev: 'prev' },
  zh: { prev: '上一页' }
}

Prev.classes = {
  PREV: '{namespace}-prev',
  PREVICON: 'icon-arrow-left'
}

export default Prev
