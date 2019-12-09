// Zadanie 04

//1
function getTagsOfElements(elements) {
   
    var tags = [];
 
    for (let n = 0; n < elements.length; n++) {
        if (elements[n].tagName != null) tags.push(elements[n].tagName)
    }
    
    return tags;
}

console.table(getTagsOfElements(document.getElementsByClassName("sample_class")));

//2
function getClassesOfElement(element) {
    
    var className = element.className.split(' ');
    return className;
    
}

console.table(getClassesOfElement(document.getElementById("sample_id")));

//3

function getInnerTextsOfElements(elements) {
    var texts = elements[0].innerText.split('\n');;
    return texts;
}
console.table(getInnerTextsOfElements(document.getElementsByClassName("sample_class_2")));

