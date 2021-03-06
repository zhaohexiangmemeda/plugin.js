# IconPicker

[![npm package](https://img.shields.io/npm/v/@pluginjs/icon-picker.svg)](https://www.npmjs.com/package/@pluginjs/icon-picker)

A flexible modern icon-picker js plugin.

**[Samples](https://codesandbox.io/s/github/pluginjs/plugin.js/tree/master/modules/iconPicker/samples)**

## Introduction

### Installation

#### Yarn

```javascript
yarn add @pluginjs/icon-picker
```

#### NPM

```javascript
npm i @pluginjs/icon-picker
```

---

## Getting Started

**CDN:**

Development:

```html
<script src="https://unpkg.com/@pluginjs/icon-picker/dist/icon-picker.js"></script>
<link rel="stylesheet" href="https://unpkg.com/@pluginjs/icon-picker/dist/icon-picker.css">
```

Production:

```html
<script src="https://unpkg.com/@pluginjs/icon-picker/dist/icon-picker.min.js"></script>
<link rel="stylesheet" href="https://unpkg.com/@pluginjs/icon-picker/dist/icon-picker.min.css">
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
import IconPicker from "@pluginjs/icon-picker"
import "@pluginjs/icon-picker/dist/icon-picker.css"

IconPicker.of(document.querySelector('.element'), options)
```

CommonJS:

```javascript
require("@pluginjs/icon-picker/dist/icon-picker.css")
const IconPicker = require("@pluginjs/icon-picker")

IconPicker.of(document.querySelector('.element'), options)
```

Browser:

```html
<link rel="stylesheet" href="https://unpkg.com/@pluginjs/icon-picker/dist/icon-picker.css">
<script src="https://unpkg.com/@pluginjs/icon-picker/dist/icon-picker.js"></script>
<script>
  Pj.iconPicker('.element', options)
</script>
```

---

## API

### Options

Options are called on iconPicker instances through the iconPicker options itself.
You can also save the instances to variable for further use.

Name | Description | Default
-----|--------------|-----
`"theme"` | Set plugin theme option | `null`
`"locale"` | Set locale environment | `en`
`"manage"` | Set manage | `true`
`"keyboard"` | Set keyboard | `true`
`"placehoder"` | Set input box prompt information | `Choose a icon`
`"disabled"` | Disabled plugin | `false`
`"templates"` | Set default templates | `{}`
`"process"` | The type of object change the type of JSON | `function() {...}`
`"parse"` | The type of JSON change the type of object | `function() {...}`

### Events

Events are called on iconPicker instances through the iconPicker events itself.
You can also save the instances to variable for further use.

Name | Description
-----|-----
`"ready"` | Gets fired when plugin has ready
`"enable"` | Gets fired when plugin has enabled
`"disable"` | Gets fired when plugin has disabled
`"destroy"` | Gets fired when plugin has destroy
`"change"` | Gets fired when plugin has changed

### Methods

Methods are called on iconPicker instances through the iconPicker method itself.
You can also save the instances to variable for further use.

Name | Description
-----|-----
`"get"` | Get value by key
`"set"` | Set value by key
`"val"` | Set or get value by key
`"enable"` | Enabled plugin if plugin is disabled
`"disable"` | Disable plugin
`"destroy"` | Destroy plugin

### Classes

Name | Description | Default
-----|------|------
`"NAMESPACE"` | Declare plugin namespace | `pj-iconPicker`
`"THEME"` | Declare plugin theme | `{namespace}--{theme}`
`"ELEMENT"` | Declare plugin element | `{namespace}`
`"TRIGGER"` | Declare plugin trigger | `{namespace}-trigger`
`"WRAP"` | Declare plugin wrap | `{namespace}-wrap`
`"PANEL"` | Declare plugin panel | `{namespace}-panel`
`"CATEGORIES"` | Declare plugin categories | `{namespace}-categories`
`"CATEGORIESTITLE"` | Declare plugin categories title | `{namespace}-categories-title`
`"ICON"` | Declare plugin icon | `{namespace}-icon`
`"ICONHOVER"` | Declare plugin icon hover | `{namespace}-icon-hover`
`"ACTIVE"` | Announce plugin is actived | `{namespace}-active`
`"DISABLED"` | Announce plugin is disabled | `{namespace}-disabled`
`"PACKAGE"` | Declare plugin package | `{namespace}-package`
`"PACKAGESWRAP"` | Declare plugin package wrap | `{namespace}-package-wrap`
`"PACKAGETITLE"` | Declare plugin package etitle | `{namespace}-package-title`
`"PACKAGEBODY"` | Declare plugin package body | `{namespace}-package-body`
`"PACKAGEOPEN"` | Declare plugin package open | `{namespace}-package-open`
`"PACKAGEHIDE"` | Declare plugin package hide | `{namespace}-package-hide`
`"PACKAGETIP"` | Declare plugin package etip | `{namespace}-package-tip`
`"SEARCH"` | Declare plugin search | `{namespace}-search`
`"SEARCHING"` | Declare plugin searching | `{namespace}-searching`
`"SEARCHED"` | Declare plugin searched | `{namespace}-searched`
`"SEARCHCLOSE"` | Declare plugin searchlose | `{namespace}-search-close`
`"SEARCHLIST"` | Declare plugin searchlist | `{namespace}-search-list`
`"SEARCHOWNDATA"` | Declare plugin searchowndata | `{namespace}-search-data`
`"CONTROLLER"` | Declare plugin controller | `{namespace}-controller`
`"SELECTOR"` | Declare plugin selector | `{namespace}-selector`
`"SELECTORPANEL"` | Declare plugin selectorpanel | `{namespace}-selector-panel`
`"MANAGE"` | Declare plugin manage | `{namespace}-manage`
`"EMPTY"` | Declare plugin empty | `{namespace}-empty`
`"EMPTYLINK"` | Declare plugin emptylink | `{namespace}-empty-link`

### Translations

Name | EN | ZH
-----|------|-------
`"allIcons"` | All Icons | 全部图标
`"searchText"` | Search... | 搜索...
`"manage"` | manage | 管理
`"founded"` | founded | 结果
`"emptyTitle"` | Befor using icons, you need add icons.  | 使用图标之前，请先添加。
`"emptyLinkTitle"` | Go add now | 现在添加
---

## Browser support

Tested on all major browsers.

| <img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_32x32.png" alt="Safari"> | <img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_32x32.png" alt="Chrome"> | <img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_32x32.png" alt="Firefox"> | <img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_32x32.png" alt="Edge"> | <img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_32x32.png" alt="Opera"> |
|:--:|:--:|:--:|:--:|:--:|
| Latest ✓ | Latest ✓ | Latest ✓ | Latest ✓ | Latest ✓ |

## License

@pluginjs/icon-picker is Licensed under [the GPL-v3 license](LICENSE).

If you want to use @pluginjs/icon-picker project to develop commercial sites, themes, projects, and applications, the Commercial license is the appropriate license. With this option, your source code is kept proprietary.

For purchase an Commercial License, contact us purchase@thecreation.co.

## Copyright

Copyright (C) 2018 [Creation Studio Limited](creationstudio.com).