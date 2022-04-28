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

    let mediasFiltered = [...document.querySelectorAll('.mediaLink')]
    console.log(mediasFiltered)

    filterBtns.forEach(btn =>{
        btn.addEventListener('click', e =>{
            switch(e.target.id){
                case 'pop': mediasFiltered.sort((a,b) => {
                    console.log(e.target.id)
                    // console.log('pop')
                    return b.dataset.cunt - a.dataset.cunt
                })
                break;
                case 'date': mediasFiltered.sort((a,b) => {
                    console.log(e.target.id)
                    // console.log('pop')
                    return b.dataset.date - a.dataset.date
                })
                break;
                case 'title': mediasFiltered.sort((a,b) =>{
                    return a.dataset.title.localeCompare(b.dataset.title)
                })
                break;
                default:
                    console.log('le type sélectionné ne correspond pas')
            }
        })
    })

    // let mediaSort = (btn) => {
    //     btn.addEventListener('click', (e)=> {
            
    //     })
    //     switch (e.target.id) {
    //         case 'pop': mediasFiltered.sort()
    //     }
    // }
    // for (let btn of filterBtns){
    //     mediaSort(btn)
    // }

}
window.addEventListener('load', displayAllMedia())