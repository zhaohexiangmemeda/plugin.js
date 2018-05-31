# Scrollable
> A flexible modern scrollable js plugin.
## Introduction

#### [Demo]()
---
### Installation

#### Yarn
```javascript
yarn add @pluginjs/scrollable
```
#### NPM
```javascript
npm i @pluginjs/scrollable
```
---

## Getting Started
### Include
**Webpack && Rollup:**

ECMAScript Modules
```javascript
import scrollable from "@pluginjs/scrollable"
```

CommonJS
```javascript
require("@pluginjs/scrollable")
```

**CDN:**
Development:
```html
<script src="https://unpkg.com/@pluginjs/{moduleName}/dist/scrollable.js"></script>
<link rel="stylesheet" href="https://unpkg.com/@pluginjs/{moduleName}/dist/scrollable.css">
```
Production:
```html
<script src="https://unpkg.com/@pluginjs/{moduleName}/dist/scrollable.min.js"></script>
<link rel="stylesheet" href="https://unpkg.com/@pluginjs/{moduleName}/dist/scrollable.min.css">
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
Pj.scrollable('.element', options);
```
---
## API

### Options:
Options are called on scrollable instances through the scrollable options itself.
You can also save the instances to variable for further use.

Name | Description | Default
-----|--------------|-----
`"theme"` | Set plugin theme option | `null`
`"contentSelector"` | Set contentSelector | `null`
`"containerSelector"` | Set containerSelector | `null`
`"direction"` | Set direction | `vertical`
`"showOnHover"` | Set showOnHover | `true`
`"showOnBarHover"` | Set showBarHover | `false`
`"duration"` | Set duretion | `500`
`"easing"` | Set easting | `ease-in`
`"responsive"` | Set responsive | `true`
`"throttle"` | Set throttle | `20`
`"scrollbar"` | Set scrollbar | `{}`

### Events:
Events are called on scrollable instances through the scrollable events itself.
You can also save the instances to variable for further use.

Name | Description
-----|-----
`"ready"` | Gets fired when plugin has ready
`"enable"` | Gets fired when plugin has enabled
`"disable"` | Gets fired when plugin has disabled
`"destroy"` | Gets fired when plugin has destroy
`"hover"` | Gets fired when plugin has hover
`"hovered"` | Gets fired when plugin has hovered
`"scroll"` | Gets fired when plugin has scroll
`"scrollTop"` | Gets fired when plugin has scrollTop
`"scrollEnd"` | Gets fired when plugin has scrollEnd
`"change"` | Gets fired when plugin has changed

```
### Methods:
Methods are called on scrollable instances through the scrollable method itself.
You can also save the instances to variable for further use.

Name | Description
-----|-----
`"scrollTo"` | 
`"scrollBy"` | 
`"enable"` | Enabled plugin if plugin is disabled
`"disable"` | Disable plugin
`"destroy"` | Destroy plugin
`"update"` | 

**example:**
```javascript
Pj.$scrollable('.element', scrollTo)
Pj.$scrollable('.element', scrollTo, "foo")
Pj.$scrollable('.element', scrollTo, "foo", "bar")
```

### Classes:
Name | Description | Default
-----|------|------
`"NAMESPACE"` | Declare plugin namespace | `pj-scrollable`
`"THEME"` | Declare plugin theme | `{namespace}--{theme}`
`"WARP"` | Declare plugin wrap | `{namespace}`
`"VERTICAL"` | Declare plugin vertical | `{namespace}-vertical`
`"HORIZONTAL"` | Declare plugin horizontal | `{namespace}-horizontal`
`"CONTENT"` | Declare plugin content | `{namespace}-content`
`"CONTAINER"` | Declare plugin range | `{namespace}-container`
`"BAR"` | Declare plugin bar | `{namespace}-bar`
`"BARHIDE"` | Declare plugin bar hide | `{namespace}-bar-hide`
`"ENABLED"` | Declare plugin enabled | `{namespace}-enabled`
`"DISABLED"` | Announce plugin is disabled | `{namespace}-disabled`
`"DRAGGING"` | Declare plugin dragging | `{namespace}-dragging`
`"HOVERING"` | Announce plugin is hoverd | `{namespace}-hovering`
`"SCROLLING"` | Declare plugin scrolling | `{namespace}-scrolling`



### Dependencies:
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
Version: 0.2.18

## Copyright and license
Copyright (C) 2018 Creation Studio Limited.

@pluginjs is Licensed under [the GPL-v3 license](LICENSE).If you want to use @pluginjs project to develop commercial sites, themes, projects, and applications, the Commercial license is the appropriate license. With this option, your source code is kept proprietary. For purchase an Commercial License, contact us purchase@thecreation.co.