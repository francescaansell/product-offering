import { html, css, LitElement } from 'lit-element';
/** import { images } from '../assets/Themes/Images'; */

/**
 * Figure out how to import images/icon
 * Put images/icons in the tag 
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
        grid-column-gap: 25px;
        grid-row-gap: 25px; 
        grid-template-columns: 50% 50%;
        border-style: solid;
        border-color: #e8f4f8;
        background-color: #e8f4f8;
        padding-left: 5%;
        padding-right: 5%;
        margin-left: 3%;
        margin-right: 3%;
      }
      #grid-item {
        
        padding-left: 10%;
        padding-right: 10%;
        border-style: solid;
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
    this.title = ["Real-world Projects from industry experts", "Techincal mentor support", "Career services" , "Flexible learning program"];
    /** this.icon = productManagement;  * */
    this.description = ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris gravida sit amet sem id hendrerit. Ut varius maximus mi, pretium cursus libero. Maecenas hendrerit lacinia finibus.", 
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris gravida sit amet sem id hendrerit. Ut varius maximus mi, pretium cursus libero. Maecenas hendrerit lacinia finibus.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris gravida sit amet sem id hendrerit. Ut varius maximus mi, pretium cursus libero. Maecenas hendrerit lacinia finibus.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris gravida sit amet sem id hendrerit. Ut varius maximus mi, pretium cursus libero. Maecenas hendrerit lacinia finibus.", ]
  }


  render() {
    return html`
      <div id="grid-container">
        <div id="grid-item">
          <h4> ${this.title[0] } </h4>
          <p> ${this.description[0] } </p>
        </div>
        <div id="grid-item">
          <h4> ${this.title[1] } </h4>
          <p> ${this.description[1] } </p>
        </div>
        <div id="grid-item">
          <h4>${this.title[2] } </h4>
          <p> ${this.description[2] } </p>
        </div>
        <div id="grid-item">
          <h4>${this.title[3] } </h4>
          <p> ${this.description[3] } </p>
        </div>
      </div>

    
    `;
  }
}
