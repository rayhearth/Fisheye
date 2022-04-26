export class MediaCards {
    constructor(medias, position) {
        // console.log(media)
        this._id = medias.id
        this._photographerId = medias.photographerId
        this._title = medias.title
        this._likes = medias.likes
        this._date = medias.date
        this._price = medias.price
        this._position = position
        if (medias.hasOwnProperty("image")) {
            this._type = 'image'
            this._media = medias.image
            //si le media a pour nom "image" alors il va nous retourner une img
        } else {
            //sinon il nous retourne notre Video
            this._type = 'video'
            this._media = medias.video
        }
    }

    
    renderMedia() {
        if (this._type === 'image') {
            return this.renderImage()
        } else {
            return this.renderVideo()
        }
    }

    renderImage() {
        return `
        <article class="mediaContentCard">
            <div class="mediaCard mediaLink" data-date="${this._date}" tabindex="0" media-id=${this._id} position=${this._position}>
                <img class="picture" src="assets/photographers/${this._photographerId}/media/${this._media}" alt="${this._title}">
                <h2 class="mediaCard-title" data-title="${this._title}">${this._title}</h2>
            </div>
            <div class="media-legend">
                <div class="media-legend-like" liked="no" media-id=${this._id}>
                    <span class="media-legend-cunt" data-cunt="${this._likes}" id="like-cunt">${this._likes}</span>
                    <svg class="hearth" aria-hidden="true" tabindex="0" data-prefix="far" data-icon="hearth" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84.02L256 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 .0003 232.4 .0003 190.9L0 190.9z"/></svg>
                </div>
            </div>
        </article>`
    }

    renderVideo() {
        return `
        <article class="mediaContentCard">
            <div class="mediaCard mediaLink" data-date="${this._date}" tabindex="0" media-id=${this._id} position=${this._position}>
                <video controls class="picture" media-id=${this._id} aria-label=video de ${this._title} >
                <source src="assets/photographers/${this._photographerId}/media/${this._media} "type="video/mp4"></video>
                <p>Votre navigateur ne prend pas en charge les vidéos HTML5. Voici <a href="assets/photographers.${this._photographerId}/media/${this._media}">un lien pour télécharger la vidéo</a>.</p>
                <h2 class="mediaCard-title" data-title="${this._title}">${this._title}</h2>
            </div>
            <div class="media-legend">
                <div class="media-legend-like" liked="no" media-id=${this._id}>
                    <span class="media-legend-cunt" data-cunt="${this._likes}" id="like-cunt">${this._likes}</span>
                    <svg class="hearth" aria-hidden="true" tabindex="0" data-prefix="far" data-icon="hearth" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84.02L256 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 .0003 232.4 .0003 190.9L0 190.9z"/></svg>
                </div>
            </div>
        </article>`
    }

}