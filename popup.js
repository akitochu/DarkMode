const button = document.querySelector(".button");
const circle = document.querySelector(".circle");


let buttonOn = false;   

button.addEventListener("click", ()=> {
    if (!buttonOn){
        buttonOn = true;
        circle.style.animation = "moveCircleRight 1s forwards"
        button.style.animation = "changeBackgroundGreen 1s forwards"
    }else{
        buttonOn = false
        circle.style.animation = "moveCircleLeft 1s forwards"
        button.style.animation = "changeBackgroundRed 1s forwards"
    }
})