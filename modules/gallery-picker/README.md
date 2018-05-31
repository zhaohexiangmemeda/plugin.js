# GalleryPicker
> A flexible modern gallery-picker js plugin.
## Introduction

#### [Demo]()
---
### Installation

#### Yarn
```javascript
yarn add @pluginjs/gallery-picker
```
#### NPM
```javascript
npm i @pluginjs/gallery-picker
```
---

## Getting Started
### Include
**Webpack && Rollup:**

ECMAScript Modules
```javascript
import galleryPicker from "@pluginjs/gallery-picker"
```

CommonJS
```javascript
require("@pluginjs/gallery-picker")
```

**CDN:**
Development:
```html
<script src="https://unpkg.com/@pluginjs/{moduleName}/dist/gallery-picker.js"></script>
<link rel="stylesheet" href="https://unpkg.com/@pluginjs/{moduleName}/dist/gallery-picker.css">
```
Production:
```html
<script src="https://unpkg.com/@pluginjs/{moduleName}/dist/gallery-picker.min.js"></script>
<link rel="stylesheet" href="https://unpkg.com/@pluginjs/{moduleName}/dist/gallery-picker.min.css">
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
Pj.galleryPicker('.element', options);
```
---
## API

### Options:
Options are called on galleryPicker instances through the galleryPicker options itself.
You can also save the instances to variable for further use.

Name | Description | Default
-----|--------------|-----
`"theme"` | Set plugin theme option | `null`
`"locale"` | Set locale environment | `en`
`"localeFallbacks"` | Set the plugin is localeFallbacks or not | `true`
`"viewportSize"` | Set viewportSize option | `330`
`"disabled"` | Disabled plugin | `false`
`"templates"` | Set default templates | `{}`
`"process"` | The type of object change the type of JSON | `function() {...}`
`"parse"` | The type of JSON change the type of object | `function() {...}`
`"getImage"` | Get value of image | `function() {...}`
`"change"` | Get  value of image url | `function() {...}`
`"add"` | Get an array of image url list | `function() {...}`

### Events:
Events are called on galleryPicker instances through the galleryPicker events itself.
You can also save the instances to variable for further use.

Name | Description
-----|-----
`"ready"` | Gets fired when plugin has ready
`"enable"` | Gets fired when plugin has enabled
`"disable"` | Gets fired when plugin has disabled
`"destroy"` | Gets fired when plugin has destroy
`"change"` | Gets fired when plugin has changed

```
### Methods:
Methods are called on galleryPicker instances through the galleryPicker method itself.
You can also save the instances to variable for further use.

Name | Description
-----|-----
`"val"` | Set or get value by key
`"get"` | Get value by key
`"set"` | Set value by key
`"clear"` | Clear plugin
`"remove"` | Remove plugin
`"change"` | Change plugin
`"add"` | add plugin
`"enable"` | Enabled plugin if plugin is disabled
`"disable"` | Disable plugin
`"destroy"` | Destroy plugin

**example:**
```javascript
Pj.$galleryPicker('.element', val)
Pj.$galleryPicker('.element', val, "foo")
Pj.$galleryPicker('.element', val, "foo", "bar")
```

### Classes:
Name | Description | Default
-----|------|------
`"NAMESPACE"` | Declare plugin namespace | `pj-galleryPicker`
`"THEME"` | Declare plugin theme | `{namespace}--{theme}`
`"DISABLED"` | Announce plugin is disabled | `{namespace}-disabled`
`"ACTIVE"` | Announce plugin is actived | `{namespace}-active`
`"EMPTY"` | Announce plugin is empty | `{namespace}-empty`
`"EXIST"` | Announce plugin is exist | `{namespace}-exist`
`"EXPAND"` | Announce plugin is expand | `{namespace}-expand`
`"HOVER"` | Announce plugin is hover | `{namespace}-hover`
`"INFO"` | Declare plugin info | `{namespace}-info`
`"INFOEDIT"` | Declare plugin infoedit | `{namespace}-info-edit`
`"INFOREMOVE"` | Declare plugin inforemove | `{namespace}-info-remove`
`"EXPANDCANCELBTN"` | Declare plugin expandcancelbtn | `{namespace}-expand-cancel-btn`
`"EXPANDSAVEBTN"` | Declare plugin expandsavebtn | `{namespace}-expand-save-btn`
`"EXPANDADDBTN"` | Declare plugin expandaddbtn | `{namespace}-expand-add-btn`
`"EXPANDADD"` | Declare plugin expandadd | `{namespace}-expand-add`
`"ITEM"` | Declare plugin item | `{namespace}-item`
`"ITEMIMAGE"` | Declare plugin itemimage | `{namespace}-item-image`
`"ITEMREMOVE"` | Declare plugin itemremove | `{namespace}-item-remove`
`"ITEMRESELECT"` | Declare plugin itemselect | `{namespace}-item-reselect`


### Translations:
Name | EN | ZH
-----|------|-------
`"placeholder"` | Choose images | 点击添加
`"count"` | zero | 零
`"expand"` | expand | 展开
`"change"` | change | 更换图片
`"deleteTitle"` | Are you sure you want to delete? | 你确定要删除？
`"cancel"` | Cancel | 取消
`"delete"` | Delete | 删除
`"add"` | Add | 添加
`"save"` | Save | 保存


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
Version: 0.2.19

## Copyright and license
Copyright (C) 2018 Creation Studio Limited.

@pluginjs is Licensed under [the GPL-v3 license](LICENSE).If you want to use @pluginjs project to develop commercial sites, themes, projects, and applications, the Commercial license is the appropriate license. With this option, your source code is kept proprietary. For purchase an Commercial License, contact us purchase@thecreation.co.