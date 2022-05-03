// DOM Elements
let openLightboxBtn = document.querySelector('.mediaLink')
let closeLightboxBtn = document.querySelector('#lightbox__close')

let lightboxTitle = document.querySelector('#lightbox-media-title')
let lightbox = document.querySelector("#lightbox")
// console.log(lightbox)
let prevBtn = document.querySelector('#lightbox__prev')
// console.log(prevBtn)
let nextBtn = document.querySelector('#lightbox__next')
// console.log(nextBtn)
let index = null
let all = []



const openLightbox = (e) => {

    document.body.classList.add('overflow')
    document.body.classList.add('lightboxOpen')
    window.scrollTo(0, 0)
    // lightbox.scrollTo(0, 0)
    let currentMedia = e.target.parentNode

    index = parseInt(currentMedia.getAttribute('position'))
    document.querySelector('#light').innerHTML = all[index].innerHTML
    // console.log(index)
    // console.log(document.querySelector('#light'))
    lightbox.setAttribute('aria-hidden', 'false')
    all[index].childNodes[1].removeAttribute('controls', '')
    lightbox.style.display = ''
}


let next = () => {
    index = index + 1
    if (index == all.length) {
        index = 0
    }
    if (all[index].childNodes[1].dataset.video == 'video') {
        all[index].childNodes[1].setAttribute('controls', '')
    }
    // console.log(document.querySelector('#light'))
    // console.log(all[index])
    // console.log(all[index].childNodes[1])
    // console.log(all)
    document.querySelector('#light').innerHTML = all[index].innerHTML
}

let previous = () => {
    index = index - 1
    if (index == -1) {
        index = all.length - 1
    }
    if (all[index].childNodes[1].dataset.video == 'video') {
        all[index].childNodes[1].setAttribute('controls', '')
    }
    document.querySelector('#light').innerHTML = all[index].innerHTML
}
//Fermeture de la lightbox
const closeLightbox = () => {
    document.body.classList.remove('lightboxOpen')
    document.body.classList.remove('overflow')
    // on replace le focus sur le button contact a la fermeture de la lightbox
    document.querySelector('#openModal').focus()
    lightbox.setAttribute('aria-hidden', 'true')

    lightbox.style.display = 'none'
}


//Branchement des listener

let startlightboxlistener = () => {
    all = document.querySelectorAll('.mediaLink')//on recupere tous nos medias
    // console.log(all)
    for (let m of all) {//pour chaque media de all on branche les listeners
        m.addEventListener('click', openLightbox)
    }
    nextBtn.addEventListener('click', next)

    prevBtn.addEventListener('click', previous)
}

closeLightboxBtn.addEventListener('click', closeLightbox)

//Commande au clavier
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' || e.key === 'Esc') {
        closeLightbox(e)
    } else if (e.key === 'Enter') {
        openLightbox(e)
    }
    else if (e.key === 'ArrowRight') {
        next(e)
    } else if (e.key === 'ArrowLeft') {
        previous(e)
    }
})
