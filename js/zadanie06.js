// Zadanie 06

document.addEventListener("DOMContentLoaded", () => {
    var list = document.getElementById("shopping-list");

    document.getElementById("button-1").addEventListener("click", () => {
        var newElement = document.createElement("LI");
        
        list.appendChild(newElement).innerHTML = "chleb";
        
    });

    let button2 = document.getElementById("button-2");
    button2.addEventListener("click", () => {
        if (ul.lastElementChild !== null) ul.lastElementChild.remove()
        
    });

    document.getElementById("button-3").addEventListener("click", () => {
        var clone = list.children[1].cloneNode(true);
        
        list.appendChild(clone);
        
    });
});
