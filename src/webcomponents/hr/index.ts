import { customElement, property, LitElement, html, css } from 'lit-element'

@customElement('scope-hr')
export class ScopeHR extends LitElement {
  static get styles() {
    return css`
      main {
        display: none;
      }
    `
  }
  render() {
    return html`
      <link rel="stylesheet" href="/webcomponents/hr/index.css" />
      <main>
        <svg width="2048" height="16">
          <g>
            <path style="fill:none;" d="M 0,8 H 2048" />
          </g>
        </svg>
      </main>
    `
  }
}
