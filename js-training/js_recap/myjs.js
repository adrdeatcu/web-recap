function add7(number){
    return 7 + number;
}

console.log(add7(5));

let multiply = (a,b) => {
    return a*b;
};

console.log(multiply(4,5));

function capitalize(string){
    let lowerCaseString = string.toLowerCase();
    let secondHalf = lowerCaseString.slice(1,lowerCaseString.length);
    return lowerCaseString.charAt(0).toUpperCase() + secondHalf;
}

console.log(capitalize("abcdeEFDS"));

function lastLetter(string){
    let size = string.length;
    console.log(size);
    let lastLetter = string.charAt(size - 1);
    return lastLetter;
}

console.log(lastLetter("abc"))