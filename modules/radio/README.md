# Radio

[![npm package](https://img.shields.io/npm/v/@pluginjs/radio.svg)](https://www.npmjs.com/package/@pluginjs/radio)

A flexible modern radio js plugin.

**[Samples](https://codesandbox.io/s/github/pluginjs/plugin.js/tree/master/modules/radio/samples)**

## Introduction

### Installation

#### Yarn

```javascript
yarn add @pluginjs/radio
```

#### NPM

```javascript
npm i @pluginjs/radio
```

---

## Getting Started

**CDN:**

Development:

```html
<script src="https://unpkg.com/@pluginjs/radio/dist/radio.js"></script>
<link rel="stylesheet" href="https://unpkg.com/@pluginjs/radio/dist/radio.css">
```

Production:

```html
<script src="https://unpkg.com/@pluginjs/radio/dist/radio.min.js"></script>
<link rel="stylesheet" href="https://unpkg.com/@pluginjs/radio/dist/radio.min.css">
```

### Initialize

HTML:

```html
<body>
  <div class="element"></div>
</body>
```

ECMAScript Module:

```javascript
import Radio from "@pluginjs/radio"
import "@pluginjs/radio/dist/radio.css"

Radio.of(document.querySelector('.element'), options)
```

CommonJS:

```javascript
require("@pluginjs/radio/dist/radio.css")
const Radio = require("@pluginjs/radio")

Radio.of(document.querySelector('.element'), options)
```

Browser:

```html
<link rel="stylesheet" href="https://unpkg.com/@pluginjs/radio/dist/radio.css">
<script src="https://unpkg.com/@pluginjs/radio/dist/radio.js"></script>
<script>
  Pj.radio('.element', options)
</script>
```

---

## API

### Options

Options are called on radio instances through the radio options itself.
You can also save the instances to variable for further use.

Name | Description | Default
-----|--------------|-----
`"theme"` | Set plugin theme option | `null`
`"classes"` | Set the button class name  | `{"button":"{namespace}-default"}`
`"disabled"` | Disabled plugin | `false`
`"getWrap"` | Get the parent element of each element | `function() {...}`
`"getLabel"` | Get the adjacent element of each element | `function() {...}`
`"getIcon"` | Get the descendants of each element | `function() {...}`
`"getGroup"` | Set the value of the input attribute | `function() {...}`
`"templates"` | Set default templates | `{}`

### Events

Events are called on radio instances through the radio events itself.
You can also save the instances to variable for further use.

Name | Description
-----|-----
`"ready"` | Gets fired when plugin has ready
`"enable"` | Gets fired when plugin has enabled
`"disable"` | Gets fired when plugin has disabled
`"destroy"` | Gets fired when plugin has destroy
`"change"` | Gets fired when plugin has changed
`"check"` | Gets fired when plugin has check
`"uncheck"` | Gets fired when plugin has uncheck

### Methods

Methods are called on radio instances through the radio method itself.
You can also save the instances to variable for further use.

Name | Description
-----|-----
`"enable"` | Enabled plugin if plugin is disabled
`"disable"` | Disable plugin
`"destroy"` | Destroy plugin
`"get"` | Get value by key
`"set"` | Set value by key
`"val"` | Set or get value by key
`"check"` | Set check
`"uncheck"` | Set uncheck

### Classes

Name | Description | Default
-----|------|------
`"NAMESPACE"` | Declare plugin namespace | `pj-radio`
`"WRAP"` | Declare plugin wrap | `{namespace}`
`"THEME"` | Declare plugin theme | `{namespace}-{theme}`
`"ICON"` | Declare plugin icon | ``
`"CHECKED"` | Declare plugin checked | `{namespace}-checked`
`"DISABLED"` | Announce plugin is disabled | `{namespace}-disable`
---

## Browser support

Tested on all major browsers.

| <img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_32x32.png" alt="Safari"> | <img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_32x32.png" alt="Chrome"> | <img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_32x32.png" alt="Firefox"> | <img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_32x32.png" alt="Edge"> | <img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_32x32.png" alt="Opera"> |
|:--:|:--:|:--:|:--:|:--:|
| Latest ✓ | Latest ✓ | Latest ✓ | Latest ✓ | Latest ✓ |

## License

@pluginjs/radio is Licensed under [the GPL-v3 license](LICENSE).

If you want to use @pluginjs/radio project to develop commercial sites, themes, projects, and applications, the Commercial license is the appropriate license. With this option, your source code is kept proprietary.

For purchase an Commercial License, contact us purchase@thecreation.co.

## Copyright

Copyright (C) 2018 [Creation Studio Limited](creationstudio.com).