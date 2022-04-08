import { ImageMediaCards } from '../models/_imagesCards'
import { VideoMediaCards } from '../models/_videosCards'

export class MediasFactory {
    constructor (media){
        if (media.hasOwnProperty("image")) {
            //si le media a pour nom "image" alors il va nous retourner notre ImageMediaFactory
            return new ImageMediaCards(media)
          } else {
            //sinon il nous retourne notre VideoMediaFactory
            return new VideoMediaCards(media)
          }
    }
}