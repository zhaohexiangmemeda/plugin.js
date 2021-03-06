import { deepMerge } from '@pluginjs/utils'
import Component from '@pluginjs/component'
import DROPDOWN from '@pluginjs/dropdown'
import is from '@pluginjs/is'
import { addClass, removeClass } from '@pluginjs/classes'
import { bindEvent, removeEvent } from '@pluginjs/events'
import {
  append,
  parseHTML,
  query,
  queryAll,
  insertBefore,
  insertAfter
} from '@pluginjs/dom'
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

@themeable()
@styleable(CLASSES)
@eventable(EVENTS)
@stateable()
@register(
  NAMESPACE,
  {
    defaults: DEFAULTS,
    methods: METHODS,
    dependencies: DEPENDENCIES
  },
  INFO
)
class Units extends Component {
  constructor(element, options = {}) {
    super(NAMESPACE, element)
    this.options = deepMerge(DEFAULTS, options, this.getDataOptions())
    this.initClasses(CLASSES)

    this.wrap = parseHTML('<div></div>')

    this.value = ''
    this.data = {}

    this.initStates()
    this.initialize()
  }

  initialize() {
    this.judgeElType()

    const trigger = parseHTML(
      `<div class="${this.classes.TRIGGER}" tabindex="1"></div>`
    )
    const name = this.options.name ? `name="${this.options.name}"` : ''
    const input = parseHTML(
      `<input type="text" ${name} class="${this.classes.INPUT} ${
        this.classes.INPT
      }">`
    )
    addClass(this.classes.NAMESPACE, this.element)
    addClass(this.classes.WRAP, this.wrap)

    append(input, this.wrap)
    append(trigger, this.wrap)

    this.input = query(`.${this.classes.INPUT}`, this.wrap)

    this.options.data.forEach(v => {
      this.data[v] = ''
    })
    if (this.options.width) {
      this.dropdownWidth = this.options.width
    } else {
      this.dropdownWidth = '80px'
    }

    this.triggerElement = trigger

    this.TRIGGER = this.dropdownInit(trigger)

    if (this.options.data.length < 2) {
      addClass(this.classes.ONLY, trigger)
      this.TRIGGER.disable()
    }

    if (this.options.theme) {
      addClass(this.getThemeClass(), this.wrap)
      queryAll(`.${this.classes.PANEL}`).map(panel =>
        addClass(this.getThemeClass(), panel)
      )
    }

    if (this.element.getAttribute('disabled') || this.options.disabled) {
      this.disable()
    }

    this.initData()
    this.bind()

    this.enter('initialized')
    this.trigger(EVENTS.READY)
  }

  judgeElType() {
    if (this.element.nodeName !== 'INPUT') {
      const input = parseHTML('<input type="text"/>')
      insertBefore(input, this.element)
      // this.$element.before($input)

      this.wrap = this.element
      this.element = input
    } else {
      insertAfter(this.wrap, this.element)
      // this.wrap.insertBefore(this.$element).append(this.$element)
      // this.$element.addClass(this.classes.NAMESPACE);
    }
  }

  initData() {
    const val = this.element.value
    if (val) {
      let value = parseFloat(val)
      let unit = val.match(/\D+$/g)
      unit = is.null(unit) ? this.options.data[0] : unit[0]

      if (is.nan(value)) {
        value = ''
      }
      if (this.options.data.indexOf(unit) < 0) {
        unit = this.options.data[0]
      }
      this.set({
        unit,
        value
      })
    }
  }

  dropdownInit(trigger) {
    const data = []

    for (const i in this.data) {
      if ({}.hasOwnProperty.call(this.data, i)) {
        data.push({ label: i })
      }
    }

    this.unit = this.options.defaultUnit || data[0].label

    const dropdowninstance = new DROPDOWN(trigger, {
      width: this.dropdownWidth,
      trigger: 'click',
      // keyboard: true,
      data,
      imitateSelect: true,
      select: this.unit,
      placement: this.options.placement
    })
    addClass(this.classes.PANEL, dropdowninstance.panel)
    return dropdowninstance
  }

  cacheValue(unit, value = '') {
    if (value) {
      this.data[unit] = value
      return
    }
    this.data[unit] = this.value
  }

