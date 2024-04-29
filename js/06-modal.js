const refs = {
    openModalBtn: document.querySelector('[data-action="open-modal"]'),
    closeModalBtn: document.querySelector('[data-action="close-modal"]'),
    backdrop: document.querySelector(".js-backdrop")
}
//show-modal

refs.openModalBtn.addEventListener('click', onOpenModal)
refs.closeModalBtn.addEventListener('click', onCloseModalBtn)
refs.backdrop.addEventListener('click', onBackdropClick)
function onOpenModal (e) {
    window.addEventListener('keydown', onEscKeyPress)
    document.body.classList.add("show-modal")
}

function onCloseModalBtn (e) {
    window.removeEventListener('keydown', onEscKeyPress)
    document.body.classList.remove("show-modal")
}

function onBackdropClick (e) {
    if (e.target === e.currentTarget) {
        onCloseModalBtn(e)
    }

}
function onEscKeyPress (e) {
    // const ESC_KEY_CODE = 'Escape'
    // const isEscKey = e.code === ESC_KEY_CODE
    // if (isEscKey) {
    //     onCloseModalBtn()
    // }
    if (e.code === 'Escape') {
       onCloseModalBtn()
    }
}