# LinkPicker
> A flexible modern link-picker js plugin.
## Introduction

#### [Demo]()
---
### Installation

#### Yarn
```javascript
yarn add @pluginjs/link-picker
```
#### NPM
```javascript
npm i @pluginjs/link-picker
```
---

## Getting Started
### Include
**Webpack && Rollup:**

ECMAScript Modules
```javascript
import linkPicker from "@pluginjs/link-picker"
```

CommonJS
```javascript
require("@pluginjs/link-picker")
```

**CDN:**
Development:
```html
<script src="https://unpkg.com/@pluginjs/{moduleName}/dist/link-picker.js"></script>
<link rel="stylesheet" href="https://unpkg.com/@pluginjs/{moduleName}/dist/link-picker.css">
```
Production:
```html
<script src="https://unpkg.com/@pluginjs/{moduleName}/dist/link-picker.min.js"></script>
<link rel="stylesheet" href="https://unpkg.com/@pluginjs/{moduleName}/dist/link-picker.min.css">
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
Pj.linkPicker('.element', options);
```
---
## API

### Options:
Options are called on linkPicker instances through the linkPicker options itself.
You can also save the instances to variable for further use.

Name | Description | Default
-----|--------------|-----
`"title"` | Add plugin title | `Click to Add Link`
`"placeholder"` | Set input box prompt information | `Title`
`"locale"` | Set locale environment | `en`
`"disabled"` | Disabled plugin | `false`
`"sources"` | Set list of source name | `null`
`"templates"` | Set default templates | `{}`
`"process"` | The type of object change the type of JSON | `function() {...}`
`"parse"` | The type of JSON change the type of object | `function() {...}`

### Events:
Events are called on linkPicker instances through the linkPicker events itself.
You can also save the instances to variable for further use.

Name | Description
-----|-----
`"ready"` | Gets fired when plugin has ready
`"enable"` | Gets fired when plugin has enabled
`"disable"` | Gets fired when plugin has disabled
`"destroy"` | Gets fired when plugin has destroy

```
### Methods:
Methods are called on linkPicker instances through the linkPicker method itself.
You can also save the instances to variable for further use.

Name | Description
-----|-----
`"val"` | Set or get value by key
`"set"` | Set value by key
`"enable"` | Enabled plugin if plugin is disabled
`"disable"` | Disable plugin
`"destroy"` | Destroy plugin
`"update"` | Update plugin
`"get"` | Get value by key

**example:**
```javascript
Pj.$linkPicker('.element', val)
Pj.$linkPicker('.element', val, "foo")
Pj.$linkPicker('.element', val, "foo", "bar")
```

### Classes:
Name | Description | Default
-----|------|------
`"NAMESPACE"` | Declare plugin namespace | `pj-linkPicker`
`"THEME"` | Declare plugin theme | `{namespace}--{theme}`
`"CONTAINER"` | Declare plugin range | `{namespace}-container`
`"ACTIVE"` | Announce plugin is actived | `{namespace}-active`
`"DISABLED"` | Announce plugin is disabled | `{namespace}-disabled`
`"INIT"` | Declare plugin init | `{namespace}-init`
`"INFO"` | Declare plugin info | `{namespace}-info`
`"PREVIEW"` | Declare plugin preview | `{namespace}-preview`
`"TYPESWITCH"` | Declare plugin types switch | `{namespace}-types-switch`
`"TYPESPANEL"` | Declare plugin types panel | `{namespace}-types-panel`
`"TYPESCONTAINER"` | Declare plugin types container | `{namespace}-types-container`
`"TYPESCOMPONENT"` | Declare plugin types component | `{namespace}-types-component`
`"RADIO"` | Declare plugin type is radio | `{namespace}-radio`
`"RADIOINPUT"` | Declare plugin radio input | `{namespace}-radio-input`
`"LINK"` | Declare plugin link | `{namespace}-link`
`"ACTION"` | Declare plugin action | `{namespace}-action`
`"ACTIONEDIT"` | Declare plugin edit | `{namespace}-action-edit`
`"ACTIONREMOVE"` | Declare plugin action remove | `{namespace}-action-remove`
`"PANEL"` | Declare plugin panel | `{namespace}-panel`
`"PANELACTION"` | Declare plugin panel action | `{namespace}-panel-action`
`"PANELSAVE"` | Declare plugin panel save | `{namespace}-panel-save`
`"PANELCANCEL"` | Declare plugin panel cancel | `{namespace}-panel-cancel`
`"ITEM"` | Declare plugin item | `{namespace}-item`
`"ITEMTITLE"` | Declare plugin item title | `{namespace}-item-title`
`"ITEMBODY"` | Declare plugin item body | `{namespace}-item-body`
`"LINKTITLE"` | Declare plugin link title | `{namespace}-link-title`
`"DROPDOWNPANEL"` | Declare plugin dropdown panel | `{namespace}-dropdown-panel`
`"SHOW"` | Announce plugin is show | `{namespace}-show`
`"FILL"` | Declare plugin fill | `{namespace}-fill`
`"HOVER"` | Announce plugin is hover | `{namespace}-hover`


### Translations:
Name | EN | ZH
-----|------|-------
`"type"` | Type | 类型
`"contentType"` | Content Type | 内容样式
`"content"` | Content | 内容
`"openMode"` | Open Mode | 打开模式
`"linkTitle"` | Link Title | 链接标题
`"save"` | Save | 保存
`"cancel"` | Cancel | 取消
`"deleteTitle"` | Are you sure you want to delete? | 你确定要删除？
`"delete"` | Delete | 删除
`"typeData"` | [object Object],[object Object],[object Object],[object Object],[object Object] | [object Object],[object Object],[object Object],[object Object],[object Object]
`"contentData"` | [object Object],[object Object],[object Object],[object Object],[object Object] | [object Object],[object Object],[object Object],[object Object],[object Object]
`"openModeData"` | [object Object],[object Object] | [object Object],[object Object]


### Dependencies:
- `[object Object]`
- `[object Object]`
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