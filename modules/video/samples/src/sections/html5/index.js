import { query } from '@pluginjs/dom'
import Video from '@pluginjs/video'

const root = query('#html5')
const element = query('.video', root)
const instance = Video.of(element, {
  type: 'html5',
  url: 'http://vjs.zencdn.net/v/oceans.mp4'
})
query('.api', root).addEventListener('click', event => {
  const el = event.target
  if (!el.matches('[data-api]')) {
    return
  }
  instance[el.dataset.api]()
})
