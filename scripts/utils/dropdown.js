//DOM Elements

let dropDownBtn = document.querySelector('#filter-btn')
console.log(dropDownBtn)

let filterList = document.querySelector('.filter-listbox')
let filterpop = document.querySelector('#pop')
let filterDate = document.querySelector('#date')
let filterTitle = document.querySelector('#title')

let displayDropDown = (e) => {
    if (!filterList.classList.contains('displayDropDown')) {
        filterList.classList.add('displayDropDown')
        dropDownBtn.getAttribute('aria-expanded', true)
    } else {
        filterList.classList.remove('displayDropDown')
        dropDownBtn.getAttribute('aria-expanded', false)
    }

    // console.log('azeaze')
    
}





// for (let btn of filterBtns) {
//     mediaSort(btn)
// }

let startDropDownListener = () => {

    document.querySelector('#filter-btn').addEventListener('click', displayDropDown)
    // document.querySelector('#filter-btn').addEventListener('click',hideFilter)
}



// const mediaSort = (e) => {
//     switch (e.target.id) {
//         case 'pop' : mediasFiltered.sort(function (a,b){
//             console.log('azeaze')
//             return a.dataset.cunt.LocaleCompare(b.dataset.cunt)
//         })
//         break
//     }
//     switch(e.target.id){
//         case 'date' : mediasFiltered.sort(function(a,b){
//             return  a.dataset.date.LocaleCompare(b.dataset.dataset)
//         })
//         break
//     }
//     document.querySelector('#galleryContainer').innerHTML = mediasFiltered.map(f => f.gallery)
// }
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




// const openDropbox = (e) => {


// }

// let startDropboxListener = () => {
//     filterBtns = document.querySelectorAll('.filter-label')
//     console.log(filterBtns)

//     for (let btn of filterBtns) {
//         btn.addEventListener('click', e => {
//             mediaSort(e)
//         })
//     }

// }