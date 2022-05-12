import { PhotographFactory } from '../factories/_photographFactory.js'

// j'implémente ma méthode pour récup et afficher tout mes photographes

const displayAllPhotograph = async () => {
  // instance de photographe par la class Photograph() on recupère nos photographes 
  const photograph = new PhotographFactory()
  const allPhotographs = await photograph.getAllPhotograph()

  // on implemente la méthode allPhotographs ds la section ayant l'id '#photographer
  document.querySelector('#photographer').innerHTML = allPhotographs
}

window.addEventListener('load', () => displayAllPhotograph())
