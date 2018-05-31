# Select
> A flexible modern select js plugin.
## Introduction

#### [Demo]()
---
### Installation

#### Yarn
```javascript
yarn add @pluginjs/select
```
#### NPM
```javascript
npm i @pluginjs/select
```
---

## Getting Started
### Include
**Webpack && Rollup:**

ECMAScript Modules
```javascript
import select from "@pluginjs/select"
```

CommonJS
```javascript
require("@pluginjs/select")
```

**CDN:**
Development:
```html
<script src="https://unpkg.com/@pluginjs/{moduleName}/dist/select.js"></script>
<link rel="stylesheet" href="https://unpkg.com/@pluginjs/{moduleName}/dist/select.css">
```
Production:
```html
<script src="https://unpkg.com/@pluginjs/{moduleName}/dist/select.min.js"></script>
<link rel="stylesheet" href="https://unpkg.com/@pluginjs/{moduleName}/dist/select.min.css">
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
Pj.select('.element', options);
```
---
## API

### Options:
Options are called on select instances through the select options itself.
You can also save the instances to variable for further use.

Name | Description | Default
-----|--------------|-----
`"theme"` | Set plugin theme option | `null`
`"trigger"` | Set trigger | `click`
`"offset"` | Set offset | `[0,0]`
`"icon"` | Set default icon | `icon-char icon-chevron-down`
`"multiple"` | Set multiple | `false`
`"clearable"` | Set clearable | `false`
`"filterable"` | Set filterable | `false`
`"closeAllButten"` | Set closeAllButton | `true`
`"placeholder"` | Set input box prompt information | `Please select`
`"notFoundText"` | Set notoFoundText | `Badge not found`
`"selected"` | Set selected | `null`
`"data"` | Set data | `null`
`"keyboard"` | Set keyboard | `true`
`"disabled"` | Disabled plugin | `false`
`"templates"` | Set default templates | `{}`
`"parse"` | The type of JSON change the type of object | `function() {...}`
`"process"` | The type of object change the type of JSON | `function() {...}`

### Events:
Events are called on select instances through the select events itself.
You can also save the instances to variable for further use.

Name | Description
-----|-----
`"update"` | Gets fired when plugin has destroy
`"ready"` | Gets fired when plugin has ready
`"enable"` | Gets fired when plugin has enabled
`"disabled"` | Disable plugin
`"destroy"` | Gets fired when plugin has destroy
`"load"` | Gets fired when plugin has load
`"open"` | Gets fired when plugin has open
`"close"` | Gets fired when plugin has close
`"click"` | Gets fired when plugin has click
`"change"` | Gets fired when plugin has changed
`"select"` | Gets fired when plugin has select
`"unselect"` | Gets fired when plugin has unselect
`"hide"` | Gets fired when plugin has hide

```
### Methods:
Methods are called on select instances through the select method itself.
You can also save the instances to variable for further use.

Name | Description
-----|-----
`"get"` | Get value by key
`"set"` | Set value by key
`"val"` | Set or get value by key
`"enable"` | Enabled plugin if plugin is disabled
`"disable"` | Disable plugin
`"destroy"` | Destroy plugin
`"removeData"` | Set removeData
`"open"` | Get value of open
`"close"` | Get value of close

**example:**
```javascript
Pj.$select('.element', get)
Pj.$select('.element', get, "foo")
Pj.$select('.element', get, "foo", "bar")
```

### Classes:
Name | Description | Default
-----|------|------
`"NAMESPACE"` | Declare plugin namespace | `pj-select`
`"WRAP"` | Declare plugin wrap | `{namespace}-wrap`
`"MULTIPLE"` | Declare plugin multiple | `{namespace}-multiple`
`"FILTERABLE"` | Declare plugin filterable | `{namespace}-filterable`
`"DROPDOWNLIST"` | Declare plugin dropdownlist | `{namespace}-dropdown`
`"TRIGGER"` | Declare plugin trigger | `{namespace}-trigger`
`"HASBADGE"` | Declare plugin hasbadge | `{namespace}-hpj-badge`
`"BADGE"` | Declare plugin badge | `{namespace}-badge`
`"BADGECONTENT"` | Declare plugin badge content | `{namespace}-badge-content`
`"BADGEDELETE"` | Declare plugin badge delete | `{namespace}-badge-delete`
`"LABEL"` | Declare plugin label | `{namespace}-label`
`"LIST"` | Declare plugin list | `{namespace}-list`
`"SUBLIST"` | Declare plugin sublist | `{namespace}-sublist`
`"ITEM"` | Declare plugin item | `{namespace}-item`
`"GROUP"` | Declare plugin group | `{namespace}-group`
`"GROUPLABEL"` | Declare plugin label | `{namespace}-group-label`
`"OPEN"` | Declare plugin open | `{namespace}-open`
`"NOTFOUND"` | Declare plugin not found | `{namespace}-not-found`
`"DISABLED"` | Announce plugin is disabled | `{namespace}-disabled`
`"MARK"` | Declare plugin mark | `{namespace}-mark`
`"SELECTED"` | Declare plugin selected | `{namespace}-selected`
`"FOCUS"` | Declare plugin focus | `{namespace}-focus`
`"LOADING"` | Declare plugin loading | `{namespace}-loading`
`"ERROR"` | Declare plugin error | `{namespace}-error`
`"HIDEICON"` | Declare plugin hideicon | `{namespace}-hideIcon`



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
Version: 0.2.23

## Copyright and license
Copyright (C) 2018 Creation Studio Limited.

@pluginjs is Licensed under [the GPL-v3 license](LICENSE).If you want to use @pluginjs project to develop commercial sites, themes, projects, and applications, the Commercial license is the appropriate license. With this option, your source code is kept proprietary. For purchase an Commercial License, contact us purchase@thecreation.co.