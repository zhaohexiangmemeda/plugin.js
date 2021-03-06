import templateEngine from '@pluginjs/template'
import is from '@pluginjs/is'
import { deepMerge } from '@pluginjs/utils'
import { query } from '@pluginjs/dom'
import { removeClass } from '@pluginjs/classes'
import { bindEvent } from '@pluginjs/events'
import {
  eventable,
  register,
  stateable,
  styleable,
  themeable
} from '@pluginjs/pluginjs'
import {
  classes as CLASSES,
  defaults as DEFAULTS,
  dependencies as DEPENDENCIES,
  events as EVENTS,
  info as INFO,
  methods as METHODS,
  namespace as NAMESPACE
} from './constant'
import Tooltip from '@pluginjs/tooltip'

const optionsExtendTooltip = deepMerge(Tooltip.defaults, DEFAULTS)
/* Credit to bootstrap popover http://getbootstrap.com MIT */
@themeable()
@styleable(CLASSES)
@eventable(EVENTS)
@stateable()
@register(
  NAMESPACE,
  {
    defaults: optionsExtendTooltip,
    methods: METHODS,
    dependencies: DEPENDENCIES
  },
  INFO
)
class Popover extends Tooltip {
  constructor(element, options = {}, namespace, defaults, classes) {
    if (!is.string(namespace)) {
      namespace = NAMESPACE
    }

    if (is.undefined(defaults)) {
      defaults = optionsExtendTooltip
    }

    if (is.undefined(classes)) {
      classes = CLASSES
    }

    super(element, options, namespace, defaults, classes)

    this.initClasses(CLASSES)
  }

  createTip() {
    let close = ''

    if (this.options.close) {
      close = templateEngine.render(this.options.templates.close.call(this), {
        classes: this.classes
      })
    }

    const title = templateEngine.render(
      this.options.templates.title.call(this),
      { classes: this.classes }
    )
    const content = templateEngine.render(
      this.options.templates.content.call(this),
      { classes: this.classes }
    )

    return templateEngine.render(this.options.template.call(this), {
      classes: this.classes,
      custom: this.options.custom.call(this),
      close,
      title,
      content
    })
  }

  isWithContent() {
    return this.getTitle() || this.getContent()
  }

  getContent() {
    return (
      this.element.getAttribute('data-content') ||
      (typeof this.options.content === 'function'
        ? this.options.content.call(this.element)
        : this.options.content)
    )
  }

  setContent() {
    const $tip = this.getTip()

    // we use append for html objects to maintain js events
    const title = this.getTitle()
    const content = this.getContent()

    this.setElementContent(query(`.${this.classes.TITLE}`, $tip), title)
    this.setElementContent(query(`.${this.classes.CONTENT}`, $tip), content)

    if (this.options.close) {
      bindEvent(
        {
          type: this.eventName('click'),
          handler: () => {
            this.hide()
          }
        },
        query(`.${this.classes.CLOSE}`, $tip)
      )
    }
    removeClass(this.classes.SHOW, $tip)
    removeClass(this.classes.FADE, $tip)

    this.cleanupPopper()
  }
}

export default Popover
