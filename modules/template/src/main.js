import { getValueByPath } from '@pluginjs/utils'

/* Credit to https://github.com/Matt-Esch/string-template MIT */
const template = (function() {
  const pattern = /\{\s*([.0-9a-zA-Z_]+)\s*\}/g

  function render(string, ...args) {
    if (args.length === 1 && typeof args[0] === 'object') {
      args = args[0]
    }

    if (!args || !args.hasOwnProperty) {
      args = {}
    }

    return string.replace(pattern, (match, i, index) => {
      let result = null

      if (string[index - 1] === '{' && string[index + match.length] === '}') {
        return i
      }

      if (args.hasOwnProperty(i)) {
        result = args[i]
      } else if (i.indexOf('.') !== -1) {
        result = getValueByPath(args, i)
      }

      if (result === null || result === undefined) {
        return ''
      }

      return result
    })
  }

  return {
    render,
    compile(str) {
      return function(...args) {
        return render(str, ...args)
      }
    },
    parse(str) {
      const matches = str.match(pattern)

      if (matches === null) {
        return false
      }

      const parsed = []
      for (let i = 0; i < matches.length; i++) {
        if (!matches[i].match(/^\{\{.+\}\}$/g)) {
          parsed.push(matches[i].substring(1, matches[i].length - 1).trim())
        }
      }

      return parsed
    }
  }
})()

export default template
