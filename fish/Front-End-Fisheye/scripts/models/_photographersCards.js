export class PhotographersCards {
    constructor(photographers) {
      // console.log(photographers)
      this._name = photographers.name
      this._id = photographers.id
      this._city = photographers.city
      this._country = photographers.country
      this._tagline = photographers.tagline
      this._price = photographers.price
      this._portrait = photographers.portrait
    }
  
    renderOnePhotographer() {
      return `<article class="photographer-card">
              <a href="photographer.html?id=${this._id}">
                  <img class="img-profile" src="assets/photographers/${this._id}/${this._portrait}" alt="${this._name}">
                  <h2 class="photographer-name">${this._name}</h2>
              </a>
              <p class="photographer-location">${this._city}, ${this._country}</p>
              <p class="photographer-tagline">${this._tagline}</p>
              <p class="photographer-price">${this._price}€/jour</p>
          </article>`
    }

    renderPhotographHeader() {
        return `<div class="photographer-header" aria-label="photographer profile of ${this._name}">
        <div class="infosPhotographer">
        <h1>${this._name}</h1>
        <div class="locationandtag">
          <p class="location">${this._city}, ${this._country}</p>
          <p class="tagline">${this._tagline}</p>
        </div>
        </div>
            <button class="contactBtn" id="openModal" aria-labelleby="photographer contact ${this._name}">Contactez-moi</button>
            <img class="img-profile" src="assets/images/photographers/${this._id}/${this._portrait}" alt="">
        </div>
        </div>`
      }
  }
