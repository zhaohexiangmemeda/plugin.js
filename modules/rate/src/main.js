import Component from '@pluginjs/component'
import { deepMerge } from '@pluginjs/utils'
import templateEngine from '@pluginjs/template'
import { addClass, removeClass } from '@pluginjs/classes'
import { setStyle, hideElement } from '@pluginjs/styled'
import { bindEvent, removeEvent } from '@pluginjs/events'
import { prepend, parseHTML, queryAll, query, insertAfter } from '@pluginjs/dom'
import is from '@pluginjs/is'
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
class Rate extends Component {
  constructor(element, options = {}) {
    super(NAMESPACE, element)
    this.options = deepMerge({}, DEFAULTS, options, this.getDataOptions())
    this.initClasses(CLASSES)

    if (this.options.theme) {
      addClass(this.getThemeClass, this.element)
    }

    this.initStates()
    this.initialize()
  }

  initialize() {
    this.verification()
    this.isSvgIcon()
    this.score = this.options.value
    this.hoverscore = 0
    this.range = this.createHtml()
    this.stars = queryAll(`.${this.classes.STAR}`, this.range)
    if (!this.svgIcon) {
      this.setIconStyle()
    } else {
      this.setSvgStyle()
    }

    if (is.number(this.options.value)) {
      this.updateStar(this.options.value)
    }

    if (!this.options.readonly) {
      this.bind()
    } else {
      addClass(this.classes.DISABLED, this.range)
    }

    hideElement(this.element)

    insertAfter(this.range, this.element)

    this.enter('initialized')
    this.trigger(EVENTS.READY)
  }

  setIconStyle() {
    if (this.options.iconSize) {
      setStyle({ fontSize: this.options.iconSize }, this.range)
    } else {
      setStyle({ fontSize: '40px' }, this.range)
    }

    this.defaulColor = this.options.iconColorClass
      ? this.options.iconColorClass
      : this.classes.DEFAULTCOLOR
  }

  setSvgStyle() {
    this.svgs = queryAll('img', this.range)
  }

  isSvgIcon() {
    if (
      this.options.svg &&
      this.options.svg.clearPath &&
      this.options.svg.defaultPath
    ) {
      this.svgIcon = true
    } else {
      this.svgIcon = false
    }
  }

  verification() {
    if (this.element.tagName.toLowerCase() === 'input') {
      // console.log('debug', this.element.dataset.min)
      if (this.element.dataset.min || this.element.dataset.min === 0) {
        const m = this.element.dataset.min
        const n = Number(m)
        if (n >= this.options.max) {
          this.options.min = 0
        }
      }

      if (this.element.dataset.max || this.element.dataset.max === 0) {
        const m = this.element.dataset.max
        const n = Number(m)
        if (n <= 0) {
          this.options.max = 2
        }
      }
    }
  }

  bind() {
    // this.eventName('mousemove')
    bindEvent(
      {
        type: this.eventName('mousemove'),
        handler: event => {
          const score = this._getScore(event)
          if (this.hoverscore !== score && score !== undefined) {
            this.updateStar(score)
            if (score !== this.hoverscore && score !== undefined) {
              this.changeHoverScore(score)
            }
          }
        }
      },
      this.range
    )

    bindEvent(
      {
        type: this.eventName('mouseleave'),
        handler: event => {
          this.updateStar(this.score)
          this.changeHoverScore(0)
          this.trigger(EVENTS.MOUSELEAVE)
        }
      },
      this.range
    )

    bindEvent(
      {
        type: this.eventName('mouseup'),
        handler: event => {
          const score = this._getScore(event)
          this.changeScore(score)
          this.trigger(EVENTS.CLICK, this.score)
        }
      },
      this.range
    )

    this.enter('binded')
  }

  unbind() {
    removeEvent(this.eventName(), this.range)

    this.leave('binded')
  }

  _getScore(event) {
    const typestar = event.target.parentNode
    let index

    if (typestar.classList.contains(this.classes.FULlSTAR)) {
      const element = typestar.parentNode
      for (let i = 0; i < this.stars.length; i++) {
        if (this.stars[i] === element) {
          index = i
          break
        }
      }
      return index + 1
    } else if (typestar.classList.contains(this.classes.HALFSTAR)) {
      const element = typestar.parentNode
      for (let i = 0; i < this.stars.length; i++) {
        if (this.stars[i] === element) {
          index = i
          break
        }
      }
      return index + Number(this.options.step)
    }

    return undefined
  }

