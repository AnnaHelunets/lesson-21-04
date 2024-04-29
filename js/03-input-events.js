'focus'
'blur'
'change'
'input'

const refs = {
input: document.querySelector(".js-input"),
nameLabel: document.querySelector(".js-button > span"),
licenseCheckbox: document.querySelector(".js-license"),
btn: document.querySelector(".js-button")
}

// refs.input.addEventListener('focus', e => {
//     console.log(e, `подія - ${e.type}`);
// })
// refs.input.addEventListener('blur', e => {
//     console.log(e, `подія - ${e.type}`);
// })
// refs.input.addEventListener('change', e => {
//     console.log(e, `подія - ${e.type}`);
// })
// refs.input.addEventListener('input', e => {
//     console.log(e, `подія - ${e.type}`);
// })

refs.input.addEventListener('input', onInputChange)

refs.licenseCheckbox.addEventListener('change', onLicenseChange)

function onInputChange (e) {
    console.log(e.target.value);
    refs.nameLabel.textContent = e.target.value
}
function onLicenseChange (e) {
    console.log(e.target.checked);
    refs.btn.disabled = !e.target.checked
}