import { Api } from '../api/_api.js'
import { PhotographersCards } from '../models/_photographersCards.js'
import { MediaCards } from '../models/_mediaCards.js'

/* ma class Photograph hérite de ma class Api */
export class PhotographFactory extends Api {
  /* méthode pour recupérer tous les photographes */
  async getAllPhotograph () {
    try {
      /* on se met en attente des informations de note class API */
      const photographs = await this.get()
      // on parcours notre array pour récup chaque photographe et on instancie notre phtographersCards
      const photographerProfile = photographs.map(p => new PhotographersCards(p))
      /* on retourne notre render */
      return this.renderAllPhotograph(photographerProfile)
    } catch (err) {
      console.log(err)
    }
  }

  // Render index
  renderAllPhotograph (photographs) {
    /* variable qui recoit le template de renderOnePhotograph */
    let all = ''
    // pour chacun des photographes récup le render
    for (let photograph of photographs) {
      all += photograph.renderOnePhotographer()
    }
    return all
  }

  /* méthode pour recupérer un seul photographe */
  async getOnePhotograph (id) {
    // on appelle la methode getOnePhotographe et on lui transmet l'id du photographe
    try {
      const Onephotograph = await this.getPhotograph(id)
      // on instancie notre constructeur pour recuperer le html et on lui passe notre methode getPhotograph(id)
      const photographerprofile = new PhotographersCards(Onephotograph)
      // console.log(photographerprofile)
      // on cree notre render en lui passant notre photograph profile et on appelle notre methode
      const renderProfile = photographerprofile.renderPhotographHeader()
      // on retourne notre render final avec toutes les infos necessaires
      return renderProfile
    } catch (err) {
      console.log(err)
    }
  }

  /* méthode pour récupérer tous les médias */
  async getAllMedia (photographerId) {
    try {
      // on reste en attente de la fonction getMediaApi
      const medias = await this.getMediaApi(photographerId)
      let likes = 0
      let position = -1// car un array demarre de zéro
      // On declare render picture qui va parcourir notre array obtenu via getMediaApi 
      let renderPicture = medias.map(m => {
        likes += m.likes
        position++
        return new MediaCards(m, position)
      })
      return {
        gallery: this.renderAllMedias(renderPicture),
        totalLikes: likes
      }
    } catch (err) {
      console.log(err)
    }
  }

  // Render index
  renderAllMedias (medias) {
    /* variable qui recoit le template de renderOnePhotograph */
    let all = ''
    // pour chacun des photographes récup le render
    for (let media of medias) {
      all += media.renderMedia(media)
    }
    return all
  }

  // Ajout des likes et calcul total
  cuntMediaLike () {
    const allLegend = document.querySelectorAll('.hearth')// je cible le chiffre et le coeur pour que la surface cliquable soit mieux adaptée

    const addLike = (e) => {
      let mediaLegendCunt = e.target.previousElementSibling// je cible la span
      const totalLikes = document.querySelector('#footerInfosCunt')

      if (e.type == 'click') {
        mediaLegendCunt = e.target.parentNode.previousElementSibling
      }

      if (!mediaLegendCunt.classList.contains('Liked')) {
        mediaLegendCunt.classList.add('Liked')
        // si mon element ne contient pas la classe liked au chg je lui ajoute la classe et +1
        mediaLegendCunt.textContent = parseInt(mediaLegendCunt.textContent) + 1 // pour effectuer l'addition on trans notre string avec parse int
        totalLikes.textContent = parseInt(totalLikes.textContent) + 1
      } else {
        // sinon je lui retire 1
        mediaLegendCunt.classList.remove('Liked')
        mediaLegendCunt.textContent = parseInt(mediaLegendCunt.textContent) - 1
        totalLikes.textContent = parseInt(totalLikes.textContent) - 1
      }
    }

    // Branchement de listeners au click et clavier
    for (let h of allLegend) {
      h.addEventListener('click', addLike)
      h.addEventListener('keydown', e => {
        if (e.key === 'Enter') {
          addLike(e)
        }
      })
    }
  }
}
