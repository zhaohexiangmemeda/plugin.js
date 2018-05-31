import Component from '@pluginjs/component'
import { deepMerge, compose } from '@pluginjs/utils'
import is from '@pluginjs/is'
import template from '@pluginjs/template'
import { addClass, removeClass } from '@pluginjs/classes'
import { bindEvent, removeEvent } from '@pluginjs/events'
import { setStyle, hideElement, showElement } from '@pluginjs/styled'
import {
  append,
  parseHTML,
  parent,
  children,
  prepend,
  query,
  attr,
  parentWith,
  wrap,
  unwrap,
  setObjData,
  getObjData,
  empty
} from '@pluginjs/dom'
import Tooltip from '@pluginjs/tooltip'
import Scrollable from '@pluginjs/scrollable'
import Popper from 'popper.js'
import Pj, {
  eventable,
  register,
  stateable,
  styleable,
  themeable,
  translateable
} from '@pluginjs/pluginjs'
import color from '@pluginjs/color'
import Alpha from './components/alpha'
import Preview from './components/preview'
import Contrast from './components/contrast'
import Gradient from './components/gradient'
import Hex from './components/hex'
import History from './components/history'
import Hue from './components/hue'
import Saturation from './components/saturation'
import {
  classes as CLASSES,
  defaults as DEFAULTS,
  dependencies as DEPENDENCIES,
  events as EVENTS,
  info as INFO,
  methods as METHODS,
  namespace as NAMESPACE,
  translations as TRANSLATIONS
} from './constant'
let DATA = {}

@translateable(TRANSLATIONS)
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
class ColorPicker extends Component {
  constructor(element, options = {}) {
    super(NAMESPACE, element)
    // options
    this.options = deepMerge(DEFAULTS, options, this.getDataOptions())
    if (options.module) {
      this.options.module = options.module
    }
    this.firstClassName = this.element.className
    this.setupI18n()
    // class
    this.initClasses(CLASSES)
    compose(
      attr({ placeholder: this.options.placeholder }),
      addClass(this.classes.NAMESPACE, 'pj-input')
    )(this.element)
    // init global vars
    this.$body = query('body')

    this.module = this.options.module[0]
    this.contrast = true
    this.history = true

    this.data = DATA
    this.color = null
    this.solidModule = this.options.solidModule

    this.info = {
      collection: '',
      solid: this.options.defaultColor || '#000',
      gradient: 'linear-gradient(90deg, #fff 0%,#000 100%)'
    }
    // init
    this.initStates()
    this.initialize()
  }

  initialize() {
    // take element defalut value
    this.elementColor = this.element.value

    // init As Color
    this.asColor = color(this.options.defaultColor, this.options.color)

    // init frame
    this.initFrame()

    // set theme
    if (this.options.theme) {
      addClass(this.getThemeClass(), this.$wrap)
    }

    // init collection
    if (this.hasModule('collection')) {
      this.initCollection()
    }

    // init solid
    if (this.hasModule('solid')) {
      this.initSolid()
    }

    // init gradient
    if (this.hasModule('gradient')) {
      this.initGradient()
    }

    // swtichover default mode
    this.switchModule()

    // set default data
    this.initData()

    this.bind()

    if (this.element.disabled || this.options.disabled) {
      this.disable()
    }

    this.enter('initialized')
    this.trigger(EVENTS.READY)
  }

  initData() {
    if (this.elementColor) {
      this.val(this.elementColor)
    } else {
      this.clear()
    }
  }

  initRemove() {
    const remove = this.createEl('remove', { class: this.classes.REMOVE })

    append(remove, query(`.${this.classes.TRIGGER}`, this.$wrap))
    this.$remove = query(`.${this.classes.REMOVE}`, this.$wrap)
  }

  initPreview() {
    const preview = this.createEl('preview', {
      class: this.classes.PREVIEW,
      color: this.classes.PREVIEWCOLOR,
      background: this.classes.PREVIEWBG
    })
    append(preview, query(`.${this.classes.TRIGGER}`, this.$wrap))
    this.PREVIEW = new Preview(
      this,
      query(`.${this.classes.PREVIEW}`, this.$wrap)
    )
  }

