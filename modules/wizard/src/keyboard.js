import keyboard from '@pluginjs/keyboard'
import Pj from '@pluginjs/pluginjs'

class Keyboard {
  constructor(instance) {
    this.instance = instance
    this.initialize()
  }

  initialize() {
    this.KEYBOARD = keyboard.init()

    this.bind()
  }

  bind() {
    this.KEYBOARD.down('left', () => {
      this.instance.back()
      return false
    })

    this.KEYBOARD.down('right', () => {
      this.instance.next()
      return false
    })
  }

  unbind() {
    this.KEYBOARD.down('left')
    this.KEYBOARD.down('right')
  }
}
export default Keyboard
