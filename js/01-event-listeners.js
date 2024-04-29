const targetBtn = document.querySelector(".js-target-btn")
const addListnerBtn = document.querySelector(".js-add-listener")
const removeListnerBtn = document.querySelector(".js-remove-listener")


targetBtn.addEventListener("click", event => {
    console.log(event);
    console.log("Клік по цільовій кнопці");
})
removeListnerBtn.removeEventListener('click', e => {
    console.log('знімаю подію');
})

addListnerBtn.addEventListener("click", e => {
    console.log(e);
    console.log('Вішаю слухача подій на цільову кнопку');
    targetBtn.addEventListener("click", onTargetBtnClick)
})

removeListnerBtn.addEventListener("click", e => {
    console.log(e);
    console.log("Знімаю слухача з цільової кнопки");
    targetBtn.removeEventListener("click", onTargetBtnClick)
})


// function handleSubjectEvent
// function subjectEventHandler
// function onSubjectEvent

function onTargetBtnClick (e) {
    console.log(e);
    console.log("Клік по цільовій кнопці");
}