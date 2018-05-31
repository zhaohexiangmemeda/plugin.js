# ScrollTop
> A flexible modern scroll-top js plugin.
## Introduction

#### [Demo]()
---
### Installation

#### Yarn
```javascript
yarn add @pluginjs/scroll-top
```
#### NPM
```javascript
npm i @pluginjs/scroll-top
```
---

## Getting Started
### Include
**Webpack && Rollup:**

ECMAScript Modules
```javascript
import scrollTop from "@pluginjs/scroll-top"
```

CommonJS
```javascript
require("@pluginjs/scroll-top")
```

**CDN:**
Development:
```html
<script src="https://unpkg.com/@pluginjs/{moduleName}/dist/scroll-top.js"></script>
<link rel="stylesheet" href="https://unpkg.com/@pluginjs/{moduleName}/dist/scroll-top.css">
```
Production:
```html
<script src="https://unpkg.com/@pluginjs/{moduleName}/dist/scroll-top.min.js"></script>
<link rel="stylesheet" href="https://unpkg.com/@pluginjs/{moduleName}/dist/scroll-top.min.css">
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
Pj.scrollTop('.element', options);
```
---
## API

### Options:
Options are called on scrollTop instances through the scrollTop options itself.
You can also save the instances to variable for further use.

Name | Description | Default
-----|--------------|-----
`"trigger"` | Set trigger | `null`
`"target"` | Set target | `null`
`"distance"` | Set distance | `200`
`"duration"` | Set duretion | `1000`
`"easing"` | Set easing | `linear`
`"animation"` | Set animation | `fade`
`"animationDuration"` | Set animationDuration | `500`
`"mobile"` | Set mobile | `{&quot;width&quot;:768,&quot;distance&quot;:100,&quot;duration&quot;:1000,&quot;easing&quot;:&quot;easeInOutElastic&quot;,&quot;animation&quot;:&quot;slide&quot;,&quot;animationDuration&quot;:200}`
`"theme"` | Set plugin theme option | `default`
`"locale"` | Set locale environment | `en`
`"localeFallbacks"` | Set plugin is localeFallbacks or not | `true`
`"throttle"` | Set throttle | `undefined`

### Events:
Events are called on scrollTop instances through the scrollTop events itself.
You can also save the instances to variable for further use.

Name | Description
-----|-----
`"update"` | Gets fired when plugin has destroy
`"ready"` | Gets fired when plugin has ready
`"enable"` | Gets fired when plugin has enabled
`"disable"` | Gets fired when plugin has disabled
`"destroy"` | Gets fired when plugin has destroy
`"jump"` | Gets fired when plugin has jump
`"hide"` | Gets fired when plugin has hide
`"show"` | Gets fired when plugin has show

```
### Methods:
Methods are called on scrollTop instances through the scrollTop method itself.
You can also save the instances to variable for further use.

Name | Description
-----|-----
`"jump"` | Get value of jump
`"enable"` | Enabled plugin if plugin is disabled
`"disable"` | Disable plugin
`"show"` | Show plugin if it is hiden
`"hide"` | Hide plugin
`"destroy"` | Destroy plugin

**example:**
```javascript
Pj.$scrollTop('.element', jump)
Pj.$scrollTop('.element', jump, "foo")
Pj.$scrollTop('.element', jump, "foo", "bar")
```

### Classes:
Name | Description | Default
-----|------|------
`"NAMESPACE"` | Declare plugin namespace | `pj-scrollTop`
`"THEME"` | Declare plugin theme | `{namespace}--{theme}`
`"TRIGGER"` | Declare plugin trigger | `{namespace}`
`"ANIMATION"` | Declare plugin animation | `{namespace}-{animation}`
`"ANIMATING"` | Declare plugin animating | `{namespace}-animating`
`"DISABLED"` | Announce plugin is disabled | `{namespace}-disabled`
`"SHOW"` | Announce plugin is show | `{namespace}-show`


### Translations:
Name | EN | ZH
-----|------|-------
`"label"` | Scroll To Top | 置顶


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