const refs = {
    wrapper: document.querySelector(".wrapper"),
    btnPopup: document.querySelector(".btnLogin-popup"),
    registerLink: document.querySelector(".register-link"),
    loginLink: document.querySelector(".login-link"),
    iconClose: document.querySelector(".icon-close"),
    checkbox: document.querySelector(".agree-checkbox"),
    registerBtn: document.querySelector(".reg_btn")
}

refs.btnPopup.addEventListener('click', (e) => {
    refs.wrapper.classList.add("active-popup")
})
refs.iconClose.addEventListener('click', (e) => {
    refs.wrapper.classList.remove("active-popup")
})

refs.registerLink.addEventListener('click', (e) => {
    refs.wrapper.classList.add("active")
})
refs.loginLink.addEventListener('click', (e) => {
    refs.wrapper.classList.remove("active")
})

refs.checkbox.addEventListener('change', onCheckBoxChange)
function onCheckBoxChange (e) {
    console.log(e.target.checked);
    refs.registerBtn.disabled = !e.target.checked
    refs.registerBtn.classList.toggle("reg_btn_active")
    // if (e.target.checked) {
    // }
}

// document.addEventListener('contextmenu', (e) => {
//     e.preventDefault()
// })
// document.addEventListener('selectstart', (e) => {
//     e.preventDefault()
// })