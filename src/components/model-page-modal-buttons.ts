import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

import SvgIcon from '@jamescoyle/svg-icon'
import { mdiAccount } from '@mdi/js'

@customElement('model-page-modal-buttons')
export class ModelPageModalButtons extends LitElement {
  static styles = css`
    button {
      background-color: transparent;
      border: none;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      justify-content: center;
    }
    i {
      font-size: 24px;
    }
  `;

  render() {
    return html`
      <button>
        <i class="mdi mdi-home"></i>
      </button>
    `;
  }
}