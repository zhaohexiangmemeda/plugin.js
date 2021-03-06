import is from '@pluginjs/is'
import Pj from '@pluginjs/pluginjs'
import easing from '@pluginjs/easing'

/* Credit to https://github.com/iamdustan/smoothscroll MIT */
const scroll = (function() {
  /*
   * define timing method
   */
  const now =
    window.performance && window.performance.now
      ? window.performance.now.bind(window.performance)
      : Date.now

  /*
   * changes scroll position inside an element
   * @method scrollElement
   * @param {Number} x
   * @param {Number} y
   */
  function scrollElement(x, y) {
    this.scrollLeft = x
    this.scrollTop = y
  }

  /*
   * finds scrollable parent of an element
   * @method findScrollableParent
   * @param {Node} el
   * @returns {Node} el
   */
  function findScrollableParent(el) {
    let isBody
    let hasScrollableSpace
    let hasVisibleOverflow

    do {
      el = el.parentNode

      // set condition variables
      isBody = el === window.document.body
      hasScrollableSpace =
        el.clientHeight < el.scrollHeight || el.clientWidth < el.scrollWidth
      hasVisibleOverflow =
        window.getComputedStyle(el, null).overflow === 'visible'
    } while (!isBody && !(hasScrollableSpace && !hasVisibleOverflow))

    isBody = hasScrollableSpace = hasVisibleOverflow = null

    return el
  }

  let currentFrame = null

  /*
   * self invoked function that, given a context, steps through scrolling
   * @method step
   * @param {Object} context
   */
  function step(context) {
    // call method again on next available frame
    currentFrame = context.frame = window.requestAnimationFrame(
      step.bind(window, context)
    )

    const time = now()
    let elapsed = (time - context.startTime) / context.duration

    // avoid elapsed times higher than one
    elapsed = elapsed > 1 ? 1 : elapsed

    // apply easing to elapsed time
    const value = context.easing(elapsed)
    const currentX = context.startX + (context.x - context.startX) * value
    const currentY = context.startY + (context.y - context.startY) * value

    context.method.call(context.scrollable, currentX, currentY)

    // return when end points have been reached
    if (currentX === context.x && currentY === context.y) {
      window.cancelAnimationFrame(context.frame)
      if (is.function(context.complete)) {
        context.complete.call(context.scrollable, context.x, context.y)
      }
      return
    }
  }

  /*
   * scrolls window
   * @method smoothScroll
   * @param {Object|Node} el
   * @param {Number} x
   * @param {Number} y
   */
  function smoothScroll(
    el,
    x,
    y,
    easingStatus = 'ease',
    duration = 468,
    complete
  ) {
    let scrollable
    let startX
    let startY
    let method
    const startTime = now()
    let frame

    // define scroll context
    if (el === window.document.body) {
      scrollable = window
      startX = window.scrollX || window.pageXOffset
      startY = window.scrollY || window.pageYOffset
      method = window.scroll || window.scrollTo
    } else {
      scrollable = el
      startX = el.scrollLeft
      startY = el.scrollTop
      method = scrollElement
    }

    if (!is.numeric(x)) {
      x = startX
    }
    if (!is.numeric(y)) {
      y = startY
    }
    // cancel frame when a scroll event's happening
    if (currentFrame) {
      window.cancelAnimationFrame(currentFrame)
    }

    // scroll looping over a frame
    step({
      scrollable,
      method,
      startTime,
      startX,
      startY,
      x: parseInt(x, 10),
      y: parseInt(y, 10),
      easing: easing.get(easingStatus) || easing.get('ease'),
      duration: parseInt(duration, 10),
      frame,
      complete
    })
  }

  function scrollTo(x, y, easing, duration, complete) {
    if (is.object(x)) {
      if (!is.undefined(x.y)) {
        y = x.y
      }
      if (!is.undefined(x.easing)) {
        easing = x.easing
      }
      if (!is.undefined(x.duration)) {
        duration = x.duration
      }
      if (!is.undefined(x.complete)) {
        complete = x.complete
      }
      x = x.x
    }
    smoothScroll.call(
      window,
      window.document.body,
      is.numeric(x) ? parseInt(x, 10) : undefined,
      is.numeric(y) ? parseInt(y, 10) : undefined,
      easing,
      duration,
      complete
    )
  }

  function scrollToX(value, easing, duration, complete) {
    if (is.object(value)) {
      if (!is.undefined(value.easing)) {
        easing = value.easing
      }
      if (!is.undefined(value.duration)) {
        duration = value.duration
      }
      if (!is.undefined(value.complete)) {
        complete = value.complete
      }
      value = value.value
    }
    smoothScroll.call(
      window,
      window.document.body,
      parseInt(value, 10),
      undefined,
      easing,
      duration,
      (x, y) => {
        /* eslint no-unused-vars: 'off' */
        if (is.function(complete)) {
          complete(x)
        }
      }
    )
  }

  function scrollToY(value, easing, duration, complete) {
    if (is.object(value)) {
      if (!is.undefined(value.easing)) {
        easing = value.easing
      }
      if (!is.undefined(value.duration)) {
        duration = value.duration
      }
      if (!is.undefined(value.complete)) {
        complete = value.complete
      }
      value = value.value
    }
    smoothScroll.call(
      window,
      window.document.body,
      undefined,
      parseInt(value, 10),
      easing,
      duration,
      (x, y) => {
        /* eslint no-unused-vars: 'off' */
        if (is.function(complete)) {
          complete(y)
        }
      }
    )
  }

  function scrollBy(x, y, easing, duration, complete) {
    if (is.object(x)) {
      if (!is.undefined(x.y)) {
        y = x.y
      }
      if (!is.undefined(x.easing)) {
        easing = x.easing
      }
      if (!is.undefined(x.duration)) {
        duration = x.duration
      }
      if (!is.undefined(x.complete)) {
        complete = x.complete
      }
      x = x.x
    }

    smoothScroll.call(
      window,
      window.document.body,
      is.numeric(x)
        ? parseInt(x, 10) + (window.scrollX || window.pageXOffset)
        : undefined,
      is.numeric(y)
        ? parseInt(y, 10) + (window.scrollY || window.pageYOffset)
        : undefined,
      easing,
      duration,
      complete
    )
  }

  function scrollByX(value, easing, duration, complete) {
    if (is.object(value)) {
      if (!is.undefined(value.easing)) {
        easing = value.easing
      }
      if (!is.undefined(value.duration)) {
        duration = value.duration
      }
      if (!is.undefined(value.complete)) {
        complete = value.complete
      }
      value = value.value
    }

    smoothScroll.call(
      window,
      window.document.body,
      parseInt(value, 10) + (window.scrollX || window.pageXOffset),
      undefined,
      easing,
      duration,
      (x, y) => {
        if (is.function(complete)) {
          complete(x)
        }
      }
    )
  }

  function scrollByY(value, easing, duration, complete) {
    if (is.object(value)) {
      if (!is.undefined(value.easing)) {
        easing = value.easing
      }
      if (!is.undefined(value.duration)) {
        duration = value.duration
      }
      if (!is.undefined(value.complete)) {
        complete = value.complete
      }
      value = value.value
    }
    smoothScroll.call(
      window,
      window.document.body,
      undefined,
      parseInt(value, 10) + (window.scrollY || window.pageYOffset),
      easing,
      duration,
      (x, y) => {
        if (is.function(complete)) {
          complete(y)
        }
      }
    )
  }

  function scrollIntoView(element, easing, duration, offset, axis, complete) {
    if (is.object(element) && is.domNode(element.element)) {
      if (!is.undefined(element.easing)) {
        easing = element.easing
      }
      if (!is.undefined(element.duration)) {
        duration = element.duration
      }
      if (!is.undefined(element.complete)) {
        complete = element.complete
      }
      if (!is.undefined(element.offset)) {
        offset = element.offset
      }
      if (!is.undefined(element.axis)) {
        axis = element.axis
      }
      element = element.element
    } else {
      if (is.function(axis)) {
        complete = axis
        axis = undefined
      }
      if (is.function(offset)) {
        complete = offset
        offset = undefined
      }
    }

    offset = offset || {}

    offset.left = is.numeric(offset.left) ? parseInt(offset.left, 10) : 0
    offset.top = is.numeric(offset.top) ? parseInt(offset.top, 10) : 0

    axis = Object.assign(
      {
        x: true,
        y: true
      },
      axis || {}
    )

    const scrollableParent =
      element === window.document.body ? element : findScrollableParent(element)
    const parentRects = scrollableParent.getBoundingClientRect()
    const clientRects = element.getBoundingClientRect()

    if (scrollableParent !== window.document.body) {
      // reveal element inside parent
      smoothScroll.call(
        element,
        scrollableParent,
        axis.x
          ? scrollableParent.scrollLeft +
            clientRects.left -
            offset.left -
            parentRects.left
          : undefined,
        axis.y
          ? scrollableParent.scrollTop +
            clientRects.top -
            offset.top -
            parentRects.top
          : undefined,
        easing,
        duration,
        complete
      )
      // reveal parent in viewport
      scrollBy(parentRects.left, parentRects.top, easing, duration)
    } else {
      // reveal element in viewport
      scrollBy(
        clientRects.left - offset.left,
        clientRects.top - offset.top,
        easing,
        duration,
        complete
      )
    }
  }

  function scrollTop(element, easing, duration, offset, complete) {
    if (is.object(element) && is.domNode(element.element)) {
      if (!is.undefined(element.easing)) {
        easing = element.easing
      }
      if (!is.undefined(element.duration)) {
        duration = element.duration
      }
      if (!is.undefined(element.offset)) {
        offset = element.offset
      }
      if (!is.undefined(element.complete)) {
        complete = element.complete
      }
      element = element.element
    }

    return scrollIntoView(
      element,
      easing,
      duration,
      { top: offset },
      {
        x: false,
        y: true
      },
      (x, y) => {
        if (is.function(complete)) {
          complete(y)
        }
      }
    )
  }

  return {
    to: scrollTo,
    toX: scrollToX,
    toY: scrollToY,
    by: scrollBy,
    byX: scrollByX,
    byY: scrollByY,
    intoView: scrollIntoView,
    top: scrollTop
  }
})()

Pj.scroll = scroll

export default scroll
