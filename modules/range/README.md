# Range
> A flexible modern range js plugin.
## Introduction

#### [Demo]()
---
### Installation

#### Yarn
```javascript
yarn add @pluginjs/range
```
#### NPM
```javascript
npm i @pluginjs/range
```
---

## Getting Started
### Include
**Webpack && Rollup:**

ECMAScript Modules
```javascript
import range from "@pluginjs/range"
```

CommonJS
```javascript
require("@pluginjs/range")
```

**CDN:**
Development:
```html
<script src="https://unpkg.com/@pluginjs/{moduleName}/dist/range.js"></script>
<link rel="stylesheet" href="https://unpkg.com/@pluginjs/{moduleName}/dist/range.css">
```
Production:
```html
<script src="https://unpkg.com/@pluginjs/{moduleName}/dist/range.min.js"></script>
<link rel="stylesheet" href="https://unpkg.com/@pluginjs/{moduleName}/dist/range.min.css">
```

### Initialize
HTML:
```html
<body>
  <div class="element"></div>
</body>
```
JS:
```javascript
Pj.range('.element', options);
```
---
## API

### Options:
Options are called on range instances through the range options itself.
You can also save the instances to variable for further use.

Name | Description | Default
-----|--------------|-----
`"theme"` | Set plugin theme option | `null`
`"max"` | Set plugin max option | `100`
`"min"` | Set plugin min option | `0`
`"value"` | Set plugin value option | `null`
`"step"` | Set plugin step option | `1`
`"unit"` | Set plugin unit option | `null`
`"defaultUnit"` | Set plugin defaultUnit option | `null`
`"limit"` | Set plugin limit option | `true`
`"isRange"` | Set plugin isRange option | `false`
`"direction"` | Set plugin direction option | `h`
`"keyboard"` | Set plugin keyboard event | `true`
`"tip"` | Set plugin is tip or not | `true`
`"scale"` | Set plugin is scale or not | `true`
`"parse"` | The type of JSON change the type of object | `function() {...}`
`"process"` | The type of object change the type of JSON | `function() {...}`

### Events:
Events are called on range instances through the range events itself.
You can also save the instances to variable for further use.

Name | Description
-----|-----
`"update"` | Gets fired when plugin has destroy
`"ready"` | Gets fired when plugin has ready
`"enable"` | Gets fired when plugin has enabled
`"disable"` | Gets fired when plugin has disabled
`"destroy"` | Gets fired when plugin has destroy
`"change"` | Gets fired when plugin has changed
`"changeUnit"` | Gets fired when plugin has changeUnit

```
### Methods:
Methods are called on range instances through the range method itself.
You can also save the instances to variable for further use.

Name | Description
-----|-----
`"val"` | Set or get value by key
`"get"` | Get value by key
`"set"` | Set value by key
`"setInterval"` | Set value about interval
`"enable"` | Enabled plugin if plugin is disabled
`"disable"` | Disable plugin
`"destroy"` | Destroy plugin

**example:**
```javascript
Pj.$range('.element', val)
Pj.$range('.element', val, "foo")
Pj.$range('.element', val, "foo", "bar")
```

### Classes:
Name | Description | Default
-----|------|------
`"NAMESPACE"` | Declare plugin namespace | `pj-range`
`"THEME"` | Declare plugin theme | `{namespace}--{theme}`
`"WRAP"` | Declare plugin wrap | `{namespace}`
`"CONTROL"` | Declare plugin control | `{namespace}-control`
`"DISABLED"` | Announce plugin is disabled | `{namespace}-disabled`
`"BAR"` | Declare plugin bar | `{namespace}-bar`
`"POINTER"` | Declare plugin pointer | `{namespace}-pointer`
`"POINTERACTIVE"` | Declare plugin pointer active | `{namespace}-pointer-active`
`"SCALE"` | Declare plugin scale | `{namespace}-scale`
`"LINES"` | Declare plugin scale lines | `{namespace}-scale-lines`
`"GRID"` | Declare plugin scale grid | `{namespace}-scale-grid`
`"INLINEGRID"` | Declare plugin scale inlineGrid | `{namespace}-scale-inlineGrid`
`"VALUES"` | Declare plugin scale values | `{namespace}-scale-values`
`"SELECTED"` | Declare plugin selectd | `{namespace}-selected`
`"TIP"` | Declare plugin tip | `{namespace}-tip`
`"SHOW"` | Declare plugin show | `{namespace}-tip-show`
`"UNIT"` | Declare plugin unit | `{namespace}-unit`



### Dependencies:
- `[object Object]`
- `[object Object]`

---

## Browser support

Tested on all major browsers.

| <img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_32x32.png" alt="Safari"> | <img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_32x32.png" alt="Chrome"> | <img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_32x32.png" alt="Firefox"> | <img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_32x32.png" alt="Edge"> | <img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_32x32.png" alt="Opera"> |
|:--:|:--:|:--:|:--:|:--:|:--:|
| Latest ✓ | Latest ✓ | Latest ✓ | Latest ✓ | >=10 ✓ | Latest ✓ |

## Contributing
See [Contribution.md](Contribution.md).

## Changelog
To see the list of recent changes, see [Releases section](https://github.com/plugin/plugin.js/releases).

## Version
Version: 0.2.21

## Copyright and license
Copyright (C) 2018 Creation Studio Limited.

@pluginjs is Licensed under [the GPL-v3 license](LICENSE).If you want to use @pluginjs project to develop commercial sites, themes, projects, and applications, the Commercial license is the appropriate license. With this option, your source code is kept proprietary. For purchase an Commercial License, contact us purchase@thecreation.co.