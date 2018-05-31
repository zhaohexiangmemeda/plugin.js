# Gmap
> A flexible modern gmap js plugin.
## Introduction

#### [Demo]()
---
### Installation

#### Yarn
```javascript
yarn add @pluginjs/gmap
```
#### NPM
```javascript
npm i @pluginjs/gmap
```
---

## Getting Started
### Include
**Webpack && Rollup:**

ECMAScript Modules
```javascript
import gmap from "@pluginjs/gmap"
```

CommonJS
```javascript
require("@pluginjs/gmap")
```

**CDN:**
Development:
```html
<script src="https://unpkg.com/@pluginjs/{moduleName}/dist/gmap.js"></script>
<link rel="stylesheet" href="https://unpkg.com/@pluginjs/{moduleName}/dist/gmap.css">
```
Production:
```html
<script src="https://unpkg.com/@pluginjs/{moduleName}/dist/gmap.min.js"></script>
<link rel="stylesheet" href="https://unpkg.com/@pluginjs/{moduleName}/dist/gmap.min.css">
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
Pj.gmap('.element', options);
```
---
## API

### Options:
Options are called on gmap instances through the gmap options itself.
You can also save the instances to variable for further use.

Name | Description | Default
-----|--------------|-----
`"theme"` | Set plugin theme option | `null`
`"apiKey"` | Set apiKey | ``
`"mapType"` | Set mapType | `ROADMAP`
`"backgroundColor"` | Set background color | `#e5e3df`
`"defaultUI"` | Set default UI | `true`
`"doubleClickZoom"` | Set double click zoom | `false`
`"mapTypeControl"` | Set mapTypeControl | `true`
`"maxZoom"` | Set maxZoom | `null`
`"minZoom"` | Set maxZoom | `null`
`"panControl"` | Set panControl | `false`
`"rotateControl"` | Set rotateControl | `false`
`"scaleControl"` | Set scaleControl | `false`
`"scrollwheel"` | Set scrollwheel | `false`
`"streetViewControl"` | Set streetViewControl | `false`
`"styles"` | Set styles | `false`
`"zoom"` | Set zoom | `3`
`"zoomControl"` | Set zoomControl | `true`
`"controlsPositions"` | Set controlsPositions | `{&quot;mapType&quot;:null,&quot;pan&quot;:null,&quot;rotate&quot;:null,&quot;scale&quot;:null,&quot;streetView&quot;:null,&quot;zoom&quot;:null}`
`"latitude"` | Set latitude | `null`
`"longitude"` | Set longitude | `null`
`"address"` | Set address | ``
`"markers"` | Set markers | `[]`
`"icon"` | Set default icon | `{&quot;url&quot;:&quot;http://www.google.com/mapfiles/marker.png&quot;,&quot;size&quot;:[20,34],&quot;anchor&quot;:[9,34]}`
`"marker"` | Set marker | `true`
`"content"` | Set content | ``
`"popup"` | Set poup | `true`
`"libraries"` | Set libraries | `null`
`"onInit"` | Set onInit | `null`
`"onReady"` | Set onReady | `null`

### Events:
Events are called on gmap instances through the gmap events itself.
You can also save the instances to variable for further use.

Name | Description
-----|-----
`"ready"` | Gets fired when plugin has ready
`"enable"` | Gets fired when plugin has enabled
`"disable"` | Gets fired when plugin has disabled
`"destroy"` | Gets fired when plugin has destroy

```
### Methods:
Methods are called on gmap instances through the gmap method itself.
You can also save the instances to variable for further use.

Name | Description
-----|-----
`"enable"` | Enabled plugin if plugin is disabled
`"disable"` | Disable plugin
`"destroy"` | Destroy plugin
`"addMarker"` | Destroy plugin
`"addMarkers"` | Add value of addMarkers
`"removerMarker"` | Remove value of removerMarker
`"clearMarkers"` | Clear value of markers

**example:**
```javascript
Pj.$gmap('.element', enable)
Pj.$gmap('.element', enable, "foo")
Pj.$gmap('.element', enable, "foo", "bar")
```

### Classes:
Name | Description | Default
-----|------|------
`"NAMESPACE"` | Declare plugin namespace | `as-gmap`
`"THEME"` | Declare plugin theme | `{namespace}--{theme}`
`"ELEMENT"` | Declare plugin element | `{namespace}`
`"CONTENT"` | Declare plugin content | `{namespace}-content`



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