  initFrame() {
    // create wrap
    const $wrap = this.createEl('wrap', { class: this.classes.WRAP })
    wrap($wrap, this.element)
    wrap(`<div class='${this.classes.TRIGGER}'></div>`, this.element)
    this.$wrap = parentWith(
      el => el.matches(`.${this.classes.WRAP}`),
      this.element
    )

    // init remove button
    this.initRemove()
    // init preview
    this.initPreview()

    // create panel
    this.initPanel()

    // create mask
    this.$mask = parseHTML(`<div class="${this.classes.MASK}"></div>`)
    append(this.$mask, this.$body)
  }

  initPanel() {
    this.$panel = this.createEl('panel', {
      class: this.classes.PANEL,
      trigger: this.classes.PANELTRIGGER,
      container: this.classes.PANELCONTAINER
    })

    // set module
    this.options.module.forEach(v => {
      const triggerClassName = `${this.classes.PANELTRIGGER}-${v}`
      const wrapClassName = `${this.classes.PANEL}-${v}`
      const trigger = this.createEl(`${v}Trigger`, { class: triggerClassName })
      const wrap = this.createEl('moduleWrap', { class: wrapClassName })

      append(trigger, query(`.${this.classes.PANELTRIGGER}`, this.$panel))
      append(wrap, query(`.${this.classes.PANELCONTAINER}`, this.$panel))
      if (this.options.module.length <= 1) {
        hideElement(query(`.${this.classes.PANELTRIGGER}`, this.$panel))
      }
    })

    append(this.$panel, this.$wrap)
    wrap(
      parseHTML(`<div class='${this.classes.PANELWRAP}'></div>`),
      this.$panel
    )
    this.$panelWrap = parent(this.$panel)

    // init element
    this.$trigger = query(`.${this.classes.PANELTRIGGER}`, this.$panel)
    this.$container = query(`.${this.classes.PANELCONTAINER}`, this.$panel)

    // tooltip
    const locale = {
      Collection: 'collection',
      Solid: 'solid',
      Gradient: 'gradient'
    }
    children(this.$trigger)
      .filter(el => el.tagName === 'I')
      .forEach($this => {
        const title = $this.dataset.type.replace(/^[a-zA-Z]?/g, v =>
          v.toLocaleUpperCase()
        )
        Tooltip.of($this, {
          title: this.translate(locale[title]),
          placement: 'bottom',
          offset: '7 0'
        })
      })

    // init Popper
    this.setupPopper()
  }

  initCollection() {
    if (!this.data) {
      return false
    }
    // create group
    const collection = this.createEl('collection', {
      favorites: this.classes.FAVORITES,
      scheme: this.classes.SCHEME,
      title: this.classes.GROUPTITLE,
      list: this.classes.GROUPLIST,
      manage: this.classes.MANAGE,
      manageText: this.translate('manage'),
      favoritesText: this.translate('colorInScheme'),
      schemeText: this.translate('myColors')
    })

    this.$collection = query(`.${this.classes.PANELCOLLECTION}`, this.$panel)
    this.$collection.append(...collection)
    // create favorite item
    Object.keys(this.data).forEach(groupName => {
      const $groupList = query(
        `.${this.classes.NAMESPACE}-${groupName} .${this.classes.GROUPLIST}`,
        this.$panel
      )
      this.createCollectionItem(groupName, $groupList)
    })

    // init scrollable
    const $scorllWrap = parseHTML(
      `<div class='${
        this.classes.COLLECTIONSCROLLWRAP
      }'><div><div></div></div></div>`
    )
    prepend($scorllWrap, this.$collection)
    const scrollWrapChildren = children($scorllWrap)
      .filter(el => el.tagName === 'DIV')
      .map(el =>
        children(el)
          .filter(el => el.tagName === 'DIV')
          .reduce((a, b) => a.concat(b))
      )
    scrollWrapChildren.map(
      append(query(`.${this.classes.SCHEME}`, this.$collection))
    )
    scrollWrapChildren.map(
      append(query(`.${this.classes.FAVORITES}`, this.$collection))
    )

    this.scrollable = Scrollable.of($scorllWrap, {
      contentSelector: '>',
      containerSelector: '>'
    })

    return null
  }

