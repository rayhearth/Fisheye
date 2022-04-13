// DOM Elements
let openLightboxBtn = document.querySelector('.mediaLink')
let closeLightboxBtn = document.querySelector('#lightbox__close')

let mediaInLightbox = document.querySelector("lightbox-container")
let lightboxTitle = document.querySelector('#lightbox-media-title')

let lightbox = document.querySelector("#lightbox")
let prevBtn = document.querySelector('#lightbox__prev')
let nextBtn = document.querySelector('#lightbox__next')



const openLightbox = () =>{
    document.body.classList.add('overflow')
    document.body.classList.add('lightboxOpen')
    window.scrollTo(0, 0)
    lightbox-media.scrollTo(0, 0)
    
    lightbox.setAttribute('aria-hidden', 'false')
    lightbox.style.display = ''
}

//Fermeture de la lightbox
const closeLightbox = () => {
    document.body.classList.remove('lightboxOpen')
    document.body.classList.remove('overflow')
    document.removeEventListener('Keyup', this.onKeyUp)
    document.querySelector('#openModal').focus()
    lightbox.setAttribute('aria-hidden', 'true')

    lightbox.style.display = 'none'
  }

let startlightboxlistener = () => {
    all = document.querySelectorAll('.mediaLink')
    // console.log(all)
    for(let m of all){
        m.addEventListener('click', openLightbox)
    }
}

closeLightboxBtn.addEventListener('click', closeLightbox)