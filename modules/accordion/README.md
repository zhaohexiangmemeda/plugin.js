# Accordion
> A flexible modern accordion js plugin.
## Introduction

#### [Demo]()
---
### Installation

#### Yarn
```javascript
yarn add @pluginjs/accordion
```
#### NPM
```javascript
npm i @pluginjs/accordion
```
---

## Getting Started
### Include
**Webpack && Rollup:**

ECMAScript Modules
```javascript
import accordion from "@pluginjs/accordion"
```

CommonJS
```javascript
require("@pluginjs/accordion")
```

**CDN:**
Development:
```html
<script src="https://unpkg.com/@pluginjs/{moduleName}/dist/accordion.js"></script>
<link rel="stylesheet" href="https://unpkg.com/@pluginjs/{moduleName}/dist/accordion.css">
```
Production:
```html
<script src="https://unpkg.com/@pluginjs/{moduleName}/dist/accordion.min.js"></script>
<link rel="stylesheet" href="https://unpkg.com/@pluginjs/{moduleName}/dist/accordion.min.css">
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
Pj.accordion('.element', options);
```
---
## API

### Options:
Options are called on accordion instances through the accordion options itself.
You can also save the instances to variable for further use.

Name | Description | Default
-----|--------------|-----
`"theme"` | Add plugin theme option | `default`
`"panelSelector"` | Add panel selector to plugin | `null`
`"initialIndex"` | Set index of this plugin | `0`
`"duration"` | Set duration value | `300`
`"horizontal"` | Set is horizontal or not | `false`
`"multiple"` | Active multiple support | `false`
`"ajax"` | Enable ajax | `false`
`"breakWidth"` | Set width limit | `null`
`"resizeReference"` | Set resize reference | `window`
`"responsiveEffect"` | Set responsive effect | `easeInQuad`
`"dropdownLabelTpl"` | Set dropdown label | `&lt;a href&#x3D;&quot;javascript:void(0)&quot;&gt;&lt;/a&gt;`
`"responsiveDuration"` | Set responsive duration | `300`
`"onReady"` | Set ready callback | `null`

### Events:
Events are called on accordion instances through the accordion events itself.
You can also save the instances to variable for further use.

Name | Description
-----|-----
`"ready"` | Gets fired when plugin is ready
`"open"` | Gets fired when plugin is open
`"close"` | Gets fired when plugin is close
`"resize"` | Gets fired when plugin is resize

```
### Methods:
Methods are called on accordion instances through the accordion method itself.
You can also save the instances to variable for further use.

Name | Description
-----|-----
`"open"` | Open plugin
`"close"` | Close plugin

**example:**
```javascript
Pj.$accordion('.element', open)
Pj.$accordion('.element', open, "foo")
Pj.$accordion('.element', open, "foo", "bar")
```

### Classes:
Name | Description | Default
-----|------|------
`"NAMESPACE"` | Declare plugin namespace | `pj-accordion`
`"THEME"` | Declare plugin theme | `{namespace}--{theme}`
`"ACTIVE"` | Announce plugin is actived | `{namespace}-active`
`"DISABLED"` | Announce plugin is disabled | `{namespace}-disabled`
`"RESPONSIVE"` | Annouce plugin is responsive | `{namespace}-responsive`
`"HORIZONTAL"` | Annouce plugin has in horizontal status | `{namespace}-horizontal`
`"DROPDOWN"` | Annouce plugin dropdown node | `{namespace}-dropdown`
`"DROPDOWNLABEL"` | Annouce plugin dropdown label node | `{namespace}-dropdown-label`
`"DROPDOWNLIST"` | Announce plugin dropdown list node | `{namespace}-dropdown-list`
`"DROPDOWNOPEN"` | Announce plugin dropdown open node | `{namespace}-open`
`"PANE"` | Announce plugin pane node | `{namespace}-pane`
`"PANEHEADER"` | Announce plugin pane header node | `{namespace}-pane-header`
`"PANECONTENT"` | Announce plugin pane content node | `{namespace}-pane-content`
`"PANECONTENTINNER"` | Announce plugin pane contentinner node | `{namespace}-pane-content-inner`



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
Version: 0.2.20

## Copyright and license
Copyright (C) 2018 Creation Studio Limited.

@pluginjs is Licensed under [the GPL-v3 license](LICENSE).If you want to use @pluginjs project to develop commercial sites, themes, projects, and applications, the Commercial license is the appropriate license. With this option, your source code is kept proprietary. For purchase an Commercial License, contact us purchase@thecreation.co.