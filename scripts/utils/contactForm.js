// DOM Elements

let modal = document.querySelector('#contactModal')
let openModalBtn = document.querySelector('#openModal')
let closeModalBtn = document.querySelectorAll('.closeModal')
let senForm = document.querySelector('#sendForm')
let title = document.querySelector('.title')

let form = document.forms['contactForm']
// console.log(form)
let modalThanks = document.querySelector('#thanks')

let OpenModal = (e) => {
    document.body.classList.add('modal-open')
    document.body.classList.add('overflow')
    window.scrollTo(0, 0)
    modal.scrollTo(0, 0)

    firstEletFocus.focus()
    modal.getAttribute("aria-hidden", "false")
    // console.log(contactModal)
    form.reset()
    form.style.display = ''
    modalThanks.style.display = 'none'
}

let showModalThanks = (e) => {
    form.style.display = 'none'
    senForm.style.display = 'none'
    title.style.display = 'none'
    modalThanks.style.display = ''
}

let closeModal = (e) => {
    e.preventDefault
    document.body.classList.remove('modal-open')
    document.body.classList.remove('overflow')
    modal.getAttribute("aria-hidden", "true")
}


let validation = (e) => {
    // Expression for fields
    const verifMail = /^(([^<>()[]\.,;:s@]+(.[^<>()[]\.,;:s@]+)*)|(.+))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/
    const textFormat = /^[a-z\é\è\-\^\']{2,}$/i

    //Form flag validation
    let formFlag = true

    // Firstname - min 2 char & not empty
    if (!form.elements['first'].value.trim().match(textFormat)) {
        formFlag = false
        firstError.textContent = 'Veuillez entrer 2 caractères ou plus pour le champ du prénom'
    } else {
        firstError.innerHTML = ''
        formFlag = true
    }

    // Lastname - min 2 char & not empty
    if (!form.elements['last'].value.trim().match(textFormat)) {
        formFlag = false
        lastError.textContent = 'Veuillez entrer 2 caractères ou plus pour le champ du nom.'
    } else {
        lastError.innerHTML = ''
        formFlag = true
    }

    // email validity
    if (!form.elements['email'].value.trim().match(verifMail)) {
        formFlag = false
        mailError.textContent = 'L\'adresse email n\'est pas Valide.'
    } else {
        mailError.innerHTML = ''
        formFlag = true
    }

    // textArea validity
    if (!form.elements['textContact'].value.trim().match(textFormat)) {
        formFlag = false
        areaError.textContent = 'Vous n\'avez pas renseigné de message'
    } else {
        areaError.innerHTML = ''
        formFlag = true
    }

    //Check validation errors
    if (!formFlag) {
        return false
    }
    showModalThanks()
}
// on déclare nos sélecteurs et les events apres le chargement de la methode getOnePhotograph

let startcontactlistener = () => {
    document.querySelector('#openModal').addEventListener('click', OpenModal)

    document.querySelector('#closeModal').addEventListener('click', closeModal)
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeModal(e)
        }
    })

    document.querySelector('#sendForm').addEventListener('click', function (e) {
        // e.preventDefault()
        validation(e)
    })
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            validation(e)
        }
    })
}

// ajouter un focus à tous les éléments de la modale
let focusableElements = 'button, input, select, textarea'
// console.log(focusable)
let firstEletFocus = modal.querySelectorAll(focusableElements)[0] // pointe le 1er element focusable dans la modale
// console.log(firstFocusableElement)
let focusableContent = contactModal.querySelectorAll(focusableElements)
let lastEletFocus = focusableContent[focusableContent.length - 1] // pointe le dernier element focusable dans la modale
// console.log(lastFocusableElement)
document.addEventListener('keydown', function (e) {
    let isTabPressed = e.key === 'Tab'//tabulation

    if (!isTabPressed) {
        return
    }
    if (e.shiftKey) {
        // si shift + tab en même temps = on revient en arrière sur les éléments focusables
        if (document.activeElement === firstEletFocus) {
            lastEletFocus.focus() // on met le focus sur le dernier élément
            e.preventDefault()
        }
    } else {
        // si tab
        if (document.activeElement === lastEletFocus) {
            // si le focus etait sur le dernier element alors on revient sur le 1er focusable
            firstEletFocus.focus() // on met le focus sur le 1er element
            e.preventDefault()
        }
    }
})

