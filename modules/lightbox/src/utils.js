import Pj from '@pluginjs/pluginjs'

const Utils = {
  hasScrollBar(winHeight) {
    return document.body.scrollHeight > (winHeight || Pj.windowHeight)
  },
  getScrollbarSize() {
    let scrollbarSize = 0
    if (scrollbarSize === undefined) {
      const scrollDiv = document.createElement('div')
      scrollDiv.style.cssText =
        'width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;'
      document.body.appendChild(scrollDiv)
      scrollbarSize = scrollDiv.offsetWidth - scrollDiv.clientWidth
      document.body.removeChild(scrollDiv)
    }
    return scrollbarSize
  }
}

export default Utils
