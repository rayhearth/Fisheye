import { PhotographFactory } from '../factories/_photographFactory.js'



//recherche du photographe via son id 
const urlParams = new URLSearchParams(window.location.search)
//on appelle la methode get de Api et on recupère 'id'
const urlId = urlParams.get('id')

let displayOnePhotograph = async () => {

    //On stocke dans photograph notre photographfactory
    let photograph = new PhotographFactory()
    //on se met en attente de getOnePhotograph pour recup les infos du photograph et on l'id via son id
    let OnePhotograph = await photograph.getOnePhotograph(urlId)
    //On injecte dans le html le render de OnePhotograph
    document.querySelector('#photographer').innerHTML = OnePhotograph

    //on recupère le nom du photographe va le h1 et on l'injecte via l'id
    let name = document.querySelector('h1').textContent
    document.querySelector('#photographerName').innerHTML = name

    //On branche les listener de la modal
    startcontactlistener()

}

window.addEventListener('load', displayOnePhotograph())


//Mise en place des médias, de la fonction de tri et de la lightbox
let displayAllMedia = async () => {

    //on stocke ds la variable media notre photographfactory
    let media = new PhotographFactory()
    //on se met en attente de getAllMedia pour recevoir tous les médias du photographe passé ds l'url 
    let AllMedias = await media.getAllMedia(urlId)
    //on injecte tous nos médias dans la section galleryContainer
    document.querySelector('#galleryContainer').innerHTML = AllMedias.gallery

    /*LIGHTBOX*/
    //appel des listeners de la lightbox
    startlightboxlistener()

    /*LIKE*/
    //appel de la methode des likes
    media.cuntMediaLike()

    /*FILTRE MEDIAS*/
    //appel des listeners de la dropdown
    startDropDownListener()

    // on stocke ds la variable filterBtns nos 3 btns 
    let filterBtns = document.querySelectorAll('.filterOption')
    // console.log(filterBtns)

    //on met les médias en array
    let mediasFiltered = [...document.querySelectorAll('.mediaContentCard')]

    filterBtns.forEach(btn => {
        btn.addEventListener('click', e => {
            switch (e.target.id) {
                case 'filter-pop': mediasFiltered.sort((a, b) => {
                    // console.log(b.dataset.cunt)
                    return b.dataset.cunt - a.dataset.cunt
                })
                    break;
                case 'filter-date': mediasFiltered.sort((a, b) => {
                    // console.log(b.dataset.date)
                    return a.dataset.date.localeCompare(b.dataset.date)
                })
                    break;
                case 'filter-title': mediasFiltered.sort((a, b) => {
                    return a.dataset.title.localeCompare(b.dataset.title)
                })
                    break;
                default:
                    throw new Error('le type sélectionné ne correspond pas')
            }
            document.querySelector('#galleryContainer').innerHTML = mediasFiltered.map(f => f.outerHTML)
        })
    })
}

window.addEventListener('load', displayAllMedia())

