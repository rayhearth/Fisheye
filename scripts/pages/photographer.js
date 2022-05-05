import { PhotographFactory } from '../factories/_photographFactory.js'



//recherche du photographe via son id 
const urlParams = new URLSearchParams(window.location.search)
//on appelle la methode get de Api et on recupère 'id'
const urlId = urlParams.get('id')

let displayOnePhotograph = async () => {

    let photograph = new PhotographFactory()
    // console.log(photograph)
    let OnePhotograph = await photograph.getOnePhotograph(urlId)
    // console.log(OnePhotograph)
    document.querySelector('#photographer').innerHTML = OnePhotograph

    //on recupère le nom du photographe va le h1 et on l'injecte via l'id
    let name = document.querySelector('h1').textContent
    document.querySelector('#photographerName').innerHTML = name

    startcontactlistener()

}

window.addEventListener('load', displayOnePhotograph())

let displayAllMedia = async () => {


    let media = new PhotographFactory()
    // console.log(media)
    let AllMedias = await media.getAllMedia(urlId)
    // console.log(urlId)
    // console.log(AllMedias)
    document.querySelector('#galleryContainer').innerHTML = AllMedias.gallery
    // console.log(document.querySelector('.galleryContainer'))
    // console.log(AllMedias.gallery)

    startlightboxlistener()
    //appel de la methode des likes
    media.cuntMediaLike()

    //Mise en place du filtre
    startDropDownListener()


    let filterBtns = document.querySelectorAll('.filterOption')
    console.log(filterBtns)

    let mediasFiltered = [...document.querySelectorAll('.mediaContentCard')]
    console.log(mediasFiltered)

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
                    return b.dataset.date - a.dataset.date 
                })
                    break;
                case 'filter-title': mediasFiltered.sort((a, b) => {
                    return a.dataset.title.localeCompare(b.dataset.title)
                })
                    break;
                default:
                    throw new Error ('le type sélectionné ne correspond pas')
            }
            document.querySelector('#galleryContainer').innerHTML = mediasFiltered.map(f => f.outerHTML)
        })
    })


}

window.addEventListener('load', displayAllMedia())

