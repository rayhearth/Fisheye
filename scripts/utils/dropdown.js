//DOM Elements

let dropDownBtn = document.querySelector('#filter-btn')
// console.log(dropDownBtn)
let dropDownBtnKey = document.querySelector('.filterWrapper')

let filterList = document.querySelector('.filter-listbox')
let filterpop = document.querySelector('#pop')
let filterDate = document.querySelector('#date')
let filterTitle = document.querySelector('#title')

const displayDropDown = (e) => {
    if (!filterList.classList.contains('displayDropDown')) {
        filterList.classList.add('displayDropDown')
        dropDownBtn.setAttribute('aria-expanded', true)
    } else {
        filterList.classList.remove('displayDropDown')
        dropDownBtn.setAttribute('aria-expanded', false)
    }
}


let startDropDownListener = () => {
    dropDownBtn.addEventListener('click', displayDropDown)
    // console.log('azeaze')
    dropDownBtnKey.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            console.log('azeaze')
            displayDropDown(e)
        }
    })
    
}

