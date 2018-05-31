# List
> A flexible modern list js plugin.
## Introduction

#### [Demo]()
---
### Installation

#### Yarn
```javascript
yarn add @pluginjs/list
```
#### NPM
```javascript
npm i @pluginjs/list
```
---

## Getting Started
### Include
**Webpack && Rollup:**

ECMAScript Modules
```javascript
import list from "@pluginjs/list"
```

CommonJS
```javascript
require("@pluginjs/list")
```

**CDN:**
Development:
```html
<script src="https://unpkg.com/@pluginjs/{moduleName}/dist/list.js"></script>
<link rel="stylesheet" href="https://unpkg.com/@pluginjs/{moduleName}/dist/list.css">
```
Production:
```html
<script src="https://unpkg.com/@pluginjs/{moduleName}/dist/list.min.js"></script>
<link rel="stylesheet" href="https://unpkg.com/@pluginjs/{moduleName}/dist/list.min.css">
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
Pj.list('.element', options);
```
---
## API

### Options:
Options are called on list instances through the list options itself.
You can also save the instances to variable for further use.

Name | Description | Default
-----|--------------|-----
`"theme"` | Set plugin theme option | `null`
`"locale"` | Set locale environment | `en`
`"localeFallbacks"` | Set the plugin is localeFallbacks or not | `true`
`"data"` | Set data option | `null`
`"disabled"` | Disabled option | `false`
`"label"` | Set label | `function() {...}`
`"actions"` | Set actions option | `[{&quot;tagName&quot;:&quot;i&quot;,&quot;trigger&quot;:&quot;icon-close pj-list-close&quot;,&quot;event&quot;:&quot;click&quot;}]`
`"templates"` | Set default templates | `{}`
`"parse"` | The type of JSON change the type of object | `function() {...}`
`"process"` | The type of object change the type of JSON | `function() {...}`

### Events:
Events are called on list instances through the list events itself.
You can also save the instances to variable for further use.

Name | Description
-----|-----
`"ready"` | Gets fired when plugin has ready
`"enable"` | Gets fired when plugin has enabled
`"disable"` | Gets fired when plugin has disabled
`"destroy"` | Gets fired when plugin has destroy
`"add"` | Gets fired when plugin has add
`"clickItem"` | Gets fired when plugin has clickItem
`"clear"` | Gets fired when plugin has clear
`"edited"` | Gets fired when plugin has edited

```
### Methods:
Methods are called on list instances through the list method itself.
You can also save the instances to variable for further use.

Name | Description
-----|-----
`"set"` | Set value by key
`"get"` | Get value by key
`"val"` | Set or get value by key
`"enable"` | Enabled plugin if plugin is disabled
`"disable"` | Disable plugin
`"destroy"` | Destroy plugin
`"init"` | Initial plugin
`"insert"` | Insert plugin
`"clear"` | Clear plugin

**example:**
```javascript
Pj.$list('.element', set)
Pj.$list('.element', set, "foo")
Pj.$list('.element', set, "foo", "bar")
```

### Classes:
Name | Description | Default
-----|------|------
`"NAMESPACE"` | Declare plugin namespace | `pj-list`
`"THEME"` | Declare plugin theme | `{namespace}--{theme}`
`"CONTAINER"` | Declare plugin range | `{namespace}-container`
`"ACTIVE"` | Announce plugin is actived | `{namespace}-active`
`"DISABLED"` | Announce plugin is disabled | `{namespace}-disabled`
`"ITEM"` | Declare plugin item | `{namespace}-item`
`"LABEL"` | Declare plugin label | `{namespace}-item-label`
`"ACTIONS"` | Declare plugin actions | `{namespace}-item-actions`
`"HANDLE"` | Declare plugin handle | `{namespace}-item-handle`
`"SOTRE"` | Declare plugin store | `{namespace}-store`
`"POPVER"` | Declare plugin popver | `{namespace}-popver`
`"CLONEANIMATE"` | Declare plugin cloneanimate | `{namespace}-item-clone-animate`


### Translations:
Name | EN | ZH
-----|------|-------
`"cancel"` | Cancel | 取消
`"deleteTitle"` | Are you sure you want to delete? | 你确定要删除？
`"delete"` | Delete | 删除


### Dependencies:
- `[object Object]`
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
Version: 0.2.20

## Copyright and license
Copyright (C) 2018 Creation Studio Limited.

@pluginjs is Licensed under [the GPL-v3 license](LICENSE).If you want to use @pluginjs project to develop commercial sites, themes, projects, and applications, the Commercial license is the appropriate license. With this option, your source code is kept proprietary. For purchase an Commercial License, contact us purchase@thecreation.co.