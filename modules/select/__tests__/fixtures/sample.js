import { parseHTML } from '@pluginjs/dom'

export default () => parseHTML`
<select class="example-default">
      <optgroup value="group-one" label="group-one">
        <option value="a">beijing</option>
        <option value="b" selected>fujian</option>
      </optgroup>
      <optgroup value="group-two" label="group-two">
        <option value="c">zhejiang</option>
        <option value="d">tianjin</option>
        <option value="e">shanghai</option>
      </optgroup>
    </select>
`
