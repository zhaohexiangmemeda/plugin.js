import Pj from '@pluginjs/pluginjs'

class ontop {
  constructor(api) {
    this.instance = api
    this.options = api.options
    this.classes = {
      top: api.classes.TOP,
      notTop: api.classes.NOTTOP
    }
    // console.log('bind top')
    Pj.emitter.on('scroll', this.update, this)
    this.update()
  }

  destroy() {
    const classes = this.classes

    for (const key in classes) {
      if (classes.hasOwnProperty(key)) {
        this.instance.element.classList.remove(classes[key])
      }
    }

    Pj.emitter.off('scroll', this.update)
  }

  update() {
    if (this.instance.is('disabled')) {
      return
    }
    const currentScrollY =
      window.pageYOffset || document.documentElement.scrollTop
    const offset = 0

    if (currentScrollY <= offset) {
      this.top()
    } else {
      this.notTop()
    }
  }

  top() {
    const classList = this.instance.element.classList
    const classes = this.classes

    if (!classList.contains(classes.top)) {
      classList.add(classes.top)
      classList.remove(classes.notTop)
      this.instance.trigger('top')
    }
  }

  notTop() {
    const classList = this.instance.element.classList
    const classes = this.classes

    if (!classList.contains(classes.notTop)) {
      classList.add(classes.notTop)
      classList.remove(classes.top)
      this.instance.trigger('untop')
    }
  }

  // getScrollY() {
  //   if (this.options.scroller.pageYOffset !== undefined) {
  //     return this.options.scroller.pageYOffset;
  //   } else if (this.options.scroller.scrollTop !== undefined) {
  //     return this.options.scroller.scrollTop;
  //   }
  //   return (document.documentElement ||
  //     document.body.parentNode ||
  //     document.body
  //   ).scrollTop;
  // }
}

export default ontop
