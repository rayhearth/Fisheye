// DOM Elements
let openLightboxBtn = document.querySelector('.mediaLink')
let closeLightboxBtn = document.querySelector('#lightbox__close')

let lightboxTitle = document.querySelector('#lightbox-media-title')

let lightbox = document.querySelector("#lightbox")
let prevBtn = document.querySelector('#lightbox__prev')
let nextBtn = document.querySelector('#lightbox__next')

let all = []
let poition = null



let openLightbox = (e) => {
    //Récupérer l'index du media cliquer
    document.body.classList.add('overflow')
    document.body.classList.add('lightboxOpen')
    window.scrollTo(0, 0)
    // lightbox-media.scrollTo(0, 0)
    let all = e.target.parentNode.children[0]
    console.log(all)
    let index = [...document.querySelectorAll('div.mediaLink')].indexOf('div.mediaLink')
    console.log(index)
    document.querySelector('.lightbox-media-container').innerHTML = all.renderLightbox
    
    // lightbox.setAttribute('aria-hidden', 'false')
    lightbox.style.display = ''
}

let renderLightbox = () => {
    
    let mediaInLightbox = document.querySelector("lightbox-container")
        if(mediaInLightbox.hasOwnProperty("image")) {
            return `
            <div class="lightbox-media-container"id=${this._id}>
                <img class="picture" src="assets/photographers/${this._photographerId}/media/${this._media}" alt="${this._title}">
                <h2 id="lightbox-media-title" class="lightbox-media-title" data-lightbox-caption>${this._title}</h2>
            </div>`
        } else {
            return `
            <div class="lightbox-media-container" id=${this._id}>
                <video controls class="picture" media-id=${this._id} aria-label=${this._title}>
                <source src="assets/photographers/${this._photographerId}/media/${this._media}"type="video/mp4"></video>
                <svg class="svg-inline--fa fa-video mediaIcon" aria-hidden="true" focusable="false" data-prefix="fas"
                data-icon="video" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg="">
                <path fill="currentColor"
                d="M384 112v288c0 26.51-21.49 48-48 48h-288c-26.51 0-48-21.49-48-48v-288c0-26.51 21.49-48 48-48h288C362.5 64 384 85.49 384 112zM576 127.5v256.9c0 25.5-29.17 40.39-50.39 25.79L416 334.7V177.3l109.6-75.56C546.9 87.13 576 102.1 576 127.5z">
                </path>
                </svg>
                <h2 id="lightbox-media-title" class="lightbox-media-title" data-lightbox-caption>${this._title}</h2>
            </div>`
        }
}

//Fermeture de la lightbox
const closeLightbox = () => {
    document.body.classList.remove('lightboxOpen')
    document.body.classList.remove('overflow')
    document.removeEventListener('Keyup', this.onKeyUp)
    document.querySelector('#openModal').focus()
    // lightbox.setAttribute('aria-hidden', 'true')
    
    lightbox.style.display = 'none'
}

let startlightboxlistener = () => {
    all = document.querySelectorAll('.mediaLink', '.picture')
    // console.log(all)
    // console.log(index)
    for (let m of all) {
        m.addEventListener('click', openLightbox)
    }
}

closeLightboxBtn.addEventListener('click', closeLightbox)