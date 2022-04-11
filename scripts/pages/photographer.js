import { PhotographFactory } from '../factories/_photographFactory.js'
import { MediaFactory } from '../factories/_mediaFactory.js'
import { LightboxContain } from '../utils/lightbox.js'

// let data = new Photograph()


//recherche du photographe via son id 
const urlParams = new URLSearchParams(window.location.search)
//on appelle la methode get de Api et on recupère 'id'
const urlId = urlParams.get('id')

let displayOnePhotograph = async () => {

    let photograph = new PhotographFactory()
    // console.log(photograph)
    let OnePhotograph = await photograph.getOnePhotograph(urlId)

    document.querySelector('#photographer').innerHTML = OnePhotograph

    //on recupère le nom du photographe va le h1 et on l'injecte via l'id
    let name = document.querySelector('h1').textContent
    document.querySelector('#photographerName').innerHTML = name
    
    

}

window.addEventListener('load', displayOnePhotograph())

let displayAllMedia = async () => {


    let media = new MediaFactory()
    // console.log(media)
    let AllMedias = await media.getAllMedia(urlId)
    // let AllMediasLightbox = await media.getAllMedia(urlId)
    // console.log(AllMedias)

    document.querySelector('.galleryContainer').innerHTML = AllMedias.gallery
    document.querySelector('.lightbox-media').innerHTML = AllMedias.lightrender

}

window.addEventListener('load', displayAllMedia())
// window.addEventListener('selectstart')