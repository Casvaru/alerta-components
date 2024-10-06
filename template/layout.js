import { html, LitElement } from 'lit'

export class AlLayout extends LitElement {
  createRenderRoot () {
    return this
  }

  render () {
    return html`
      <link rel="stylesheet" href="/typography/typography.css">
      <link rel="stylesheet" href="https://use.typekit.net/ygp1ulx.css">
      <link rel="stylesheet" href="/color/colors.css">
      <link rel="stylesheet" href="/reset/reset.css">
      
      <slot></slot>
    `
  }
}

customElements.define('al-layout', AlLayout)
