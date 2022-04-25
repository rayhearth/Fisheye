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
    document.querySelector('.galleryContainer').innerHTML = AllMedias.gallery
    // console.log(document.querySelector('.galleryContainer'))
    // console.log(AllMedias.gallery)

    startlightboxlistener()
    //appel de la methode des likes
    media.cuntMediaLike()

    // let filterBtns = document.querySelectorAll('.filterOption')
    // // console.log(filterBtns)
    // let mediasFiltered = [...document.querySelectorAll('.mediaContentCard')]
    // console.log(mediasFiltered)

    
    
    // for (let btn of filterBtns) {
    //     console.log(btn)
    //     btn.addEventListener('click', mediaSort)
    // }
    
    // const mediaSort = (btn) => {
    //     switch (e.target.id) {
    //         case 'pop' : mediasFiltered.sort(function (a,b){
    //             return a.dataset.cunt.LocaleCompare(b.dataset.cunt)
    //         })
    //         break
    //     }
    // }
    // mediasFiltered.addEventListener("change", (e) => {
    //     switch (e.target.id) {
    //         case 'pop':
    //             mediasFiltered.sort(function (a, b) {
    //                 return a.dataset.cuntMediaLike.localeCompare(b.dataset.cuntMediaLike)
    //             })
    //             break
    //     }

    // filterBtns.forEach(filter => {
    //     filter.addEventListener('change', (e) => {
    //         switch (e.target.id) {
    //             case 'pop':
    //                 mediasFiltered.sort(function (a, b) {
    //                     return a.dataset.cuntMediaLike.localeCompare(b.dataset.cuntMediaLike)
    //                 })
    //                 break
    //         }
    //     })
    // displayAllMedia()
    // console.log(e.target.id)
    // })


    
}
window.addEventListener('load', displayAllMedia())