import is from '@pluginjs/is'

export const namespace = 'videoPicker'

export const events = {
  UPDATE: 'update',
  READY: 'ready',
  ENABLE: 'enable',
  DISABLE: 'disable',
  DESTROY: 'destroy',
  CHANGE: 'change'
}

export const classes = {
  NAMESPACE: `pj-${namespace}`,
  THEME: '{namespace}-{theme}',
  WRAP: '{namespace}-wrap',
  ACTIVE: '{namespace}-active',
  DISABLED: '{namespace}-disabled',
  SHOW: '{namespace}-show',
  BUTTON: '{namespace}-button',
  INIT: '{namespace}-init',
  INFOPOSTER: '{namespace}-info-poster',
  EDITOR: '{namespace}-info-editor',
  REMOVE: '{namespace}-info-remove',
  HOVER: '{namespace}-hover',
  PANEL: '{namespace}-panel',
  DROPDOWNPANEL: '{namespace}-dropdown-panel',
  CLOSE: '{namespace}-close',
  DATA: '{namespace}-data',
  SOURCE: '{namespace}-source',
  VIDEO: '{namespace}-video',
  VIDEOPLAYING: '{namespace}-video-playing',
  VIDEOLOADING: '{namespace}-video-loading',
  VIDEOANIMATE: '{namespace}-video-animate',
  VIDEOACTION: '{namespace}-video-action',
  VIDEOBTN: '{namespace}-video-btn',
  VIDEOPOSTER: '{namespace}-video-poster',
  VIDEOURL: '{namespace}-video-url',
  LOCALURL: '{namespace}-local-url',
  LOCALURLADD: '{namespace}-local-url-add',
  LOCALURLCHANGE: '{namespace}-local-url-change',
  LOCALURLDELETE: '{namespace}-local-url-delete',
  LOCALURLSELECTED: '{namespace}-local-url-selected',
  RATIO: '{namespace}-ratio',
  POSTER: '{namespace}-poster',
  POSTERSELECTED: '{namespace}-poster-selected',
  POSTERADD: '{namespace}-poster-add',
  POSTERCHANGE: '{namespace}-poster-change',
  POSTERDELETE: '{namespace}-poster-delete',
  WARNING: '{namespace}-warning'
}

export const methods = ['set', 'get', 'val', 'enable', 'disable', 'destroy']

export const defaults = {
  theme: null,
  locale: 'en',
  // pluginName: null, // if has value, The NAMESPACE will be replaced.
  sources: ['YouTube', 'Vimeo', 'Local File'],
  disabled: false,
  date: null,

  selectCover() {
    return `https://www.smashingmagazine.com/images/music-videos/rabbit.jpg`
  },
  selectLocalVideo() {
    return 'http://vjs.zencdn.net/v/oceans.mp4'
  },
  process(value) {
    if (value && !is.undefined(value)) {
      return JSON.stringify(value)
    }
    return ''
  },
  parse(value) {
    if (value) {
      try {
        return JSON.parse(value.replace(/\'/g, '"'))
      } catch (e) {
        return {}
      }
    }
    return {}
  }
}

export const dependencies = [
  'dropdown',
  'popover',
  'pop-dialog',
  'tooltip',
  'video',
  'edit-panel'
]

export const translations = {
  en: {
    inputPlaceholder: 'Add Video',
    videoSource: 'Video Source',
    videoURL: 'Video URL',
    aspectRatio: 'Aspect Ratio',
    chooseVideo: 'Choose Video',
    poster: 'Poster',
    addVideo: 'Add Video',
    addPoster: 'Add Poster',
    changeVideo: 'Change Video',
    changePoster: 'Change Poster',
    save: 'Save',
    cancel: 'Cancel',
    deleteTitle: 'Are you sure you want to delete?',
    delete: 'Delete',
    useIt: 'Use It',
    inputURL: 'Please input URL'
  },
  zh: {
    inputPlaceholder: '添加视频',
    videoSource: '视频类型',
    videoURL: '视频URL',
    aspectRatio: '长宽比',
    chooseVideo: '选择视频',
    poster: '海报',
    addVideo: '添加视频',
    addPoster: '添加海报',
    changeVideo: '修改视频',
    changePoster: '修改海报',
    save: '保存',
    cancel: '取消',
    deleteTitle: '你确定要删除？',
    delete: '删除',
    useIt: '使用',
    inputURL: '请输入URL'
  }
}

export const info = { version: '0.1.0' }
