const imgContainer = document.querySelector(".img-container")
const img = document.querySelector('img')

imgContainer.addEventListener('mousemove', onImgContainerMouseMove)

function onImgContainerMouseMove (e) {
    console.dir(imgContainer)
    //отримуємо ширину і висоту 
    const containerWidth = imgContainer.clientWidth
    const containerHeight = imgContainer.clientHeight
    //визначаємо позицію курсора
    console.log(e);
    const mouseX = e.clientX - imgContainer.offsetLeft
    const mouseY = e.clientY - imgContainer.offsetTop
    //визначити значення нахилу чи повороту
    const rotateY = 70 * (mouseX / containerWidth -0.5)
    const rotateX = -70 * (mouseY / containerHeight -0.5)
    //додаємо стилі
    img.style.transform = `rotateY(${rotateY}deg) rotateX(${rotateX}deg)`
    
    imgContainer.addEventListener('mouseleave', (e) => {
        img.style.transform = 'rotateY(0) rotateX(0)'
    })    
}
