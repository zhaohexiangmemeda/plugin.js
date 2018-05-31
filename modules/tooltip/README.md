# Tooltip
> A flexible modern tooltip js plugin.
## Introduction

#### [Demo]()
---
### Installation

#### Yarn
```javascript
yarn add @pluginjs/tooltip
```
#### NPM
```javascript
npm i @pluginjs/tooltip
```
---

## Getting Started
### Include
**Webpack && Rollup:**

ECMAScript Modules
```javascript
import tooltip from "@pluginjs/tooltip"
```

CommonJS
```javascript
require("@pluginjs/tooltip")
```

**CDN:**
Development:
```html
<script src="https://unpkg.com/@pluginjs/{moduleName}/dist/tooltip.js"></script>
<link rel="stylesheet" href="https://unpkg.com/@pluginjs/{moduleName}/dist/tooltip.css">
```
Production:
```html
<script src="https://unpkg.com/@pluginjs/{moduleName}/dist/tooltip.min.js"></script>
<link rel="stylesheet" href="https://unpkg.com/@pluginjs/{moduleName}/dist/tooltip.min.css">
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
Pj.tooltip('.element', options);
```
---
## API

### Options:
Options are called on tooltip instances through the tooltip options itself.
You can also save the instances to variable for further use.

Name | Description | Default
-----|--------------|-----
`"theme"` | Set plugin theme option | `null`
`"animation"` | Set plugin animation | `true`
`"template"` | Set default template | `function() {...}`
`"trigger"` | Set trigger action list | `hover focus`
`"hideOutClick"` | Set when clicking outside of the tooltip, trigger hide event | `false`
`"title"` | Set default title value if title attribute isn&#x27;t present | ``
`"delay"` | Set delay (allow number or allow { &quot;show&quot;: 500, &quot;hide&quot;: 100 } pattern) | `0`
`"html"` | Set is enable html or not | `false`
`"selector"` | Set if a selector is provided, popover objects will be delegated to the specified targets | `false`
`"placement"` | Set position of plugin | `top`
`"offset"` | Set tether offset | `0 0`
`"constrainToWindow"` | Set is enable constrain to window or not | `true`
`"constrainToScrollParent"` | Set is enabled constrain to scroll parent or not | `false`
`"constraints"` | Set constraints of tether | `[]`
`"container"` | Set is enabled container | `false`

### Events:
Events are called on tooltip instances through the tooltip events itself.
You can also save the instances to variable for further use.

Name | Description
-----|-----
`"ready"` | Gets fired when plugin has ready
`"enable"` | Gets fired when plugin has enabled
`"disable"` | Gets fired when plugin has disabled
`"destroy"` | Gets fired when plugin has destroy
`"hide"` | Get fired when plugin has hidden
`"hidden"` | Gets fired when plugin has hidden
`"show"` | Gets fired when plugin has show
`"shown"` | Gets fired when plugin has shown
`"inserted"` | Gets fired when plugin has inserted

```
### Methods:
Methods are called on tooltip instances through the tooltip method itself.
You can also save the instances to variable for further use.

Name | Description
-----|-----
`"show"` | Show this plugin
`"hide"` | Hidden this plugin
`"toggle"` | Active event by event name
`"enable"` | Enabled plugin if plugin is disabled
`"disable"` | Disable plugin
`"destroy"` | Destroy plugin

**example:**
```javascript
Pj.$tooltip('.element', show)
Pj.$tooltip('.element', show, "foo")
Pj.$tooltip('.element', show, "foo", "bar")
```

### Classes:
Name | Description | Default
-----|------|------
`"NAMESPACE"` | Declare plugin namespace | `pj-tooltip`
`"THEME"` | Declare plugin theme | `{namespace}--{theme}`
`"TOOLTIP"` | Declare tooltip node | `{namespace}`
`"TOOLTIPINNER"` | Declare tooltip inner node | `{namespace}-inner`
`"SHOW"` | Announce plugin is in show status | `{namespace}-show`
`"FADE"` | Announce plugin is in fade animation mode | `{namespace}-fade`
`"DISABLED"` | Announce plugin is disabled | `{namespace}-disabled`



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