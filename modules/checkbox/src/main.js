import Component from '@pluginjs/component'
import { deepMerge, curry, compose } from '@pluginjs/utils'
import is from '@pluginjs/is'
import template from '@pluginjs/template'
import { addClass, removeClass } from '@pluginjs/classes'
import {
  append,
  prepend,
  parseHTML,
  parent,
  wrap,
  unwrap,
  getObjData
} from '@pluginjs/dom'
import { bindEvent, removeEvent } from '@pluginjs/events'
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
  events as EVENTS,
  info as INFO,
  methods as METHODS,
  namespace as NAMESPACE
} from './constant'

const removeParentClass = curry((className, el) =>
  compose(removeClass(className), parent)(el)
)
const addParentClass = curry((className, el) =>
  compose(addClass(className), parent)(el)
)

@themeable()
@styleable(CLASSES)
@eventable(EVENTS)
@stateable()
@register(
  NAMESPACE,
  {
    defaults: DEFAULTS,
    methods: METHODS
  },
  INFO
)
class Checkbox extends Component {
  constructor(element, options = {}) {
    super(NAMESPACE, element)

    this.options = deepMerge(DEFAULTS, options, this.getDataOptions())

    this.$group = this.options.getGroup.call(this)

    if (
      this.$group.length > 1 ||
      (this.element.name &&
        this.element.name.indexOf('[]') === this.element.name.length - 2)
    ) {
      this.group = true
    } else {
      this.group = false
    }

    this.initClasses(CLASSES)
    this.initStates()
    this.initialize()
  }

  initialize() {
    this.createLabel()
    this.createWrap()
    this.createIcon()

    // update checked state based on checked prop
    this.update(false)
    if (this.element.disabled || this.options.disabled) {
      this.disable(false)
    }

    this.bind()

    this.enter('initialized')
    this.trigger(EVENTS.READY)
  }

  createWrap() {
    this.$wrap = this.options.getWrap.call(this)

    if (!this.$wrap) {
      const html = parseHTML(
        template.render(this.options.templates.wrap.call(this), {
          classes: this.classes
        })
      )

      wrap(html, this.element)
      this.$wrap = this.options.getWrap.call(this)
      append(this.$label, this.$wrap)
      this.enter('wrapped')
    }

    if (this.options.theme) {
      addClass(...this.getThemeClass().split(' '), this.$wrap)
    }
  }

  createLabel() {
    this.$label = this.options.getLabel.call(this)
  }

  createIcon() {
    this.$icon = this.options.getIcon.call(this)

    if (!this.$icon) {
      this.$icon = parseHTML(
        template.render(this.options.templates.icon.call(this), {
          classes: this.classes
        })
      )
      prepend(this.$icon, this.$label)
    }
  }

  set(value) {
    if (this.get().toString() !== value.toString()) {
      this.trigger(EVENTS.CHANGE, value)
    }
    if (this.group && is.array(value)) {
      this.$group.forEach(item => {
        const api = getObjData(NAMESPACE, item)
        if (!api) {
          return
        }
        if (value.includes(this.value)) {
          api.check(true, false)
        } else {
          // api.uncheck(true, false)
        }
      })
    } else if (this.element.value === value) {
      this.check(true, false)
    } else {
      this.uncheck(true, false)
    }
  }

  get() {
    if (this.group) {
      return this.$group
        .filter(el => el.matches(':checked'))
        .map(item => item.value)
    }
    if (this.element.checked) {
      return this.element.value
    }
    return ''
  }

  check(trigger = true, update = true) {
    if (!this.is('checked')) {
      this.enter('checked')

      addClass(this.classes.CHECKED, this.$wrap)
      if (trigger) {
        this.element.checked = true
        this.trigger(EVENTS.CHECK, this.element.value)
        if (update) {
          this.trigger(EVENTS.CHANGE, this.get())
        }
      }
    }
  }

  uncheck(trigger = true, update = true) {
    if (this.is('checked')) {
      this.leave('checked')

      removeClass(this.classes.CHECKED, this.$wrap)
      if (trigger) {
        this.element.checked = false
        this.trigger(EVENTS.UNCHECK, this.element.value)
        if (update) {
          this.trigger(EVENTS.CHANGE, this.get())
        }
      }
    }
  }

  toggle() {
    if (this.is('checked')) {
      this.uncheck()
    } else {
      this.check()
    }
  }

  bind() {
    bindEvent(
      {
        type: this.eventName('click'),
        handler: () => {
          if (this.is('disabled')) {
            return
          }

          this.toggle()
        }
      },
      this.element
    )
  }

  unbind() {
    removeEvent(this.eventName(), this.element)
  }

  val(value) {
    if (is.undefined(value)) {
      return this.get()
    }

    return this.set(value)
  }

  enable(trigger = true) {
    if (this.is('disabled')) {
      this.$group.forEach(element => {
        compose(removeParentClass(this.classes.DISABLED))(element)
        element.disabled = false
      })
      // this.$wrap.removeClass(this.classes.CHECKED);
      // this.$wrap.removeClass(this.classes.DISABLED);
      // this.$element.prop('disabled', null);
      this.leave('disabled')
    }

    if (trigger) {
      this.trigger(EVENTS.ENABLE)
    }
  }

  disable(trigger = true) {
    if (!this.is('disabled')) {
      // this.$group.forEach(element => {
      //   addParentClass(this.classes.DISABLED, element)
      //   element.disabled = true
      // })
      addParentClass(this.classes.DISABLED, this.element)
      this.element.disabled = true
      // this.$wrap.addClass(this.classes.DISABLED);
      // this.$element.prop('disabled', true);
      this.enter('disabled')
    }

    if (trigger) {
      this.trigger(EVENTS.DISABLE)
    }
  }

  // update self status based on checked prop
  update(trigger = true) {
    const checked = this.element.checked
    if (checked !== this.is('checked')) {
      if (checked) {
        this.check(trigger)
      } else {
        this.uncheck(trigger)
      }
    }
  }

  destroy() {
    if (this.is('initialized')) {
      if (this.options.theme) {
        removeClass(this.getThemeClass(), this.$wrap)
      }
      removeClass(this.classes.DISABLED, this.$wrap)
      removeClass(this.classes.CHECKED, this.$wrap)
      if (this.is('wrapped')) {
        unwrap(this.element)
        this.$icon.remove()
      }
      this.unbind()
      this.leave('initialized')
    }

    this.trigger(EVENTS.DESTROY)
    super.destroy()
  }
}

export default Checkbox
