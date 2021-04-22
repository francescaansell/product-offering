import { html, css, LitElement } from 'lit-element';
/** import { images } from '../assets/Themes/Images'; 

/**
 * Figure out how to import images/icon?
 * get the images/icons as actual properties
 * Figure out how to underline just the first word
 * Fix word overlapping
 * Is the array okay?
 */

export class ProductOffering extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        padding: 25px;
        color: var(--product-offering-text-color, #000);
        font-family: Verdana, sans-serif;
      }
      #grid-container {
        display: inline-grid;
        grid-column-gap: 10px;
        grid-row-gap: 10px; 
        grid-template-columns: 50% 50%;
        border-style: solid;
        border-color: #e8f4f8;
        background-color: #e8f4f8;
        padding: 2%;
      }
      #grid-outer-item {
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
    return {
      title: { type: Array },
      description: {type: Array },
      image: {type: Image}, 
      accentColor: { type: String },
      icon: { type: Image },

    };
  }

  constructor() {
    super();
    this.image = new Image();
    this.image.src = "../assests/Images/placeholder1.jpeg";
    this.image.alt = "My alt description";
    this.title = ["Title", "Title", "Title" , "Title"];
    this.description = ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris gravida sit amet sem id hendrerit. Ut varius maximus mi, pretium cursus libero. Maecenas hendrerit lacinia finibus.", 
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris gravida sit amet sem id hendrerit. Ut varius maximus mi, pretium cursus libero. Maecenas hendrerit lacinia finibus.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris gravida sit amet sem id hendrerit. Ut varius maximus mi, pretium cursus libero. Maecenas hendrerit lacinia finibus.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris gravida sit amet sem id hendrerit. Ut varius maximus mi, pretium cursus libero. Maecenas hendrerit lacinia finibus.", ]
  }


  render() {
    return html`
      <div id="grid-container">
        <div id="grid-outer-item">
          <!-- <img class="square" src="../assets/images/placeholder1.jpeg" alt="Need to put somthing here" height=150px width=200px/> -->
          ${this.image}
          <div>
            <div class="banner">
              <div class="icon-background">
                <img class="icon" src="//www.udacity.com/www-proxy/contentful/assets/2y9b3o528xhq/2hOt81JN06lrDcxRKPUXOT/f16a6fbd6904a05df1b4a3e7ff6f8218/experts.svg" alt="Real-world projects from industry experts">
              </div>
              <h4> <span class="underline"> ${this.title[0]} </span> </h4>
            </div>
            <p> ${this.description[0] } </p>
          </div>
        </div>
        <div id="grid-outer-item">
          <img class="square" src="../assets/images/placeholder3.jpeg" alt="Need to put somthing here" />
          <div>
            <div class="banner">
              <div class="icon-background">
                <img class="icon" src="//www.udacity.com/www-proxy/contentful/assets/2y9b3o528xhq/7z9cBzRbfbCJV5r3n4z1gy/6c4494fce7582ba3b72e3209753ec626/coding-icon.svg" alt="Technical mentor support">
              </div>
              <h4> ${this.title[1] } </h4>
            </div>
            <p> ${this.description[1] } </p>
          </div>
        </div>
        <div id="grid-outer-item">
          <img class="square" src="../assets/images/placeholder2.jpeg" alt="Need to put somthing here" />
          <div>
            <div class="banner">
              <div class="icon-background">
                <img class="icon" src="//www.udacity.com/www-proxy/contentful/assets/2y9b3o528xhq/753EFF3UhcMMUythiZIOoc/c7daef06c3876eddf8ecaa01026f1d46/career.svg" alt="Career Services">
              </div>
              <h4>${this.title[2] } </h4>
            </div>
            <p> ${this.description[2] } </p>
          </div>
        </div>
        <div id="grid-outer-item">
          <img class="square" src="../assets/images/placeholder4.jpeg" alt="Need to put somthing here" />
          <div>
            <div class="banner">
              <div class="icon-background">
                <img class="icon" src="//www.udacity.com/www-proxy/contentful/assets/2y9b3o528xhq/573uHj1EeYECLyuovPLJO4/a914f0f72469788f909a5c5df9db775f/learningsched.svg" alt="Flexible learning program">
              </div>
              <h4>${this.title[3] } </h4>
            </div>
            <p> ${this.description[3] } </p>
          </div>
        </div>
      </div>

    
    `;
  }
}
