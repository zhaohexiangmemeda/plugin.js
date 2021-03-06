export const namespace = 'color'

export const defaults = {
  format: false,
  shortenHex: false,
  hexUseName: false,
  reduceAlpha: false,
  alphaConvert: {
    // or false will disable convert
    RGB: 'RGBA',
    HSL: 'HSLA',
    HEX: 'RGBA',
    NAMESPACE: 'RGBA'
  },
  nameDegradation: 'HEX',
  invalidValue: '',
  zeroAlphaAsTransparent: true
}

export const info = { version: '0.3.4' }
