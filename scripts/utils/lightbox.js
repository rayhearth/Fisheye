// DOM Elements
let openLightboxBtn = document.querySelector('.mediaLink')
let closeLightboxBtn = document.querySelector('#lightbox__close')

let lightboxTitle = document.querySelector('#lightbox-media-title')

let lightbox = document.querySelector("#lightbox")
// console.log(lightbox)
let prevBtn = document.querySelector('#lightbox__prev')
let nextBtn = document.querySelector('#lightbox__next')


let all = []
let position = null



const openLightbox = (e) => {

    document.body.classList.add('overflow')
    document.body.classList.add('lightboxOpen')
    window.scrollTo(0, 0)
    // lightbox-media.scrollTo(0, 0)
    let currentMedia = e.target.parentNode

    let index = currentMedia.getAttribute('position')
    console.log(index)
    document.querySelector('#light').innerHTML = currentMedia.innerHTML
    // console.log(document.querySelector('#light'))

    lightbox.setAttribute('aria-hidden', 'false')
    lightbox.style.display = ''
}

//afficher le prochain média
//si on arrive en fin de tableau des medias on repart au début.
const next = (e) => {
    e.preventdefault
    // let index = currentMedia.getAttribute('position')
    // if(i===index.lenght -1){
    //     i=-1 //on revient a notre valeur 0
    // } //si on arrive au bout de nos medias
    // openLightbox(index[i+1])

    for (let i = 0; i < index.length; i++) {
        if (index[i] == currentMedia) {
            if (i == index.lenght) {
                currentMedia = index[0]
            } else {
                currentMedia = index[++i]
            }
            break
        }
    }
}

const previous = () => {
    for (let i = 0; i < index.length; i++) {
        for (let i = 0; i < index.length; i++) {
            if (index[i] == currentMedia) {
                if (i == index.lenght) {
                    currentMedia = index[0]
                } else {
                    currentMedia = index[--i]
                }
                break
            }
        }
    }
}
//Fermeture de la lightbox
const closeLightbox = () => {
    document.body.classList.remove('lightboxOpen')
    document.body.classList.remove('overflow')
    // document.removeEventListener('Keyup', this.onKeyUp)
    document.querySelector('#openModal').focus()
    lightbox.setAttribute('aria-hidden', 'true')

    lightbox.style.display = 'none'
}


//Branchement des listener

let startlightboxlistener = () => {
    all = document.querySelectorAll('.mediaLink')
    // console.log(all)
    for (let m of all) {
        m.addEventListener('click', openLightbox)
    }
}
closeLightboxBtn.addEventListener('click', closeLightbox)
nextBtn.addEventListener('click', next)
prevBtn.addEventListener('click', previous)
