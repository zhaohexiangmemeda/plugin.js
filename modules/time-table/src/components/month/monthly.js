import templateEngine from '@pluginjs/template'
import util from '../../util'
import monthEvent from './monthEvent'
import { addClass, removeClass, hasClass } from '@pluginjs/classes'
import { setStyle } from '@pluginjs/styled'
import { bindEvent, removeEvent } from '@pluginjs/events'
import { append, parseHTML, query, queryAll, getObjData } from '@pluginjs/dom'

class Monthly {
  constructor(instance, element) {
    this.instance = instance
    this.options = instance.options
    this.classes = instance.classes

    this.element = element

    this.init()
  }

  buildHeader() {
    this.header = parseHTML(`<div class="${this.classes.HEADER}"></div>`)

    const headerUl = parseHTML('<ul></ul>')
    this.instance.weekday.map(item => {
      const li = `<li>${item}</li>`
      append(li, headerUl)
    })

    append(headerUl, this.header)
    append(this.header, this.element)
  }

  buildBaseline() {
    this.monthBaseline = parseHTML(
      `<div class="${this.classes.BASELINE}"></div>`
    )
    this.baselineUl = parseHTML('<ul></ul>')
    for (let i = 0; i < 6; i++) {
      const li = liHtml(this.classes)
      if (i == 5) {
        this.lastLi = parseHTML(li)
        this.isAppendLi = true
        append(this.lastLi, this.baselineUl)
      } else {
        append(li, this.baselineUl)
      }
    }

    append(this.baselineUl, this.monthBaseline)
    append(this.monthBaseline, this.element)
  }

  buildEventLine() {
    const eventWrap = parseHTML(`<div class="${this.classes.EVENTS}"></div>`)
    const eventsUl = parseHTML('<ul></ul>')

    for (let i = 0; i < 7; i++) {
      const li = `<li class="${this.classes.EVENTSGROUP}"></li>`
      append(li, eventsUl)
    }

    this.eventLis = queryAll(`.${this.classes.EVENTSGROUP}`, eventsUl)

    append(eventsUl, eventWrap)
    append(eventWrap, this.element)
  }

  init() {
    this.buildHeader()
    this.buildBaseline()
    this.buildEventLine()
    this.events = queryAll(`.${this.classes.MONTHEVENT}`, this.monthBaseline)

    this.activeEvent = ''
    this.instances = []
    this.update()

    this.bind()
  }

  bind() {
    bindEvent(
      {
        type: 'click',
        handler: e => {
          const target = e.target
          let monthEvent = {}
          if (hasClass(this.classes.MONTHEVENT, target)) {
            monthEvent = target
          } else {
            monthEvent = target.closest(`.${this.classes.MONTHEVENT}`)
          }

          if (!monthEvent) {
            return
          }

          const api = getObjData('monthEvent', monthEvent)
          if (typeof api === 'undefined' || api.open == false) {
            if (this.activeEvent) {
              this.activeEvent.hideList()
            }
          }
        }
      },
      this.element
    )
  }

  update() {
    this.updateBaseIndex()
    this.clean()

    this.parseData(this.instance.data)

    this.updateEvent()
  }

  clean() {
    this.instances.map(item => {
      item.destroy()
    })

    this.instances = []
  }

  updateEvent() {
    this.currentMonthData.map(data => {
      const index = data.day + this.instance.monthFirstDay - 1
      const api = getObjData('monthEvent', this.events[index])
      if (!api) {
        const event = new monthEvent(this.events[index], this)
        this.instances.push(event)
        event.addEvent(data)
      } else {
        api.addEvent(data)
      }
    })
  }

  parseData(data) {
    this.currentMonthData = []
    const { currentDay } = this.instance
    data.map(item => {
      let [year, month, day] = item.start.split(' ')[0].split('-')
      if (
        parseInt(year) === currentDay.getFullYear() &&
        parseInt(month - 1) === currentDay.getMonth()
      ) {
        const { start, end, id, title, color } = item
        const [localeDateString, startTime] = start.split(' ')
        const classType = item.class
        const endTime = end.split(' ')[1]
        const timeBucket = `${startTime}-${endTime}`
        day = parseInt(day)
        // const day = util.dateParse(localeDateString).getDay()

        const weekData = {
          endTime,
          startTime,
          timeBucket,
          localeDateString,
          classType,
          title,
          day,
          color
        }
        this.currentMonthData.push(weekData)
      }
    })
  }

  updateBaseIndex() {
    const { daysInMonth, monthFirstDay } = this.instance
    // special type
    if (
      (monthFirstDay == 5 && daysInMonth == 31) ||
      (monthFirstDay == 6 && daysInMonth >= 30)
    ) {
      this.eventLis.map(el => addClass(this.classes.HIGHHEIGHT, el))
      if (!this.isAppendLi) {
        append(this.lastLi, this.baselineUl)
        this.isAppendLi = true
      }
    } else if (this.isAppendLi) {
      this.lastLi.remove()
      this.isAppendLi = false
      this.eventLis.map(eventli =>
        removeClass(this.classes.HIGHHEIGHT, eventli)
      )
    }
    this.spans = queryAll(`.${this.classes.BADGE}`, this.monthBaseline)
    let nub = 1
    for (let i = 0; i < this.spans.length; i++) {
      if (monthFirstDay <= i && monthFirstDay + daysInMonth > i) {
        this.spans[i].innerHTML = nub
        nub++
      } else {
        this.spans[i].innerHTML = ''
      }
    }
  }

  getElement(type) {
    const template = this.options.templates[type]
    let html = ''
    if (template) {
      html = templateEngine.render(template.call(this), { class: this.classes })
    }
    return parseHTML(html)
  }

  hide() {
    if (!hasClass(this.classes.HIDE, this.element)) {
      addClass(this.classes.HIDE, this.element)
    }
  }

  show() {
    if (hasClass(this.classes.HIDE, this.element)) {
      removeClass(this.classes.HIDE, this.element)
    }
  }
}

function liHtml(classes) {
  return `<li>
            <div class="${classes.MONTHEVENT}">
              <span class="${classes.BADGE}"></span>
            </div>
            <div class="${classes.MONTHEVENT}">
              <span class="${classes.BADGE}"></span>
            </div>
            <div class="${classes.MONTHEVENT}">
              <span class="${classes.BADGE}"></span>
            </div>
            <div class="${classes.MONTHEVENT}">
              <span class="${classes.BADGE}"></span>
            </div>
            <div class="${classes.MONTHEVENT}">
              <span class="${classes.BADGE}"></span>
            </div>
            <div class="${classes.MONTHEVENT}">
              <span class="${classes.BADGE}"></span>
            </div>
            <div class="${classes.MONTHEVENT}">
              <span class="${classes.BADGE}"></span>
            </div>
          </li>`
}

export default Monthly
