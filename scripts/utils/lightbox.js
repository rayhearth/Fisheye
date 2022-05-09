// DOM Elements

let openLightboxBtn = document.querySelector('.mediaLink')
let closeLightboxBtn = document.querySelector('#lightbox__close')

let lightboxTitle = document.querySelector('#lightbox-media-title')
let lightbox = document.querySelector("#lightbox")

let prevBtn = document.querySelector('#lightbox__prev')
let nextBtn = document.querySelector('#lightbox__next')

let index = null
let all = []



const openLightbox = (e) => {

    lightbox.classList.add('lightboxOpen')
    document.body.classList.add('overflow')
    window.scrollTo(0, 0)
    lightbox.scrollTo(0, 0)
    lightbox.focus()
    //on cible le media sur lequel on presse
    let currentMedia = e.target
    // console.log(e.target)
    if (e.type == 'click') {
        //si on fait un click on cible l'élém enfant
        currentMedia = e.target.parentNode
    }
    //On recupere la position de notre media via l'att position et on fait un parseInt car il s'agit d'un chiffre
    index = parseInt(currentMedia.getAttribute('position'))
    //On injecte ds notre lightbox le media sur lequel on vient d'interagir
    document.querySelector('#light').innerHTML = all[index].innerHTML

    lightbox.setAttribute('aria-hidden', 'false')
    document.body.setAttribute('aria-hidden', 'true')
    lightbox.style.display = ''
}


let next = () => {
    //on ajoute la prochaine position a notre index
    index = index + 1
    //si on arrive sur le dernier élément du tableau
    if (index == all.length) {
        //on repars à zéro
        index = 0
    }
    //si le media est une video , on lui ajoute les controls
    if (all[index].childNodes[1].dataset.video == 'video') {
        all[index].childNodes[1].setAttribute('controls', '')
    }
    // console.log(all[index].childNodes[1])

    document.querySelector('#light').innerHTML = all[index].innerHTML
}

let previous = () => {
    //On enlève un position au média actuel
    index = index - 1
    //si on arrive au début du tableau, on repart sur le dernier élément
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
    lightbox.classList.remove('lightboxOpen')
    document.body.classList.remove('overflow')
    // on replace le focus sur le button contact a la fermeture de la lightbox
    document.querySelector('#openModal').focus()
    lightbox.setAttribute('aria-hidden', 'true')
    document.body.setAttribute('aria-hidden', 'false')

    lightbox.style.display = 'none'
}


//Branchement des listener

let startlightboxlistener = () => {
    all = document.querySelectorAll('.mediaLink')//on recupere tous nos medias
    // console.log(all)
    for (let m of all) {//pour chaque media de all on branche les listeners
        m.addEventListener('click', openLightbox)
        m.addEventListener('keydown', (e) => {
            console.log(e)
            if (e.key === 'Escape' || e.key === 'Esc') {
                closeLightbox(e)
            }
            if (e.key === 'Enter') {
                openLightbox(e)
            }
        })
    }

    nextBtn.addEventListener('click', next)
    nextBtn.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight') {
            next(e)
        }
    })

    prevBtn.addEventListener('click', previous)
    prevBtn.addEventListener('keydown', (e) => {
        console.log(e)
        if (e.key === 'ArrowLeft') {
            previous(e)
        }
    })


}

closeLightboxBtn.addEventListener('click', closeLightbox)
