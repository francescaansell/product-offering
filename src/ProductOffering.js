/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable lit/binding-positions */
import { html, css, LitElement } from 'lit-element';
import { IntersectionObserverMixin } from '@lrnwebcomponents/intersection-element/lib/IntersectionObserverMixin.js';
// import { SimpleColors } from "@lrnwebcomponents/simple-colors/simple-colors.js";
import '@lrnwebcomponents/simple-icon/simple-icon.js';
import '@lrnwebcomponents/simple-icon/lib/simple-icons.js';

export class ProductOffering extends IntersectionObserverMixin(LitElement) {
  // @todo make sure we ship this as an array of styles
  static get styles() {
    return css`
      :host {
        display: block;
        padding: var(--product-offering-padding, 25px);
        color: var(--product-offering-text-color, #000);
        font-family: Verdana, sans-serif;
      }
      .grid-outer-item {
        padding: 5%;
        display: grid;
        grid-template-columns: 30% 70%;
      }
      .underline {
        text-decoration: underline;
      }
      .wordwrap {
        word-wrap: normal;
      }
      p {
        color: #808080;
        font-size: 9pt;
        padding: 20px;
        padding-left: 60px;
        margin: 0;
      }
      div {
        padding: 5px;
      }
      .banner {
        display: flex;
      }
      .icon {
        padding: 15px;
        height: 25px;
        width: 25px;
      }
      .icon-background {
        background-color: white;
        border-radius: 50%;
        padding: 2px;
        margin: 5px;
        margin-right: 10px;
        box-shadow: 10px 10px 25px 0 rgb(0 0 0 / 10%);
      }
      .square {
        height: 150px;
        width: 200px;
        border-radius: 2%;
      }
    `;
  }

  static get properties() {
    let props = {};
    if (super.properties) {
      props = super.properties;
    }
    return {
      ...props,
      title: { type: String },
      description: { type: String },
      // description: { type: Slot },
      source: { type: String },
      icon: { type: String }, // @todo @lrnwebcomponents/simple-icon would be the way to go here
      _titleOne: { type: String },
      _titleTwo: { type: String },
      accentColor: { type: String },
    };
  }

  constructor() {
    super();
    this.alt = '';
  }

  updated(changedProperties) {
    changedProperties.forEach((oldValue, propName) => {
      if (propName === 'title') {
        if (this.title.split(' ').length > 1) {
          const tmp = this.title.split(' ');
          this._titleOne = tmp.shift();
          this._titleTwo = tmp.join(' ');
        } else {
          this._titleOne = this.title;
        }
      }
    });
  }

  render() {
    return html`
      <div class="grid-outer-item">
        <img
          class="square"
          src="${this.source}"
          alt="${this.alt}"
          height="150px"
          width="200px"
        />
        <div>
          <div class="banner">
            <div class="icon-background">
              <!-- implement simple-icon here -->
              <simple-icon id="simple-icon" icon="icons:help"></simple-icon>
            </div>
            <h4>
              <span class="underline">${this._titleOne}</span>&nbsp;<span
                >${this._titleTwo}</span
              >
            </h4>
          </div>
          <p>${this.description}</p>
          <!--  <slot name = description > Example Slot </slot> -->
        </div>
      </div>
    `;
  }
}
