import Countdown from '../src/main'
import { defaults as DEFAULTS } from '../src/constant'
import generateHTMLSample from './fixtures/sample'

describe('Countdown', () => {
  describe('Countdown()', () => {
    test('should have Countdown', () => {
      expect(Countdown).toBeFunction()
    })

    test('should have defaults', () => {
      expect(Countdown.defaults).toBeObject()
    })

    test('should have events', () => {
      expect(Countdown.events).toBeObject()
    })

    test('should have classes', () => {
      expect(Countdown.classes).toBeObject()
    })

    test('should have methods', () => {
      expect(Countdown.methods).toBeArray()
    })
  })

  describe('constructor()', () => {
    test('should work wtesth element', () => {
      const countdown = Countdown.of(generateHTMLSample())

      expect(countdown).toBeObject()
      expect(countdown.options).toEqual(DEFAULTS)
    })

    test('should have options', () => {
      const countdown = Countdown.of(generateHTMLSample())

      expect(countdown.options).toBeObject()
    })
  })

  describe('initialized()', () => {
    let $element

    beforeEach(() => {
      $element = generateHTMLSample()
    })

    test('should trigger ready event', () => {
      let called = 0
      $element.addEventListener('countdown:ready', () => {
        called++
      })
      const instance = Countdown.of($element)
      expect(called).toEqual(1)
      expect(instance.is('initialized')).toBeTrue()
    })
  })
})