  initSolid() {
    const solid = this.createEl('content', {
      handle: this.classes.SOLIDHANDLE,
      primary: this.classes.SOLIDPRIMARY,
      action: this.classes.SOLIDACTION
    })
    this.$solid = query(`.${this.classes.PANELSOLID}`, this.$panel)
    this.$solid.append(...solid)
    this.registerComponent()
    // cancel
    const cancel = this.createEl('cancel', {
      class: this.classes.CANCEL,
      text: this.translate('cancel')
    })

    // ok
    const ok = this.createEl('ok', {
      class: this.classes.OK,
      text: this.translate('ok')
    })
    const solidAction = query(`.${this.classes.SOLIDACTION}`, this.$solid)
    if (solidAction) {
      ;[ok, cancel].map(el =>
        append(el, query(`.${this.classes.SOLIDACTION}`, this.$solid))
      )
    }
  }

  initGradient() {
    const gradient = this.createEl('content', {
      handle: this.classes.GRADIENTHANDLE,
      primary: this.classes.GRADIENTPRIMARY,
      action: this.classes.GRADIENTACTION
    })
    this.$gradient = query(`.${this.classes.PANELGRADIENT}`, this.$panel)
    this.$gradient.append(...gradient)

    // init gradient handle
    this.GRADIENT = new Gradient(
      this,
      query(`.${this.classes.GRADIENTHANDLE}`, this.$gradient)
    )

    // init gradient saturation
    this.initSaturation(true)
    // init gradient hue
    this.initHue(true)
    // init gradient alpha
    this.initAlpha(true)
    // init gradient hex
    this.initHex(true)

    // cancel
    const cancel = this.createEl('cancel', {
      class: this.classes.CANCEL,
      text: this.translate('cancel')
    })

    // ok
    const ok = this.createEl('ok', {
      class: this.classes.OK,
      text: this.translate('ok')
    })
    ;[ok, cancel].map(el =>
      append(el, query(`.${this.classes.GRADIENTACTION}`, this.$gradient))
    )
  }

  registerComponent() {
    const solidMode = this.options.solidMode

    if (solidMode === 'full') {
      this.initContrast()
      this.initHistory()
    }

    if (solidMode === 'default') {
      query(`.${this.classes.SOLIDHANDLE}`, this.$solid).remove()
    }

    if (solidMode === 'sample') {
      query(`.${this.classes.SOLIDHANDLE}`, this.$solid).remove()
      query(`.${this.classes.SOLIDACTION}`, this.$solid).remove()
    }

    if (solidMode !== 'sample') {
      if (this.solidModule.hex) {
        this.initHex()
      }
    }

    if (this.solidModule.saturation) {
      this.initSaturation()
    }

    if (this.solidModule.hue) {
      this.initHue()
    }

    if (this.solidModule.alpha) {
      this.initAlpha()
    }
  }

  createCollectionItem(groupName, groupList) {
    Object.entries(this.data[groupName]).forEach(([i, v]) => {
      const $item = this.createEl('collectionItem', {
        class: this.classes.COLLECTIONITEM
      })

      // set tooltip
      Tooltip.of($item, {
        title: i.replace(/^[a-zA-Z]?/g, char => char.toLocaleUpperCase()),
        placement: 'right'
      })

      // set BgColor and Data val
      setStyle({ background: v }, $item)
      setObjData('info', { title: i, color: v }, $item)
      // append to group list
      append($item, groupList)
    })
  }

  setupPopper() {
    this.POPPER = new Popper(this.element, this.$panelWrap, {
      placement: 'bottom'
    })

    this.enter('popper')
  }

  saveMarker(typeName) {
    if (typeName === 'gradient') {
      if (this.$marker) {
        this.lastActiveMarker = this.$marker
        // console.log(
        //   'save lastActiveMarker',
        //   this.lastActiveMarker.data('value').color
        // )
      }
    }
  }

