

const fruitElement = document.getElementById("fp");
const carElement = document.getElementById("fp");

const divElement = document.querySelectorAll(".mydiv")


divElement.forEach((div) =>{
    div.addEventListener("click", () => {
        paraElement.style.color = "red"
    })
})