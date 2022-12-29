if (document.querySelector(".popup")){
    const button = document.querySelector(".button");
    const circle = document.querySelector(".circle");    

    let buttonOn = false;   
    
    

    button.addEventListener("click", ()=> {

        if (!buttonOn){
            buttonOn = true;
            circle.style.animation = "moveCircleRight 1s forwards"
            button.style.animation = "changeBackgroundGreen 1s forwards"
            chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
                chrome.scripting.executeScript({
                    target: {tabId: tabs[0].id, allFrames: true},
                    files: ["appOn.js"]
                })
            })
        }else{
            buttonOn = false;
            circle.style.animation = "moveCircleLeft 1s forwards"
            button.style.animation = "changeBackgroundRed 1s forwards"
            chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
                chrome.scripting.executeScript({
                    target: {tabId: tabs[0].id, allFrames: true},
                    files: ["appOff.js"]
                })
            })
        }
    })
}
 