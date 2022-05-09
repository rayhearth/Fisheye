//DOM Elements

let dropDownBtn = document.querySelector('#filter-btn')
// console.log(dropDownBtn)

let filterList = document.querySelector('.filter-listbox')
let filterpop = document.querySelector('#pop')
let filterDate = document.querySelector('#date')
let filterTitle = document.querySelector('#title')

let displayDropDown = (e) => {
    if (!filterList.classList.contains('displayDropDown')) {
        filterList.classList.add('displayDropDown')
        dropDownBtn.setAttribute('aria-expanded', true)
    } else {
        filterList.classList.remove('displayDropDown')
        dropDownBtn.setAttribute('aria-expanded', false)
    }    
}


let startDropDownListener = () => {

    document.querySelector('#filter-btn').addEventListener('click', displayDropDown)
}

