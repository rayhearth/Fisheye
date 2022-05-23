import { PhotographFactory } from '../factories/_photographFactory.js'

// recherche du photographe via son id 
const urlParams = new URLSearchParams(window.location.search)
// on appelle la methode get de Api et on recupère 'id'
const urlId = urlParams.get('id')

const displayOnePhotograph = async () => {
  // On stocke dans photograph notre photographfactory
  const photograph = new PhotographFactory()
  // on se met en attente de getOnePhotograph pour recup les infos du photograph et on l'id via son id
  const OnePhotograph = await photograph.getOnePhotograph(urlId)
  // On injecte dans le html le render de OnePhotograph
  document.querySelector('#photographer').innerHTML = OnePhotograph

  // on recupère le nom du photographe va le h1 et on l'injecte via l'id
  const name = document.querySelector('h1').textContent
  document.querySelector('#photographerName').innerHTML = name

  // On branche les listener de la modal
  startcontactlistener()
}

window.addEventListener('load', displayOnePhotograph())

// Mise en place des médias, de la fonction de tri et de la lightbox
const displayAllMedia = async () => {
  // on stocke ds la variable media notre photographfactory
  const media = new PhotographFactory()
  // on se met en attente de getAllMedia pour recevoir tous les médias du photographe passé ds l'url 
  const AllMedias = await media.getAllMedia(urlId)
  // on injecte tous nos médias dans la section galleryContainer
  document.querySelector('#galleryContainer').innerHTML = AllMedias.gallery

  /* LIGHTBOX */
  // appel des listeners de la lightbox
  startlightboxlistener()

  /* LIKE */
  // appel de la methode des likes
  media.cuntMediaLike()

  /* FILTRE MEDIAS */
  // appel des listeners de la dropdown
  startDropDownListener()

  // on stocke ds la variable filterBtns nos 3 btns
  const filterBtns = document.querySelectorAll('.filterOption')

  // on met les médias en array
  const mediasFiltered = [...document.querySelectorAll('.mediaContentCard')]

  filterBtns.forEach(btn => {
    btn.addEventListener('click', e => {
      switch (e.target.id) {
        case 'filter-pop': mediasFiltered.sort((a, b) => {
          // document.querySelector('#filter-label').textContent = 'Popularité'
          return b.dataset.cunt - a.dataset.cunt
        })
          break;
        case 'filter-date': mediasFiltered.sort((a, b) => {
          // document.querySelector('#filter-label').textContent = 'date'
          return a.dataset.date.localeCompare(b.dataset.date)
        })
          break;
        case 'filter-title': mediasFiltered.sort((a, b) => {
          // document.querySelector('#filter-label').textContent = 'titre'
          return a.dataset.title.localeCompare(b.dataset.title)
        })
          break;
        default:
          throw new Error('le type sélectionné ne correspond pas')
      }
      document.querySelector('#galleryContainer').innerHTML = mediasFiltered.map(f => f.outerHTML).join('')
      /* LIGHTBOX */
      // appel des listeners de la lightbox
      startlightboxlistener()

      /* LIKE */
      // appel de la methode des likes
      media.cuntMediaLike()
    })
    // Au clavier
    btn.addEventListener('keyup', (e) => {
      if (e.key === 'Enter') {
        switch (e.target.id) {
          case 'filter-pop': mediasFiltered.sort((a, b) => {
            document.querySelector('#filter-label').textContent = 'Popularité'
            return b.dataset.cunt - a.dataset.cunt
          })
            break;
          case 'filter-date': mediasFiltered.sort((a, b) => {
            document.querySelector('#filter-label').textContent = 'date'
            return a.dataset.date.localeCompare(b.dataset.date)
          })
            break;
          case 'filter-title': mediasFiltered.sort((a, b) => {
            document.querySelector('#filter-label').textContent = 'titre'
            return a.dataset.title.localeCompare(b.dataset.title)
          })
            break;
          default:
            throw new Error('le type sélectionné ne correspond pas')
        }
      }

      document.querySelector('#galleryContainer').innerHTML = mediasFiltered.map(f => f.outerHTML).join('')
      /* LIGHTBOX */
      // appel des listeners de la lightbox
      startlightboxlistener()

      /* LIKE */
      // appel de la methode des likes
      media.cuntMediaLike()
    })
  })
}

window.addEventListener('load', displayAllMedia())