  switchModule(typeName) {
    if (!typeName) {
      typeName = this.module
    }
    // this.saveMarker(typeName)
    // switch panel tirgger
    children(this.$trigger).forEach(($this, i) => {
      const $content = children(this.$container)[i]

      removeClass(this.classes.SELECTED, $this)
      hideElement($content)
      this.leave(`${$this.dataset.type}Module`)

      if ($this.dataset.type === typeName) {
        addClass(this.classes.SELECTED, $this)
        $content.style.display = 'block'
        // showElement($content)
      }
    })

    if (typeName === 'collection' && this.scrollable) {
      this.scrollable.update()
    }
    // switch module state
    this.enter(`${typeName}Module`)
    this.module = typeName

    switch (this.module) {
      case 'solid':
        this.setSolid(this.info.solid)
        break
      case 'collection':
        this.setCollection(this.info.collection)
        break
      case 'gradient':
        this.setGradient(this.info.gradient)
        break
      default:
        break
    }

    this.trigger(EVENTS.SWITCHMODULE, this.module)
  }

  initContrast() {
    const contrast = this.createEl('contrast', {
      class: this.classes.CONTRAST,
      now: this.classes.CONTRASTNOW,
      prev: this.classes.CONTRASTPREV
    })
    query(`.${this.classes.SOLIDHANDLE}`, this.$panel).append(contrast)
    const contrastElement = query(`.${this.classes.CONTRAST}`, this.$panel)
    this.CONTRAST = new Contrast(this, contrastElement)
  }

  initHistory() {
    const history = this.createEl('history', { class: this.classes.HISTORY })
    append(history, query(`.${this.classes.SOLIDHANDLE}`, this.$solid))
    this.HISTORY = new History(
      this,
      query(`.${this.classes.HISTORY}`, this.$solid)
    )
  }

  initSaturation(gradient) {
    const saturation = this.createEl('saturation', {
      class: this.classes.SATURATION
    })

    if (gradient) {
      append(
        saturation,
        query(`.${this.classes.GRADIENTPRIMARY}`, this.$gradient)
      )
      new Saturation(this, query(`.${this.classes.SATURATION}`, this.$gradient))
    } else {
      append(saturation, query(`.${this.classes.SOLIDPRIMARY}`, this.$solid))
      new Saturation(this, query(`.${this.classes.SATURATION}`, this.$solid))
    }
  }

  initHue(gradient) {
    const hue = this.createEl('hue', { class: this.classes.HUE })

    if (gradient) {
      append(hue, query(`.${this.classes.GRADIENTPRIMARY}`, this.$gradient))
      new Hue(this, query(`.${this.classes.HUE}`, this.$gradient))
    } else {
      append(hue, query(`.${this.classes.SOLIDPRIMARY}`, this.$solid))
      new Hue(this, query(`.${this.classes.HUE}`, this.$solid))
    }
  }

  initAlpha(gradient) {
    const alpha = this.createEl('alpha', { class: this.classes.ALPHA })

    if (gradient) {
      append(alpha, query(`.${this.classes.GRADIENTPRIMARY}`, this.$gradient))
      new Alpha(this, query(`.${this.classes.ALPHA}`, this.$gradient))
    } else {
      append(alpha, query(`.${this.classes.SOLIDPRIMARY}`, this.$solid))
      new Alpha(this, query(`.${this.classes.ALPHA}`, this.$solid))
    }
  }

  initHex(gradient) {
    const hex = this.createEl('hex', { class: this.classes.HEX })

    if (gradient) {
      append(hex, query(`.${this.classes.GRADIENTACTION}`, this.$gradient))
      new Hex(this, query(`.${this.classes.HEX}`, this.$gradient))
    } else {
      append(hex, query(`.${this.classes.SOLIDACTION}`, this.$solid))
      new Hex(this, query(`.${this.classes.HEX}`, this.$solid))
    }
  }

