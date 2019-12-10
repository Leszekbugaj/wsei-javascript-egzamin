// Zadanie 05

let buttons = document.getElementsByTagName("Button");

Array.from(buttons).forEach(button => {
    
    button.addEventListener("click", () => {document.getElementById("container").innerHTML = button.getAttribute("data-text");
                      
    });
});
