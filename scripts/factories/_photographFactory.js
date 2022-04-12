import { Api } from '../api/_api.js'
import { PhotographersCards } from '../models/_photographersCards.js'
import { MediaCards } from '../models/_mediaCards.js'


/*ma class Photograph hérite de ma class Api*/
export class PhotographFactory extends Api {

  
  /*méthode pour recupérer tous les photographes*/
  async getAllPhotograph() {

    try {
      /*on se met en attente des informations de note class API*/
      let photographs = await this.get()
      // console.log(photographs)
      const photographerProfile = photographs.map(p => new PhotographersCards(p))
      /*on retourne notre render*/
      return this.renderAllPhotograph(photographerProfile)
    } catch (err) {
      console.log(err)
    }
  }

  // Render index
  renderAllPhotograph(photographs) {
    /*variable qui recoit le template de renderOnePhotograph*/
    let all = ''
    // pour chacun des photographes récup le render
    for (let photograph of photographs) {
      all += photograph.renderOnePhotographer()
    }
    return all
  }


  /*méthode pour recupérer un seul photographe*/
  async getOnePhotograph(id) {
    //on appelle la methode getOnePhotographe et on lui transmet l'id du photographe
    try {
      let Onephotograph = await this.getPhotograph(id)
      console.log(Onephotograph)
      //on instancie notre constructeur pour recuperer le html et on lui passe notre methode getPhotograph(id)
      let photographerprofile = new PhotographersCards(Onephotograph)
      // console.log(photographerprofile)
      //on cree notre render en lui passant notre photograph profile et on appelle notre methode
      let renderProfile = photographerprofile.renderPhotographHeader()
      // console.log(renderProfile)
      // on retourne notre render final avec toutes les infos necessaires
      return renderProfile
    } catch (err) {
      console.log(err)
    }
  }

  /*méthode pour récupérer tous les médias*/
  async getAllMedia(photographerId) {
    try {
      //on reste en attente de la fonction getMediaApi
      let medias = await this.getMediaApi(photographerId)
      // console.log(medias)
      //On declare render picture qui va parcourir notre array obtenu via getMediaApi 
      let likes = 0
      let renderPicture = medias.map(m => {
        likes += m.likes
        return new MediaCards(m)})
      // console.log(renderPicture)

      return {
        gallery : this.renderAllMedias(renderPicture),
        lightrender : this.renderAllLightbox(renderPicture),
        totalLikes : likes,
        // lightrender : this.renderAllLightbox(renderPicture),
        // lightbox : medias.map(media => new LightboxContain(media))
      }
      // console.log(gallery)
      //lorsque nous retournons la methode renderAllMedia on lui transmet notre renderPicture
      // return this.renderAllMedia(renderPicture)
    } catch (err) {
      console.log(err)
    }
  }

  // Render index
  renderAllMedias(medias) {
    /*variable qui recoit le template de renderOnePhotograph*/
    let all = ''
    // pour chacun des photographes récup le render
    for (let media of medias) {
      all += media.renderMedia(media)
    }
    return all
  }

  renderAllLightbox(medias) {
      let lbo = ''
      for (let media of medias) {
        lbo += media.renderLightbox(media)
      }
      return lbo
    }

}