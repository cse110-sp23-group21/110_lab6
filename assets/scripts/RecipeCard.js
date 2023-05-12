// RecipeCard.js

class RecipeCard extends HTMLElement {
  // Called once when document.createElement('recipe-card') is called, or
  // the element is written into the DOM directly as <recipe-card>
  constructor() {
    super(); // Inheret everything from HTMLElement

    // EXPOSE - START (All expose numbers start with A)
    const shadow = elementRef.attachShadow({ mode: "open" });
    // A1. TODO - Attach the shadow DOM to this Web Component (leave the mode open)
    const article = document.createElement("article");
    // A2. TODO - Create an <article> element - This will hold our markup once our data is set
    const style = document.createElement("style");
    // A3. TODO - Create a style element - This will hold all of the styles for the Web Component
    const styleSource = document.querySelector('style');
    style.textContent = styleSource.textContent;
    // A4. TODO - Insert all of the styles from cardTemplate.html into the <style> element you just made
    shadow.appendChild(style);
    shadow.appendChild(article);

    // A5. TODO - Append the <style> and <article> elements to the Shadow DOM
  }

  /**
   * Called when the .data property is set on this element.
   *
   * For Example:
   * let recipeCard = document.createElement('recipe-card'); // Calls constructor()
   * recipeCard.data = { foo: 'bar' } // Calls set data({ foo: 'bar' })
   *
   * @param {Object} data - The data to pass into the <recipe-card>, must be of the
   *                        following format:
   *                        {
   *                          "imgSrc": "string",
   *                          "imgAlt": "string",
   *                          "titleLnk": "string",
   *                          "titleTxt": "string",
   *                          "organization": "string",
   *                          "rating": number,
   *                          "numRatings": number,
   *                          "lengthTime": "string",
   *                          "ingredients": "string"
   *                        }
   */
  set data(data) {
    // If nothing was passed in, return
    if (!data) return;

    // A6. TODO - Select the <article> we added to the Shadow DOM in the constructor

    const article = this.shadow.querySelector("article");


    // A7. TODO - Set the contents of the <article> with the <article> template given in
    //           cardTemplate.html and the data passed in (You should only have one <article>,
    //           do not nest an <article> inside another <article>). You should use Template
    //           literals (tempalte strings) and element.innerHTML for this.

    article = document.querySelector('article');
  }
}

// A8. TODO - Define the Class as a customElement so that you can create
//           'recipe-card' elements

class customElement extends HTMLParagraphElement {
  constructor() {
    // Always call super first in constructor
    super();

    // Element functionality written in here
  }
}
