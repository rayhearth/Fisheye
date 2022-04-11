export class Api {

    url = './data/photographers.json'

    async get() {
        return fetch(this.url)
            .then(res => res.json())
            .then(res => res.photographers)
            .catch(err => console.log('an error occurs', err))
    }

    async getPhotograph(id) {
        return fetch(this.url)
            .then(res => res.json())
            .then(res =>{
                let a = res.photographers.filter(p => p.id == id)
                return a[0]
            })
            .catch(err => console.log('an error occurs', err))

    }

    async getMediaApi(photographerId) {
        return fetch(this.url)
            .then(res => res.json())
            .then(res => res.media.filter(p => p.photographerId == photographerId))
            .catch(err => console.log('an error occurs', err))
    }

}
