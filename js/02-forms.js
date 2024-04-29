const form = document.querySelector(".js-register-form")

form.addEventListener('submit', onFormSubmit)
function onFormSubmit (e) {
    console.log(e);
    e.preventDefault()
    // const formElements = e.target.elements
    // console.dir(formElements)
    // const mail = formElements.email.value
    // console.log(mail);
    // const password = formElements.password.value
    // console.log(password);
    // const subscription = formElements.subscription.value
    // console.log(subscription);

    // const formData = {mail, password, subscription}
    const formData = new FormData(e.target)
    console.log(formData);
    formData.forEach((value, name) => {
        console.log('onFormSubmit ->name', name);
        console.log('onFormSubmit ->value', value);
    })
}