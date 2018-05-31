# GradientPicker
> A flexible modern gradient-picker js plugin.
## Introduction

#### [Demo]()
---
### Installation

#### Yarn
```javascript
yarn add @pluginjs/gradient-picker
```
#### NPM
```javascript
npm i @pluginjs/gradient-picker
```
---

## Getting Started
### Include
**Webpack && Rollup:**

ECMAScript Modules
```javascript
import gradientPicker from "@pluginjs/gradient-picker"
```

CommonJS
```javascript
require("@pluginjs/gradient-picker")
```

**CDN:**
Development:
```html
<script src="https://unpkg.com/@pluginjs/{moduleName}/dist/gradient-picker.js"></script>
<link rel="stylesheet" href="https://unpkg.com/@pluginjs/{moduleName}/dist/gradient-picker.css">
```
Production:
```html
<script src="https://unpkg.com/@pluginjs/{moduleName}/dist/gradient-picker.min.js"></script>
<link rel="stylesheet" href="https://unpkg.com/@pluginjs/{moduleName}/dist/gradient-picker.min.css">
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
Pj.gradientPicker('.element', options);
```
---
## API

### Options:
Options are called on gradientPicker instances through the gradientPicker options itself.
You can also save the instances to variable for further use.

Name | Description | Default
-----|--------------|-----
`"theme"` | Set plugin theme option | `null`
`"locale"` | Set locale environment | `en`
`"data"` | Set plugin data option | `null`
`"disabled"` | Disabled plugin | `false`
`"templates"` | Set default templates | `{}`
`"parse"` | The type of JSON change the type of object | `function() {...}`
`"process"` | The type of object change the type of JSON | `function() {...}`

### Events:
Events are called on gradientPicker instances through the gradientPicker events itself.
You can also save the instances to variable for further use.

Name | Description
-----|-----
`"ready"` | Gets fired when plugin has ready
`"enable"` | Gets fired when plugin has enabled
`"disable"` | Gets fired when plugin has disabled
`"destroy"` | Gets fired when plugin has destroy

```
### Methods:
Methods are called on gradientPicker instances through the gradientPicker method itself.
You can also save the instances to variable for further use.

Name | Description
-----|-----
`"enable"` | Enabled plugin if plugin is disabled
`"disable"` | Disable plugin
`"destroy"` | Destroy plugin
`"set"` | Set value by key
`"get"` | Get value by key
`"val"` | Set or get value by key
`"clear"` | Clear plugin

**example:**
```javascript
Pj.$gradientPicker('.element', enable)
Pj.$gradientPicker('.element', enable, "foo")
Pj.$gradientPicker('.element', enable, "foo", "bar")
```

### Classes:
Name | Description | Default
-----|------|------
`"NAMESPACE"` | Declare plugin namespace | `pj-gradientPicker`
`"THEME"` | Declare plugin theme | `{namespace}-{theme}`
`"WRAP"` | Declare plugin wrap | `{namespace}-wrap`
`"ACTIVE"` | Announce plugin is actived | `{namespace}-active`
`"DISABLED"` | Announce plugin is disabled | `{namespace}-disabled`
`"SHOW"` | Announce plugin is show | `{namespace}-show`
`"CLOSE"` | Announce plugin is close | `{namespace}-close`
`"WARNING"` | Announce plugin is warnting | `{namespace}-warning`
`"INFO"` | Declare plugin info | `{namespace}-info`
`"INFOIMG"` | Declare plugin infoimg | `{namespace}-info-img`
`"EDITOR"` | Declare plugin editor | `{namespace}-editor`
`"REMOVE"` | Declare plugin remove | `{namespace}-remove`
`"HOVER"` | Announce plugin is hover | `{namespace}-hover`
`"PREVIEWIMG"` | Announce plugin is previewing | `{namespace}-preview-img`
`"COLORPICKER"` | Declare plugin colorpicker | `{namespace}-colorpicker`
`"COLORTYPE"` | Declare plugin  color type | `{namespace}-colortype`
`"PRESET"` | Declare plugin  preset | `{namespace}-preset`
`"CUSTOM"` | Declare plugin custom | `{namespace}-custom`
`"CUSTOMMODE"` | Declare plugin custommode | `{namespace}-custom-mode`
`"OPACITY"` | Declare plugin opacity | `{namespace}-opacity`
`"SELECTORLIST"` | Declare plugin selectorlist | `{namespace}-selector-list`
`"SELECTORITEM"` | Declare plugin selectoritem | `{namespace}-selector-item`


### Translations:
Name | EN | ZH
-----|------|-------
`"chooseGradient"` | Choose Gradient | 选择渐变
`"customColor"` | Custom Color | 自定义颜色
`"opacity"` | Opacity | 透明度
`"preset"` | Preset | 预设
`"custom"` | Custom | 自定义
`"save"` | Save | 保存
`"selectTitle"` | Preset Background Library | 预设背景库
`"selectContentTitle"` | Choose a Background Preset | 选择预设背景
`"selectCancel"` | Cancel | 取消
`"useIt"` | Use It | 使用
`"deleteTitle"` | Are you sure you want to delete? | 你确定要删除？
`"cancel"` | Cancel | 取消
`"delete"` | Delete | 删除


### Dependencies:
- `[object Object]`
- `[object Object]`
- `[object Object]`
- `[object Object]`
- `[object Object]`
- `[object Object]`
- `[object Object]`
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