'mouseenter'
'mouseleave'
'mouseover'
'mouseout'
'mousemove'

const boxRef = document.querySelector(".js-box")



boxRef.addEventListener('mouseenter', e=> {
    console.log(e, `type - ${e.type}`);
    const box = e.currentTarget
    box.classList.add("box--active")
})
boxRef.addEventListener('mouseleave', e=> {
    console.log(e, `type - ${e.type}`);
    const box = e.currentTarget
    box.classList.remove("box--active")
})

const rotate = document.querySelector(".img-rotate")
rotate.addEventListener('mouseenter', e => {
    rotate.classList.add('animate-rotate')
    rotate.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Glass_of_Milk_%2833657535532%29.jpg/800px-Glass_of_Milk_%2833657535532%29.jpg"
})
rotate.addEventListener('mouseleave', e => {
    rotate.classList.remove('animate-rotate')
    rotate.src = ""
})