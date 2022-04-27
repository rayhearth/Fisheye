
let filter = document.querySelectorAll('#filter-listbox')
// console.log(filterBtns)
let mediasFiltered = [...document.querySelectorAll('.mediaLink')]
// console.log(mediasFiltered)







const mediaSort = (e) => {
    switch (e.target.id) {
        case 'pop' : mediasFiltered.sort(function (a,b){
            console.log('azeaze')
            return a.dataset.cunt.LocaleCompare(b.dataset.cunt)
        })
        break
    }
    switch(e.target.id){
        case 'date' : mediasFiltered.sort(function(a,b){
            return  a.dataset.date.LocaleCompare(b.dataset.dataset)
        })
        break
    }
    document.querySelector('#galleryContainer').innerHTML = mediasFiltered.map(f => f.gallery)
}
// mediasFiltered.addEventListener("change", (e) => {
//     switch (e.target.id) {
//         case 'pop':
//             mediasFiltered.sort(function (a, b) {
//                 return a.dataset.cuntMediaLike.localeCompare(b.dataset.cuntMediaLike)
//             })
//             break
//     }

// filterBtns.forEach(filter => {
//     filter.addEventListener('change', (e) => {
//         switch (e.target.id) {
//             case 'pop':
//                 mediasFiltered.sort(function (a, b) {
//                     return a.dataset.cuntMediaLike.localeCompare(b.dataset.cuntMediaLike)
//                 })
//                 break
//         }
//     })
// displayAllMedia()
// console.log(e.target.id)
// })




const openDropbox = (e) => {

    
}

let startDropboxListener = () =>{
    filterBtns = document.querySelectorAll('.filterOption')
    console.log(filterBtns)

    for (let btn of filterBtns) {
        btn.addEventListener('click', e => {
            mediaSort(e)
        })
    }

}