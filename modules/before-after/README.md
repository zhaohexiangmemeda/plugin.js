# BeforeAfter
> A flexible modern before-after js plugin.
## Introduction

#### [Demo]()
---
### Installation

#### Yarn
```javascript
yarn add @pluginjs/before-after
```
#### NPM
```javascript
npm i @pluginjs/before-after
```
---

## Getting Started
### Include
**Webpack && Rollup:**

ECMAScript Modules
```javascript
import beforeAfter from "@pluginjs/before-after"
```

CommonJS
```javascript
require("@pluginjs/before-after")
```

**CDN:**
Development:
```html
<script src="https://unpkg.com/@pluginjs/{moduleName}/dist/before-after.js"></script>
<link rel="stylesheet" href="https://unpkg.com/@pluginjs/{moduleName}/dist/before-after.css">
```
Production:
```html
<script src="https://unpkg.com/@pluginjs/{moduleName}/dist/before-after.min.js"></script>
<link rel="stylesheet" href="https://unpkg.com/@pluginjs/{moduleName}/dist/before-after.min.css">
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
Pj.beforeAfter('.element', options);
```
---
## API

### Options:
Options are called on beforeAfter instances through the beforeAfter options itself.
You can also save the instances to variable for further use.

Name | Description | Default
-----|--------------|-----
`"theme"` | Set plugin theme option | `null`
`"labelTheme"` | Set labelTheme | `null`
`"direction"` | Set is horizontal or vertical | `horizontal`
`"initial"` | Set initial options | `0.5`
`"showLabel"` | Set showLabel | `true`
`"mouseDrag"` | Set mouseDrag | `true`
`"touchDrag"` | Set touchDrag | `true`
`"pointerDrag"` | Set pointerDrag | `true`
`"clickMove"` | Set clickMove | `true`
`"duration"` | Set duretion | `500`
`"easing"` | Set easing | `easeInOut`
`"labels"` | Set labels | `{&quot;before&quot;:&quot;Before&quot;,&quot;after&quot;:&quot;After&quot;}`
`"arrows"` | Set arrows | `{&quot;left&quot;:&quot;fa fa-caret-left&quot;,&quot;right&quot;:&quot;fa fa-caret-right&quot;,&quot;up&quot;:&quot;fa fa-caret-up&quot;,&quot;down&quot;:&quot;fa fa-caret-down&quot;}`
`"templates"` | Set default templates | `{}`

### Events:
Events are called on beforeAfter instances through the beforeAfter events itself.
You can also save the instances to variable for further use.

Name | Description
-----|-----
`"ready"` | Gets fired when plugin has ready
`"hover"` | Gets fired when plugin has hover
`"hovered"` | Gets fired when plugin has hovered
`"drag"` | Gets fired when plugin has drag
`"dragged"` | Gets fired when plugin has dragged
`"change"` | Gets fired when plugin has changed
`"enable"` | Gets fired when plugin has enabled
`"disable"` | Gets fired when plugin has disabled
`"destroy"` | Gets fired when plugin has destroy

```
### Methods:
Methods are called on beforeAfter instances through the beforeAfter method itself.
You can also save the instances to variable for further use.

Name | Description
-----|-----
`"moveBy"` | Get value of moveBy
`"moveTo"` | Get value of moveTo
`"enable"` | Enabled plugin if plugin is disabled
`"disable"` | Disable plugin
`"destroy"` | Destroy plugin

**example:**
```javascript
Pj.$beforeAfter('.element', moveBy)
Pj.$beforeAfter('.element', moveBy, "foo")
Pj.$beforeAfter('.element', moveBy, "foo", "bar")
```

### Classes:
Name | Description | Default
-----|------|------
`"NAMESPACE"` | Declare plugin namespace | `as-beforeAfter`
`"THEME"` | Declare plugin theme | `{namespace}--{theme}`
`"DIRECTION"` | Declare plugin direction | `{namespace}-{direction}`
`"CONTAINER"` | Declare plugin range | `{namespace}`
`"BEFORE"` | Declare plugin before | `{namespace}-before`
`"AFTER"` | Declare plugin after | `{namespace}-after`
`"HANDLE"` | Declare plugin handle | `{namespace}-handle`
`"ARROWBEFORE"` | Declare plugin arrow before | `{namespace}-arrow-before`
`"ARROWAFTER"` | Declare plugin arrow after | `{namespace}-arrow-after`
`"LABELS"` | Declare plugin labels | `{namespace}-labels`
`"LABELTHEME"` | Declare plugin labels theme | `{namespace}-labels-{theme}`
`"LABELBEFORE"` | Declare plugin before | `{namespace}-label-before`
`"LABELAFTER"` | Declare plugin after | `{namespace}-label-after`
`"LABELHIDE"` | Declare plugin label hide | `{namespace}-label-hide`
`"ACTIVE"` | Announce plugin is actived | `{namespace}-active`
`"DISABLED"` | Announce plugin is disabled | `{namespace}-disabled`
`"DRAGGING"` | Announce plugin is dragging | `{namespace}-dragging`
`"HOVERING"` | Announce plugin is hoverd | `{namespace}-hovering`



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