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
    