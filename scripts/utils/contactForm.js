let openModalBtn = document.querySelector('#openModal')
let closeModalBtn = document.querySelectorAll('.closeModal')
 

let name = document.querySelector('h1').textContent
document.querySelector('#photographerName').innerHTML = name

let form = document.forms['contactForm']
// on déclare nos sélecteurs et les events apres le chargement de la methode getOnePhotograph
openModalBtn.addEventListener("click", openModal)

closeModalBtn.forEach(el => {
    el.addEventListener('click', closeModal)
})

// console.log(form)
/*Validation form and listener*/

form.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log(form.elements)
    // Expression for fields
    const verifMail = /^(([^<>()[]\.,;:s@]+(.[^<>()[]\.,;:s@]+)*)|(.+))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/
    const textFormat = /^[a-z\é\è\-\^\']{2,}$/i

    //Form flag validation
    let formFlag = true

    // Firstname - min 2 char & not empty
    if (!form.elements['first'].value.trim().match(textFormat)) {
        formFlag = false
        showFieldError(form.element['firstName'])
    } else {
        closeFieldError(form.element['firstName'])
    }

    // Lastname - min 2 char & not empty
    if (!form.elements['last'].value.trim().match(textFormat)) {
        formFlag = false
        showFieldError(form.element['firstName'])
    } else {
        closeFieldError(form.element['firstName'])
    }

    // email validity
    if (!form.elements['email'].value.trim().match(verifMail)) {
        formFlag = false
        showFieldError(form.element['firstName'])
    } else {
        closeFieldError(form.element['firstName'])
    }

    //Check validation errors
    if (!formFlag) {
        return false
    }
})



function displayModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "block";
}

function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
}
