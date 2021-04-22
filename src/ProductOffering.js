import { html, css, LitElement } from 'lit-element';
/** import { images } from '../assets/Themes/Images'; 

/**
 * Figure out how to import images/icon
 * Put images/icons in the tag 
 * Figure out how to underline just the first word
 * Fix word overlapping
 */

export class ProductOffering extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        padding: 25px;
        color: var(--product-offering-text-color, #000);
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
    `;
  }

  static get properties() {
    return {
      /** image: { type: Image }, */
       /** icon: { type: Image }, */ 
      title: { type: Array },
      description: {type: Array }
    };
  }

  constructor() {
    super();
    /** this.image = images.placeholder; */
    this.title = ["Title", "Title", "Title" , "Title"];
    /** this.icon = productManagement;  * */
    this.description = ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris gravida sit amet sem id hendrerit. Ut varius maximus mi, pretium cursus libero. Maecenas hendrerit lacinia finibus.", 
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris gravida sit amet sem id hendrerit. Ut varius maximus mi, pretium cursus libero. Maecenas hendrerit lacinia finibus.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris gravida sit amet sem id hendrerit. Ut varius maximus mi, pretium cursus libero. Maecenas hendrerit lacinia finibus.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris gravida sit amet sem id hendrerit. Ut varius maximus mi, pretium cursus libero. Maecenas hendrerit lacinia finibus.", ]
  }


  render() {
    return html`
      <div id="grid-container">
        <div id="grid-outer-item">
          <img src="../assets/images/placeholder1.jpeg" alt="Need to put somthing here" height=150px width=200px/>
          <div>
            <h4> <span class="underline"> ${this.title[0][0]} </span> ${this.title[0] } </h4>
            <p> ${this.description[0] } </p>
          </div>
        </div>
        <div id="grid-outer-item">
          <img src="../assets/images/placeholder3.jpeg" alt="Need to put somthing here" height=150px width=200px/>
          <div>
            <h4> ${this.title[1] } </h4>
            <p> ${this.description[1] } </p>
          </div>
        </div>
        <div id="grid-outer-item">
          <img src="../assets/images/placeholder2.jpeg" alt="Need to put somthing here" height=150px width=200px/>
          <div>
            <h4>${this.title[2] } </h4>
            <p> ${this.description[2] } </p>
          </div>
        </div>
        <div id="grid-outer-item">
          <img src="../assets/images/placeholder4.jpeg" alt="Need to put somthing here" height=150px width=200px/>
          <div class="wordwrap">
            <h4>${this.title[3] } </h4>
            <p> ${this.description[3] } </p>
          </div>
        </div>
      </div>

    
    `;
  }
}
