# Breadcrumb
> A flexible modern breadcrumb js plugin.
## Introduction

#### [Demo]()
---
### Installation

#### Yarn
```javascript
yarn add @pluginjs/breadcrumb
```
#### NPM
```javascript
npm i @pluginjs/breadcrumb
```
---

## Getting Started
### Include
**Webpack && Rollup:**

ECMAScript Modules
```javascript
import breadcrumb from "@pluginjs/breadcrumb"
```

CommonJS
```javascript
require("@pluginjs/breadcrumb")
```

**CDN:**
Development:
```html
<script src="https://unpkg.com/@pluginjs/{moduleName}/dist/breadcrumb.js"></script>
<link rel="stylesheet" href="https://unpkg.com/@pluginjs/{moduleName}/dist/breadcrumb.css">
```
Production:
```html
<script src="https://unpkg.com/@pluginjs/{moduleName}/dist/breadcrumb.min.js"></script>
<link rel="stylesheet" href="https://unpkg.com/@pluginjs/{moduleName}/dist/breadcrumb.min.css">
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
Pj.breadcrumb('.element', options);
```
---
## API

### Options:
Options are called on breadcrumb instances through the breadcrumb options itself.
You can also save the instances to variable for further use.

Name | Description | Default
-----|--------------|-----
`"theme"` | Add plugin theme option | `null`
`"responsive"` | Add responsive callback | `true`
`"overflow"` | Add direction of overflow | `left`
`"ellipsisText"` | Add is ellipsisText or not | `&amp;#8230;`
`"getItems"` | Add getItems method | `function() {...}`
`"getItemLink"` | Add getItemLink method | `function() {...}`
`"getDropdownMenu"` | Add getDropdownMenu method | `function() {...}`
`"templates"` | Plugin default templates | `{}`

### Events:
Events are called on breadcrumb instances through the breadcrumb events itself.
You can also save the instances to variable for further use.

Name | Description
-----|-----
`"update"` | Gets fired when plugin is destroy
`"ready"` | Gets fired when plugin is ready
`"enable"` | Gets fired when plugin is enabled
`"disable"` | Gets fired when plugin is disabled
`"destroy"` | Gets fired when plugin is destroy

```
### Methods:
Methods are called on breadcrumb instances through the breadcrumb method itself.
You can also save the instances to variable for further use.

Name | Description
-----|-----
`"enable"` | Enabled plugin if plugin is disabled
`"disable"` | Disable plugin
`"destroy"` | Destroy plugin

**example:**
```javascript
Pj.$breadcrumb('.element', enable)
Pj.$breadcrumb('.element', enable, "foo")
Pj.$breadcrumb('.element', enable, "foo", "bar")
```

### Classes:
Name | Description | Default
-----|------|------
`"NAMESPACE"` | Declare plugin namespace | `pj-breadcrumb`
`"THEME"` | Declare plugin theme | `{namespace}--{theme}`
`"OVERFLOW"` | Declare overflow direction | `{namespace}-{overflow}`
`"ELEMENT"` | Declare plugin element | `{namespace}`
`"TOGGLE"` | Declare toggle element | `{namespace}-toggle`
`"TOGGLEICON"` | Declare toggleicon element | `caret`
`"DROPDOWN"` | Declare dropdown scope | `dropdown`
`"DROPDOWNMENU"` | Declare dropdown menu node | `dropdown-menu`
`"DROPDOWNMENURIGHT"` | Declare dropdown menu right space | `dropdown-menu-right`
`"DROPDOWNITEM"` | Declare dropdown item node | ``
`"DROPDOWNITEMDISABLE"` | Declare dropdown has disabled | `disabled`
`"ELLIPSIS"` | Declare is Ellipsis element | `{namespace}-ellipsis`
`"HIDDEN"` | Declare plugin has hidden | `{namespace}-hidden`



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