  updateStar(score) {
    if (score === undefined) {
      return
    }

    if (!this.svgIcon) {
      const starNub = this.correctScore(Number(score))
      const fullStar = Math.floor(starNub)

      this.clearIconColor()

      this.resetStar(fullStar)

      if (starNub > fullStar) {
        this.resetHalfStar(fullStar)
      }
    } else {
      const starNub = this.correctScore(Number(score))
      const fullStar = Math.floor(starNub)
      this.removeClassAll(this.classes.HALFSTARACTIVE)
      if (starNub > fullStar) {
        // $(this.$stars[fullStar]).addClass(this.classes.HALFSTARACTIVE)
        addClass(this.classes.HALFSTARACTIVE, this.stars[fullStar])
      }

      length = this.svgs.length
      for (let i = 0; i < length; i++) {
        if (i < starNub * 2) {
          this.svgs[i].src = this.options.svg.defaultPath
        } else {
          this.svgs[i].src = this.options.svg.clearPath
        }
      }
    }
  }

  resetHalfStar(fullStar) {
    addClass(this.classes.HALFSTARACTIVE, this.stars[fullStar])
    const element = query(`.${this.classes.HALFSTAR}`, this.stars[fullStar])
    this.addColor(element)
  }

  resetStar(fullStar) {
    for (let i = 0; i < fullStar; i++) {
      const element = query(`.${this.classes.FULlSTAR}`, this.stars[i])
      this.addColor(element)
    }
  }

  removerColor(element) {
    removeClass(this.defaulColor, element)
    addClass(this.CLEARCOLOR, element)
  }

  addColor(element) {
    removeClass(this.classes.CLEARCOLOR, element)
    addClass(this.defaulColor, element)
  }

  clearIconColor() {
    this.removeClassAll(this.classes.HALFSTARACTIVE)

    const fullstars = queryAll(`.${this.classes.FULlSTAR}`, this.range)
    const halfstars = queryAll(`.${this.classes.HALFSTAR}`, this.range)

    fullstars.forEach(f => {
      this.removerColor(f)
    })
    halfstars.forEach(h => {
      this.removerColor(h)
    })
  }

  correctScore(score) {
    if (score > this.options.max) {
      return this.options.max
    } else if (score <= 0) {
      return 0
    }
    let nub = parseInt(score * 10, 10) % 10
    if (nub !== 0) {
      if (nub > 0 && nub <= 5) {
        nub = 5 / 10
      } else {
        nub = 10 / 10
      }
    }

    return parseInt(score, 10) + nub
  }

  createHtml() {
    let icon = ''
    let star = ''
    let svg = ''

    if (this.svgIcon) {
      const width = this.options.iconSize || 48
      svg = templateEngine.render(this.options.templates.svg.call(this), {
        path: this.options.svg.clearPath,
        width
      })

      star = templateEngine.render(this.options.templates.stars.call(this), {
        classes: this.classes,
        svg
      })
    } else {
      icon = templateEngine.render(this.options.templates.icon.call(this), {
        iconClass: this.options.iconClass
      })

      star = templateEngine.render(this.options.templates.star.call(this), {
        classes: this.classes,
        icon
      })
    }

    const html = templateEngine.render(this.options.template.call(this), {
      classes: this.classes
    })
    const wrap = parseHTML(html)
    for (let i = 0; i < this.options.max; i++) {
      prepend(star, wrap)
    }

    return wrap
  }

  removeClassAll(className) {
    const selector = `.${className}`
    const elements = queryAll(selector, this.range)
    elements.forEach(el => {
      removeClass(className, el)
    })
  }

  getHoverScore() {
    return this.hoverscore
  }

  getScore() {
    return this.score
  }

  setColor(className) {
    this.clearIconColor()
    this.defaulColor = className
    const score = this.hoverscore || this.score
    this.updateStar(score)
  }

  setScore(score) {
    this.changeScore(score)
    this.updateStar(this.score)
  }

  changeScore(score) {
    this.score = score
    this.trigger(EVENTS.CHANGESCORE, score)
  }

  changeHoverScore(score) {
    this.hoverscore = score
    this.trigger(EVENTS.CHANGEHOVERSCORE, score)
  }

  clear() {
    this.changeScore(0)
    this.updateStar(this.score)
  }

  resetIcon(iconClass) {
    const icons = this.$range.find('i')
    icons.attr('class', iconClass)
  }

  readonly(boolean) {
    if (boolean) {
      this.unbind()
      addClass(this.classes.DISABLED, this.range)
    } else if (!this.is('binded')) {
      this.bind()
      removeClass(this.classes.DISABLED, this.range)
    }
  }

  destroy() {
    if (this.is('initialized')) {
      this.leave('initialized')
    }
    removeClass(this.getThemeClass(), this.element)
    this.unbind()

    this.trigger(EVENTS.DESTROY)
    super.destroy()
  }
}

export default Rate
