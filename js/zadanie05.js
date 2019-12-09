// Zadanie 05

let buttons = document.getElementsByTagName("Guzik");

Array.from(buttons).forEach(button => {
    
    button.addEventListener("Kliknij", () => {
        
        document.getElementById("container").innerHTML = button.getAttribute("data-text");
        
    });
});
