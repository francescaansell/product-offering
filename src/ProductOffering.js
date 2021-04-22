import { html, css, LitElement } from 'lit-element';

// not sure what this is but screams of React / Webpack based build tooling
// generic import of "images" from some location is not how "the platform" operates
// and is a great example of why I don't like build tooling that is overly complex
// sass suffers this same issue

/** import { images } from '../assets/Themes/Images'; 

/**
 * Figure out how to import images/icon?
 * get the images/icons as actual properties
 * Figure out how to underline just the first word
 * Fix word overlapping
 * Is the array okay?
 */

export class ProductOffering extends LitElement {
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
      title: { type: String }, // this should be a String
      description: { type: String }, // this should be a String OR a slot
      source: { type: String }, // type Image is not supported in LitElement data bind
      icon: { type: String }, // @lrnwebcomponents/simple-icon would be the way to go here
      _titleOne: { type: String },
      _titleTwo: { type: String },
    };
  }

  constructor() {
    super();
    this.alt = '';
    this.icon =
      '//www.udacity.com/www-proxy/contentful/assets/2y9b3o528xhq/2hOt81JN06lrDcxRKPUXOT/f16a6fbd6904a05df1b4a3e7ff6f8218/experts.svg';
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
              <img class="icon" src="${this.icon}" alt="" />
            </div>
            <h4>
              <span class="underline">${this._titleOne}</span>&nbsp;<span
                >${this._titleTwo}</span
              >
            </h4>
          </div>
          <p>${this.description}</p>
        </div>
      </div>
    `;
  }
}
