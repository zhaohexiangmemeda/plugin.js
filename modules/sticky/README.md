# Sticky
> A flexible modern sticky js plugin.
## Introduction

#### [Demo]()
---
### Installation

#### Yarn
```javascript
yarn add @pluginjs/sticky
```
#### NPM
```javascript
npm i @pluginjs/sticky
```
---

## Getting Started
### Include
**Webpack && Rollup:**

ECMAScript Modules
```javascript
import sticky from "@pluginjs/sticky"
```

CommonJS
```javascript
require("@pluginjs/sticky")
```

**CDN:**
Development:
```html
<script src="https://unpkg.com/@pluginjs/{moduleName}/dist/sticky.js"></script>
<link rel="stylesheet" href="https://unpkg.com/@pluginjs/{moduleName}/dist/sticky.css">
```
Production:
```html
<script src="https://unpkg.com/@pluginjs/{moduleName}/dist/sticky.min.js"></script>
<link rel="stylesheet" href="https://unpkg.com/@pluginjs/{moduleName}/dist/sticky.min.css">
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
Pj.sticky('.element', options);
```
---
## API

### Options:
Options are called on sticky instances through the sticky options itself.
You can also save the instances to variable for further use.

Name | Description | Default
-----|--------------|-----
`"verticalPosition"` | top or down | `top`
`"spacing"` | Space when sticky, value must number | `0`
`"templates"` | Element templates | `{}`

### Events:
Events are called on sticky instances through the sticky events itself.
You can also save the instances to variable for further use.

Name | Description
-----|-----
`"ready"` | Gets fired when plugin is ready
`"enable"` | Gets fired when plugin is enabled
`"disable"` | Gets fired when plugin is disabled
`"destroy"` | Gets fired when plugin is destroy

```
### Methods:
Methods are called on sticky instances through the sticky method itself.
You can also save the instances to variable for further use.

Name | Description
-----|-----
`"enable"` | Enabled plugin if plugin is disabled
`"disable"` | Disable plugin
`"destroy"` | Destroy plugin

**example:**
```javascript
Pj.$sticky('.element', enable)
Pj.$sticky('.element', enable, "foo")
Pj.$sticky('.element', enable, "foo", "bar")
```

### Classes:
Name | Description | Default
-----|------|------
`"NAMESPACE"` | Declare plugin namespace | `pj-sticky`
`"DISABLED"` | Announce plugin is disabled | `{namespace}-disabled`
`"PARENT"` | Announce element is parent | `{namespace}-parent`
`"STICKY"` | Announce element is sticky | `{namespace}-sticky`
`"STUCK"` | Announce element is stuck | `{namespace}-stuck`
`"WRAP"` | Announce element is wrap | `{namespace}-wrap`
`"DEFAULT"` | Announce element is default | `{namespace}-default`



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