  bind() {
    compose(
      // input color
      bindEvent({
        type: this.eventName('change'),
        handler: e => {
          const val = e.target.value

          this.set(this.options.parse.call(this, val))
        }
      }),
      // switch panel
      bindEvent({
        type: this.eventName('click'),
        handler: () => {
          if (this.is('disabled')) {
            return false
          }

          this.openPanel()
          return null
        }
      })
    )(this.element)

    compose(
      // manage event
      bindEvent({
        type: this.eventName('click'),
        identity: { type: 'selector', value: `.${this.classes.MANAGE}` },
        handler: () => {
          this.options.manage()
        }
      }),
      // action event
      bindEvent({
        type: this.eventName('click'),
        identity: { type: 'selector', value: `.${this.classes.OK}` },
        handler: () => {
          this.closePanel()
        }
      }),
      // action event
      bindEvent({
        type: this.eventName('click'),
        identity: { type: 'selector', value: `.${this.classes.CANCEL}` },
        handler: () => {
          if (this.is('disabled')) {
            return false
          }

          if (this.hasModule('solid')) {
            this.setSolid(this.HISTORY.colors[this.HISTORY.colors.length - 1])
          }
          this.closePanel()
          return null
        }
      }),
      // Collection event
      bindEvent({
        type: this.eventName('click'),
        identity: {
          type: 'selector',
          value: `.${this.classes.COLLECTIONITEM}`
        },
        handler: e => {
          const info = getObjData('info', e.target)
          this.selectCollection = info
          this.set({ module: 'collection', color: info.title })
          this.closePanel()
        }
      }),
      // switch mode
      bindEvent({
        type: this.eventName('click'),
        identity: {
          type: 'selector',
          value: `.${this.classes.PANELTRIGGER}>i`
        },
        handler: e => {
          const $this = e.target
          this.switchModule($this.dataset.type)
        }
      })
    )(this.$panel)

    bindEvent(
      {
        type: this.eventName('click'),
        handler: () => {
          if (!this.is('openPanel')) {
            return false
          }

          this.closePanel()
          return null
        }
      },
      this.$mask
    )
    // input remove color
    compose(
      bindEvent({
        type: this.eventName('click'),
        identity: { type: 'selector', value: `.${this.classes.REMOVE}` },
        handler: () => {
          hideElement(this.$remove)
          // this.$element.blur()
          this.closePanel()
          this.clear()
        }
      }),
      bindEvent({
        type: this.eventName('mouseout'),
        identity: { type: 'selector', value: `.${this.classes.TRIGGER}` },
        handler: () => {
          hideElement(this.$remove)
        }
      }),
      bindEvent({
        type: this.eventName('mouseover'),
        identity: { type: 'selector', value: `.${this.classes.TRIGGER}` },
        handler: () => {
          if (this.element.value.length > 0) {
            if (!this.is('disabled')) {
              this.$remove.style.display = 'inline'
            }
          }
        }
      })
    )(this.$wrap)

    bindEvent(
      {
        type: this.eventName('click'),
        handler: ({ target }) => {
          if (!this.$wrap.contains(target)) {
            this.closePanel()
          }
        }
      },
      Pj.doc
    )
  }

  unbind() {
    removeEvent(this.eventName(), this.element)
  }

  openPanel() {
    addClass(this.classes.OPENPANEL, this.$panelWrap)
    showElement(this.$mask)
    this.element.style.borderColor = '#4c93d9'

    // update scollable height
    if (this.scrollable) {
      this.scrollable.update()
    }

    this.POPPER.scheduleUpdate()
    this.enter('openPanel')
    this.trigger(EVENTS.OPENPANEL)
  }

  closePanel() {
    removeClass(this.classes.OPENPANEL, this.$panelWrap)
    hideElement(this.$mask)
    this.element.style.removeProperty('border-color')

    this.update()
    this.leave('openPanel')
  }

  get() {
    const data = {}
    Object.entries(this.info).forEach(([i, v]) => {
      if (this.hasModule(i)) {
        data[i] = v
      }
    })
    return data
  }

