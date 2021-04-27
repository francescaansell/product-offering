/* eslint-disable no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable lit/binding-positions */
import { html, css, LitElement } from 'lit-element';
import { IntersectionObserverMixin } from '@lrnwebcomponents/intersection-element/lib/IntersectionObserverMixin.js';
import { SimpleColors } from '@lrnwebcomponents/simple-colors/simple-colors.js';
import '@lrnwebcomponents/simple-icon/simple-icon.js';
import '@lrnwebcomponents/simple-icon/lib/simple-icons.js';

export class ProductOffering extends IntersectionObserverMixin(SimpleColors) {
  /**
   * Be able to change color of icons using simple colors
   * --> use css varibale or element props
   *
   * Make sure intersectionObserverMixin works
   *
   * What should accent color prop change?
   */
  static get styles() {
    return [
      ...super.styles,

      css`
        :host {
          display: block;
          padding: var(--product-offering-padding, 25px);
          color: var(--product-offering-text-color, #000);
          font-family: Verdana, sans-serif;
        }
        .container {
          padding: 5%;
          display: grid;
          grid-template-columns: 25% 75%;
        }
        .image {
          height: 150px;
          width: 200px;
          border-radius: 2%;
        }
        .square {
        }
        #simple-icon {
          padding: 10px;
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
        .squareTitle {
          display: flex;
        }
        .underline {
          border-bottom: 5px solid orange;
          display: inline-block;
        }
        .sqaureDescription {
          color: var(--simple-colors-default-theme-grey-7);
          font-size: 12pt;
          padding: 20px;
          padding-left: 60px;
          margin: 0;
        }
      `,
    ];
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
      source: { type: String },
      icon: { type: String },
      _titleOne: { type: String },
      _titleTwo: { type: String },
      accentColor: { type: String },
    };
  }

  constructor() {
    super();
    this.alt = '';
    this.accentColor = 'pink';
    this.dark = false;
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
      <!-- Biggest container -->
      <div class="container">
        <img
          class="image"
          src="${this.source}"
          alt="${this.alt}"
          height="150px"
          width="200px"
        />

        <div class="square">
          <!-- Icon, header -->
          <div class="squareTitle">
            <!-- icon -->
            <div class="icon-background">
              <simple-icon id="simple-icon" icon="${this.icon}"></simple-icon>
            </div>
            <!-- header -->
            <h4>
              <span class="underline">${this._titleOne}</span>&nbsp;<span
                >${this._titleTwo}</span
              >
            </h4>
          </div>

          <!-- descripton -->
          <div class="sqaureDescription">
            <slot name="description"> Example Slot </slot>
          </div>
        </div>
      </div>
    `;
  }
}
