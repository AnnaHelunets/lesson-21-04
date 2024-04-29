'keypress'
'keydown'
'keyup'

const refs = {
    output: document.querySelector('.js-output'),
    clearBtn: document.querySelector(".js-clear")
}
window.addEventListener('keydown', onKeypress)
refs.clearBtn.addEventListener('click', onKeydown)

function onKeypress (e) {
    console.log(e);
    refs.output.textContent += e.key
}

function onKeydown (e) {
    console.log(e);
    refs.output.textContent = ' '
}
