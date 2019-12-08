
const buttons = document.querySelectorAll("button");
const container = document.getElementById("container");

buttons.forEach(element => {

    element.addEventListener("Click me!", () => {
    
        container.innerText = element.dataset.text;
    });   
});
