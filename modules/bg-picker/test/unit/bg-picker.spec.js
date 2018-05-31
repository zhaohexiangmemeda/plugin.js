import $ from 'jquery'
import '@pluginjs/tooltip'
import '@pluginjs/popover'
import '@pluginjs/pop-dialog'
import '@pluginjs/dropdown'
import BgPicker from '../../src/main'
import { defaults as DEFAULTS } from '../../src/constant'

const inputValue = `{
  'repeat':'repeat-x',
  'position':'center center',
  'attachment':'inherit',
  'image': 'http://via.placeholder.com/350x150'
}`
describe('BgPicker', () => {
  describe('BgPicker()', () => {
    it('should have BgPicker', () => {
      expect(BgPicker).to.be.an('function')
    })

    it('should have defaults', () => {
      expect(BgPicker.defaults).to.be.an('object')
    })
    it('should have events', () => {
      expect(BgPicker.events).to.be.an('object')
    })
    it('should have classes', () => {
      expect(BgPicker.classes).to.be.an('object')
    })
    it('should have methods', () => {
      expect(BgPicker.methods).to.be.an('array')
    })
  })

  describe('constructor()', () => {
    it('should work with element', () => {
      const element = document.createElement('input')
      element.value = inputValue
      const bgPicker = new BgPicker(element)

      expect(bgPicker).to.be.an('object')
      expect(bgPicker.options).to.be.eql(DEFAULTS)
    })

    it('should have options', () => {
      const element = document.createElement('input')
      element.value = inputValue
      const bgPicker = new BgPicker(element)

      expect(bgPicker.options).to.be.an('object')
    })
  })

  describe('jquery constructor', () => {
    it('should works with jquery fn', () => {
      const element = document.createElement('input')
      element.value = inputValue
      const $element = $(element)

      expect($element.asBgPicker()).to.be.equal($element)

      const api = $element.data('bgPicker')

      expect(api).to.be.an('object')
      expect(api.options).to.be.an('object')
    })
  })

  describe('api call', () => {
    it('should not call bind', () => {
      const element = document.createElement('input')
      element.value = inputValue
      const $element = $(element).asBgPicker()
      expect($element.asBgPicker('bind')).to.be.undefined
    })

    it('should call destroy', () => {
      const element = document.createElement('input')
      element.value = inputValue
      const $element = $(element).asBgPicker()
      $element.asBgPicker('destroy')
      // expect().to.be.equal($element);
      // expect($element).to.be.equal($element);
    })
  })

  describe('initialize()', () => {
    let $element

    beforeEach(() => {
      const element = document.createElement('input')
      element.value = inputValue
      $element = $(element)
    })

    it('should trigger ready event', () => {
      let called = 0

      $element.on('bgPicker:ready', (event, api) => {
        expect(api.is('initialized')).to.be.true
        called++
      })

      $element.asBgPicker()
      expect(called).to.be.equal(1)
    })
  })

  describe('destroy()', () => {
    let $element
    let api

    beforeEach(() => {
      const element = document.createElement('input')
      element.value = inputValue
      $element = $(element).asBgPicker()
      api = $element.data('bgPicker')
    })

    it('should trigger destroy event', () => {
      let called = 0

      $element.on('bgPicker:destroy', (event, api) => {
        expect(api.is('initialized')).to.be.false
        called++
      })

      $element.asBgPicker('destroy')

      expect(called).to.be.equal(1)
    })
  })

  describe('enable()', () => {
    let $element
    let api

    beforeEach(() => {
      const element = document.createElement('input')
      element.value = inputValue
      $element = $(element).asBgPicker()
      api = $element.data('bgPicker')
    })

    it('should enable the plugin', () => {
      $element.asBgPicker('disable')
      $element.asBgPicker('enable')

      expect(api.is('disabled')).to.be.false
    })

    it('should trigger enable event', () => {
      let called = 0

      $element.on('bgPicker:enable', (event, api) => {
        expect(api.is('disabled')).to.be.false
        called++
      })

      $element.asBgPicker('enable')
      expect(called).to.be.equal(1)
    })
  })

  describe('disable()', () => {
    let $element
    let api

    beforeEach(() => {
      const element = document.createElement('input')
      element.value = inputValue
      $element = $(element).asBgPicker()
      api = $element.data('bgPicker')
    })

    it('should disable the plugin', () => {
      $element.asBgPicker('disable')

      expect(api.is('disabled')).to.be.true
    })

    it('should trigger disable event', () => {
      let called = 0

      $element.on('bgPicker:disable', (event, api) => {
        expect(api.is('disabled')).to.be.true
        called++
      })

      $element.asBgPicker('disable')
      expect(called).to.be.equal(1)
    })
  })
})