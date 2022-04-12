// DOM Elements
let openLightboxBtn = document.querySelector('.mediaLink')
let closeLightboxBtn = document.querySelector('#lightbox__close')

let mediaInLightbox = document.("lightbox-container")
let lightboxTitle = document.querySelector('#lightbox-media-title')

let lightbox = document.querySelector("#lightbox")
let prevBtn = document.querySelector('#lightbox__prev')
let nextBtn = document.querySelector('#lightbox__next')



const openLightbox = () =>{

}

let startlightboxlistener = () => {
    all = document.querySelectorAll('.mediaLink')
    // console.log(all)
    for(let m of all){
        m.addEventListener('click', openLightbox)
    }
}