// DOM Elements
let openLightboxBtn = document.querySelector('.mediaLink')
let lightbox = document.querySelector("#lightbox");
let closeLightboxBtn = document.querySelector('#lightbox__close')
let mediaInLightbox = document.getElementById("lightbox-container");
let prevBtn = document.querySelector('#lightbox__prev')
let nextBtn = document.querySelector('#lightbox__next')



const openLightbox = () =>{

}

let startlightboxlistener = () => {
    all =document.querySelectorAll('.mediaLink')
    for(let m of all){
        m.addEventListener('click', openLightbox)
    }
}