# Dots
> A flexible modern dots js plugin.
## Introduction

#### [Demo]()
---
### Installation

#### Yarn
```javascript
yarn add @pluginjs/dots
```
#### NPM
```javascript
npm i @pluginjs/dots
```
---

## Getting Started
### Include
**Webpack && Rollup:**

ECMAScript Modules
```javascript
import dots from "@pluginjs/dots"
```

CommonJS
```javascript
require("@pluginjs/dots")
```

**CDN:**
Development:
```html
<script src="https://unpkg.com/@pluginjs/{moduleName}/dist/dots.js"></script>
<link rel="stylesheet" href="https://unpkg.com/@pluginjs/{moduleName}/dist/dots.css">
```
Production:
```html
<script src="https://unpkg.com/@pluginjs/{moduleName}/dist/dots.min.js"></script>
<link rel="stylesheet" href="https://unpkg.com/@pluginjs/{moduleName}/dist/dots.min.css">
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
Pj.dots('.element', options);
```
---
## API

### Options:
Options are called on dots instances through the dots options itself.
You can also save the instances to variable for further use.

Name | Description | Default
-----|--------------|-----
`"theme"` | Add plugin theme option | `null`
`"items"` | Add extend item with plugin | `null`
`"default"` | Set default status with plugin | `null`
`"direction"` | Set direction | `horizontal`
`"valueFrom"` | pass attribute or tag name set where is value from | `[&quot;a&quot;,&quot;href&quot;]`
`"template"` | Set dots default html template | `{}`

### Events:
Events are called on dots instances through the dots events itself.
You can also save the instances to variable for further use.

Name | Description
-----|-----
`"change"` | Gets fired when plugin is changed
`"ready"` | Gets fired when plugin is ready
`"enable"` | Gets fired when plugin is enabled
`"disable"` | Gets fired when plugin is disabled
`"destroy"` | Gets fired when plugin is destroy
`"load"` | Gets fired when plugin is load
`"show"` | Gets fired when plugin is show
`"hide"` | Gets fired when plugin is hide
`"click"` | Gets fired when plugin is clicked

```
### Methods:
Methods are called on dots instances through the dots method itself.
You can also save the instances to variable for further use.

Name | Description
-----|-----
`"enable"` | Enabled plugin if plugin is disabled
`"disable"` | Disable plugin
`"destroy"` | Destroy plugin
`"build"` | Build template
`"append"` | Append something
`"prepend"` | Append something behind of plugin
`"add"` | Add something
`"remove"` | Remove interface
`"empty"` | Set empty
`"load"` | Load something
`"get"` | Get value by key
`"set"` | Set value by key
`"show"` | Show plugin when it has be hided
`"hide"` | Hide plugin

**example:**
```javascript
Pj.$dots('.element', enable)
Pj.$dots('.element', enable, "foo")
Pj.$dots('.element', enable, "foo", "bar")
```

### Classes:
Name | Description | Default
-----|------|------
`"NAMESPACE"` | Declare plugin namespace | `pj-dot`
`"CONTAINER"` | Declare plugin range | `{namespace}s`
`"THEME"` | Declare plugin theme | `{namespace}s--{theme}`
`"ITEM"` | Declare item element of plugin | `{namespace}`
`"VERTICAL"` | Declare direction style | `{namespace}s-vertical`
`"HORIZONTAL"` | Declare direction style | `{namespace}s-horizontal`
`"ACTIVE"` | Announce plugin is actived | `{namespace}-active`
`"DISABLED"` | Announce plugin is disabled | `{namespace}-disabled`
`"HIDDEN"` | Annouce plugin is hidden | `{namespace}-hidden`



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
Version: 0.2.19

## Copyright and license
Copyright (C) 2018 Creation Studio Limited.

@pluginjs is Licensed under [the GPL-v3 license](LICENSE).If you want to use @pluginjs project to develop commercial sites, themes, projects, and applications, the Commercial license is the appropriate license. With this option, your source code is kept proprietary. For purchase an Commercial License, contact us purchase@thecreation.co.