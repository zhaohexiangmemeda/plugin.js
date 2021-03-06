import template from '@pluginjs/template'
import Dropdown from '@pluginjs/dropdown'
import { parseHTML, query, insertBefore } from '@pluginjs/dom'

export default class FontFamily {
  constructor(instance) {
    this.instance = instance
    this.values = instance.options.fontFamily.values
    this.value = instance.value.fontFamily

    this.initialize()
  }

  initialize() {
    const html = template.compile(this.instance.options.fontFamily.template())({
      namespace: this.instance.classes.NAMESPACE,
      typeface: this.instance.translate('typeface')
    })

    this.$FontFamily = parseHTML(html)
    insertBefore(this.$FontFamily, this.instance.$expandControl)

    this.$content = query(
      `.${this.instance.classes.NAMESPACE}-fontFamily-content`,
      this.instance.$expandPanel
    )
    this.$dropdown = query(
      `.${this.instance.classes.NAMESPACE}-fontFamily-dropdown`,
      this.instance.$expandPanel
    )
    this.$list = query('ul', this.$content)
    this.$list.append(...parseHTML(this.getListHtml()))

    const value = this.instance.value.fontFamily

    const that = this
    this.dropdownInstance = Dropdown.of(this.$dropdown, {
      imitateSelect: true,
      itemValueAttr: 'fontFamily',
      select: value,
      width: this.$dropdown,
      icon: 'icon-char icon-chevron-down',
      onChange(value) {
        if (that.instance.is('disabled')) {
          return
        }

        const fontFamily = value.dataset.fontFamily

        that.instance.value.fontFamily = fontFamily

        // if (fontFamily !== 'inherit') {
        //   that.instance.$wrap
        //     .addClass(that.instance.classes.EXSIT)
        //     .removeClass(that.instance.classes.EMPTY);
        // }
        // that.instance.$infoFontName.text(fontFamily);
        // that.instance.update();
        // that.instance.$infoFontName.css({
        //   'font-family': fontFamily
        // });
      }
    })

    // this.updateList();

    // this.set(value);
  }

  set(value) {
    for (const key in this.values) {
      if (value === this.values[key]) {
        this.dropdownInstance.set(value)
      }
    }
  }

  updateList() {
    const html = this.getListHtml()
    this.dropdownInstance.update(html)
  }

  getListHtml() {
    let html = ''
    for (const key in this.values) {
      if ({}.hasOwnProperty.call(this.values, key)) {
        html += `<li data-font-family='${key}'>${this.values[key]}</li>`
      }
    }
    return html
  }

  clear() {
    this.set(this.defaultValue)
  }
}
