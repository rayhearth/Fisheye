import { Api } from '../api/_api.js'
import { PhotographerPageCards, PhotographersIndexCards } from '../models/_photographersCards.js';


//recherche du photographe via son id 
const urlParams = new URLSearchParams(window.location.search)
//on appelle la methode get de Api et on recupère 'id'
const urlId = urlParams.get('id')


/*méthode pour recupérer tous les photographes*/
async function getAllPhotograph() {
    try {
        /*on se met en attente des informations de note class API*/
        const photographs = await this.get()
        // console.log(photographs)
        const photograph = photographs.photographs.filter(function (photograph) {
            if (photographer.id == urlId) {
                return photograph
            }
        })
    } catch (err) {
        console.log(err)
    }
}