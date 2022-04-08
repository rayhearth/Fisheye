import { PhotographFactory } from '../factories/_photographFactory.js'


/*j'implémente ma méthode pour récup et afficher tout mes photographes*/

let displayAllPhotograph = async () => {

    // instance de photographe par la class Photograph() on recupère nos photographes 
    let photograph = new PhotographFactory()
    let allPhotographs = await photograph.getAllPhotograph()

    // on implemente la méthode allPhotographs ds la section ayant l'id '#photographer
    document.querySelector('#photographer').innerHTML = allPhotographs

}

window.addEventListener('load', () => displayAllPhotograph())


// async function getPhotographers() {
    //     // Penser à remplacer par les données récupérées dans le json
    //     const photographers = [
    //         {
    //             "name": "Ma data test",
    //             "id": 1,
    //             "city": "Paris",
    //             "country": "France",
    //             "tagline": "Ceci est ma data test",
    //             "price": 400,
    //             "portrait": "account.png"
    //         },
    //         {
    //             "name": "Autre data test",
    //             "id": 2,
    //             "city": "Londres",
    //             "country": "UK",
    //             "tagline": "Ceci est ma data test 2",
    //             "price": 500,
    //             "portrait": "account.png"
    //         },
    //     ]
    //     // et bien retourner le tableau photographers seulement une fois
    //     return ({
    //         photographers: [...photographers, ...photographers, ...photographers]})
    // }

    // async function displayData(photographers) {
    //     const photographersSection = document.querySelector(".photographer_section");

    //     photographers.forEach((photographer) => {
    //         const photographerModel = photographerFactory(photographer);
    //         const userCardDOM = photographerModel.getUserCardDOM();
    //         photographersSection.appendChild(userCardDOM);
    //     });
    // };

    // async function init() {
    //     // Récupère les datas des photographes
    //     const { photographers } = await getPhotographers();
    //     displayData(photographers);
    // };
    
    // init();
    