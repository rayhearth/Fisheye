import { Api } from '../api/_api.js'
import { MediaCards } from '../models/_mediaCards.js'
// import { LightboxContain } from '../utils/lightbox.js'
export class MediaFactory extends Api {

  // light = ''

  /*méthode pour récupérer tous les médias*/
  async getAllMedia(photographerId) {
    try {
      //on reste en attente de la fonction getMediaApi
      let medias = await this.getMediaApi(photographerId)
      console.log(medias)
      //On declare render picture qui va parcourir notre array obtenu via getMediaApi 
      let renderPicture = new MediaCards(medias)
      console.log(renderPicture)

      return {
        gallery: medias.renderMedia(),
        lightrender : this.renderAllLightbox(renderPicture),
        lightbox : medias.map(media => new LightboxContain(media))
      }
      //lorsque nous retournons la methode renderAllMedia on lui transmet notre renderPicture
      // return this.renderAllMedia(renderPicture)
    } catch (err) {
      console.log(err)
    }
  }

  // renderAllMedia(medias) {
  //   let all = ''
  //   for (let media of medias) {
  //     all += this.renderOneMedia(media)
  //   }
  //   return all
  // }
  // // renderPicture = new MediasFactory

  // renderOneMedia(media) {
  //   // console.log(media)
  //   return `<article class="mediaContentCard">
  //   <div class="mediaCard mediaLink" media-id=${media._id}>
  //     ${media._image ? media.renderImage() : media.renderVideo()}
  //   </div>
  //   <div class="media-legend">
  //     <p class="media-legend-title">${media._title}</p>
  //     <div class="media-legend-like" liked="no" media-id=${media._id}>
  //       <span class="media-legend-cunt" id="like-cunt">${media._likes}</span>
  //       <svg class="hearth" aria-hidden="true" focusable="false" data-prefix="far" data-icon="hearth" role="img"
  //         xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg="">
  //         <path fill="currentColor"
  //           d="M462.1 62.86C438.8 41.92 408.9 31.1 378.7 32c-37.49 0-75.33 15.4-103 43.98l-19.7 20.27l-19.7-20.27C208.6 47.4 170.8 32 133.3 32C103.1 32 73.23 41.93 49.04 62.86c-62.14 53.79-65.25 149.7-9.23 207.6l193.2 199.7C239.4 476.7 247.6 480 255.9 480c8.332 0 16.69-3.267 23.01-9.804l193.1-199.7C528.2 212.5 525.1 116.6 462.1 62.86zM437.6 237.1l-181.6 187.8L74.34 237.1C42.1 203.8 34.46 138.1 80.46 99.15c39.9-34.54 94.59-17.5 121.4 10.17l54.17 55.92l54.16-55.92c26.42-27.27 81.26-44.89 121.4-10.17C477.1 138.6 470.5 203.1 437.6 237.1z">
  //         </path>
  //       </svg>
  //     </div>
  //   </div>
  // </article>`
  // }

  // renderAllLightbox(medias) {
  //   let lbo = ''
  //   for (let media of medias) {
  //     lbo += this.renderLightbox(media)
  //   }
  //   return lbo
  // }

  // renderLightbox(media) {
  //   return `<div class="lightbox-media-container" id=${media._id}>
  //   ${media._image ? media.renderImageLighbox() : media.renderVideoLightbox()}
  //   <h2 class="lightbox-media-title" data-lightbox-caption>${media._title}</h2>
  //   </div>
  //   `
  // }


}