  bind() {
    this.enter('bind')

    /* when event change, if this.$input wrap has form, trigger form submit. */
    bindEvent(
      {
        type: this.eventName('change'),
        handler: () => {
          const value = this.input.value
          // if (value !== '' && !parseFloat(value, 10)) {
          //   return false;
          // }

          this.value = parseFloat(value, 10)
          this.value = value
          this.cacheValue(this.getUnit(), this.value)
          this.update(this.getUnit())
          this.trigger(EVENTS.CHANGEVAL, this.value)
        }
      },
      this.input
    )

    this.TRIGGER.options.onChange = () => {
      if (this.unit === this.getUnit()) {
        return
      }
      const unit = this.getUnit()

      this.cacheValue(this.unit)
      this.update(unit)
      this.trigger(EVENTS.CHANGE, this.unit)
    }

    // Pj.emitter.on('scroll', this.checkDropdownDir.bind(this))

    this.TRIGGER.options.onShow = () => {
      const el = this.TRIGGER.element.closest(`.${this.classes.WRAP}`)
      addClass(this.classes.ACTIVE, el)
      this.enter('open')

      // this.checkDropdownDir()
    }

    this.TRIGGER.options.onHide = () => {
      const el = this.TRIGGER.element.closest(`.${this.classes.WRAP}`)

      removeClass(this.classes.ACTIVE, el)
      this.leave('open')
    }
  }

  // checkDropdownDir () {
  //   if (!this.is('open')) {
  //     return
  //   }
  //   if (this.TRIGGERElement.hasClass('tether-target-attached-top')) {
  //     this.$input.addClass(this.classes.TOP)
  //     this.$input.removeClass(this.classes.BOTTOM)
  //   } else {
  //     this.$input.removeClass(this.classes.TOP)
  //     this.$input.addClass(this.classes.BOTTOM)
  //   }
  // }

  unbind() {
    this.leave('bind')

    removeEvent(this.eventName(), this.input)
    this.TRIGGER.disable()
  }

  set(data, trigger = true) {
    const hasUnit =
      !is.undefined(data.unit) && data.unit !== null && data.unit !== this.unit

    this.unit = hasUnit ? data.unit : this.unit
    this.value = data.value

    this.input.value = this.value
    this.element.value = `${this.value}${this.unit}`
    // this.$element.val(`${this.value}${this.unit}`)
    this.cacheValue(this.unit, this.value)

    if (hasUnit) {
      this.TRIGGER.set(this.unit)
      this.trigger(EVENTS.SETUNIT, this.unit)
    }

    if (trigger) {
      this.trigger(EVENTS.SUBMIT, this.value)
    }
  }

  update(unit) {
    this.value = this.get(unit).value

    this.input.value = this.value
    this.unit = unit
    this.trigger(EVENTS.UPDATE, this.unit)
  }

  get(unit) {
    if (unit) {
      return {
        unit,
        value: this.data[unit]
      }
    }
    return {
      unit: this.unit,
      value: this.value
    }
  }

  getUnit() {
    return this.TRIGGER.get()
  }

  setWidth(width) {
    this.TRIGGER.setWidth(width)
  }

  toggleUnit(unit) {
    this.TRIGGER.set(unit)
  }

  getInput() {
    return this.get()
  }

  val(value) {
    if (is.undefined(value)) {
      return this.options.process.call(this, this.get())
    }

    this.set(this.options.parse.call(this, value))
    return true
  }

  enable() {
    if (this.is('disabled')) {
      this.leave('disabled')
      this.element.disabled = false
      this.input.disabled = false
      this.TRIGGER.enable()
      removeClass(this.classes.DISABLED, this.wrap)
    }

    this.trigger(EVENTS.ENABLE)

    return this
  }

  disable() {
    if (!this.is('disabled')) {
      this.enter('disabled')
      this.element.disabled = true
      this.input.disabled = true
      addClass(this.classes.DISABLED, this.wrap)
      this.TRIGGER.disable()
    }
    this.trigger(EVENTS.DISABLE)

    return this
  }

  destroy() {
    if (this.is('initialized')) {
      this.unbind()
      this.TRIGGER.element.remove()
      this.TRIGGER.destroy()
      // this.$element.unwrap()
      removeClass(this.classes.NAMESPACE, this.element)
      removeClass(this.getThemeClass(), this.wrap)
      this.element.value = ''
      this.input.remove()
      this.leave('initialized')
    }

    this.trigger(EVENTS.DESTROY)
    super.destroy()

    return this
  }
}

export default Units
