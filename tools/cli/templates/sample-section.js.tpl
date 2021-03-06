import { html as render, query } from '@pluginjs/dom'
import html from './index.html'
import {{Namespace}} from '@pluginjs/{{moduleName}}'

const element = query('.{{moduleName}}', render(html, query('#{{sectionName}}')))
{{Namespace}}.of(element, {
  /** options **/
})
