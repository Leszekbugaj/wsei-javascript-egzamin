function bigestSUmOfTwoElements(array) {
    if(array.length === 1)
        return array[0];
    else if (array.length === 0)
        return false;
    else {
        let num1 = array.sort().reverse();
        return num1[0] + num1[1];
    }
}

console.log(bigestSUmOfTwoElements([]));
console.log(bigestSUmOfTwoElements([156]));
console.log(bigestSUmOfTwoElements([1, 2, 3, 4]));