  set(val) {
    const module = val.module
    const color = val.color

    if (this.hasModule(module || this.module)) {
      this.info[module] = color
      this.switchModule(module)

      // collection
      if (module === 'collection') {
        this.setCollection(color)
        return false
      }

      // gradient
      if (module === 'gradient') {
        if (typeof color === 'string' && color.indexOf('gradient') > -1) {
          this.setGradient(color)
        }
        return false
      }

      // solid
      if (module === 'solid') {
        this.setSolid(color)
      }
    }
    return null
  }

  setCollection(colorName) {
    Object.entries(this.data).forEach(([, v]) => {
      Object.entries(v).forEach(([name, dataColor]) => {
        if (colorName.toLowerCase() === name.toLowerCase()) {
          if (
            dataColor.indexOf('gradient') > -1 &&
            this.hasModule('gradient')
          ) {
            this.info.gradient = dataColor
            this.setGradient(dataColor)
          } else if (this.hasModule('solid')) {
            this.info.solid = dataColor
            this.setSolid(dataColor)
          }

          this.setInput(name)
          this.PREVIEW.update(dataColor)
        }
      })
    })
  }

  setGradient(color) {
    this.GRADIENT.set(color)
  }

  setSolid(val) {
    if (!val) {
      val = this.info.solid
    }
    const color = this.asColor.val(val)
    if (is.string(val) && val.indexOf('#') > -1) {
      this.setInput(color.toHEX())
    } else if (is.string(val) && !val.match(/\d/g)) {
      this.setInput(color.toNAME())
    } else {
      this.setInput(color.toRGBA())
    }

    this.tempColor = color
    this.PREVIEW.update(color)
    this.trigger(EVENTS.CHANGE, color)
  }

  update() {
    if (this.module === 'gradient' && this.is('noSelectedMarker')) {
      return false
    }
    this.color = this.info[this.module]

    if (this.color === '') {
      this.color = 'transparent'
    }
    this.element.value = this.color
    this.trigger(EVENTS.UPDATE, this.color)
    return null
  }

  updateGradient(color) {
    this.PREVIEW.update(color, true)
    this.setInput(color)
  }

  setInput(val) {
    if (this.module === 'gradient' && this.is('noSelectedMarker')) {
      return false
    }
    this.info[this.module] = val
    this.element.value = val
    return null
  }

  val(color) {
    if (!color) {
      return this.options.process.call(this, this.get(), this.module)
    }

    const val = this.options.parse.call(this, color)

    this.set(val)
    // this.update();
    return null
  }

  createEl(tempName, options) {
    return parseHTML(
      template.compile(this.options.templates[tempName]())(options)
    )
  }

  hasModule(name) {
    return this.options.module.indexOf(name) > -1
  }

  clear() {
    this.info = {
      collection: '',
      solid: this.options.defaultColor || '#000',
      gradient: 'linear-gradient(90deg, #fff 0%,#000 100%)'
    }

    Object.entries(this.info).forEach(([module, color]) =>
      this.set({ module, color })
    )

    this.switchModule(this.options.module[0])
    this.PREVIEW.update('transparent')
    this.element.value = ''
  }

  enable() {
    if (this.is('disabled')) {
      this.element.disabled = false
      this.leave('disabled')
    }
    removeClass(this.classes.DISABLED, this.$wrap)
    this.trigger(EVENTS.ENABLE)
  }

  disable() {
    if (!this.is('disabled')) {
      this.element.disabled = true
      this.enter('disabled')
    }
    addClass(this.classes.DISABLED, this.$wrap)
    this.trigger(EVENTS.DISABLE)
  }

  destroy() {
    if (this.is('initialized')) {
      this.unbind()
      this.POPPER.destroy()
      empty(this.element)
      this.element.className = this.firstClassName
      this.element.setAttribute('placeholder', '')
      unwrap(unwrap(this.element))
      this.$remove.remove()
      this.PREVIEW.remove()
      this.$panelWrap.remove()
      if (this.options.theme) {
        removeClass(this.getThemeClass(), this.element)
      }
      this.leave('initialized')
    }

    this.trigger(EVENTS.DESTROY)
    super.destroy()
  }

  static setCollectionData(data) {
    DATA = data
  }
}

export default ColorPicker