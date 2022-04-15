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
    console.log(urlId)
    console.log(AllMedias)

    document.querySelector('.galleryContainer').innerHTML = AllMedias.gallery

    startlightboxlistener()
    //appel de la methode des likes
    media.cuntMediaLike()

    // let filterBtns = document.querySelectorAll('.filterOption')
    // for (btn of filterBtns) {
    //     mediaSort(btn)
    // }

    // let mediaSort = (btn) => {
    //     btn.addEventListener('click', (e)=>{
    //         let all=[...document.querySelectorAll('mediaLink')]
    //         console.log(all)

    //         all.sort((a,b)=> {
    //             swicht(e.target.id){
    //                 case 'filterTitle':
    //                     return a.dataset.title.localCompare(b.dataset.title)
    //                     break
    //                 case ''
    //             }
    //         })
    //     })
    // }

}

window.addEventListener('load', displayAllMedia())
// window.addEventListener('selectstart')